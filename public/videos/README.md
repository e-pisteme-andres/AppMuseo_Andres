# Videos 360

## Resumen

Documenta los videos 360 locales usados o conservados como referencia en la
app. Aclara procedencia, cual se carga por defecto, que archivo es demasiado
pesado para la ruta normal y como probar otros MP4.

## Indice

- [Video cargado por defecto](#video-cargado-por-defecto)
- [Video de referencia pesado](#video-de-referencia-pesado)
- [Formato recomendado para movil](#formato-recomendado-para-movil)
- [Probar otro video](#probar-otro-video)

## Video cargado por defecto

Este directorio incluye `eagle-360.mp4`, un sample 360 compatible con visores
WebGL moviles. Se usa por defecto porque tiene una resolucion y peso mas
razonables que el video 8K de prueba.

Fuente: https://github.com/videojs/videojs-vr/blob/main/samples/eagle-360.mp4

## Video de referencia pesado

Tambien queda `teal-ridge-360.mp4` como referencia, pero no se carga por
defecto porque su resolucion 8K puede superar lo que muchos moviles aceptan como
textura de video WebGL.

## Formato recomendado para movil

- MP4 con codec H.264.
- Relacion 2:1, por ejemplo 3840 x 1920 o 1920 x 960.
- Audio opcional; la app arranca el video silenciado para cumplir las reglas de autoplay de iOS y Android.

La app lo carga desde `Explorar paisaje` > `Video 360` y despues pregunta si se
quiere ver normal o usar VR.

## Probar otro video

Tambien puedes probar otro archivo indicando su ruta al arrancar Vite:

```bash
$env:VITE_360_VIDEO_URL="videos/otro-video-360.mp4"; pnpm dev:tunnel
```
