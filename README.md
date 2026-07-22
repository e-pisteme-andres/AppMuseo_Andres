# Seta AR · App Museo

Aplicación web experimental para colocar una seta 3D de 20 cm sobre una mesa o el suelo mediante WebXR y ARCore. Está diseñada para Chrome en Android.

## Uso

1. Abre la aplicación mediante HTTPS en un Android compatible con ARCore.
2. Pulsa **Ver seta en AR** y concede permiso para usar la cámara.
3. Mueve lentamente el teléfono hasta que la retícula confirme una superficie horizontal.
4. Toca la pantalla para fijar una malla cian de 1 × 1 metro sobre la superficie.
5. Toca de nuevo para colocar la seta; la malla permanecerá visible.
6. Arrastra con un dedo para girar en dos ejes o gira dos dedos para el tercer eje.

La seta no admite desplazamiento ni cambio de tamaño. Un anchor de WebXR mantiene la ubicación física cuando el dispositivo lo soporta; en caso contrario se conserva la pose local detectada.

La experiencia solicita el mapa de profundidad GPU de WebXR para que los objetos reales cercanos oculten tanto la seta como la malla. Esta oclusión depende de que Chrome, ARCore y el hardware del dispositivo ofrezcan `depth-sensing`; durante la sesión se muestra si está activa o no disponible.

## Desarrollo

Requiere Node.js 22 y pnpm.

```bash
pnpm install
pnpm generate:assets
pnpm dev
```

Las pruebas se ejecutan con `pnpm test` y la compilación de producción con `pnpm build`.

## Publicación

El workflow `pages.yml` prueba y publica automáticamente la rama `main` en:

<https://e-pisteme-andres.github.io/AppMuseo_Andres/>

En la configuración del repositorio, GitHub Pages debe usar **GitHub Actions** como origen. El QR listo para imprimir se encuentra en `public/qr-app-museo.png`.
