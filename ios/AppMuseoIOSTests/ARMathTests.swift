import XCTest
@testable import AppMuseoIOS

final class ARMathTests: XCTestCase {
    func testUniformScaleClampsPhysicalSize() {
        XCTAssertEqual(
            ARMath.uniformScale(largestDimension: 0.2, sizeMetres: 0),
            0.05,
            accuracy: 0.0001
        )
        XCTAssertEqual(
            ARMath.uniformScale(largestDimension: 0.2, sizeMetres: 2),
            5,
            accuracy: 0.0001
        )
    }

    func testSliceCrossesEntireModelWithPadding() {
        XCTAssertLessThan(
            ARMath.verticalSlicePosition(minX: -0.1, maxX: 0.1, progress: 0),
            -0.1
        )
        XCTAssertGreaterThan(
            ARMath.verticalSlicePosition(minX: -0.1, maxX: 0.1, progress: 1),
            0.1
        )
    }
}
