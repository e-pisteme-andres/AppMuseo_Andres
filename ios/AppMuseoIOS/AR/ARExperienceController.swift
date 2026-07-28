import ARKit
import Combine
import Metal
import RealityKit
import UIKit

@MainActor
final class ARExperienceController: UIViewController, ARSessionDelegate, UIGestureRecognizerDelegate {
    private let experienceModel: ARExperienceModel
    private let arView = ARView(frame: .zero, cameraMode: .ar, automaticallyConfigureSession: false)
    private let reticleAnchor = AnchorEntity(world: .identity)
    private let reticle = Entity()
    private let mushroomPivot = Entity()
    private let sporeField = SporeField()
    private var mushroom: Entity?
    private var surfaceAnchor: AnchorEntity?
    private var updateSubscription: EventSubscription?
    private var stabilizer = SurfaceStabilizer()
    private var candidateTransform: simd_float4x4?
    private var modelBoundsMin = SIMD3<Float>(-0.1, 0, -0.1)
    private var modelBoundsMax = SIMD3<Float>(0.1, 0.2, 0.1)
    private var ending = false

    init(model: ARExperienceModel) {
        experienceModel = model
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) no está implementado")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        configureView()
        configureGestures()
        bindControls()
        loadModel()
        startSession()
    }

    func applyCurrentControls() {
        setSliceProgress(Float(experienceModel.sliceProgress))
        setModelSizeMetres(Float(experienceModel.modelSizeCentimetres / 100))
    }

    func stop() {
        guard !ending else { return }
        ending = true
        updateSubscription?.cancel()
        updateSubscription = nil
        arView.session.pause()
        experienceModel.placeModelHandler = nil
        experienceModel.setSliceHandler = nil
        experienceModel.setSizeHandler = nil
        experienceModel.endHandler = nil
    }

    private func configureView() {
        view.backgroundColor = .black
        arView.translatesAutoresizingMaskIntoConstraints = false
        arView.renderOptions.insert(.disableMotionBlur)
        arView.environment.sceneUnderstanding.options.insert(.occlusion)
        arView.environment.sceneUnderstanding.options.insert(.receivesLighting)
        arView.session.delegate = self
        view.addSubview(arView)
        NSLayoutConstraint.activate([
            arView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            arView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            arView.topAnchor.constraint(equalTo: view.topAnchor),
            arView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
        ])

        configureReticle()
        arView.scene.addAnchor(reticleAnchor)
        updateSubscription = arView.scene.subscribe(to: SceneEvents.Update.self) { [weak self] event in
            Task { @MainActor [weak self] in self?.updateFrame(deltaTime: event.deltaTime) }
        }
    }

    private func configureReticle() {
        let cyan = SimpleMaterial(
            color: UIColor(red: 0.44, green: 0.93, blue: 0.78, alpha: 0.95),
            roughness: 0.45,
            isMetallic: false
        )
        let horizontal = ModelEntity(
            mesh: .generateBox(size: [0.13, 0.0025, 0.008]),
            materials: [cyan]
        )
        let vertical = ModelEntity(
            mesh: .generateBox(size: [0.008, 0.0025, 0.13]),
            materials: [cyan]
        )
        reticle.addChild(horizontal)
        reticle.addChild(vertical)
        reticle.isEnabled = false
        reticleAnchor.addChild(reticle)
    }

    private func configureGestures() {
        let tap = UITapGestureRecognizer(target: self, action: #selector(handleTap(_:)))
        tap.delegate = self
        arView.addGestureRecognizer(tap)

        let pan = UIPanGestureRecognizer(target: self, action: #selector(handlePan(_:)))
        pan.maximumNumberOfTouches = 1
        pan.delegate = self
        arView.addGestureRecognizer(pan)

        let roll = UIRotationGestureRecognizer(target: self, action: #selector(handleRoll(_:)))
        roll.delegate = self
        arView.addGestureRecognizer(roll)
    }

    private func bindControls() {
        experienceModel.placeModelHandler = { [weak self] in self?.placeMushroom() }
        experienceModel.setSliceHandler = { [weak self] progress in self?.setSliceProgress(progress) }
        experienceModel.setSizeHandler = { [weak self] metres in self?.setModelSizeMetres(metres) }
        experienceModel.endHandler = { [weak self] in self?.stop() }
    }

    private func startSession() {
        guard ARWorldTrackingConfiguration.isSupported else {
            experienceModel.transition(
                to: .error,
                message: "Este dispositivo no ofrece seguimiento espacial compatible con ARKit."
            )
            return
        }

        let configuration = ARWorldTrackingConfiguration()
        configuration.planeDetection = [.horizontal]
        configuration.environmentTexturing = .automatic
        configuration.worldAlignment = .gravity

        var hasDepthOcclusion = false
        if ARWorldTrackingConfiguration.supportsSceneReconstruction(.meshWithClassification) {
            configuration.sceneReconstruction = .meshWithClassification
            hasDepthOcclusion = true
        } else if ARWorldTrackingConfiguration.supportsSceneReconstruction(.mesh) {
            configuration.sceneReconstruction = .mesh
            hasDepthOcclusion = true
        }

        if ARWorldTrackingConfiguration.supportsFrameSemantics(.personSegmentationWithDepth) {
            configuration.frameSemantics.insert(.personSegmentationWithDepth)
            hasDepthOcclusion = true
        } else if ARWorldTrackingConfiguration.supportsFrameSemantics(.sceneDepth) {
            configuration.frameSemantics.insert(.sceneDepth)
            hasDepthOcclusion = true
        }

        experienceModel.setOcclusion(hasDepthOcclusion ? .active : .unavailable)
        arView.session.run(configuration, options: [.resetTracking, .removeExistingAnchors])
        experienceModel.transition(
            to: .scanning,
            message: "Mueve el móvil lentamente para encontrar una superficie horizontal."
        )
    }

    private func loadModel() {
        guard let url = Bundle.main.url(forResource: "mushroom", withExtension: "usdz") else {
            experienceModel.transition(to: .error, message: "No se encontró el modelo 3D para iOS.")
            return
        }

        do {
            let loaded = try Entity.load(contentsOf: url)
            alignModelWithSurface(loaded)
            try applySliceMaterial(to: loaded)
            loaded.isEnabled = false
            mushroomPivot.addChild(loaded)
            mushroomPivot.addChild(sporeField.root)
            mushroom = loaded
        } catch {
            experienceModel.transition(to: .error, message: "No se pudo preparar el modelo 3D para iOS.")
        }
    }

    private func alignModelWithSurface(_ entity: Entity) {
        let bounds = entity.visualBounds(relativeTo: entity)
        let centre = (bounds.min + bounds.max) * 0.5
        entity.position = SIMD3<Float>(-centre.x, -bounds.min.y, -centre.z)
        modelBoundsMin = bounds.min + entity.position
        modelBoundsMax = bounds.max + entity.position
    }

    private func applySliceMaterial(to root: Entity) throws {
        guard
            let device = MTLCreateSystemDefaultDevice(),
            let library = device.makeDefaultLibrary()
        else {
            throw ARExperienceError.metalUnavailable
        }
        let shader = CustomMaterial.SurfaceShader(named: "appMuseoSliceSurface", in: library)

        try root.visit { entity in
            guard var component = entity.components[ModelComponent.self] else { return }
            component.materials = try component.materials.map { material in
                var custom = try CustomMaterial(from: material, surfaceShader: shader)
                custom.custom.value = SIMD4<Float>(-1, 0, 0, 0)
                return custom
            }
            entity.components[ModelComponent.self] = component
        }
    }

    private func updateFrame(deltaTime: TimeInterval) {
        if experienceModel.state == .scanning || experienceModel.state == .placeable {
            updateSurfaceCandidate()
        }
        if experienceModel.state == .placed {
            sporeField.update(deltaSeconds: Float(deltaTime))
        }
    }

    private func resetPlacementForNewSession() {
        if let surfaceAnchor {
            arView.scene.removeAnchor(surfaceAnchor)
        }

        surfaceAnchor = nil
        mushroomPivot.removeFromParent()
        mushroomPivot.position = .zero
        mushroomPivot.orientation = simd_quatf(angle: 0, axis: [0, 1, 0])
        mushroomPivot.scale = .one
        mushroom?.isEnabled = false
        sporeField.setEnabled(false)
        candidateTransform = nil
        stabilizer.reset()
        reticle.isEnabled = false
        experienceModel.transition(
            to: .scanning,
            message: "Mueve despacio el iPhone para volver a detectar una superficie."
        )
    }

    private func updateSurfaceCandidate() {
        let centre = CGPoint(x: arView.bounds.midX, y: arView.bounds.midY)
        let result = arView.raycast(
            from: centre,
            allowing: .existingPlaneGeometry,
            alignment: .horizontal
        ).first ?? arView.raycast(
            from: centre,
            allowing: .estimatedPlane,
            alignment: .horizontal
        ).first

        guard let result else {
            candidateTransform = nil
            reticle.isEnabled = false
            stabilizer.reset()
            if experienceModel.state == .placeable {
                experienceModel.transition(
                    to: .scanning,
                    message: "Mueve el móvil lentamente para encontrar una superficie horizontal."
                )
            }
            return
        }

        candidateTransform = result.worldTransform
        reticleAnchor.transform.matrix = result.worldTransform
        reticle.isEnabled = true
        let stable = stabilizer.add(transform: result.worldTransform)

        if stable, experienceModel.state == .scanning {
            experienceModel.transition(
                to: .placeable,
                message: "Superficie detectada. Toca la pantalla para colocar la malla."
            )
        } else if !stable, experienceModel.state == .placeable {
            experienceModel.transition(
                to: .scanning,
                message: "Mantén el móvil estable mientras confirmamos la superficie."
            )
        }
    }

    @objc private func handleTap(_ gesture: UITapGestureRecognizer) {
        guard
            gesture.state == .ended,
            experienceModel.state == .placeable,
            let transform = candidateTransform
        else { return }
        commitSurfacePlacement(transform: transform)
    }

    private func commitSurfacePlacement(transform: simd_float4x4) {
        let anchor = AnchorEntity(world: transform)
        anchor.addChild(makeSurfaceGrid())
        anchor.addChild(mushroomPivot)
        arView.scene.addAnchor(anchor)
        surfaceAnchor = anchor

        reticle.isEnabled = false
        candidateTransform = nil
        stabilizer.reset()
        experienceModel.transition(
            to: .surfacePlaced,
            message: "Malla colocada. Elige una forma en el menú de la izquierda."
        )
    }

    private func makeSurfaceGrid() -> Entity {
        let root = Entity()
        var fillMaterial = UnlitMaterial()
        fillMaterial.color = .init(
            tint: UIColor(red: 0.21, green: 0.85, blue: 1, alpha: 0.055)
        )
        fillMaterial.blending = .transparent(opacity: 0.055)
        let fill = ModelEntity(
            mesh: .generatePlane(width: 1, depth: 1),
            materials: [fillMaterial]
        )
        root.addChild(fill)

        let lineMaterial = UnlitMaterial(
            color: UIColor(red: 0.44, green: 0.93, blue: 1, alpha: 0.82)
        )
        for index in 0...10 {
            let offset = -0.5 + Float(index) * 0.1
            let horizontal = ModelEntity(
                mesh: .generateBox(size: [1, 0.0015, 0.0015]),
                materials: [lineMaterial]
            )
            horizontal.position = [0, 0.004, offset]
            root.addChild(horizontal)

            let vertical = ModelEntity(
                mesh: .generateBox(size: [0.0015, 0.0015, 1]),
                materials: [lineMaterial]
            )
            vertical.position = [offset, 0.004, 0]
            root.addChild(vertical)
        }
        return root
    }

    private func placeMushroom() {
        guard experienceModel.state == .surfacePlaced, let mushroom else { return }
        mushroom.isEnabled = true
        mushroomPivot.orientation = .init()
        sporeField.reset()
        sporeField.setEnabled(true)
        setSliceProgress(0)
        setModelSizeMetres(0.2)
        experienceModel.transition(
            to: .placed,
            message: "Seta colocada. Arrastra para girarla; la malla permanecerá visible."
        )
    }

    private func setModelSizeMetres(_ metres: Float) {
        let target = min(max(metres, 0.01), 1)
        let dimensions = modelBoundsMax - modelBoundsMin
        let largest = max(dimensions.x, dimensions.y, dimensions.z)
        let scale = ARMath.uniformScale(largestDimension: largest, sizeMetres: target)
        mushroomPivot.scale = SIMD3<Float>(repeating: scale)
    }

    private func setSliceProgress(_ progress: Float) {
        let sliceX = ARMath.verticalSlicePosition(
            minX: modelBoundsMin.x,
            maxX: modelBoundsMax.x,
            progress: progress
        )

        mushroom?.visit { entity in
            guard var component = entity.components[ModelComponent.self] else { return }
            component.materials = component.materials.map { material in
                guard var custom = material as? CustomMaterial else { return material }
                custom.custom.value[0] = sliceX
                return custom
            }
            entity.components[ModelComponent.self] = component
        }
        sporeField.setSlicePosition(sliceX)
    }

    @objc private func handlePan(_ gesture: UIPanGestureRecognizer) {
        guard experienceModel.state == .placed else { return }
        let translation = gesture.translation(in: arView)
        gesture.setTranslation(.zero, in: arView)
        let yaw = simd_quatf(angle: Float(translation.x) * 0.006, axis: [0, 1, 0])
        let pitch = simd_quatf(angle: Float(translation.y) * 0.006, axis: [1, 0, 0])
        mushroomPivot.orientation = simd_normalize(yaw * mushroomPivot.orientation * pitch)
    }

    @objc private func handleRoll(_ gesture: UIRotationGestureRecognizer) {
        guard experienceModel.state == .placed else { return }
        let roll = simd_quatf(angle: Float(gesture.rotation), axis: [0, 0, 1])
        mushroomPivot.orientation = simd_normalize(mushroomPivot.orientation * roll)
        gesture.rotation = 0
    }

    func gestureRecognizer(
        _ gestureRecognizer: UIGestureRecognizer,
        shouldRecognizeSimultaneouslyWith otherGestureRecognizer: UIGestureRecognizer
    ) -> Bool {
        true
    }

    func session(_ session: ARSession, cameraDidChangeTrackingState camera: ARCamera) {
        guard experienceModel.state != .error else { return }
        switch camera.trackingState {
        case .normal:
            break
        case .notAvailable:
            experienceModel.transition(
                to: .error,
                message: "El seguimiento espacial no está disponible en este dispositivo."
            )
        case .limited(let reason):
            let detail: String
            switch reason {
            case .initializing:
                detail = "Inicializando el seguimiento espacial…"
            case .excessiveMotion:
                detail = "Mueve el móvil más despacio para recuperar el seguimiento."
            case .insufficientFeatures:
                detail = "Apunta hacia una zona con más detalle e iluminación."
            case .relocalizing:
                detail = "Recuperando la posición de la experiencia…"
            @unknown default:
                detail = "Seguimiento temporalmente limitado."
            }
            experienceModel.transition(to: experienceModel.state, message: detail)
        }
    }

    func sessionWasInterrupted(_ session: ARSession) {
        experienceModel.transition(
            to: experienceModel.state,
            message: "Sesión interrumpida. Mantén la aplicación abierta para continuar."
        )
    }

    func sessionInterruptionEnded(_ session: ARSession) {
        resetPlacementForNewSession()
        startSession()
    }

    func session(_ session: ARSession, didFailWithError error: Error) {
        experienceModel.transition(
            to: .error,
            message: "ARKit ha detenido la sesión. Cierra la experiencia y vuelve a intentarlo."
        )
    }
}

private enum ARExperienceError: Error {
    case metalUnavailable
}

private extension Entity {
    func visit(_ body: (Entity) throws -> Void) rethrows {
        try body(self)
        for child in children {
            try child.visit(body)
        }
    }
}
