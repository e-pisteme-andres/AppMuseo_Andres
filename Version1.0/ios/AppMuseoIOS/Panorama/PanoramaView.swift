import CoreMotion
import RealityKit
import SwiftUI
import UIKit

struct PanoramaView: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> PanoramaViewController {
        PanoramaViewController()
    }

    func updateUIViewController(_ controller: PanoramaViewController, context: Context) {}

    static func dismantleUIViewController(_ controller: PanoramaViewController, coordinator: ()) {
        controller.stop()
    }
}

@MainActor
final class PanoramaViewController: UIViewController {
    private let panoramaView = ARView(
        frame: .zero,
        cameraMode: .nonAR,
        automaticallyConfigureSession: false
    )
    private let camera = PerspectiveCamera()
    private let motionManager = CMMotionManager()
    private var referenceAttitude: CMQuaternion?
    private var yaw: Float = -1.82
    private var pitch: Float = -0.07

    override func viewDidLoad() {
        super.viewDidLoad()
        configureView()
        loadPanorama()
        configureControls()
        startMotion()
    }

    func stop() {
        motionManager.stopDeviceMotionUpdates()
    }

    private func configureView() {
        view.backgroundColor = .black
        panoramaView.translatesAutoresizingMaskIntoConstraints = false
        panoramaView.renderOptions.insert(.disableMotionBlur)
        view.addSubview(panoramaView)
        NSLayoutConstraint.activate([
            panoramaView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            panoramaView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            panoramaView.topAnchor.constraint(equalTo: view.topAnchor),
            panoramaView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
        ])
    }

    private func loadPanorama() {
        guard let texture = try? TextureResource.load(named: "paranal-360") else {
            showError("No se pudo cargar la fotografía panorámica.")
            return
        }

        var material = UnlitMaterial()
        material.color = .init(tint: .white, texture: .init(texture))
        material.faceCulling = .front

        let sphere = ModelEntity(
            mesh: .generateSphere(radius: 10),
            materials: [material]
        )
        let anchor = AnchorEntity(world: .identity)
        anchor.addChild(sphere)
        anchor.addChild(camera)
        panoramaView.scene.addAnchor(anchor)
        updateCameraOrientation()
    }

    private func configureControls() {
        let pan = UIPanGestureRecognizer(target: self, action: #selector(handlePan(_:)))
        panoramaView.addGestureRecognizer(pan)
        let pinch = UIPinchGestureRecognizer(target: self, action: #selector(handlePinch(_:)))
        panoramaView.addGestureRecognizer(pinch)
    }

    private func startMotion() {
        guard motionManager.isDeviceMotionAvailable else { return }
        motionManager.deviceMotionUpdateInterval = 1 / 60
        motionManager.startDeviceMotionUpdates(using: .xArbitraryZVertical, to: .main) { [weak self] motion, _ in
            guard let self, let attitude = motion?.attitude.quaternion else { return }
            Task { @MainActor in
                if self.referenceAttitude == nil { self.referenceAttitude = attitude }
                guard let reference = self.referenceAttitude else { return }
                let relative = simd_normalize(
                    simd_quatf(ix: Float(attitude.x), iy: Float(attitude.y), iz: Float(attitude.z), r: Float(attitude.w))
                    * simd_inverse(
                        simd_quatf(ix: Float(reference.x), iy: Float(reference.y), iz: Float(reference.z), r: Float(reference.w))
                    )
                )
                let drag = simd_quatf(angle: self.yaw, axis: [0, 1, 0])
                    * simd_quatf(angle: self.pitch, axis: [1, 0, 0])
                self.camera.orientation = simd_normalize(drag * relative)
            }
        }
    }

    @objc private func handlePan(_ gesture: UIPanGestureRecognizer) {
        let translation = gesture.translation(in: panoramaView)
        gesture.setTranslation(.zero, in: panoramaView)
        yaw -= Float(translation.x) * 0.004
        pitch = min(max(pitch - Float(translation.y) * 0.004, -1.43), 1.43)
        referenceAttitude = motionManager.deviceMotion?.attitude.quaternion
        updateCameraOrientation()
    }

    @objc private func handlePinch(_ gesture: UIPinchGestureRecognizer) {
        guard gesture.state == .changed else { return }
        var cameraComponent = camera.camera
        cameraComponent.fieldOfViewInDegrees = min(
            max(cameraComponent.fieldOfViewInDegrees / Float(gesture.scale), 38),
            92
        )
        camera.camera = cameraComponent
        gesture.scale = 1
    }

    private func updateCameraOrientation() {
        let yawRotation = simd_quatf(angle: yaw, axis: [0, 1, 0])
        let pitchRotation = simd_quatf(angle: pitch, axis: [1, 0, 0])
        camera.orientation = simd_normalize(yawRotation * pitchRotation)
    }

    private func showError(_ message: String) {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.text = message
        label.textColor = .white
        label.numberOfLines = 0
        label.textAlignment = .center
        view.addSubview(label)
        NSLayoutConstraint.activate([
            label.centerXAnchor.constraint(equalTo: view.centerXAnchor),
            label.centerYAnchor.constraint(equalTo: view.centerYAnchor),
            label.leadingAnchor.constraint(greaterThanOrEqualTo: view.leadingAnchor, constant: 30),
            label.trailingAnchor.constraint(lessThanOrEqualTo: view.trailingAnchor, constant: -30),
        ])
    }
}
