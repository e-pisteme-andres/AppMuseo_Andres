import SwiftUI

struct PanoramaScreen: View {
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        ZStack {
            PanoramaView()
                .ignoresSafeArea()
            LinearGradient(
                colors: [.black.opacity(0.72), .clear, .black.opacity(0.62)],
                startPoint: .top,
                endPoint: .bottom
            )
            .allowsHitTesting(false)
            .ignoresSafeArea()

            VStack {
                HStack(alignment: .top) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text("VISTA INMERSIVA · 360°")
                            .font(.caption2.weight(.black))
                            .tracking(1.2)
                            .foregroundStyle(AppPalette.mint)
                        Text("Observatorio Paranal, Chile")
                            .font(.headline)
                    }
                    Spacer()
                    Button("Volver") { dismiss() }
                        .font(.subheadline.weight(.bold))
                        .padding(.horizontal, 16)
                        .frame(minHeight: 42)
                        .background(.black.opacity(0.5), in: RoundedRectangle(cornerRadius: 14))
                }
                Spacer()
                HStack {
                    Label("Mueve el móvil o arrastra para mirar", systemImage: "move.3d")
                        .font(.caption.weight(.semibold))
                        .padding(.horizontal, 14)
                        .padding(.vertical, 10)
                        .background(.black.opacity(0.48), in: Capsule())
                    Spacer()
                }
                Link(
                    "Fotografía: ESO · CC BY 4.0",
                    destination: URL(string: "https://www.eso.org/public/spain/images/res-mount-sunrise-pan/")!
                )
                .font(.caption2)
                .foregroundStyle(.white.opacity(0.72))
                .frame(maxWidth: .infinity, alignment: .trailing)
            }
            .padding(18)
        }
        .statusBarHidden()
    }
}
