import simd

enum ARMath {
    static let minimumModelSizeMetres: Float = 0.01
    static let maximumModelSizeMetres: Float = 1
    static let defaultModelSizeMetres: Float = 0.2

    static func uniformScale(largestDimension: Float, sizeMetres: Float) -> Float {
        let clamped = min(max(sizeMetres, minimumModelSizeMetres), maximumModelSizeMetres)
        return largestDimension > 0 ? clamped / largestDimension : 1
    }

    static func verticalSlicePosition(minX: Float, maxX: Float, progress: Float) -> Float {
        let clamped = min(max(progress, 0), 1)
        let width = max(0, maxX - minX)
        let padding = width * 0.02
        return minX - padding + (width + padding * 2) * clamped
    }
}
