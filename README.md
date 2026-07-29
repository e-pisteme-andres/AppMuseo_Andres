# Seta AR · App Museo

Aplicación de realidad aumentada para colocar una seta 3D de 20 cm sobre una
mesa o el suelo. El repositorio incluye:

- la experiencia web con WebXR y ARCore para Chrome en Android;
- un fallback web con AR Quick Look para Safari en iPhone y iPad;
- la aplicación nativa de iOS con ARKit y RealityKit en [`ios/`](ios/README.md),
  que conserva la malla, el corte, la escala, las esporas, la rotación y la
  oclusión avanzada.

## Uso

1. Abre la aplicación mediante HTTPS en un Android compatible con ARCore o en
   Safari desde un iPhone/iPad compatible con ARKit.
2. Pulsa **Ver seta en AR** y concede permiso para usar la cámara.
3. Mueve lentamente el teléfono hasta que la retícula confirme una superficie horizontal.
4. Toca la pantalla para fijar una malla cian de 1 × 1 metro sobre la superficie.
5. Toca de nuevo para colocar la seta; la malla permanecerá visible.
6. Arrastra con un dedo para girar en dos ejes o gira dos dedos para el tercer eje.

La seta no admite desplazamiento libre: permanece fijada a la superficie. Su tamaño solo cambia mediante el control de escala. Un anchor de WebXR mantiene la ubicación física cuando el dispositivo lo soporta; en caso contrario se conserva la pose local detectada.

La experiencia solicita el mapa de profundidad GPU de WebXR para que los objetos reales cercanos oculten tanto la seta como la malla. Esta oclusión depende de que Chrome, ARCore y el hardware del dispositivo ofrezcan `depth-sensing`; durante la sesión se muestra si está activa o no disponible.

Una vez colocada, el deslizador **Corte vertical** permite seccionar la seta de izquierda a derecha.
El control vertical **Tamaño** escala el modelo uniformemente entre 1 cm y 1 m.
Las esporas forman parte del modelo y responden a su rotación, escala y corte.

## Panorama 360°

El recorrido panorámico para móvil incluye tres paradas enlazadas, puntos de
interés con información, navegación directa, zoom táctil, recentrado y pantalla
completa cuando el navegador la permite:

- **Entorno de Paranal**: fotografía equirectangular *Panoramic view of
  Paranal*, de ESO, publicada bajo licencia
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). [Fuente y atribución](https://www.eso.org/public/spain/images/res-mount-sunrise-pan/).
- **Plataforma del VLT**: fotografía de M. Cabral/ESO.
  [Fuente y atribución](https://www.eso.org/public/images/ESO_Paranal_360_Marcio_Cabral_Chile_07-CC/).
- **La Residencia**: fotografía de ESO.
  [Fuente y atribución](https://www.eso.org/public/images/reception-area-pano/).

## Desarrollo

Requiere Node.js 22 y pnpm.

```bash
pnpm install
pnpm download:panoramas
pnpm generate:assets
pnpm dev
```

Las pruebas se ejecutan con `pnpm test` y la compilación de producción con `pnpm build`.

`pnpm download:panoramas` prepara las dos escenas adicionales del recorrido
desde los archivos de publicación de ESO. El flujo de GitHub Pages ejecuta este
paso automáticamente para la vista de prueba de la ampliación 360.

`pnpm generate:assets` genera los códigos QR, el USDZ de iOS normalizado a
20 cm y los iconos compartidos. Para compilar la aplicación nativa consulta
[`ios/README.md`](ios/README.md); Xcode y las pruebas AR requieren macOS y un
dispositivo físico.

El workflow `ios.yml` compila la aplicación y ejecuta sus pruebas en un
simulador de iPhone cuando cambian el proyecto nativo o sus recursos.

## Publicación

El workflow `pages.yml` prueba y publica automáticamente la rama `main` en:

<https://e-pisteme-andres.github.io/AppMuseo_Andres/>

En la configuración del repositorio, GitHub Pages debe usar **GitHub Actions** como origen. El QR listo para imprimir se encuentra en `public/qr-app-museo.png`.
