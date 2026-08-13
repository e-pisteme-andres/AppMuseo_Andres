# Visor 360 empaquetado

Entrada reusable: [src/panorama-module.ts](../src/panorama-module.ts)

## Arranque en una línea

```ts
const panorama = await import('./panorama-module.js').then(({ mountPanoramaModule }) => mountPanoramaModule({ container: mountNode, scenes, labels, degradation, textAlternative, onExit: (instance) => instance.destroy() }));
```

La API no supone Astro, React ni ningún otro framework: solo necesita un nodo
contenedor y datos serializables.

## Qué recibe

`mountPanoramaModule(options)` espera:

- `container`: elemento donde se monta el visor.
- `scenes`: lista de escenas 360 con `imageUrl`, `initialView`, créditos y
  hotspots.
- `labels`: copy visible y accesible del chrome del módulo.
- `labels.infoPanelTitle`: título fijo del panel de puntos de interés.
- `degradation`: cadena del módulo, con tres pasos esperados (`motion`, `drag`,
  `text`) o la variante que el integrador quiera nombrar.
- `textAlternative`: equivalente textual de lo que se muestra.
- `initialSceneId`: opcional.
- `onExit`: callback opcional; si no se pasa, el módulo se destruye al cerrar.

Los tipos compartidos están en
[src/panorama-types.ts](../src/panorama-types.ts).

## Comportamiento

- Si el dispositivo entrega orientación, el visor puede quedar en `motion`.
- Si no hay sensores o el visitante los deniega, cae a `drag`.
- Si el render interactivo falla, el módulo mantiene visible el **equivalente
  textual** y marca activa la degradación `text`.

## Accesibilidad cubierta aquí

- Botón de salida siempre visible y con `min-height: 48px`.
- Hotspots con `aria-label` y foco visible.
- Equivalente textual siempre presente como contenido colapsable.
- Cadena de degradación legible por módulo, no heredada de la app completa.

## Build y peso

Build verificado:

```powershell
pnpm build:panorama-module
```

Artefacto emitido:

- `dist/panorama-module/panorama-module.js`
- copia versionada para consumo directo:
  [`releases/panorama-module/v2026-08-13/panorama-module.js`](../releases/panorama-module/v2026-08-13/panorama-module.js)
- Peso emitido: `811,465 B`
- Peso gzip reportado por Vite: `172.93 kB`
