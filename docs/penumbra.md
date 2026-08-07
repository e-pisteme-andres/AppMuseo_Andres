# Medicion P-13: anclaje AR en penumbra

Fecha de preparacion: 2026-08-07.

Primera medicion registrada: 2026-08-07 10:42:34.

Correccion del instrumento: tras esta primera medicion se detecto que el boton
`Empezar intento` arrancaba el cronometro antes de pulsar `Ver en RA`. Ese
intervalo media desplazamiento por la pagina, no anclaje. Desde la correccion,
`Preparar intento` no arranca el reloj; el cronometro empieza al pulsar
`Ver en RA` y, en WebXR, se reajusta a `ar-status: session-started`.

Spike publicado en GitHub Pages:
`/AppMuseo_Andres/s02/s02.html`

Pagina de medicion:
`/AppMuseo_Andres/s02/s02-penumbra.html`

## Dispositivo

| Campo | Valor |
| --- | --- |
| Modelo | K |
| Version de Android | Android 10 |
| Version de Chrome | Chrome 150 |
| User agent | `Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/150.0.0.0 Mobile Safari/537.36` |
| Ruta de RA indicada por la pagina | webxr |

## Resultado

Veredicto: NO SE SABE para penumbra de museo. En sala iluminada, con superficie
lisa y uniforme, se observo anclaje por WebXR, pero los tiempos de esa primera
medicion quedan descartados por error de cronometraje.

Umbral: NO SE SABE.

Motivo: solo hay una medicion registrada, en sala iluminada y superficie lisa, y
los tiempos de esa fila no son validos. Faltan tres intentos por casilla en los
cuatro escalones de luz y las dos superficies.

## Tabla de intentos

| Escalon de luz | Superficie | Luz relativa medida | Intento 1 | Intento 2 | Intento 3 | Observaciones |
| --- | --- | --- | --- | --- | --- | --- |
| Sala iluminada | Texturada | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE |
| Sala iluminada | Lisa y uniforme (mesa mate, suelo continuo) | 140.8 | Ancla: si; ruta: webxr; distancia: 40 cm; t sesion: NO VALIDO; t anclaje: NO VALIDO; perdidas: 1 | NO SE SABE | NO SE SABE | Medido en K, Android 10, Chrome 150, el 2026-08-07 a las 10:42:34. Tiempos descartados: el cronometro habia arrancado antes de pulsar `Ver en RA`. |
| Penumbra de gabinete expositivo | Texturada | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE |
| Penumbra de gabinete expositivo | Lisa | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE |
| Muy oscuro, solo luz de emergencia | Texturada | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE |
| Muy oscuro, solo luz de emergencia | Lisa | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE |
| A oscuras del todo | Texturada | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE |
| A oscuras del todo | Lisa | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE |

## Registro crudo

| Luz | Camara (0-255) | Superficie | Dist. cm | Ruta usada | Ancla | t sesion (s) | t anclaje (s) | Perdidas | Nota |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sala iluminada | 140.8 | Lisa y uniforme (mesa mate, suelo continuo) | 40 | webxr | si | NO VALIDO | NO VALIDO | 1 | Tiempos originales: t sesion 5.5 s, t anclaje 9.3 s. Descartados por cronometro iniciado antes de lanzar RA. |

## Pendiente para cerrar P-13

1. Repetir sala iluminada sobre superficie lisa con el instrumento corregido.
2. Medir sala iluminada sobre superficie texturada.
3. Medir penumbra de gabinete expositivo, muy oscuro y a oscuras del todo, con
   tres intentos por superficie.
4. Escribir el veredicto final en una linea y el umbral si aparece.
