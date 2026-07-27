import simd

struct SurfaceStabilizer {
    let requiredSamples: Int
    let maxRadiusMetres: Float
    private var samples: [SIMD3<Float>] = []

    init(requiredSamples: Int = 12, maxRadiusMetres: Float = 0.018) {
        self.requiredSamples = requiredSamples
        self.maxRadiusMetres = maxRadiusMetres
    }

    mutating func add(transform: simd_float4x4) -> Bool {
        let position = SIMD3<Float>(
            transform.columns.3.x,
            transform.columns.3.y,
            transform.columns.3.z
        )
        samples.append(position)
        if samples.count > requiredSamples {
            samples.removeFirst(samples.count - requiredSamples)
        }
        guard samples.count == requiredSamples else { return false }

        let mean = samples.reduce(.zero, +) / Float(samples.count)
        return samples.allSatisfy { simd_distance($0, mean) <= maxRadiusMetres }
    }

    mutating func reset() {
        samples.removeAll(keepingCapacity: true)
    }
}
