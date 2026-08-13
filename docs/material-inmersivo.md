# Material inmersivo para integrar en la app del museo

Fecha de cierre de esta pasada: 2026-08-13.

## 1. Modelos 3D candidatos para la pieza 31

Pieza objetivo: **31 · "El bosque que llevas dentro" · microbioma intestinal**.

Conclusión corta: en esta búsqueda sí aparecen bacterias con nombre de especie,
GLB y licencias comerciales relativamente claras, pero **no aparecen modelos con
base científica declarada** al nivel de una reconstrucción de museo. Lo que hay
hoy sirve como **placeholder técnico o maqueta de demo**, no como activo final
sin validación de contenido.

Nota importante sobre archivos: **no se añaden los binarios al repositorio**.
Las licencias comerciales revisadas permiten integrar un modelo en una obra, pero
no redistribuir el archivo 3D como descarga aislada dentro de un repositorio
público.

| Prioridad | Organismo | Origen | Licencia y uso expositivo | Formatos | Peso publicado | Polígonos / texturas | Escala propuesta | Fidelidad |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | **Bifidobacterium longum** | [TurboSquid 2500977](https://www.turbosquid.com/FullPreview/Index.cfm/ID/2500977) · autor `h3ydari96` | La ficha muestra `3D Model License: Standard`. La licencia general de TurboSquid es royalty-free y permite usos expositivos; la restricción fuerte es para activos marcados como editorial, que este no muestra. Fuente de licencia: [TurboSquid 3D Model License](https://www.turbosquid.com/licensing). | La ficha pública muestra `FBX`, `glTF`, `OBJ`, `STL`; la descripción cita `glb` y `glTF`. **USDZ no se publica en la ficha**: habría que convertirlo y verificarlo antes de compra. | No publicado por el vendedor. | `14,700` polígonos, `7,400` vértices, PBR `1K/2K/4K`. | Si se enseña a `30 cm`, y se toma una célula de `2–5 µm`, el aumento visible queda en torno a `60,000x–150,000x`. Propuesta de cartela: **"aprox. 100,000x"**. | **Interpretación comercial**, no reconstrucción científica declarada. A favor: especie intestinal muy pertinente. |
| 2 | **Lactiplantibacillus plantarum** (`Lactobacillus plantarum`) | [TurboSquid 2501646](https://www.turbosquid.com/FullPreview/2501646) · autor `h3ydari96` | La ficha muestra `3D Model License: Standard`. Mismo marco de uso que arriba: viable para exposición si no es editorial. Fuente: [TurboSquid 3D Model License](https://www.turbosquid.com/licensing). | La ficha pública muestra `FBX`, `glTF`, `OBJ`, `STL`; la descripción cita `glb` y `glTF`. **USDZ no aparece como formato publicado** y requeriría conversión y validación. | No publicado por el vendedor. | `13,700` polígonos, `6,900` vértices, PBR `1K/2K/4K`. | Si se toma una longitud típica de `2–3 µm`, una visualización a `30 cm` equivale a `100,000x–150,000x`. Propuesta de cartela: **"aprox. 120,000x"**. | **Interpretación comercial**. A favor: bacteria probiótica y semánticamente compatible con "bosque interior". |
| 3 | **Escherichia coli** | [TurboSquid 2213935](https://www.turbosquid.com/3d-models/escherichia-coli-3d-2213935) · autor `First Dream Productions` | La ficha muestra `Standard License`. La licencia general TurboSquid permite usos expositivos para activos no editoriales. Fuente: [TurboSquid 3D Model License](https://www.turbosquid.com/licensing). | La ficha pública lista `glTF` y otros formatos intercambiables. **GLB/USDZ no quedan verificados en la ficha pública** y habría que confirmarlos o convertirlos antes de compra. | No publicado por el vendedor. | `2,014` polígonos, `2,028` vértices. | Si se enseña a `30 cm` y se toma una célula de `1–2 µm`, el aumento visible queda en `150,000x–300,000x`. Propuesta de cartela: **"aprox. 150,000x"** si se declara una longitud real de `2 µm`. | **Interpretación comercial**. A favor: carga ligera. En contra: la pieza puede leerse como patógeno y no como microbioma equilibrado. |

### Recomendación actual

1. **Bifidobacterium longum** es la mejor primera compra de prueba si se acepta
   que el activo es ilustrativo y no una reconstrucción validada por un
   microbiólogo.
2. **Lactiplantibacillus plantarum** es la segunda mejor opción por encaje
   semántico y por perfil probiótico.
3. **E. coli** solo la usaría si el criterio principal fuera ligereza técnica y
   no narrativa de sala.

### Referencias de tamaño biológico usadas para la escala

- **E. coli**: [PubMed 25691528](https://pubmed.ncbi.nlm.nih.gov/25691528/) y
  [PMC5139998](https://pmc.ncbi.nlm.nih.gov/articles/PMC5139998/) la sitúan
  alrededor de `1–2 µm` de longitud y `~0.5–1 µm` de diámetro.
- **L. plantarum**: [PMC10224263](https://pmc.ncbi.nlm.nih.gov/articles/PMC10224263/)
  describe células de `0.8–1.0 µm × 2–3 µm`; [PMC11382035](https://pmc.ncbi.nlm.nih.gov/articles/PMC11382035/)
  reporta un rango algo más corto (`1.2–1.9 µm × 0.5–0.6 µm`).
- **B. longum**: [PMC13010093](https://pmc.ncbi.nlm.nih.gov/articles/PMC13010093/)
  reporta `2–5 µm × 0.5–1 µm` en la cepa HOM1190; [PMC11382035](https://pmc.ncbi.nlm.nih.gov/articles/PMC11382035/)
  recoge `1.3–1.4 µm × 0.3–0.4 µm` para otra muestra. La cartela debería
  declarar que el aumento es **aproximado** y depende de la cepa tomada como
  referencia.

### Qué no he encontrado en esta pasada

- Un modelo de bacteria intestinal con **procedencia científica explícita**,
  bibliografía de reconstrucción o aval morfológico declarado por el autor.
- Fichas públicas que publiquen de forma fiable el **peso exacto de GLB y USDZ**
  antes de compra.
- Un activo listo para iPhone que resuelva a la vez **licencia clara + USDZ
  confirmado + fidelidad científica declarada**.

## 2. Opciones 360 relacionadas con microbiomas

Conclusión corta: **sí hay 360 reales reutilizables** para laboratorio y para
entornos naturales donde viven comunidades microbianas, pero **no he localizado
una "foto" reutilizable de "dentro del microbioma"**. Eso, si se hace, tiene
que declararse como reconstrucción.

| Opción | Qué se vería | Tipo | Origen y licencia | Tamaño publicado | Encaje | Coste esperado |
| --- | --- | --- | --- | ---: | --- | --- |
| **Laboratorio real** | Laboratorio de biofueles / espacio científico fotografiado en equirectangular 360 | Fotografía real | [Wikimedia Commons · 360° panoramas Estonian University of Life Sciences, biofuels lab](https://commons.wikimedia.org/wiki/File%3A360%C2%B0_panoramas_Estonian_University_of_Life_Sciences%2C_biofuels_lab.jpg) · autor `Lauri Veerde` · `CC BY-SA 4.0` | `13.84 MB` | Válido para explicar trabajo de laboratorio, cultivo o investigación, aunque no sea microbioma intestinal en sentido literal. | **Bajo** si se reutiliza tal cual; **medio** si se adapta y se acepta la cláusula share-alike. |
| **Cueva / suelo húmedo** | Entorno natural con roca, hojas y cueva; sirve como ecosistema de suelo y microbiota ambiental | Fotografía real | [Wikimedia Commons · Forest cave - Panorama](https://commons.wikimedia.org/wiki/File%3AForest_cave_-_Panorama_%28Andreas_Mischok_via_Poly_Haven%29.jpg) · autor `Andreas Mischok via Poly Haven` · `CC0` | `14.99 MB` | Buen encaje si la narrativa abre el microbioma más allá del intestino y conecta con "bosque". | **Bajo**. |
| **Bosque otoñal a ras de suelo** | Suelo de bosque con hojas caídas; útil para hablar de microbiota del suelo | Fotografía real | [Wikimedia Commons · Autumn forest 02 – Panorama](https://commons.wikimedia.org/wiki/File%3AAutumn_forest_02_%E2%80%93_Panorama_%28Andreas_Mischok_via_Poly_Haven%29.jpg) · autor `Andreas Mischok` · `CC0` | `11.25 MB` | Muy buena metáfora visual para la pieza si se decide priorizar la idea de ecosistema sobre el intestino literal. | **Bajo**. |
| **Interior del microbioma / intestino** | Entorno microscópico con moco, bacterias, paredes y flujo | **Reconstrucción**, no fotografía | En esta pasada **no he localizado un activo 360 reusable y científicamente fiable**. Saldría de producción propia a partir de bibliografía y validación de contenido. | No aplica | Es la opción con más relación temática, pero también la de mayor riesgo de "bonito pero falso". | **Alto**. |

### Recomendación actual para 360

- Si se quiere algo integrable ya: **laboratorio real** o **bosque/suelo**.
- Si se quiere algo que hable literalmente del microbioma intestinal: **no usar
  una falsa fotografía**; encargar o producir una **reconstrucción declarada**.

## 3. Visor 360 empaquetado como pieza suelta

Archivos principales:

- [src/panorama-module.ts](../src/panorama-module.ts)
- [src/panorama-module.css](../src/panorama-module.css)
- [src/panorama-types.ts](../src/panorama-types.ts)
- [docs/panorama-module.md](./panorama-module.md)

Qué queda resuelto en el módulo:

- **Carga diferida**: se puede importar con `import()` solo al entrar en esa
  pantalla.
- **Sin suponer framework**: recibe un `HTMLElement` y datos.
- **Salida siempre visible**: botón de cierre de `48 px` o más.
- **Cadena de degradación por módulo**: se declara mediante la opción
  `degradation` y el módulo marca en runtime si está en `motion`, `drag` o
  `text`.
- **Equivalente textual**: se inyecta por `textAlternative` y, si no se aporta
  detalle fino, el módulo genera una versión automática a partir de escenas y
  hotspots.
- **Sin copy de contenido propio**: escenas, hotspots, textos alternativos y
  labels visibles se entregan desde fuera.

Peso medido del paquete generado:

- Archivo emitido: `811,465 B` (`811.47 kB`)
- Transferencia gzip reportada por Vite: `172.93 kB`

Comando de build verificado:

```powershell
pnpm build:panorama-module
```

Artefacto versionado para integrar sin montar `pnpm`:

- [releases/panorama-module/v2026-08-13/panorama-module.js](../releases/panorama-module/v2026-08-13/panorama-module.js)
