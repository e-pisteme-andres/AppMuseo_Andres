# Versiones y alcance

## Resumen

Este documento explica que se aplica en cada version o artefacto versionado
detectado en el repositorio. No sustituye a `package.json`; complementa la
version tecnica con una lectura funcional.

Estado documentado: 2026-09-10.

## Como leerlo

- No hay tags de Git publicados para estas versiones.
- `package.json` marca la version de la app web viva.
- `Version1.0/` y `Version1.0.zip` son una copia empaquetada historica.
- `releases/panorama-module/` versiona artefactos reutilizables concretos, no
  necesariamente la app completa.
- Las versiones `1.0.2` a `1.0.7` aparecen en commits del historial, pero no se
  han encontrado como ZIP, tag o carpeta empaquetada independiente.

## Resumen de versiones

| Version o artefacto | Estado en el repo | Que aplica |
| --- | --- | --- |
| `1.0.0` | Empaquetada en `Version1.0/` y `Version1.0.zip`. | App web con cinco modelos, WebXR en Android, fallback iOS con Quick Look, app nativa iOS inicial, recorrido 360 fotografico de tres paradas, QR y scripts base. |
| `v2026-08-13` | Artefacto versionado en `releases/panorama-module/v2026-08-13/`. | Modulo 360 autocontenido para integracion externa, construido desde `src/panorama-module.ts`. |
| `1.0.2` | Commit intermedio, no empaquetado. | Ajustes del visor VR panoramico. |
| `1.0.3` | Commit intermedio, no empaquetado. | Bloqueo del modo VR hasta orientar el movil correctamente. |
| `1.0.4` | Commit intermedio, no empaquetado. | Recolocacion del VR tras orientar el movil. |
| `1.0.5` | Version declarada en el ultimo commit de `dev`; tambien fue restaurada tras retirar cambios posteriores. | Confirmacion manual para recolocar/entrar en VR y estado estable al que se volvio despues de probar el selector 360. |
| `1.0.6` | Commit intermedio, no empaquetado; retirado despues. | Primer selector de paisaje 360. |
| `1.0.7` | Commit intermedio, no empaquetado; retirado despues. | Correccion de apertura del selector 360. |
| `1.0.8` | Version declarada actualmente en el arbol de trabajo local. No hay ZIP ni tag asociado. | Seis modelos, catalogo de piezas, progreso local de visitas, ajustes para borrar progreso, selector foto/video 360, controles de video 360, tuneles de desarrollo movil y reorganizacion de documentacion. |

## Detalle por version

### `1.0.0` - paquete historico

Rutas:

- `Version1.0/`
- `Version1.0.zip`

Aplica a:

- experiencia web principal con WebXR y ARCore para Chrome en Android;
- fallback web con AR Quick Look para Safari en iPhone/iPad;
- app nativa iOS con ARKit y RealityKit como linea inicial;
- cinco modelos 3D: seta roja, cristal aurora, medusa celeste, totem solar y
  flor cosmica;
- interacciones por modelo, particulas, sonido opcional y vibracion cuando el
  movil lo permite;
- recorrido panoramico fotografico 360 de tres paradas;
- generacion de activos, QR, iconos y USDZ de la seta;
- workflows de GitHub Pages e iOS.

Notas:

- El `package.json` incluido declara `1.0.0`.
- Debe leerse como copia historica para consulta o entrega, no como punto vivo
  para desarrollar.

### `v2026-08-13` - modulo 360 empaquetado

Ruta:

- `releases/panorama-module/v2026-08-13/panorama-module.js`

Aplica a:

- integracion del visor 360 sin instalar la cadena de build completa del repo;
- escena panoramica con hotspots, navegacion, controles, degradacion y salida;
- consumo directo desde un contenedor externo.

Origen documentado:

- build local con `pnpm build:panorama-module`;
- entrada de libreria: `src/panorama-module.ts`;
- peso emitido documentado: `811,465 B`;
- gzip reportado por Vite: `172.93 kB`.

### `1.0.2` a `1.0.5` - endurecimiento del modo VR

Estas versiones aparecen en el historial de commits del 2026-09-04. Aplican a
ajustes incrementales del visor VR panoramico:

- `1.0.2`: ajuste visual y funcional del visor VR panoramico;
- `1.0.3`: bloqueo del VR hasta que el movil este orientado;
- `1.0.4`: recolocacion del VR tras orientar el movil;
- `1.0.5`: confirmacion manual de recolocacion/entrada en VR.

La version `1.0.5` es relevante porque el ultimo commit de `dev` vuelve a ella
despues de probar cambios posteriores.

### `1.0.6` y `1.0.7` - selector 360 retirado

Estas versiones tambien aparecen en commits del 2026-09-04, pero despues fueron
retiradas por el commit que vuelve a `1.0.5`.

Aplicaban a:

- `1.0.6`: incorporacion del selector de paisaje 360;
- `1.0.7`: correccion de la apertura del selector.

Estado actual:

- no se han encontrado como artefacto empaquetado;
- no deben tratarse como entrega vigente sin revisar el diff concreto de esos
  commits.

### `1.0.8` - estado vivo local

Ruta:

- `package.json`

Aplica a lo que esta declarado ahora mismo en el arbol de trabajo local:

- seis modelos en el catalogo web, anadiendo `empty-house`;
- numeracion de piezas AR;
- pantalla de catalogo con siluetas, previews y estado de visita;
- progreso local de piezas visitadas mediante `localStorage`;
- pantalla de ajustes con borrado de progreso local;
- selector de `Foto 360` o `Video 360`;
- video 360 local con controles de reproduccion y sonido;
- scripts `dev:local`, `dev:tunnel` y `dev:cloudflare`;
- configuracion de Vite para servir en `/` durante desarrollo y aceptar hosts
  de tunel;
- reorganizacion de documentacion principal y S-02.

Cautelas:

- no hay tag, ZIP ni carpeta de release asociada a `1.0.8`;
- el arbol de trabajo contiene cambios sin confirmar;
- antes de considerarla version cerrada conviene ejecutar `pnpm test` y
  `pnpm build`, y crear tag o artefacto si se va a entregar.

## Regla para futuras versiones

Cuando cambie `package.json.version`, actualizar este documento en la misma
entrega con:

- version nueva;
- fecha;
- rutas o artefactos afectados;
- cambios funcionales visibles;
- cambios tecnicos relevantes;
- comandos de validacion ejecutados;
- cautelas o pendientes conocidos.
