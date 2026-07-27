import RealityKit
import UIKit

@MainActor
final class SporeField {
    let root = Entity()

    private struct Spore {
        let entity: ModelEntity
        let baseX: Float
        let baseZ: Float
        let initialHeight: Float
        let fallSpeed: Float
        let drift: Float
        let phase: Float
        var height: Float
    }

    private var spores: [Spore] = []
    private var elapsed: Float = 0
    private var sliceX: Float = -1

    init(count: Int = 80) {
        var random = SeededRandom(seed: 0x51a7e)
        let sharedMesh = MeshResource.generateSphere(radius: 0.0032)
        var sharedMaterial = UnlitMaterial()
        sharedMaterial.color = .init(tint: UIColor(red: 0.32, green: 1, blue: 0.38, alpha: 0.86))
        sharedMaterial.blending = .transparent(opacity: 0.86)

        for _ in 0..<count {
            let angle = random.next() * .pi * 2
            let radius = sqrt(random.next()) * 0.085
            let initialHeight = 0.012 + random.next() * (0.195 - 0.012)
            let entity = ModelEntity(mesh: sharedMesh, materials: [sharedMaterial])
            let size = 0.72 + random.next() * 0.56
            entity.scale = SIMD3<Float>(repeating: size)

            let spore = Spore(
                entity: entity,
                baseX: cos(angle) * radius,
                baseZ: sin(angle) * radius,
                initialHeight: initialHeight,
                fallSpeed: 0.012 + random.next() * 0.018,
                drift: 0.004 + random.next() * 0.009,
                phase: random.next() * .pi * 2,
                height: initialHeight
            )
            root.addChild(entity)
            spores.append(spore)
        }
        root.isEnabled = false
        reset()
    }

    func setEnabled(_ enabled: Bool) {
        root.isEnabled = enabled
    }

    func setSlicePosition(_ position: Float) {
        sliceX = position
        updateVisibility()
    }

    func update(deltaSeconds: Float) {
        guard root.isEnabled else { return }
        let delta = min(max(deltaSeconds, 0), 0.05)
        elapsed += delta

        for index in spores.indices {
            var spore = spores[index]
            spore.height -= spore.fallSpeed * delta
            if spore.height < 0.012 { spore.height = 0.195 }

            let x = spore.baseX + sin(elapsed * 0.75 + spore.phase) * spore.drift
            let z = spore.baseZ + cos(elapsed * 0.62 + spore.phase * 1.37) * spore.drift
            spore.entity.position = SIMD3<Float>(x, spore.height, z)
            spore.entity.isEnabled = x >= sliceX
            spores[index] = spore
        }
    }

    func reset() {
        elapsed = 0
        for index in spores.indices {
            var spore = spores[index]
            spore.height = spore.initialHeight
            spore.entity.position = SIMD3<Float>(spore.baseX, spore.height, spore.baseZ)
            spores[index] = spore
        }
        updateVisibility()
    }

    private func updateVisibility() {
        for spore in spores {
            spore.entity.isEnabled = spore.entity.position.x >= sliceX
        }
    }
}

private struct SeededRandom {
    private var state: UInt32

    init(seed: UInt32) {
        state = seed
    }

    mutating func next() -> Float {
        state &+= 0x6d2b79f5
        var value = state
        value = (value ^ (value >> 15)) &* (value | 1)
        value ^= value &+ ((value ^ (value >> 7)) &* (value | 61))
        return Float((value ^ (value >> 14))) / Float(UInt32.max)
    }
}
