# Guia para desarrolladores

## Resumen

Documento de onboarding tecnico para retomar AppMuseo_Andres. Resume la
arquitectura, los flujos principales, los activos, la validacion y las cautelas
que otro desarrollador necesita antes de tocar el proyecto.

## Indice

- [Resumen rapido](#resumen-rapido)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Flujos principales](#flujos-principales)
- [Activos y generacion](#activos-y-generacion)
- [Validacion local](#validacion-local)
- [Publicacion](#publicacion)
- [Estado y cautelas conocidas](#estado-y-cautelas-conocidas)
- [Donde documentar cambios nuevos](#donde-documentar-cambios-nuevos)

Estado documentado: 2026-09-10.

Esta guia resume lo que necesita saber otro desarrollador para retomar
AppMuseo_Andres sin tener que reconstruir toda la conversacion previa.

## Resumen rapido

AppMuseo_Andres es una aplicacion inmersiva de museo con tres lineas tecnicas:

- experiencia web principal con Vite, TypeScript y Three.js;
- realidad aumentada web en Android mediante WebXR/ARCore, con fallback iOS web
  mediante AR Quick Look;
- aplicacion nativa iOS en `ios/` con SwiftUI, ARKit, RealityKit y Metal.

La version declarada en `package.json` es `1.0.8`. El catalogo web actual
contiene seis modelos: seta roja, cristal aurora, medusa celeste, totem solar,
flor cosmica y casa vacia.

La rama documentada como mejor punto vivo en las decisiones historicas es
`dev`. `main` se publica en la raiz de GitHub Pages y `dev` bajo `/dev/`.
Antes de tratar esto como entrega cerrada conviene revisar el estado actual de
ramas y CI.

## Estructura del repositorio

| Ruta | Rol |
| --- | --- |
| `src/main.ts` | Orquestacion de la UI web, dialogos, AR, visor 360, escaneo, progreso y eventos. |
| `src/ar/` | Experiencia AR web, catalogo de modelos, preflight de camara/WebXR, preview, sonido e interaccion. |
| `src/panorama-viewer.ts` | Motor del visor 360 usado por la demo web y por el modulo empaquetado. |
| `src/panorama-tour.ts` | Datos y recorrido 360 de la demo. |
| `src/panorama-module.ts` | Modulo 360 autocontenido para integracion externa. |
| `src/panorama-module.css` | Estilos encapsulados del modulo 360. |
| `src/marker-scan.ts` | Deteccion y seguimiento de hoja con cuatro marcadores ArUco. |
| `src/virtual-experience.ts` | Fallback 3D orbital cuando no se usa camara/AR. |
| `src/progress-cache.ts` | Persistencia local con `localStorage`. |
| `src/test-cube-*` | Pruebas/prototipos de cubo y visor tipo gafas. |
| `public/models/` | GLB y USDZ servidos por la app. |
| `public/panoramas/` | Imagenes equirectangulares 360. Algunas se descargan por script y estan ignoradas en Git. |
| `public/videos/` | Videos 360 locales. `eagle-360.mp4` se carga por defecto; `teal-ridge-360.mp4` queda como referencia pesada. |
| `public/markers/` | Plantillas de marcadores impresos. |
| `public/s02/` | Spike/medicion S-02 y recursos asociados al bacilo esquematico. |
| `docs/s02-documentacion/` | Documentacion agrupada de S-02: medicion P-13, bacilo, recursos y modelos. |
| `ios/` | App nativa iOS y documentacion especifica. |
| `scripts/` | Generacion/validacion de activos y tunel de desarrollo movil. |
| `docs/` | Documentacion tecnica, decisiones, cumplimiento y evidencias. |
| `releases/` | Artefactos versionados para entrega directa, actualmente el modulo 360. |

## Flujos principales

### AR web en Android

La entrada de usuario esta en `src/main.ts`. El flujo comprueba compatibilidad y
permisos con `src/ar/access-preflight.ts`, selecciona modo con
`src/ar/platform.ts` y arranca `XRExperience` desde `src/ar/xr-experience.ts`.

La experiencia coloca una malla de 1 x 1 m sobre una superficie detectada,
permite elegir modelo, rotarlo, escalarlo, seccionarlo con corte vertical y
ejecutar una accion visual/sonora por modelo. La oclusion por profundidad se
solicita como mejora opcional; la app debe seguir funcionando si no esta
disponible.

### Fallback web sin AR completa

Si WebXR no esta disponible o el usuario no permite camara, la app ofrece
alternativas: AR Quick Look en Safari iOS cuando procede, vista 3D orbital con
`VirtualExperience` y recorrido 360.

Quick Look usa USDZ bajo `public/models/`. La paridad de interaccion no es la
misma que en WebXR: no hay el mismo control propio de corte, gestos y oclusion.

### Escaneo ArUco

El boton `Escaneo` abre un modal que comprueba camara, contexto seguro y carga
del detector. El estado actual usa cuatro marcadores ArUco distintos del
diccionario `DICT_4X4_50`, uno por esquina de la hoja.

Archivos clave:

- `src/marker-scan.ts`
- `src/main.ts`
- `public/markers/aruco-board.html`
- `public/markers/aruco-board.svg`

La plantilla actual de ejemplo usa los IDs `7`, `12`, `31` y `23`. La logica no
deberia depender de esos IDs concretos.

### Panorama 360

La demo web incluye recorrido 360 con foto y video, eleccion de modo normal o
VR, arrastre, sensores cuando estan disponibles, zoom, recentrado, hotspots y
persistencia de progreso. Sin video configurado, `createPanoramaTour()` crea
tres escenas fotograficas. Con `videoUrl`, anade una cuarta escena
`video-360`.

Tambien existe un modulo reutilizable separado en `src/panorama-module.ts`,
documentado en `docs/documentacion-tecnica-modulo-360.md` desde la raiz del
repo. Este modulo no presupone Astro, React ni otra capa de app; recibe un
contenedor, escenas, labels, cadena de degradacion, alternativa textual y
callback de salida.

### iOS nativo

La app nativa vive en `ios/` y se documenta en `ios/README.md`. Usa ARKit para
tracking, RealityKit para render, Metal para corte vertical y Core Motion para
panorama. Requiere macOS, Xcode, XcodeGen y dispositivo fisico para validar AR.

Hay que tratarla con cautela: las decisiones registran que la linea iOS se
exploro para paridad funcional, pero necesita compilacion y prueba real antes
de prometerla como entrega estable.

## Activos y generacion

Comandos principales:

```bash
pnpm install
pnpm download:panoramas
pnpm generate:assets
pnpm dev
```

`pnpm generate:assets` genera modelos web, USDZ, QR e iconos compartidos.
`pnpm download:panoramas` descarga panoramas adicionales desde ESO para el
recorrido 360. El build de Pages ejecuta la preparacion necesaria para publicar.
El video 360 por defecto esta en `public/videos/eagle-360.mp4`; se puede probar
otro archivo local arrancando Vite con `VITE_360_VIDEO_URL`.

No todos los activos son equivalentes:

- los modelos generados por script son prototipos o activos de prueba;
- el bacilo de `public/s02/modelos/` tiene trazabilidad propia en
  `docs/s02-documentacion/bacilo-esquematico-para-coordinador.md` desde la raiz
  del repo;
- los panoramas de ESO necesitan conservar creditos y licencias;
- los videos 360 deben conservar procedencia y cargarse con cautela por peso y
  compatibilidad de textura WebGL movil;

## Validacion local

Antes de entregar cambios de codigo web:

```bash
pnpm test
pnpm build
```

Para el modulo 360:

```bash
pnpm build:panorama-module
```

Para iOS, desde un Mac, seguir `ios/README.md`. ARKit no se valida en simulador:
camara, tracking, anchors, profundidad y rendimiento necesitan dispositivo
fisico.

## Publicacion

GitHub Pages publica:

- `main`: `https://e-pisteme-andres.github.io/AppMuseo_Andres/`
- `dev`: `https://e-pisteme-andres.github.io/AppMuseo_Andres/dev/`

El QR principal esta en `public/qr-app-museo.png`. Para probar cambios en movil
sin publicar se puede usar:

```bash
pnpm dev:tunnel
pnpm dev:local
pnpm dev:cloudflare
```

`scripts/dev-tunnel.ps1` tambien acepta `-Branch`, `-Port`, `-Tunnel` y
`-NoInstall`. Si se pasa una rama, prepara o reutiliza un worktree bajo
`.worktrees/` para probar sin mover el checkout principal.

## Estado y cautelas conocidas

Estos puntos no deberian olvidarse al continuar:

- `docs/principales/cumplimiento.md` contiene varios requisitos marcados como
  `NO CUMPLE` o `NO SE SABE`; no asumirlos resueltos sin nueva evidencia.
- P-13 sobre anclaje en penumbra sigue abierto segun
  `docs/s02-documentacion/medicion-p-13-anclaje-ar-en-penumbra.md`.
- La experiencia ArUco esta integrada como exploracion tecnica, pero necesita
  pruebas reales para declararla robusta en sala.
- iOS nativo requiere validacion en dispositivo real.
- `tmp/`, `dist/`, `output/`, `Version1.0/` y `Version1.0.zip` no son la fuente
  principal para desarrollar.
- El alcance de cada version declarada o empaquetada se mantiene en
  `docs/principales/versiones.md`.

## Donde documentar cambios nuevos

- Nueva decision tecnica o de producto: `docs/principales/decisiones.md`.
- Cambio de cumplimiento medido: `docs/principales/cumplimiento.md`.
- Resultado de prueba en baja luz o anclaje:
  `docs/s02-documentacion/medicion-p-13-anclaje-ar-en-penumbra.md`.
- Cambio en el modulo 360 reusable: `docs/documentacion-tecnica-modulo-360.md`.
- Cambio iOS: `ios/README.md` y, si altera arquitectura o alcance,
  `docs/principales/decisiones.md`.
- Cambio de version o paquete entregable: `docs/principales/versiones.md`.
