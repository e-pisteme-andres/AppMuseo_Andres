import Foundation

enum ARExperienceState: String {
    case checking
    case ready
    case starting
    case scanning
    case placeable
    case surfacePlaced
    case placed
    case error
}

enum OcclusionState: String {
    case checking
    case active
    case unavailable
}

@MainActor
final class ARExperienceModel: ObservableObject {
    @Published private(set) var state: ARExperienceState = .starting
    @Published private(set) var activeModelName = "Hoja marcador"
    @Published private(set) var message = "Preparando la camara y el seguimiento visual..."
    @Published private(set) var occlusion: OcclusionState = .checking
    @Published var sliceProgress: Double = 0 {
        didSet { setSliceHandler?(Float(sliceProgress)) }
    }
    @Published var modelSizeCentimetres: Double = 20 {
        didSet { setSizeHandler?(Float(modelSizeCentimetres / 100)) }
    }

    var setSliceHandler: ((Float) -> Void)?
    var setSizeHandler: ((Float) -> Void)?
    var endHandler: (() -> Void)?

    func transition(to next: ARExperienceState, message: String) {
        state = next
        self.message = message
    }

    func setOcclusion(_ state: OcclusionState) {
        occlusion = state
    }

    func setActiveModelName(_ name: String) {
        activeModelName = name
    }

    func end() {
        endHandler?()
    }
}
