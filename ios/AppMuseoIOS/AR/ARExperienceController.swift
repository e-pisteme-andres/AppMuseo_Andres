import ARKit
import Combine
import Metal
import RealityKit
import UIKit

@MainActor
final class ARExperienceController: UIViewController, ARSessionDelegate, UIGestureRecognizerDelegate {
    private struct ModelResource {
        let id: String
        let displayName: String
        let usdzResourceName: String
    }

    private struct LoadedModel {
        let resource: ModelResource
        let entity: Entity
        let boundsMin: SIMD3<Float>
        let boundsMax: SIMD3<Float>
    }

    private static let referenceMarkerPhysicalWidthMetres: CGFloat = 0.21
    private static let defaultModelOrientation = simd_quatf(angle: .pi / 2, axis: [1, 0, 0])
    private static let defaultModelId = "mushroom"
    private static let referenceMarkerResourceName = "x-corner-marker-sheet.png"
    private static let modelResources = [
        ModelResource(
            id: "mushroom",
            displayName: "Seta roja",
            usdzResourceName: "mushroom.usdz"
        ),
        ModelResource(
            id: "crystal",
            displayName: "Cristal aurora",
            usdzResourceName: "crystal.usdz"
        ),
        ModelResource(
            id: "jellyfish",
            displayName: "Medusa celeste",
            usdzResourceName: "jellyfish.usdz"
        ),
        ModelResource(
            id: "totem",
            displayName: "Totem solar",
            usdzResourceName: "totem.usdz"
        ),
        ModelResource(
            id: "cosmic-flower",
            displayName: "Flor cosmica",
            usdzResourceName: "cosmic-flower.usdz"
        ),
        ModelResource(
            id: "empty-house",
            displayName: "Casa vacia",
            usdzResourceName: "empty-house.usdz"
        ),
    ]

    private let experienceModel: ARExperienceModel
    private let arView = ARView(frame: .zero, cameraMode: .ar, automaticallyConfigureSession: false)
    private let modelPivot = Entity()
    private let sporeField = SporeField()
    private var loadedModels: [String: LoadedModel] = [:]
    private var markerAnchor: AnchorEntity?
    private var updateSubscription: EventSubscription?
    private var activeModelId: String?
    private var activeBoundsMin = SIMD3<Float>(-0.1, 0, -0.1)
    private var activeBoundsMax = SIMD3<Float>(0.1, 0.2, 0.1)
    private var trackedMarkerIdentifier: UUID?
    private var ending = false

    init(model: ARExperienceModel) {
        experienceModel = model
        super.init(nibName: nil, bundle: nil)
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError("init(coder:) no esta implementado")
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        configureView()
        configureGestures()
        bindControls()
        loadModels()
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

        modelPivot.addChild(sporeField.root)
        updateSubscription = arView.scene.subscribe(to: SceneEvents.Update.self) { [weak self] event in
            Task { @MainActor [weak self] in self?.updateFrame(deltaTime: event.deltaTime) }
        }
    }

    private func configureGestures() {
        let pan = UIPanGestureRecognizer(target: self, action: #selector(handlePan(_:)))
        pan.maximumNumberOfTouches = 1
        pan.delegate = self
        arView.addGestureRecognizer(pan)

        let roll = UIRotationGestureRecognizer(target: self, action: #selector(handleRoll(_:)))
        roll.delegate = self
        arView.addGestureRecognizer(roll)
    }

    private func bindControls() {
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

        guard let detectionImages = loadReferenceImages() else {
            experienceModel.transition(
                to: .error,
                message: "No se encontro la hoja marcador para iniciar la experiencia."
            )
            return
        }

        let configuration = ARWorldTrackingConfiguration()
        configuration.detectionImages = detectionImages
        configuration.maximumNumberOfTrackedImages = 1
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
        experienceModel.setActiveModelName("Hoja marcador")
        arView.session.run(configuration, options: [.resetTracking, .removeExistingAnchors])
        experienceModel.transition(
            to: .scanning,
            message: "Apunta a la hoja con cuatro X negras para colocar el modelo sobre el papel."
        )
    }

    private func loadModels() {
        do {
            for resource in Self.modelResources {
                guard let url = Bundle.main.url(forResource: resource.usdzResourceName, withExtension: nil) else {
                    throw ARExperienceError.missingResource(resource.usdzResourceName)
                }

                let loaded = try Entity.load(contentsOf: url)
                let bounds = alignModelWithSurface(loaded)
                try applySliceMaterial(to: loaded)
                loaded.isEnabled = false
                modelPivot.addChild(loaded)
                loadedModels[resource.id] = LoadedModel(
                    resource: resource,
                    entity: loaded,
                    boundsMin: bounds.min,
                    boundsMax: bounds.max
                )
            }

            modelPivot.orientation = Self.defaultModelOrientation
            modelPivot.position = [0, 0, 0.002]
        } catch {
            experienceModel.transition(to: .error, message: "No se pudieron preparar los modelos 3D para iOS.")
        }
    }

    private func loadReferenceImages() -> Set<ARReferenceImage>? {
        guard
            let url = Bundle.main.url(forResource: Self.referenceMarkerResourceName, withExtension: nil),
            let image = UIImage(contentsOfFile: url.path)?.cgImage
        else {
            return nil
        }

        let referenceImage = ARReferenceImage(
            image,
            orientation: .up,
            physicalWidth: Self.referenceMarkerPhysicalWidthMetres
        )
        referenceImage.name = "x-corner-marker-sheet"
        return [referenceImage]
    }

    private func alignModelWithSurface(_ entity: Entity) -> (min: SIMD3<Float>, max: SIMD3<Float>) {
        let bounds = entity.visualBounds(relativeTo: entity)
        let centre = (bounds.min + bounds.max) * 0.5
        entity.position = SIMD3<Float>(-centre.x, -bounds.min.y, -centre.z)
        return (bounds.min + entity.position, bounds.max + entity.position)
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
        if experienceModel.state == .placed {
            sporeField.update(deltaSeconds: Float(deltaTime))
        }
    }

    private func resetPlacementForNewSession() {
        if let markerAnchor {
            arView.scene.removeAnchor(markerAnchor)
        }

        markerAnchor = nil
        trackedMarkerIdentifier = nil
        activeModelId = nil
        activeBoundsMin = SIMD3<Float>(-0.1, 0, -0.1)
        activeBoundsMax = SIMD3<Float>(0.1, 0.2, 0.1)
        modelPivot.removeFromParent()
        modelPivot.position = [0, 0, 0.002]
        modelPivot.orientation = Self.defaultModelOrientation
        modelPivot.scale = .one
        loadedModels.values.forEach { $0.entity.isEnabled = false }
        sporeField.setEnabled(false)
        experienceModel.setActiveModelName("Hoja marcador")
        experienceModel.transition(
            to: .scanning,
            message: "Apunta de nuevo a la hoja marcador para recuperar el modelo."
        )
    }

    private func activateModel(id: String) -> LoadedModel? {
        loadedModels.values.forEach { $0.entity.isEnabled = false }
        guard let loadedModel = loadedModels[id] else { return nil }
        loadedModel.entity.isEnabled = true
        activeModelId = id
        activeBoundsMin = loadedModel.boundsMin
        activeBoundsMax = loadedModel.boundsMax
        modelPivot.position = [0, 0, 0.002]
        modelPivot.orientation = Self.defaultModelOrientation
        modelPivot.scale = .one
        experienceModel.setActiveModelName(loadedModel.resource.displayName)
        return loadedModel
    }

    private func setModelSizeMetres(_ metres: Float) {
        guard activeModelId != nil else { return }
        let target = min(max(metres, 0.01), 1)
        let dimensions = activeBoundsMax - activeBoundsMin
        let largest = max(dimensions.x, dimensions.y, dimensions.z)
        let scale = ARMath.uniformScale(largestDimension: largest, sizeMetres: target)
        modelPivot.scale = SIMD3<Float>(repeating: scale)
    }

    private func setSliceProgress(_ progress: Float) {
        guard
            let activeModelId,
            let activeModel = loadedModels[activeModelId]
        else { return }

        let sliceX = ARMath.verticalSlicePosition(
            minX: activeModel.boundsMin.x,
            maxX: activeModel.boundsMax.x,
            progress: progress
        )

        activeModel.entity.visit { entity in
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

    private func attachModel(to imageAnchor: ARImageAnchor) {
        guard
            imageAnchor.referenceImage.name != nil,
            let loadedModel = activateModel(id: Self.defaultModelId)
        else { return }

        if let markerAnchor {
            arView.scene.removeAnchor(markerAnchor)
        }

        let anchor = AnchorEntity(anchor: imageAnchor)
        anchor.addChild(modelPivot)
        arView.scene.addAnchor(anchor)

        markerAnchor = anchor
        trackedMarkerIdentifier = imageAnchor.identifier
        sporeField.reset()
        sporeField.setEnabled(true)
        setSliceProgress(0)
        setModelSizeMetres(0.2)
        experienceModel.transition(
            to: .placed,
            message: "\(loadedModel.resource.displayName) colocado sobre la hoja marcador. Arrastra para girarlo."
        )
    }

    @objc private func handlePan(_ gesture: UIPanGestureRecognizer) {
        guard experienceModel.state == .placed else { return }
        let translation = gesture.translation(in: arView)
        gesture.setTranslation(.zero, in: arView)
        let yaw = simd_quatf(angle: Float(translation.x) * 0.006, axis: [0, 1, 0])
        let pitch = simd_quatf(angle: Float(translation.y) * 0.006, axis: [1, 0, 0])
        modelPivot.orientation = simd_normalize(yaw * modelPivot.orientation * pitch)
    }

    @objc private func handleRoll(_ gesture: UIRotationGestureRecognizer) {
        guard experienceModel.state == .placed else { return }
        let roll = simd_quatf(angle: Float(gesture.rotation), axis: [0, 0, 1])
        modelPivot.orientation = simd_normalize(modelPivot.orientation * roll)
        gesture.rotation = 0
    }

    func gestureRecognizer(
        _ gestureRecognizer: UIGestureRecognizer,
        shouldRecognizeSimultaneouslyWith otherGestureRecognizer: UIGestureRecognizer
    ) -> Bool {
        true
    }

    func session(_ session: ARSession, didAdd anchors: [ARAnchor]) {
        guard let imageAnchor = anchors.compactMap({ $0 as? ARImageAnchor }).first else { return }
        attachModel(to: imageAnchor)
    }

    func session(_ session: ARSession, didRemove anchors: [ARAnchor]) {
        guard
            let trackedMarkerIdentifier,
            anchors.contains(where: { $0.identifier == trackedMarkerIdentifier })
        else { return }

        if let markerAnchor {
            arView.scene.removeAnchor(markerAnchor)
        }

        markerAnchor = nil
        trackedMarkerIdentifier = nil
        activeModelId = nil
        loadedModels.values.forEach { $0.entity.isEnabled = false }
        modelPivot.removeFromParent()
        sporeField.setEnabled(false)
        experienceModel.setActiveModelName("Hoja marcador")
        experienceModel.transition(
            to: .scanning,
            message: "Hoja marcador fuera de vista. Vuelve a apuntarla para mostrar el modelo."
        )
    }

    func session(_ session: ARSession, cameraDidChangeTrackingState camera: ARCamera) {
        guard experienceModel.state != .error else { return }
        switch camera.trackingState {
        case .normal:
            break
        case .notAvailable:
            experienceModel.transition(
                to: .error,
                message: "El seguimiento espacial no esta disponible en este dispositivo."
            )
        case .limited(let reason):
            let detail: String
            switch reason {
            case .initializing:
                detail = "Inicializando el seguimiento espacial..."
            case .excessiveMotion:
                detail = "Mueve el movil mas despacio para recuperar el seguimiento."
            case .insufficientFeatures:
                detail = "Acerca la hoja con las X y mejora la iluminacion para detectarla."
            case .relocalizing:
                detail = "Recuperando la posicion de la experiencia..."
            @unknown default:
                detail = "Seguimiento temporalmente limitado."
            }
            experienceModel.transition(to: experienceModel.state, message: detail)
        }
    }

    func sessionWasInterrupted(_ session: ARSession) {
        experienceModel.transition(
            to: experienceModel.state,
            message: "Sesion interrumpida. Manten la aplicacion abierta para continuar."
        )
    }

    func sessionInterruptionEnded(_ session: ARSession) {
        resetPlacementForNewSession()
        startSession()
    }

    func session(_ session: ARSession, didFailWithError error: Error) {
        experienceModel.transition(
            to: .error,
            message: "ARKit ha detenido la sesion. Cierra la experiencia y vuelve a intentarlo."
        )
    }
}

private enum ARExperienceError: Error {
    case metalUnavailable
    case missingResource(String)
}

private extension Entity {
    func visit(_ body: (Entity) throws -> Void) rethrows {
        try body(self)
        for child in children {
            try child.visit(body)
        }
    }
}
