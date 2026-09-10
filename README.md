# Museo AR · Seis modelos 3D

## Resumen

AppMuseo_Andres es una aplicacion inmersiva de museo con seis modelos 3D,
realidad aumentada web, fallback iOS, recorrido 360 y app nativa iOS. Este
README es la entrada general: explica que ofrece la app, como probarla y donde
esta la documentacion principal.

## Indice

- [Documentacion](#documentación)
- [Uso](#uso)
- [Marcadores ArUco](#marcadores-aruco)
- [Interacciones de los modelos](#interacciones-de-los-modelos)
- [Panorama 360](#panorama-360)
- [Desarrollo](#desarrollo)
- [Publicacion](#publicación)

Aplicación de realidad aumentada para colocar seis modelos 3D con efectos
sobre una mesa o el suelo: seta roja, cristal aurora, medusa celeste, tótem
solar, flor cósmica y casa vacía. El repositorio incluye:

- la experiencia web con WebXR y ARCore para Chrome en Android;
- un fallback web con AR Quick Look para Safari en iPhone y iPad;
- la aplicación nativa de iOS con ARKit y RealityKit en [`ios/`](ios/README.md),
  que conserva la malla, el corte, la escala, las esporas, la rotación y la
  oclusión avanzada.

## Documentación

La puerta de entrada para desarrolladores está en
[`docs/principales/README.md`](docs/principales/README.md). Desde ahí se
ordenan la guía técnica, la bitácora de decisiones, el cumplimiento contra
requisitos, las mediciones de penumbra, la trazabilidad del bacilo esquemático
y el módulo 360 empaquetado.

## Uso

1. Abre la aplicación mediante HTTPS en un Android compatible con ARCore o en
   Safari desde un iPhone/iPad compatible con ARKit.
2. Pulsa **Ver modelos en AR** y concede permiso para usar la cámara.
3. Mueve lentamente el teléfono hasta que la retícula confirme una superficie horizontal.
4. Toca la pantalla para fijar una malla cian de 1 × 1 metro sobre la superficie.
5. Elige uno de los seis modelos para colocarlo; la malla permanecerá visible.
6. Arrastra con un dedo para girar en dos ejes o gira dos dedos para el tercer eje.

El modelo no admite desplazamiento libre: permanece fijado a la superficie. Su tamaño solo cambia mediante el control de escala. Un anchor de WebXR mantiene la ubicación física cuando el dispositivo lo soporta; en caso contrario se conserva la pose local detectada.

La experiencia solicita el mapa de profundidad GPU de WebXR para que los objetos reales cercanos oculten tanto el modelo como la malla. Esta oclusión depende de que Chrome, ARCore y el hardware del dispositivo ofrezcan `depth-sensing`; durante la sesión se muestra si está activa o no disponible.

Una vez colocado, el deslizador **Corte vertical** permite seccionar el modelo de izquierda a derecha.
El control vertical **Tamaño** escala el modelo uniformemente entre 1 cm y 1 m.
Cada pieza incorpora partículas con color y movimiento propios que responden a su rotación, escala y corte.

La app nativa de iOS usa un marcador impreso distinto: `public/markers/x-corner-marker-sheet.png`.
La hoja contiene cuatro `X` negras en las esquinas y sirve como referencia para colocar el modelo sobre el papel.

## Marcadores ArUco

La rama de prueba web con escaneo usa marcadores ArUco del diccionario `DICT_4X4_50`.
La regla importante es esta:

- no hace falta un dibujo fijo concreto;
- hace falta una hoja con `4` marcadores ArUco distintos;
- debe haber `1` marcador en cada esquina de la hoja;
- al escanear, la app toma esas cuatro esquinas como base para colocar el modelo 3D.

Esto significa que puedes cambiar los IDs siempre que mantengas el mismo esquema de uso:

1. Elige `4` IDs distintos del diccionario `4x4_50`.
2. Coloca un marcador en cada esquina de la hoja.
3. Deja margen blanco alrededor de cada marcador.
4. Enseña la hoja completa a la cámara al iniciar el escaneo.
5. Cuando la app confirme las cuatro esquinas, abre AR sin mover bruscamente el móvil.

Ejemplo actual para la seta roja:

- superior izquierda: `7`
- superior derecha: `12`
- inferior izquierda: `31`
- inferior derecha: `23`

La hoja de ejemplo publicada para probar la seta está en:

- `public/markers/aruco-board.html`
- `public/markers/aruco-board.svg`

## Interacciones de los modelos

Cada modelo dispone de una acción exclusiva —liberar esporas, cargar energía,
dar impulso, despertar el tótem, florecer o iluminar una casa vacía— y de una
ficha **Descubrir**. Las
acciones pueden repetirse, refuerzan temporalmente las partículas y muestran
un punto luminoso sobre la pieza. El sonido sintetizado es opcional y comienza
desactivado; los móviles compatibles reciben una vibración breve. Los botones
se bloquean mientras se reproduce cada animación para evitar activaciones
superpuestas.

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

Para probar cambios en el movil sin publicar en GitHub Pages puedes usar el
servidor local con tunel HTTPS:

```bash
pnpm dev:tunnel
```

El comando muestra un enlace temporal `https://...loca.lt` que puedes abrir en
el telefono. Para probar una rama aislada, sin mover la rama actual del repo:

```bash
pnpm dev:tunnel -- -Branch nombre-de-la-rama
```

Si la rama no existe, el script la crea dentro de `.worktrees/`; si ya existe,
reutiliza su worktree. Para probar solo en este ordenador o en la misma Wi-Fi,
sin tunel publico:

```bash
pnpm dev:local
```

Si el enlace de `localtunnel` no responde, usa Cloudflare Quick Tunnel:

```bash
pnpm dev:cloudflare
```

El visor incluye un video 360 en `public/videos/eagle-360.mp4`.
Al pulsar `Explorar paisaje`, la app pregunta si quieres abrir `Foto 360` o
`Video 360`. Foto mantiene el recorrido panoramico original; Video carga el MP4
inmersivo. Despues de elegir foto o video, la app pregunta si quieres verlo en
modo normal o usar VR. En normal puedes mover el movil o arrastrar sin bloquear
la pantalla; en VR solicita sensores, intenta pantalla completa y pide
girar/colocar el movil antes de confirmar con OK. El video arranca silenciado
para que pueda reproducirse automaticamente en iPhone y Android.

Las pruebas se ejecutan con `pnpm test` y la compilación de producción con `pnpm build`.

`pnpm download:panoramas` prepara las dos escenas adicionales del recorrido
desde los archivos de publicación de ESO. El flujo de GitHub Pages ejecuta este
paso automáticamente para la vista de prueba de la ampliación 360.

`pnpm generate:assets` genera los seis GLB web, los códigos QR, el USDZ de la
seta para iOS normalizado a 20 cm y los iconos compartidos. Para compilar la aplicación nativa consulta
[`ios/README.md`](ios/README.md); Xcode y las pruebas AR requieren macOS y un
dispositivo físico.

El workflow `ios.yml` compila la aplicación y ejecuta sus pruebas en un
simulador de iPhone cuando cambian el proyecto nativo o sus recursos.

## Publicación

El workflow `pages.yml` prueba y publica automáticamente la rama `main` en:

<https://e-pisteme-andres.github.io/AppMuseo_Andres/>

En la configuración del repositorio, GitHub Pages debe usar **GitHub Actions** como origen. El QR listo para imprimir se encuentra en `public/qr-app-museo.png`.
