# Cumplimiento contra requisitos

## Resumen

Auditoria tecnica de AppMuseo_Andres frente a requisitos funcionales y no
funcionales. Distingue entre lo comprobado, lo que no cumple y lo que aun no se
ha medido en dispositivo o navegador real.

## Indice

- [Tabla de requisitos](#tabla-de-requisitos)
- [Restriccion offline del museo](#restricción-offline-del-museo)
- [Pesos medidos de activos](#pesos-medidos-de-activos)
- [Diez respuestas concretas](#diez-respuestas-concretas)

Fecha de revisión: 2026-08-06. Rama revisada: `dev`, incluyendo el commit de
documentación `Documenta decisiones y cumplimiento`.

Actualizacion parcial de documentacion: 2026-09-09. Esta pasada no sustituye la
auditoria completa del 2026-08-06; solo actualiza evidencias de catalogo,
activos y un intento local de test.

Intento de verificacion 2026-09-09:

```powershell
$env:CI='true'; pnpm test
```

Resultado: Vitest no llego a ejecutar los tests porque la instalacion local de
`node_modules` no encontro `pathe/index.js` dentro de la carpeta de Vitest. No
se actualizan los conteos de tests pasados hasta reparar/reinstalar
dependencias y repetir la ejecucion.

Estados usados:

| Estado | Regla |
| --- | --- |
| CUMPLE | Comprobado ejecutándolo o midiendo el repositorio, con dato al lado. |
| NO CUMPLE | Comprobado que no, con motivo. |
| NO SE SABE | No se ha medido en dispositivo/navegador real o falta evidencia. |

Verificación local ejecutada:

```bash
pnpm test
pnpm build
```

Resultado: `14` archivos de prueba y `64` tests pasaron. Build Vite correcto.
Salida principal de producción: `index.html` 1.022 B, CSS 39.885 B
(`8,87 KB` gzip), JS 672.239 B (`174,31 KB` gzip).

## Tabla de requisitos

| Requisito | Estado | Evidencia |
| --- | --- | --- |
| RNF-22 Descarga inicial del núcleo <= 8 MB | CUMPLE | Build local: núcleo estático sin modelos ni panorámicas = 859.350 B crudos. El JS+CSS+HTML gzip informado por Vite suma aprox. 183,69 KB. |
| RNF-20 Una pantalla de contenido <= 150 KB transferidos, sin imagen | NO CUMPLE | El shell inicial sin imágenes ya supera 150 KB si se usa gzip de build: JS 174,31 KB + CSS 8,87 KB + HTML 0,51 KB. No hay división por pantalla. |
| RNF-21 Primer renderizado útil <= 3 s en gama baja | NO SE SABE | No hay medición en dispositivo de gama baja. |
| RNF-44 Todo autoalojado, sin CDN ni servicios de terceros en ejecución | CUMPLE | `rg` no encuentra llamadas runtime a CDN, analítica, mapas, `fetch`, `sendBeacon`, WebSocket ni servicios externos. Las URLs de ESO son enlaces de crédito; `scripts/download-panorama-assets.mjs` usa CDN de ESO solo en preparación/build. |
| RNF-43 Ni datos personales ni seguimiento | CUMPLE | No hay analítica ni envío de datos. El estado se guarda en `localStorage` local mediante `progress-cache`; no se recopilan imágenes ni cuentas. |
| RF-25 Antes de descargar un módulo se informa de su peso y se pide confirmación | NO CUMPLE | `checkCompatibility()` precarga previews y modelos del catálogo completo; `XRExperience.loadModel()` y `VirtualExperience.loadModel()` cargan todos los GLB sin mostrar peso ni pedir confirmación. |
| RF-21 Cada módulo declara su cadena de degradación completa | NO CUMPLE | Hay degradación global WebXR -> Quick Look -> 360/virtual, pero no una declaración por módulo con cadena completa. |
| RF-24 Si la RA no es posible, se ve en 3D orbital | CUMPLE | La interfaz ofrece `No permitir cámara`/espacio virtual y `VirtualExperience` carga los mismos GLB con rotación orbital táctil. Probado por tests de `virtual-experience` y build. |
| RF-26 Salir de cualquier experiencia inmersiva con un gesto siempre visible | NO CUMPLE | AR tiene botón `Salir`, 360 tiene `Volver` y VR tiene salida asociada a pantalla completa/orientación, pero algunos botones miden menos de 48 px y no se ha probado visibilidad constante en todos los estados inmersivos. |
| RF-22 El 360 se recorre arrastrando y con sensores si los hay | NO SE SABE | El código implementa arrastre y `DeviceOrientationEvent`, con fallback a arrastre. No se ha medido en móvil real con sensores. |
| RNF-09 Toda experiencia inmersiva ofrece alternativa textual equivalente | NO CUMPLE | Hay fichas `Descubrir` y textos de hotspots, pero no existe una alternativa textual equivalente y completa para AR, 3D orbital, 360 y VR. |
| RNF-07 `prefers-reduced-motion` respetado, también en lo inmersivo | NO CUMPLE | CSS desactiva algunas animaciones con `prefers-reduced-motion`, pero los render loops, partículas y movimiento inmersivo siguen activos. |
| RNF-04 Objetivos táctiles >= 48 px con >= 8 px de separación | NO CUMPLE | Hay controles por debajo de 48 px: `.close-button` 42 px, `.camera-dialog-actions button` 46 px, `.model-action-secondary button` 38 px y controles 360 móviles de 34-42 px. |
| RNF-33 Utilizable desde 320 px de ancho | NO SE SABE | CSS fija `body { min-width: 320px; }` y tiene media queries hasta 380 px, pero no se ha hecho QA visual/funcional a 320 px. |
| RNF-35 Ninguna medida usa `100vh`; se usa `dvh` o `svh` | CUMPLE | `rg "100vh"` no devuelve usos; CSS usa `100dvh` y alturas con `dvh`. |
| RNF-36 Lo pegado a un borde respeta `env(safe-area-inset-*)` | NO CUMPLE | Hay uso de `env(safe-area-inset-top/bottom)`, pero controles pegados a izquierda/derecha usan valores fijos (`left: 18px`, `right: 18px/22px`) sin `safe-area-inset-left/right`. |
| RNF-37 Funciona en horizontal | NO SE SABE | Hay lógica para VR horizontal y media queries responsivas, pero no hay prueba en dispositivos/navegadores reales en horizontal. |
| RNF-30 Chrome y Safari, versión actual y las dos anteriores | NO SE SABE | No hay matriz de compatibilidad ejecutada en Chrome/Safari actual y dos versiones anteriores. |

## Restricción offline del museo

| Punto | Estado | Evidencia |
| --- | --- | --- |
| La aplicación funciona sin conexión dentro del museo | NO CUMPLE | No hay service worker, cache manifest ni estrategia offline. Los modelos GLB/USDZ y panorámicas son same-origin, pero se cargan bajo demanda desde red si no están ya en caché del navegador. |
| Uso sin red una vez cargada la experiencia actual | NO SE SABE | La escena ya cargada permanece en memoria, pero no se ha probado desconexión durante AR/360 ni navegación entre paradas sin red. |

## Pesos medidos de activos

Modelos web GLB:

| Modelo | Archivo | Peso |
| --- | --- | ---: |
| Seta roja | `public/models/mushroom.glb` | 107.580 B |
| Cristal aurora | `public/models/crystal.glb` | 24.280 B |
| Medusa celeste | `public/models/jellyfish.glb` | 156.676 B |
| Tótem solar | `public/models/totem.glb` | 57.896 B |
| Flor cósmica | `public/models/cosmic-flower.glb` | 204.240 B |
| Casa vacía | `public/models/empty-house.glb` | 71.552 B |
| Total GLB | | 622.224 B |

Modelos iOS/Quick Look USDZ:

| Modelo | Archivo | Peso |
| --- | --- | ---: |
| Seta roja | `public/models/mushroom.usdz` | 264.045 B |
| Cristal aurora | `public/models/crystal.usdz` | 63.490 B |
| Medusa celeste | `public/models/jellyfish.usdz` | 457.191 B |
| Tótem solar | `public/models/totem.usdz` | 162.723 B |
| Flor cósmica | `public/models/cosmic-flower.usdz` | 599.365 B |
| Casa vacía | `public/models/empty-house.usdz` | 145.254 B |
| Total USDZ | | 1.692.068 B |

Panorámicas:

| Parada | Archivo | Peso |
| --- | --- | ---: |
| Entorno de Paranal | `public/panoramas/paranal-360.jpg` | 1.232.890 B |
| Plataforma del VLT | `public/panoramas/paranal-vlt-platform-360.jpg` | 1.886.703 B |
| La Residencia | `public/panoramas/paranal-residencia-360.jpg` | 1.941.015 B |
| Total panorámicas | | 5.060.608 B |

Videos 360 locales:

| Archivo | Uso | Peso |
| --- | --- | ---: |
| `public/videos/eagle-360.mp4` | Video 360 cargado por defecto desde `Explorar paisaje` > `Video 360`. | 20.168.030 B |
| `public/videos/teal-ridge-360.mp4` | Referencia pesada; no se carga por defecto. | 138.181.257 B |

Si un visitante abre la experiencia web y se cargan núcleo, seis GLB y las tres
panorámicas, el total de activos locales medidos es aprox. 6.542.182 B crudos
sin contar compresión HTTP de imágenes/modelos.

Si ademas abre el video 360 por defecto, se descargan otros 20.168.030 B crudos
desde `public/videos/eagle-360.mp4`. `teal-ridge-360.mp4` no debe contarse en
la ruta normal mientras siga sin cargarse por defecto.

## Diez respuestas concretas

1. Rama buena actual: `dev`. URL de `main`:
   `https://e-pisteme-andres.github.io/AppMuseo_Andres/`. URL de `dev`:
   `https://e-pisteme-andres.github.io/AppMuseo_Andres/dev/`. El workflow de
   Pages solo publica `main` y `dev`; el resto de ramas no tienen URL propia en
   este repo.
2. Dispositivos probados de verdad: NO SE SABE. No hay registro con modelo,
   versión de Android/iOS y navegador.
3. Oclusión por depth sensing activada/no activada por dispositivo: NO SE SABE.
   Solo hay lógica y tests unitarios de negociación de estado.
4. Android más humilde donde funcionó: NO SE SABE.
5. Peso de modelos y total inicial: ver tablas. Al abrir la experiencia, el
   código precarga previews y modelos; los seis GLB suman 622.224 B.
6. Compresión Draco: NO CUMPLE/pendiente. No hay `DRACOLoader`, dependencia ni
   script de compresión Draco.
7. Panorámicas: ver tabla. Funcionamiento sin red tras cargarse: NO SE SABE; no
   hay prueba offline ni service worker.
8. iOS por AR Quick Look en iPhone real: NO SE SABE. El código detecta Quick
   Look y hay USDZ, pero no consta prueba en dispositivo físico.
9. Servicios de terceros en ejecución: CUMPLE según inspección estática. No hay
   CDN/analítica/mapas/fuentes externas en runtime; enlaces de crédito a ESO no
   cargan recursos externos salvo clic del usuario.
10. Procedencia de modelos 3D: generados proceduralmente en
    `scripts/generate-assets.mjs` y convertidos a USDZ con
    `scripts/generate-ios-assets.mjs`. Son activos de prueba, no patrimonio
    final de producción.
