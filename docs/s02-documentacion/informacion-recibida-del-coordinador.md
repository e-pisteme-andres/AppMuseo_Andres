# Informacion recibida del coordinador

## Resumen

Este documento recopila lo que consta en el repositorio como informacion,
activos o condiciones recibidas del coordinador. No incluye datos personales:
solo material de proyecto, escala, rotulado, huellas y pendientes asociados a
S-02 y al bacilo esquematico.

## Indice

- [Alcance](#alcance)
- [Activos recibidos](#activos-recibidos)
- [Huellas enviadas](#huellas-enviadas)
- [Escala declarada](#escala-declarada)
- [Rotulado obligatorio](#rotulado-obligatorio)
- [Uso previsto](#uso-previsto)
- [Validaciones pendientes](#validaciones-pendientes)
- [Documentos relacionados](#documentos-relacionados)

## Alcance

La informacion documentada del coordinador aparece vinculada a la linea S-02 y
a la pieza del bacilo esquematico. En el repositorio no consta un nombre,
correo, cargo formal ni otra informacion personal del coordinador.

## Activos recibidos

El coordinador entrego dos activos propios del proyecto el `2026-08-13`:

| Archivo | Funcion |
| --- | --- |
| `public/s02/modelos/bacilo-esquematico.glb` | Modelo web para la prueba S-02. |
| `public/s02/modelos/bacilo-esquematico.usdz` | Modelo iOS/Quick Look para la prueba S-02. |

Segun la documentacion existente, estos archivos no proceden de compra ni de
descarga de terceros y pueden mantenerse en el repositorio.

## Huellas enviadas

Los valores enviados por el coordinador y verificados localmente son:

| Archivo | SHA-256 enviado/verificado |
| --- | --- |
| `bacilo-esquematico.glb` | `b5aa6ea6ba40b2b3a2d220b1d8267d71333e2b49a8fefc43810d9ef93ac37a87` |
| `bacilo-esquematico.usdz` | `ae8004654194afa6ebbae2edb1b35479a74813cab74ecd22f076754ec5008bb8` |

Pesos documentados en S-02:

| Archivo | Peso |
| --- | ---: |
| `public/s02/modelos/bacilo-esquematico.glb` | `159,812 B` |
| `public/s02/modelos/bacilo-esquematico.usdz` | `517,372 B` |

## Escala declarada

La escala declarada por coordinacion para el bacilo es:

- cuerpo del bacilo: `30 cm` en el modelo;
- longitud real representada: `2 um`;
- aumento: `150.000x`;
- envergadura total con flagelos: `48 x 22 x 27 cm`.

La medicion geometrica local del GLB dio una caja envolvente compatible con esa
envergadura:

| Eje | Medida local |
| --- | ---: |
| X | `0.476423 m` |
| Y | `0.224485 m` |
| Z | `0.269149 m` |

## Rotulado obligatorio

Cuando el modelo se muestre en una pagina o prueba, debe aparecer junto a el:

- `Aumentado 150.000 veces · en realidad mide 2 µm`
- `Modelo esquemático, no una reconstrucción científica`

Esta condicion evita presentar el activo como reconstruccion cientifica final.

## Uso previsto

Lo documentado indica que el coordinador quiere llevar este modelo a demo y que
los activos se usan para medir escala y comportamiento de RA en S-02.

Desde el `2026-08-13`, las paginas `s02-ra-minima.html` y `s02-penumbra.html`
usan el bacilo esquematico en lugar de `ToyCar.glb`.

## Validaciones pendientes

Quedan pendientes fuera de este entorno:

- medir en RA si el cuerpo se ve a `30 cm`;
- cronometrar el tiempo real hasta aparecer en S-02;
- comprobar a que distancia se ve completo en sala;
- evaluar legibilidad visual en penumbra;
- grabar video de respaldo;
- repetir medidas relevantes con el modelo real si cambia el activo.

## Documentos relacionados

- [`bacilo-esquematico-para-coordinador.md`](./bacilo-esquematico-para-coordinador.md)
- [`modelos-s02-bacilo-esquematico.md`](./modelos-s02-bacilo-esquematico.md)
- [`medicion-p-13-anclaje-ar-en-penumbra.md`](./medicion-p-13-anclaje-ar-en-penumbra.md)
- [`recursos-s02-model-viewer.md`](./recursos-s02-model-viewer.md)
