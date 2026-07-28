import XCTest
@testable import AppMuseoIOS

final class SurfaceStabilizerTests: XCTestCase {
    func testAcceptsTwelveNearbySamples() {
        var stabilizer = SurfaceStabilizer()
        var stable = false
        for index in 0..<12 {
            var transform = matrix_identity_float4x4
            transform.columns.3.x = Float(index % 3) * 0.001
            stable = stabilizer.add(transform: transform)
        }
        XCTAssertTrue(stable)
    }

    func testRejectsDispersedSamples() {
        var stabilizer = SurfaceStabilizer()
        var stable = false
        for index in 0..<12 {
            var transform = matrix_identity_float4x4
            transform.columns.3.x = Float(index) * 0.02
            stable = stabilizer.add(transform: transform)
        }
        XCTAssertFalse(stable)
    }
}
