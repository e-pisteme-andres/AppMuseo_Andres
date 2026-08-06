# App Museo para iOS

La carpeta `ios/` contiene la implementacion nativa de la experiencia para
iPhone y iPad. La aplicacion usa SwiftUI para la interfaz, ARKit y RealityKit
para la experiencia aumentada, Metal para el corte vertical y Core Motion para
el panorama de 360 grados. En `dev`, la sesion AR reconoce un QR distinto por
modelo y muestra automaticamente la pieza correspondiente al apuntar la camara.

## Requisitos

- macOS compatible con la version actual de Xcode.
- Xcode 16 o posterior.
- XcodeGen (`brew install xcodegen`).
- iPhone o iPad fisico compatible con ARKit y iOS 17 o posterior.
- Una cuenta de desarrollo configurada en Xcode para instalar en un dispositivo.

ARKit no esta disponible en el simulador. El simulador sirve para revisar la
interfaz y ejecutar `ARMathTests`, pero las pruebas de camara, tracking y
rendimiento se deben realizar en un dispositivo fisico.

## Generar activos y proyecto

Desde la raiz del repositorio:

```bash
pnpm install --frozen-lockfile
pnpm generate:assets
cd ios
xcodegen generate
open AppMuseoIOS.xcodeproj
```

El generador produce:

- los GLB web en `public/models/`;
- los USDZ equivalentes para iOS en `public/models/`;
- los QR por modelo en `public/qr/`;
- el icono compartido de la app.

Para que el tracking sea estable, imprime los QR de `public/qr/` con un ancho
fisico de 12 cm.

## Configuracion de firma

En Xcode:

1. Selecciona el target **AppMuseoIOS**.
2. Abre **Signing & Capabilities**.
3. Selecciona el equipo de Apple Developer correspondiente.
4. Cambia `es.appmuseo.AppMuseoIOS` si ese identificador ya esta registrado.

La descripcion de uso de camara esta declarada en
`AppMuseoIOS/Resources/Info.plist`. No se recopilan datos ni se realiza
seguimiento; `PrivacyInfo.xcprivacy` documenta esa condicion.

## Correspondencia funcional

| Funcion web Android | Implementacion iOS |
| --- | --- |
| WebXR `immersive-ar` | Sesion `ARWorldTrackingConfiguration` |
| Deteccion del marcador | Imagenes de referencia ARKit basadas en los PNG de `public/qr/` |
| Aparicion del modelo | `ARImageAnchor` y `AnchorEntity(anchor:)` sobre el QR detectado |
| Modelos disponibles | Seta roja, cristal aurora, medusa celeste, totem solar y flor cosmica |
| Depth sensing | Scene reconstruction, scene depth o person depth segun el dispositivo |
| GLB con Three.js | USDZ generado desde los mismos GLB |
| Corte por clipping plane | `CustomMaterial` con shader Metal |
| Rotacion uno/dos dedos | Pan de un dedo y gesto de rotacion de dos dedos tras detectar el QR |
| Escala 1 cm-1 m | Escala uniforme sobre el mismo intervalo fisico |
| Panorama Three.js | Esfera RealityKit con Core Motion, arrastre y zoom |

## Validacion antes de distribucion

Ejecuta en un Mac:

```bash
xcodebuild \
  -project AppMuseoIOS.xcodeproj \
  -scheme AppMuseoIOS \
  -sdk iphonesimulator \
  -destination 'platform=iOS Simulator,name=iPhone 16' \
  test
```

Despues valida en dispositivo:

- concesion y denegacion del permiso de camara;
- deteccion de cada QR impreso a 12 cm con diferentes iluminaciones y distancias;
- cambio correcto de modelo al alternar entre QR distintos;
- persistencia del anchor al mover el iPhone alrededor del QR;
- oclusion en un dispositivo con LiDAR y en otro sin LiDAR;
- escala minima, maxima y valor inicial de 20 cm;
- corte completo en ambos extremos;
- rotacion con uno y dos dedos;
- salida y reentrada del QR en el campo de vision;
- pausa, interrupcion y reentrada a la sesion;
- panorama en orientacion vertical y horizontal.
