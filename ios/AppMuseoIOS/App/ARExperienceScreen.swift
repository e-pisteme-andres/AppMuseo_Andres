import SwiftUI

struct ARExperienceScreen: View {
    @Environment(\.dismiss) private var dismiss
    @StateObject private var model = ARExperienceModel()

    var body: some View {
        ZStack {
            ARExperienceView(model: model)
                .ignoresSafeArea()

            VStack(spacing: 0) {
                topBar
                Spacer()
                if model.state == .placed {
                    controls
                }
                guide
            }
            .padding(.top, 8)
            .padding(.bottom, 8)
        }
        .background(.black)
        .statusBarHidden()
        .onDisappear { model.end() }
    }

    private var topBar: some View {
        HStack(alignment: .top) {
            VStack(alignment: .leading, spacing: 6) {
                Label(model.activeModelName, systemImage: "circle.fill")
                    .font(.caption.weight(.bold))
                    .symbolRenderingMode(.palette)
                    .foregroundStyle(.white, .green)
                    .padding(.horizontal, 13)
                    .padding(.vertical, 10)
                    .background(.black.opacity(0.48), in: Capsule())

                Text(occlusionText)
                    .font(.caption2.weight(.semibold))
                    .foregroundStyle(model.occlusion == .active ? AppPalette.mint : .white.opacity(0.62))
                    .padding(.horizontal, 11)
                    .padding(.vertical, 7)
                    .background(.black.opacity(0.48), in: Capsule())
            }
            Spacer()
            Button("Salir") {
                model.end()
                dismiss()
            }
            .font(.subheadline.weight(.bold))
            .foregroundStyle(.white)
            .padding(.horizontal, 17)
            .frame(minHeight: 42)
            .background(.black.opacity(0.58), in: RoundedRectangle(cornerRadius: 14))
            .overlay {
                RoundedRectangle(cornerRadius: 14).stroke(.white.opacity(0.18))
            }
        }
        .padding(.horizontal, 16)
    }

    private var controls: some View {
        HStack(alignment: .bottom, spacing: 12) {
            VStack(alignment: .leading, spacing: 8) {
                HStack {
                    Text("Corte vertical")
                    Spacer()
                    Text("\(Int(model.sliceProgress * 100))%")
                        .foregroundStyle(AppPalette.mint)
                }
                .font(.caption.weight(.bold))
                Slider(value: $model.sliceProgress, in: 0...1)
                    .tint(AppPalette.mint)
                    .accessibilityLabel("Corte vertical")
            }
            .padding(14)
            .background(.black.opacity(0.65), in: RoundedRectangle(cornerRadius: 17))

            VStack(spacing: 6) {
                Text("Tamano")
                    .font(.caption2.weight(.bold))
                Text(sizeText)
                    .font(.caption2.monospacedDigit())
                    .foregroundStyle(AppPalette.mint)
                Slider(value: $model.modelSizeCentimetres, in: 1...100, step: 1)
                    .tint(AppPalette.mint)
                    .rotationEffect(.degrees(-90))
                    .frame(width: 38, height: 118)
                    .accessibilityLabel("Tamano uniforme")
                    .accessibilityValue(sizeText)
            }
            .padding(.horizontal, 10)
            .padding(.vertical, 12)
            .background(.black.opacity(0.65), in: RoundedRectangle(cornerRadius: 17))
        }
        .padding(.horizontal, 16)
        .padding(.bottom, 10)
    }

    private var guide: some View {
        HStack(spacing: 11) {
            Image(systemName: guideIcon)
                .foregroundStyle(model.state == .error ? .red : AppPalette.mint)
            Text(model.message)
                .font(.caption.weight(.semibold))
                .foregroundStyle(.white.opacity(0.88))
                .frame(maxWidth: .infinity, alignment: .leading)
        }
        .padding(15)
        .background(.black.opacity(0.68), in: RoundedRectangle(cornerRadius: 17))
        .overlay {
            RoundedRectangle(cornerRadius: 17).stroke(.white.opacity(0.16))
        }
        .padding(.horizontal, 16)
    }

    private var sizeText: String {
        model.modelSizeCentimetres == 100 ? "1 m" : "\(Int(model.modelSizeCentimetres)) cm"
    }

    private var guideIcon: String {
        switch model.state {
        case .scanning: "viewfinder"
        case .placed: "hand.draw"
        case .error: "exclamationmark.triangle.fill"
        default: "camera.fill"
        }
    }

    private var occlusionText: String {
        switch model.occlusion {
        case .checking: "Oclusion · comprobando"
        case .active: "Oclusion real · activa"
        case .unavailable: "Oclusion real · no disponible"
        }
    }
}
