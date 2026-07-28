import ARKit
import RealityKit
import SwiftUI

struct ARExperienceView: UIViewControllerRepresentable {
    @ObservedObject var model: ARExperienceModel

    func makeUIViewController(context: Context) -> ARExperienceController {
        ARExperienceController(model: model)
    }

    func updateUIViewController(_ controller: ARExperienceController, context: Context) {
        controller.applyCurrentControls()
    }

    static func dismantleUIViewController(_ controller: ARExperienceController, coordinator: ()) {
        controller.stop()
    }
}
