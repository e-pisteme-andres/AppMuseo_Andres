# Recursos de S-02 · RA con `model-viewer`

Material de **un spike**, no de la aplicación. Vive aquí mientras
[`docs/tests/S-02-ra-model-viewer.md`](../../docs/tests/S-02-ra-model-viewer.md)
siga en curso; **cuando el spike se cierre, esta carpeta se borra**. Son 6,5 MB
que no tienen por qué quedarse en el repositorio para siempre.

**Nada de esto se promueve a producción.** Si la RA sale adelante, la biblioteca
se vuelve a traer con su gestor de dependencias y el modelo lo produce quien
corresponda (P-07).

## Qué hay, con su licencia

Misma exigencia que en
[`design/sistema-de-diseno/recursos/`](../../design/sistema-de-diseno/recursos/README.md):
**cada archivo con licencia y procedencia comprobables**, porque atribuir una
procedencia que no se puede respaldar es peor que no atribuir ninguna.

| Archivo | Qué es | Licencia | Procedencia |
|---|---|---|---|
| `model-viewer-4.3.1.min.js` | `<model-viewer>` 4.3.1, compilación autónoma (lleva three.js dentro). 1 068 903 B | Apache-2.0 | Google LLC · `@google/model-viewer@4.3.1` en npm · https://github.com/google/model-viewer |
| `model-viewer-LICENSE.txt` | Licencia de lo anterior, tal cual viene en el paquete | Apache-2.0 | ídem |
| `ToyCar.glb` | Modelo de referencia. 5 422 412 B · 108 936 triángulos · 8 texturas | **CC0 1.0** (dominio público) | Guido Odendahl (modelo) y Eric Chadwick (extensiones y escena) · Khronos glTF-Sample-Assets · https://github.com/KhronosGroup/glTF-Sample-Assets/tree/main/Models/ToyCar |
| `ruta-ra.js` | El rótulo compartido de los cuatro instrumentos: qué ruta de RA, por qué, y en qué móvil | Nuestro, desechable con el spike | Escrito para S-02 |

**`ruta-ra.js` es el único sitio donde vive la réplica de la lógica de selección
de `model-viewer`**, y eso es deliberado. Las cuatro páginas la comparten porque
dos copias de la misma réplica es exactamente cómo se consigue que dos
instrumentos contesten cosas distintas del mismo móvil, y que nadie se entere.

Da dos respuestas y **no son la misma**: la **prevista**, calculada replicando
`lib/constants.js`, disponible nada más cargar; y la **confirmada**, leída de lo
que la propia biblioteca escribe en consola al lanzar la RA. Si discrepan, el
rótulo lo dice en rojo: significa que la réplica se ha quedado vieja, y eso es un
hallazgo que hay que anotar, no un fallo que haya que tapar.

**La biblioteca va autoalojada a propósito**, no traída de un CDN: lo exige
RNF-44 y es lo que se va a hacer en producción, así que probar de otra forma
mediría otra cosa.

## Por qué este modelo y no otro

Hacía falta uno **representativo en complejidad, no una esfera**, y con licencia
defendible por una institución pública. `ToyCar` cumple las dos: tres materiales
con extensiones PBR reales —`clearcoat`, `transmission`, `sheen`—, ocho texturas,
109 000 triángulos, y **CC0**, que es lo más limpio que hay.

**No es un microbioma y da igual.** Lo que se mide es comportamiento —peso,
tiempo de carga, conversión a USDZ, anclaje—, no contenido. Cuando exista el
modelo real de la pieza 31 habrá que repetir las medidas con él, porque una
comunidad de veinte géneros bacterianos no pesa lo mismo que un coche de juguete.

**Y un descarte que conviene dejar escrito:** el primer candidato fue
`DamagedHelmet`, que es *el* modelo de prueba de la industria para RA. Se
descartó al leer su licencia: el modelo actual es CC BY 4.0, pero **deriva de una
versión anterior con CC BY-NC 4.0**, y una cláusula no comercial arrastrada en un
producto de un organismo público es exactamente el tipo de problema que no se
descubre hasta que ya está desplegado. Que el modelo de prueba más usado del
sector no sea utilizable aquí es un dato útil para P-07.

## Cómo se sirven

**Desde la raíz del repositorio y por HTTPS.** Las páginas de este spike usan
cámara y RA, y eso **exige contexto seguro**: por `http://` en una IP local el
navegador ni siquiera ofrece el permiso
([ADR-0013](../../docs/decisiones/ADR-0013-alojamiento-y-pruebas.md)). Ver
[`../README.md`](../README.md).
