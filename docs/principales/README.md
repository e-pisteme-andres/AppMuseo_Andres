# Documentacion del proyecto

## Resumen

Indice de la documentacion principal de AppMuseo_Andres. Sirve para saber que
leer primero, donde estan las fuentes de verdad y que documentos son evidencias
o artefactos auxiliares.

## Indice

- [Lectura recomendada](#lectura-recomendada)
- [Mapa de documentos](#mapa-de-documentos)
- [Fuentes de verdad](#fuentes-de-verdad)
- [Como mantener esta documentacion](#como-mantener-esta-documentacion)

Esta carpeta concentra la documentacion principal de trabajo de
AppMuseo_Andres. El objetivo es que una persona nueva pueda distinguir rapido
entre estado actual, decisiones historicas, evidencias de prueba y material
preparado para integrar.

Ultima actualizacion de este indice: 2026-09-10.

## Lectura recomendada

1. [`guia-para-desarrolladores.md`](./guia-para-desarrolladores.md): contexto
   tecnico y mapa de entrada al repositorio.
2. [`../../README.md`](../../README.md): uso de la aplicacion, desarrollo local,
   scripts principales y publicacion.
3. [`decisiones.md`](./decisiones.md): bitacora cronologica de decisiones,
   spikes, descartes y condiciones para reabrir cada linea.
4. [`cumplimiento.md`](./cumplimiento.md): estado frente a requisitos, con
   evidencias locales y puntos no medidos.
5. [`versiones.md`](./versiones.md): que aplica en cada version declarada o
   artefacto empaquetado.

## Mapa de documentos

| Documento | Para que sirve |
| --- | --- |
| [`guia-para-desarrolladores.md`](./guia-para-desarrolladores.md) | Onboarding tecnico: arquitectura, flujos, assets, validacion y pendientes. |
| [`../../README.md`](../../README.md) | Instrucciones de uso, desarrollo, scripts y despliegue. |
| [`decisiones.md`](./decisiones.md) | Registro fino y cronologico de decisiones reales del proyecto. |
| [`cumplimiento.md`](./cumplimiento.md) | Auditoria contra requisitos funcionales y no funcionales. |
| [`versiones.md`](./versiones.md) | Alcance de cada version declarada, paquete historico y artefacto versionado. |
| [`../s02-documentacion/README.md`](../s02-documentacion/README.md) | Documentacion agrupada de S-02: penumbra, bacilo, recursos y modelos de prueba. |
| [`../documentacion-tecnica-modulo-360.md`](../documentacion-tecnica-modulo-360.md) | API, build, accesibilidad y artefacto versionado del modulo 360. |
| [`../../ios/README.md`](../../ios/README.md) | Compilacion, validacion y correspondencia funcional de la app nativa iOS. |
| [`../../public/videos/README.md`](../../public/videos/README.md) | Procedencia y formato recomendado para los videos 360 locales. |

## Fuentes de verdad

- La app web viva esta en `src/`, `public/`, `scripts/`, `index.html`,
  `package.json` y `vite.config.ts`.
- La app nativa iOS viva esta en `ios/`.
- Los activos publicos que consume la app estan bajo `public/`.
- Los videos 360 locales estan bajo `public/videos/`; `eagle-360.mp4` es el
  sample cargado por defecto y `teal-ridge-360.mp4` queda como referencia
  pesada.
- El modulo 360 entregable se documenta en
  `docs/documentacion-tecnica-modulo-360.md` y se
  versiona en `releases/panorama-module/`.
- `Version1.0/`, `Version1.0.zip`, `tmp/`, `output/` y `dist/` deben leerse
  como copias, salidas, evidencias o artefactos de trabajo, no como el punto de
  entrada principal para seguir desarrollando.

## Como mantener esta documentacion

- Si cambia arquitectura, plataforma soportada, despliegue, privacidad,
  rendimiento o una decision de producto, anadelo a
  `docs/principales/decisiones.md`.
- Si cambia la respuesta frente a requisitos, actualiza
  `docs/principales/cumplimiento.md` con fecha, comando o evidencia usada.
- Si se valida algo en dispositivo real, registra modelo, sistema operativo,
  navegador, fecha y resultado.
- Si se crea un entregable reutilizable, documenta entrada, API, comando de
  build, ruta de salida y limitaciones conocidas.
- Si cambia `package.json.version` o aparece un paquete nuevo, actualiza
  `docs/principales/versiones.md`.
- Si se anade o sustituye un activo pesado, documenta procedencia, licencia,
  motivo de uso y si se carga por defecto o solo como referencia.
