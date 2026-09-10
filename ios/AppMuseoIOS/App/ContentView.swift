import SwiftUI

struct ContentView: View {
    @State private var showAR = false
    @State private var showPanorama = false

    var body: some View {
        ZStack {
            AppPalette.background.ignoresSafeArea()
            ambientGlow

            ScrollView {
                VStack(alignment: .leading, spacing: 28) {
                    brand
                    hero
                    instructions
                    actions
                    footer
                }
                .frame(maxWidth: 720, alignment: .leading)
                .padding(.horizontal, 24)
                .padding(.top, 22)
                .padding(.bottom, 30)
            }
        }
        .fullScreenCover(isPresented: $showAR) {
            ARExperienceScreen()
        }
        .fullScreenCover(isPresented: $showPanorama) {
            PanoramaScreen()
        }
    }

    private var ambientGlow: some View {
        GeometryReader { proxy in
            Circle()
                .fill(AppPalette.mint.opacity(0.14))
                .blur(radius: 90)
                .frame(width: proxy.size.width * 0.82)
                .offset(x: proxy.size.width * 0.42, y: -proxy.size.height * 0.18)
        }
        .allowsHitTesting(false)
    }

    private var brand: some View {
        HStack(spacing: 10) {
            Text("M")
                .font(.system(size: 13, weight: .black, design: .rounded))
                .foregroundStyle(AppPalette.background)
                .frame(width: 27, height: 27)
                .background(AppPalette.mint)
                .clipShape(RoundedRectangle(cornerRadius: 8))
            Text("App Museo · Laboratorio AR")
                .font(.caption.weight(.bold))
                .foregroundStyle(.white.opacity(0.82))
        }
    }

    private var hero: some View {
        HStack(alignment: .center, spacing: 22) {
            VStack(alignment: .leading, spacing: 15) {
                Text("EXPERIENCIA AR · iOS")
                    .font(.caption2.weight(.black))
                    .tracking(1.8)
                    .foregroundStyle(AppPalette.mint)
                Text("Una seta.\nSobre tu hoja.")
                    .font(.system(size: 49, weight: .black, design: .rounded))
                    .minimumScaleFactor(0.72)
                    .foregroundStyle(.white)
                Text("Apunta a una hoja blanca con cuatro X negras en las esquinas y coloca una seta tridimensional de 20 cm sobre ese papel.")
                    .font(.body)
                    .foregroundStyle(.white.opacity(0.68))
                    .lineSpacing(4)
            }
            MushroomMark()
                .frame(width: 132, height: 158)
                .accessibilityHidden(true)
        }
    }

    private var instructions: some View {
        VStack(spacing: 11) {
            InstructionRow(
                number: "01",
                title: "Activa la cámara",
                detail: "iOS solicitará permiso al comenzar."
            )
            InstructionRow(
                number: "02",
                title: "Enfoca la hoja marcador",
                detail: "Usa una hoja blanca con cuatro X negras en las esquinas."
            )
            InstructionRow(
                number: "03",
                title: "Ajusta el modelo",
                detail: "Cuando la detecte, la seta aparecerá sobre el papel y podrás girarla."
            )
        }
    }

    private var actions: some View {
        VStack(spacing: 12) {
            Button {
                showAR = true
            } label: {
                Label("Ver seta sobre la hoja", systemImage: "viewfinder")
                    .font(.headline)
                    .frame(maxWidth: .infinity, minHeight: 58)
            }
            .buttonStyle(AppPrimaryButtonStyle())

            Button {
                showPanorama = true
            } label: {
                Label("Explorar paisaje 360°", systemImage: "move.3d")
                    .font(.headline)
                    .frame(maxWidth: .infinity, minHeight: 56)
            }
            .buttonStyle(AppSecondaryButtonStyle())
        }
    }

    private var footer: some View {
        HStack {
            Text("ARKit · iPhone y iPad")
            Spacer()
            Text("Hoja A4 · cuatro X")
        }
        .font(.caption2.weight(.semibold))
        .foregroundStyle(.white.opacity(0.42))
    }
}

private struct InstructionRow: View {
    let number: String
    let title: String
    let detail: String

    var body: some View {
        HStack(spacing: 14) {
            Text(number)
                .font(.caption2.weight(.black))
                .foregroundStyle(AppPalette.mint)
                .frame(width: 34, height: 34)
                .background(AppPalette.mint.opacity(0.09))
                .clipShape(Circle())
            VStack(alignment: .leading, spacing: 3) {
                Text(title).font(.subheadline.weight(.bold))
                Text(detail)
                    .font(.caption)
                    .foregroundStyle(.white.opacity(0.58))
            }
            Spacer(minLength: 0)
        }
        .padding(15)
        .background(.white.opacity(0.035))
        .overlay {
            RoundedRectangle(cornerRadius: 17)
                .stroke(.white.opacity(0.08), lineWidth: 1)
        }
        .clipShape(RoundedRectangle(cornerRadius: 17))
    }
}

struct MushroomMark: View {
    var body: some View {
        ZStack {
            Capsule()
                .fill(Color(red: 0.91, green: 0.82, blue: 0.66))
                .frame(width: 48, height: 92)
                .offset(y: 38)
            Ellipse()
                .fill(Color(red: 0.56, green: 0.055, blue: 0.04))
                .frame(width: 130, height: 84)
                .offset(y: -18)
            Circle().fill(Color(red: 1, green: 0.92, blue: 0.75)).frame(width: 16).offset(x: -34, y: -26)
            Circle().fill(Color(red: 1, green: 0.92, blue: 0.75)).frame(width: 20).offset(x: 4, y: -47)
            Circle().fill(Color(red: 1, green: 0.92, blue: 0.75)).frame(width: 13).offset(x: 37, y: -17)
        }
    }
}

enum AppPalette {
    static let background = Color(red: 0.025, green: 0.075, blue: 0.059)
    static let panel = Color(red: 0.025, green: 0.09, blue: 0.071)
    static let mint = Color(red: 0.435, green: 0.933, blue: 0.729)
    static let cyan = Color(red: 0.27, green: 0.91, blue: 1)
}

private struct AppPrimaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .foregroundStyle(AppPalette.background)
            .background(configuration.isPressed ? AppPalette.mint.opacity(0.78) : AppPalette.mint)
            .clipShape(RoundedRectangle(cornerRadius: 18))
            .scaleEffect(configuration.isPressed ? 0.985 : 1)
    }
}

private struct AppSecondaryButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .foregroundStyle(.white.opacity(0.88))
            .background(.white.opacity(configuration.isPressed ? 0.1 : 0.055))
            .overlay {
                RoundedRectangle(cornerRadius: 18)
                    .stroke(AppPalette.mint.opacity(0.3), lineWidth: 1)
            }
            .clipShape(RoundedRectangle(cornerRadius: 18))
    }
}
