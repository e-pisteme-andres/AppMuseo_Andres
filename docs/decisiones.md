# Bitácora de decisiones

Registro cronológico de decisiones técnicas y de experiencia de AppMuseo_Andres.
Cada entrada separa lo probado, lo elegido, lo descartado, el motivo y la señal
que justificaría reabrirla.

## 2026-08-03 - Exploración nativa iOS con ARKit

**Qué se probó:** una implementación nativa en `ios/` con SwiftUI, ARKit,
RealityKit, Core Motion y shader Metal para corte vertical. La rama
`implementacion-ios` conserva el commit `b78e284`, descrito en Git como
"Implementación de iOS para la app web (sin probar todavía). Además, falta
compilar con Xcode y probar con ARKit."

**Qué se eligió:** conservar la rama `implementacion-ios` como evidencia técnica
y mantener la app web como línea principal de integración en `dev`.

**Qué se descartó:** seguir tratando la app nativa iOS como parte lista para
entrega o como camino principal inmediato.

**Por qué:** iOS no ofrece WebXR equivalente al flujo Android/Chrome. Para
oclusiones avanzadas por profundidad, ARKit/RealityKit era la salida con más
control, pero el propio registro de commit deja claro que falta compilación con
Xcode y prueba en iPhone/iPad real. Presentarla como entregable estable induce a
error.

**Qué reabriría la decisión:** acceso a macOS/Xcode y a dispositivos físicos
iPhone/iPad, una necesidad confirmada de oclusión por profundidad en iOS o una
exigencia de paridad funcional que AR Quick Look no pueda cubrir.

## 2026-08-03 - Three.js directo sobre WebXR para la web

**Qué se probó:** una experiencia web con Three.js, WebXR `immersive-ar`,
`hit-test`, `dom-overlay`, anchors opcionales, `depth-sensing` opcional,
modelos GLB, partículas y controles propios.

**Qué se eligió:** mantener Three.js directo sobre WebXR como tecnología de la
exploración web.

**Qué se descartó:** sustituir esta exploración por una capa de mayor nivel como
`model-viewer` o por una tecnología distinta para parecerse a otro repositorio.

**Por qué:** Three.js da control sobre render, clipping, partículas, interacción,
solicitud de profundidad y degradaciones que una capa cerrada no expone con la
misma granularidad.

**Qué reabriría la decisión:** que el coste de mantenimiento de WebXR directo
superase el valor de las capacidades específicas, o que una librería de mayor
nivel cubriera profundidad, overlay, controles y degradación con menor riesgo.

## 2026-08-03 - AR Quick Look como fallback web en iOS

**Qué se probó:** selección de modo AR por capacidades del navegador:
`immersive-ar` si `navigator.xr.isSessionSupported()` lo permite, y Quick Look
cuando Safari expone `rel="ar"`.

**Qué se eligió:** usar AR Quick Look como fallback web para iPhone/iPad.

**Qué se descartó:** prometer paridad completa en Safari iOS mediante WebXR.

**Por qué:** Safari iOS no ofrece el mismo soporte WebXR que Chrome Android con
ARCore. Quick Look permite abrir USDZ sin instalar app nativa, pero no replica el
flujo completo de interacción de la experiencia WebXR.

**Qué reabriría la decisión:** soporte WebXR estable en Safari iOS o validación
en iPhone real que demuestre que Quick Look no cubre ni siquiera la degradación
mínima requerida.

## 2026-08-03 - Modelo fijado a una superficie detectada

**Qué se probó:** detección de superficie horizontal con `hit-test`, retícula,
malla de 1 x 1 m y colocación del modelo sobre esa pose.

**Qué se eligió:** fijar la pieza a la superficie; después de colocarla solo se
manipulan rotación, escala, corte y acciones del modelo.

**Qué se descartó:** desplazamiento libre del modelo una vez colocado.

**Por qué:** reduce errores de manipulación, conserva la referencia física y
hace más legible la escala en una experiencia breve de museo.

**Qué reabriría la decisión:** pruebas con visitantes que muestren que mover el
modelo es necesario para entender la pieza o para resolver errores de colocación.

## 2026-08-03 - Oclusión por profundidad como mejora, no requisito de arranque

**Qué se probó:** solicitud de `depth-sensing` como característica opcional de
WebXR y estado visible de oclusión activa/no disponible.

**Qué se eligió:** iniciar la experiencia aunque la profundidad no esté
disponible.

**Qué se descartó:** bloquear AR si no hay depth sensing.

**Por qué:** muchos dispositivos con ARCore no ofrecen profundidad GPU. Exigirla
reduciría demasiado la compatibilidad del prototipo.

**Qué reabriría la decisión:** que la exposición defina la oclusión real como
requisito indispensable, o que las pruebas en sala muestren que sin oclusión la
experiencia resulta engañosa.

## 2026-08-03 - Modelos de prueba generados por script

**Qué se probó:** generación procedural de GLB en `scripts/generate-assets.mjs`
y conversión a USDZ en `scripts/generate-ios-assets.mjs`.

**Qué se eligió:** usar modelos sintéticos de prueba: seta roja, cristal aurora,
medusa celeste, tótem solar, flor cósmica y casa vacía.

**Qué se descartó:** depender por ahora de modelos descargados de terceros para
estas piezas de prueba.

**Por qué:** los modelos generados son reproducibles, ligeros y evitan resolver
licencias durante la exploración técnica.

**Qué reabriría la decisión:** reutilizar alguna pieza en producción, sustituir
las formas por patrimonio real o incorporar modelos externos con licencia y
procedencia verificadas.

## 2026-08-03 - Recorrido panorámico 360 como alternativa inmersiva

**Qué se probó:** un visor 360 con Three.js, arrastre, zoom, sensores de
orientación cuando están disponibles, hotspots, recorrido de tres paradas y modo
VR estereoscópico.

**Qué se eligió:** incluir el recorrido 360 de Paranal como alternativa y campo
de prueba de interacción inmersiva sin cámara.

**Qué se descartó:** limitar el repositorio a AR pura.

**Por qué:** el 360 permite explorar degradaciones cuando AR no está disponible
y probar navegación inmersiva en móvil sin depender de tracking espacial.

**Qué reabriría la decisión:** que el encargo acote la exploración a RA anclada,
o que el peso/offline del recorrido 360 entre en conflicto con requisitos de
producción.

## 2026-08-03 - Gafas pasivas con navegación guiada

**Qué se probó:** modo VR 360, bloqueo horizontal, pantalla completa y
teletransporte por mirada entre paradas.

**Qué se eligió:** navegación guiada por puntos de destino.

**Qué se descartó:** movimiento libre continuo con móvil dentro de gafas
pasivas.

**Por qué:** las gafas pasivas permiten orientación de cabeza, pero no
seguimiento posicional fiable. Simular movimiento libre requeriría mandos o
controles adicionales y aumenta el riesgo de desorientación.

**Qué reabriría la decisión:** disponibilidad de hardware de control, un guion
que exija desplazamiento continuo o resultados de prueba que indiquen que el
teletransporte no basta.

## 2026-08-03 - Progreso solo local

**Qué se probó:** persistencia con `localStorage` para vista activa, escena 360,
estado de vista y última acción.

**Qué se eligió:** guardar progreso localmente en el navegador.

**Qué se descartó:** backend, cuentas, analítica o sincronización remota.

**Por qué:** el prototipo se despliega como sitio estático, reduce superficie de
privacidad y no requiere infraestructura.

**Qué reabriría la decisión:** necesidad real de continuidad entre dispositivos,
medición agregada con consentimiento o gestión remota de contenidos.

## 2026-08-06 - `dev` como rama buena actual

**Qué se probó:** revisión de ramas locales/remotas y ejecución local de
`pnpm test` y `pnpm build` sobre `dev`.

**Qué se eligió:** declarar `dev` como rama buena actual para la exploración
técnica viva.

**Qué se descartó:** tratar `main` como verdad funcional del estado actual.

**Por qué:** `main` va por detrás; `dev` contiene el recorrido 360 de tres
paradas, VR 360, modelos interactivos, QR y trabajo iOS integrado. El workflow
de Pages publica `main` en la raíz y `dev` bajo `/dev/`, lo que permite comparar
estable frente a exploración.

**Qué reabriría la decisión:** que `dev` se fusione en `main`, que se cree una
rama de release explícita o que producción necesite congelar una versión
auditada distinta.

## 2026-08-11 - Hoja marcador con cuatro `X` para el anclaje iOS

**QuÃ© se probÃ³:** sustituir la detecciÃ³n por QR de la app nativa iOS por una
hoja marcador con cuatro `X` negras en las esquinas, empaquetada como imagen de
referencia ARKit.

**QuÃ© se eligiÃ³:** usar una sola hoja A4 imprimible
`public/markers/x-corner-marker-sheet.png` para colocar el modelo 3D sobre el
papel.

**QuÃ© se descartÃ³:** mantener la dependencia de un QR distinto por modelo en el
flujo nativo actual.

**Por quÃ©:** para la siguiente fase del proyecto importa mÃ¡s disponer de una
referencia fÃ­sica simple y dibujable que de la selecciÃ³n automÃ¡tica del modelo.
El cambio simplifica la preparaciÃ³n de sala y acerca la experiencia al uso de
puntos de referencia manuales.

**QuÃ© reabrirÃ­a la decisiÃ³n:** necesidad de reconocer marcas dibujadas a mano
sin plantilla fija, selecciÃ³n de varios modelos desde el mismo marcador o
pruebas de campo que muestren poca robustez con solo cuatro `X`.

## 2026-08-11 - Escaneo web por cuatro `X` como alternativa impresa

**Que se probo:** reemplazar el flujo web de lectura QR por una deteccion
propia de cuatro `X` negras en las esquinas de una hoja, usando analisis de
luminancia, componentes conectados, comprobacion de diagonales, conteo por
cuadrantes, confirmacion en varios frames y superposicion del modelo 3D sobre
la imagen de camara en `src/main.ts` y `src/marker-scan.ts`.

**Que se eligio:** dejar la exploracion integrada en `dev` como spike tecnico,
sin declararla todavia solucion validada para sala ni respuesta a `P-13`.

**Que se descarto:** seguir dependiendo de `BarcodeDetector` y QR para este
flujo concreto; tambien se probaron heuristicas mas laxas para marcas dibujadas
a mano (`c19a53d`) y despues una confirmacion mas estricta de las cuatro `X`
(`c958856`). El commit final del dia (`2331761`) no revierte el detector ni la
superposicion: solo deshace el bloqueo del modelo tras la primera confirmacion
que se habia introducido en `786168f`.

**Por que:** la hipotesis de trabajo era que una hoja A4 con cuatro `X` de alto
contraste podia servir como referencia impresa cuando la RA no ancla bien a una
superficie o cuando interesara un fallback fisico sencillo. En el repositorio no
hemos encontrado una fuente externa ni otra instruccion documentada para abrir
esta linea; por lo que deja escrito el codigo y la secuencia de commits, su
origen documentado es una hipotesis tecnica local, alineada con la linea de
marcador impreso abierta en iOS ese mismo dia.

**Que reabriria la decision:** pruebas reales que muestren deteccion estable en
penumbra, impresion domestica y fondo no controlado; o una necesidad operativa
clara de usar marcador impreso si `P-13` falla en baja luz. Si aparecen falsos
positivos, jitter o perdida frecuente de seguimiento, esta linea debe volver a
cuestionarse antes de proponerse como alternativa de sala.
