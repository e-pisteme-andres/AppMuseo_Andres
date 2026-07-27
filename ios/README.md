# App Museo para iOS

La carpeta `ios/` contiene la implementación nativa de la experiencia para
iPhone y iPad. La aplicación usa SwiftUI para la interfaz, ARKit y RealityKit
para la experiencia aumentada, Metal para el corte vertical y Core Motion para
el panorama de 360 grados.

## Requisitos

- macOS compatible con la versión actual de Xcode.
- Xcode 16 o posterior.
- XcodeGen (`brew install xcodegen`).
- iPhone o iPad físico compatible con ARKit y iOS 17 o posterior.
- Una cuenta de desarrollo configurada en Xcode para instalar en un dispositivo.

ARKit no está disponible en el simulador. El simulador sirve para revisar la
interfaz y ejecutar `ARMathTests`, pero las pruebas de cámara, planos, anchors,
profundidad y rendimiento se deben realizar en un dispositivo físico.

## Generar activos y proyecto

Desde la raíz del repositorio:

```bash
pnpm install --frozen-lockfile
pnpm generate:ios-assets
cd ios
xcodegen generate
open AppMuseoIOS.xcodeproj
```

El generador convierte `public/models/mushroom.glb` en
`public/models/mushroom.usdz`, normaliza su dimensión mayor a 20 cm y genera el
icono de 1024 puntos. El proyecto enlaza el USDZ y la fotografía panorámica
directamente desde `public/` para evitar copias divergentes.

## Configuración de firma

En Xcode:

1. Selecciona el target **AppMuseoIOS**.
2. Abre **Signing & Capabilities**.
3. Selecciona el equipo de Apple Developer correspondiente.
4. Cambia `es.appmuseo.AppMuseoIOS` si ese identificador ya está registrado.

La descripción de uso de cámara está declarada en
`AppMuseoIOS/Resources/Info.plist`. No se recopilan datos ni se realiza
seguimiento; `PrivacyInfo.xcprivacy` documenta esa condición.

## Correspondencia funcional

| Función web Android | Implementación iOS |
| --- | --- |
| WebXR `immersive-ar` | Sesión `ARWorldTrackingConfiguration` |
| Hit test horizontal | Raycast ARKit sobre planos horizontales |
| Retícula estabilizada | 12 muestras dentro de un radio de 1,8 cm |
| Malla cian de 1 × 1 m | Entidades RealityKit ancladas al mundo |
| WebXR anchors | `AnchorEntity(world:)` gestionado por ARKit |
| Depth sensing | Scene reconstruction, scene depth o person depth según el dispositivo |
| GLB con Three.js | USDZ generado desde el mismo GLB |
| Corte por clipping plane | `CustomMaterial` con shader Metal |
| Esporas Three.js | 80 entidades compartidas y animadas en coordenadas del modelo |
| Rotación uno/dos dedos | Pan de un dedo y gesto de rotación de dos dedos |
| Escala 1 cm–1 m | Escala uniforme sobre el mismo intervalo físico |
| Panorama Three.js | Esfera RealityKit con Core Motion, arrastre y zoom |

## Validación antes de distribución

Ejecuta en un Mac:

```bash
xcodebuild \
  -project AppMuseoIOS.xcodeproj \
  -scheme AppMuseoIOS \
  -sdk iphonesimulator \
  -destination 'platform=iOS Simulator,name=iPhone 16' \
  test
```

Después valida en dispositivo:

- concesión y denegación del permiso de cámara;
- mesas y suelos con diferentes texturas e iluminación;
- persistencia del anchor al caminar alrededor de la malla;
- oclusión en un dispositivo con LiDAR y en otro sin LiDAR;
- escala mínima, máxima y valor inicial de 20 cm;
- corte completo en ambos extremos;
- rotación con uno y dos dedos;
- pausa, interrupción y reentrada a la sesión;
- panorama en orientación vertical y horizontal.
