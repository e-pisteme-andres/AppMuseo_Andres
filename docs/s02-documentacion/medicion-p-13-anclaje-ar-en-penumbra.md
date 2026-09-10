# Medicion P-13: anclaje AR en penumbra

## Resumen

Documento de evidencia para P-13. Recoge dispositivo, resultados, intentos
crudos y trabajo pendiente para decidir si el anclaje AR es fiable en condiciones
de penumbra de museo.

## Indice

- [Dispositivo](#dispositivo)
- [Resultado](#resultado)
- [Tabla de intentos](#tabla-de-intentos)
- [Registro crudo](#registro-crudo)
- [Pendiente para cerrar P-13](#pendiente-para-cerrar-p-13)

Fecha de preparacion: 2026-08-07.

Primera medicion registrada: 2026-08-07 10:42:34.

Ultima exportacion recibida: 2026-08-13 08:49:02.

Correccion del instrumento: tras esta primera medicion se detecto que el boton
`Empezar intento` arrancaba el cronometro antes de pulsar `Ver en RA`. Ese
intervalo media desplazamiento por la pagina, no anclaje. Desde la correccion,
`Preparar intento` no arranca el reloj; el cronometro empieza al pulsar
`Ver en RA` y, en WebXR, se reajusta a `ar-status: session-started`.

Spike publicado en GitHub Pages:
`/AppMuseo_Andres/s02/s02.html`

Pagina de medicion:
`/AppMuseo_Andres/s02/s02-penumbra.html`

Estado del modelo a 2026-08-13:
las siguientes pruebas deben correrse con `public/s02/modelos/bacilo-esquematico.glb`
y su pareja `bacilo-esquematico.usdz`, ambos con rotulo visible de
`Aumentado 150.000 veces · en realidad mide 2 µm` y
`Modelo esquemático, no una reconstrucción científica`.

## Dispositivo

| Campo | Valor |
| --- | --- |
| Modelo | K |
| Version de Android | Android 10 |
| Version de Chrome | Cabecera manual del export: Chrome 150 |
| User agent | `Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Mobile Safari/537.36` |
| Ruta de RA indicada por la pagina | webxr |

## Resultado

Veredicto: NO SE SABE para penumbra de museo. En superficie texturada, este
dispositivo anclo una vez en penumbra de gabinete a 75.5 de luminancia relativa
de camara y no anclo a 67.6, 16.2, 13.9 y 3. En sala iluminada, WebXR ancla en
superficie texturada; en superficie reflectante, en sala iluminada, no anclo.
La superficie lisa sigue sin repeticion valida con el instrumento corregido.

Umbral: en superficie texturada, indicio preliminar entre 67.6 y 75.5 de
luminancia relativa de camara para este mismo movil. NO SE SABE para
superficie lisa ni como umbral general de sala.

Estado a 2026-08-13: P-13 sigue abierta. Ya hay dos intentos en penumbra
texturada, dos en muy oscuro texturado y dos a oscuras del todo texturado.
Siguen sin medir las tres casillas lisas de baja luz y falta completar la
tercera repeticion en los tres escalones texturados de baja luz.

Motivo: ya hay evidencia util para superficie texturada, pero aun no alcanza
para cerrar `P-13` como respuesta de sala porque faltan las series lisas de
baja luz y las terceras repeticiones de los escalones texturados de baja luz.

## Tabla de intentos

| Escalon de luz | Superficie | Luz relativa medida | Intento 1 | Intento 2 | Intento 3 | Observaciones |
| --- | --- | --- | --- | --- | --- | --- |
| Sala iluminada | Texturada (madera, moqueta, papel impreso) | 146 | Ancla: si; ruta: webxr; distancia: 60 cm; t sesion: 0.2 s; t anclaje: 7.7 s; perdidas: 0 | NO SE SABE | NO SE SABE | Exportado el 2026-08-13 a las 08:49:02. Reloj: `ar-status: session-started`. |
| Sala iluminada | Lisa y uniforme (mesa mate, suelo continuo) | 140.8 | Ancla: si; ruta: webxr; distancia: 40 cm; t sesion: NO VALIDO; t anclaje: NO VALIDO; perdidas: 1 | NO SE SABE | NO SE SABE | Exportado el 2026-08-13 a las 08:49:02. Tiempos originales: t sesion 5.5 s, t anclaje 9.3 s. Descartados por cronometro iniciado antes de pulsar `Ver en RA`. |
| Penumbra de gabinete (expositivo tipico) | Texturada (madera, moqueta, papel impreso) | 75.5 / 67.6 | Ancla: si; ruta: webxr; distancia: 60 cm; t sesion: 1.8 s; t anclaje: 17.5 s; perdidas: 0 | Ancla: NO; ruta: webxr; distancia: 60 cm; t sesion: 0.4 s; t anclaje: -; perdidas: 0 | NO SE SABE | Exportado el 2026-08-13 a las 08:49:02. Reloj: `ar-status: session-started`. |
| Penumbra de gabinete (expositivo tipico) | Lisa y uniforme (mesa mate, suelo continuo) | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE |
| Muy oscuro, solo luz de emergencia | Texturada (madera, moqueta, papel impreso) | 16.2 / 13.9 | Ancla: NO; ruta: webxr; distancia: 60 cm; t sesion: 0.9 s; t anclaje: -; perdidas: 1 | Ancla: NO; ruta: webxr; distancia: 60 cm; t sesion: 0.5 s; t anclaje: -; perdidas: 1 | NO SE SABE | Exportado el 2026-08-13 a las 08:49:02. Reloj: `ar-status: session-started`. |
| Muy oscuro, solo luz de emergencia | Lisa y uniforme (mesa mate, suelo continuo) | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE |
| A oscuras del todo | Texturada (madera, moqueta, papel impreso) | 3 / 3 | Ancla: NO; ruta: webxr; distancia: 60 cm; t sesion: 0.5 s; t anclaje: -; perdidas: 1 | Ancla: NO; ruta: webxr; distancia: 60 cm; t sesion: 0.3 s; t anclaje: -; perdidas: 1 | NO SE SABE | Exportado el 2026-08-13 a las 08:49:02. Reloj: `ar-status: session-started`. |
| A oscuras del todo | Lisa y uniforme (mesa mate, suelo continuo) | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE | NO SE SABE |

## Registro crudo

| Luz | Camara (0-255) | Superficie | Dist. cm | Ruta usada | Ancla | t sesion (s) | t anclaje (s) | Perdidas | Nota |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Sala iluminada | 140.8 | Lisa y uniforme (mesa mate, suelo continuo) | 40 | webxr | si | NO VALIDO | NO VALIDO | 1 | Tiempos originales: t sesion 5.5 s, t anclaje 9.3 s. Descartados por cronometro iniciado antes de lanzar RA. |
| Sala iluminada | 146 | Texturada (madera, moqueta, papel impreso) | 60 | webxr | si | 0.2 | 7.7 | 0 | reloj: ar-status: session-started |
| Sala iluminada | 153.4 | Reflectante (cristal, vitrina, metal) | 40 | webxr | NO | 0.6 | - | 1 | reloj: ar-status: session-started |
| Penumbra de gabinete (expositivo tipico) | 75.5 | Texturada (madera, moqueta, papel impreso) | 60 | webxr | si | 1.8 | 17.5 | 0 | reloj: ar-status: session-started |
| Penumbra de gabinete (expositivo tipico) | 67.6 | Texturada (madera, moqueta, papel impreso) | 60 | webxr | NO | 0.4 | - | 0 | reloj: ar-status: session-started |
| Muy oscuro, solo luz de emergencia | 16.2 | Texturada (madera, moqueta, papel impreso) | 60 | webxr | NO | 0.9 | - | 1 | reloj: ar-status: session-started |
| Muy oscuro, solo luz de emergencia | 13.9 | Texturada (madera, moqueta, papel impreso) | 60 | webxr | NO | 0.5 | - | 1 | reloj: ar-status: session-started |
| A oscuras del todo | 3 | Texturada (madera, moqueta, papel impreso) | 60 | webxr | NO | 0.5 | - | 1 | reloj: ar-status: session-started |
| A oscuras del todo | 3 | Texturada (madera, moqueta, papel impreso) | 60 | webxr | NO | 0.3 | - | 1 | reloj: ar-status: session-started |

## Pendiente para cerrar P-13

1. Repetir sala iluminada sobre superficie lisa con el instrumento corregido.
2. Completar el tercer intento en superficie texturada para penumbra de
   gabinete, muy oscuro y a oscuras del todo.
3. Medir penumbra de gabinete, muy oscuro y a oscuras del todo sobre superficie
   lisa, con tres intentos por escalon.
4. Reescribir el veredicto final en una linea y confirmar si el umbral
   preliminar de texturada se sostiene o cae.
