# Bitácora de decisiones

## Resumen

Registro cronologico de decisiones tecnicas y de experiencia. Cada entrada
explica que se probo, que se eligio, que se descarto, por que y que evidencia o
cambio justificaria reabrir la decision.

## Indice

- 2026-07-31 - Recalibrado manual de orientacion 360 revertido el mismo dia
- 2026-08-03 - Exploracion nativa iOS con ARKit
- 2026-08-03 - Three.js directo sobre WebXR para la web
- 2026-08-03 - AR Quick Look como fallback web en iOS
- 2026-08-03 - Modelo fijado a una superficie detectada
- 2026-08-03 - Oclusion por profundidad como mejora, no requisito de arranque
- 2026-08-03 - Modelos de prueba generados por script
- 2026-08-03 - Recorrido panoramico 360 como alternativa inmersiva
- 2026-08-03 - Gafas pasivas con navegacion guiada
- 2026-08-03 - Progreso solo local
- 2026-08-06 - `dev` como rama buena actual
- 2026-08-11 - Hoja marcador con cuatro `X` para el anclaje iOS
- 2026-08-11 - Escaneo web por cuatro `X` como alternativa impresa
- 2026-08-13 - Incompatibilidad entre AR web y visor pasivo tipo cardboard
- 2026-08-13 - Modelos bacterianos de stock solo como placeholder tecnico
- 2026-08-13 - Descartar Helicobacter pylori como icono principal del "bosque interior"
- 2026-08-13 - No presentar una reconstruccion 360 del microbioma como si fuera fotografia
- 2026-08-13 - Entregar el 360 como modulo y no como pantalla copiada de la demo
- 2026-08-13 - Bacilo esquematico propio para la prueba de escala y demo
- 2026-08-17 - Migracion del escaneo por `X` a ArUco en la rama `dev`
- 2026-08-18 - El modo mirada no forma parte del modulo 360 entregado
- 2026-09-09 - Catalogo web ampliado a seis modelos
- 2026-09-09 - Video 360 local como opcion del panorama
- 2026-09-09 - Tunel de desarrollo movil con worktrees opcionales

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

## 2026-08-13 - Incompatibilidad entre AR web y visor pasivo tipo cardboard

**Que se probo:** una prueba web con un cubo de 3 x 3 x 3 m colocado mediante
WebXR `immersive-ar`, y una opcion `Visor` para intentar usar el movil dentro de
gafas pasivas como si fuera una vista estereoscopica.

**Que se eligio:** documentar que la combinacion exacta solicitada no es viable
en esta app web: AR real con camara passthrough, modelo fijo en el mundo fisico
y visor pasivo estereoscopico para mover la cabeza sin sostener el movil.

**Que se descarto:** presentar como funcional una division de pantalla dentro de
la sesion AR, o prometer que el visor de gafas conserva el anclaje real del
modelo.

**Por que:** en navegadores moviles, la sesion WebXR `immersive-ar` la compone
el propio navegador con ARCore/ARKit: camara, tracking espacial, hit-test,
anchors y overlay DOM. Esa sesion no expone el video passthrough como textura ni
permite re-renderizarlo en dos ojos tipo cardboard. Tampoco permite convertir la
misma sesion AR en una vista `immersive-vr` estereoscopica. El modo cardboard
que si se puede construir en web es un visor 3D/360 sin camara real: pantalla
partida, fullscreen y sensores de orientacion. Ese modo puede mostrar el cubo en
un entorno virtual, pero ya no conserva la relacion optica con la realidad ni el
anclaje visual sobre la superficie detectada por AR.

**Que reabriria la decision:** una app nativa especifica con control completo de
ARKit/ARCore y renderizado estereoscopico propio, hardware de passthrough
diseñado para AR estereoscopica, o soporte web estandar futuro que permita
passthrough AR en dos ojos y acceso controlado al compositor. Mientras tanto,
para web movil se separan dos experiencias: AR normal con el movil en la mano, o
visor VR/cardboard sin camara real.

## 2026-08-13 - Modelos bacterianos de stock solo como placeholder tecnico

**Que se probo:** una busqueda de bacterias intestinales reutilizables para la
pieza 31 en marketplaces con licencia publica consultable, priorizando nombre de
especie, formatos web y condiciones de uso expositivo.

**Que se eligio:** recomendar `Bifidobacterium longum` y
`Lactiplantibacillus plantarum` solo como candidatos de compra para demo o
placeholder tecnico, nunca como modelo final de museo sin validacion cientifica.

**Que se descarto:** tratar estos activos comerciales como reconstrucciones
fidedignas por defecto o meter sus binarios en este repositorio publico.

**Por que:** en esta pasada aparecen especies utiles, con mallas razonables y
licencia comercial utilizable, pero no aparece bibliografia de reconstruccion ni
base cientifica declarada por el autor. Ademas, la licencia comercial permite
integrar el activo en una obra, no redistribuir el fichero 3D suelto desde un
repo publico.

**Que reabriria la decision:** validacion expresa de un microbiologo del museo,
o un proveedor que entregue la misma especie con procedencia cientifica
documentada y formatos cerrados para GLB/USDZ.

## 2026-08-13 - Descartar Helicobacter pylori como icono principal del "bosque interior"

**Que se probo:** comparar bacterias del mismo catalogo comercial con salida
GLB/gltf/usdz o conversion equivalente para ver si convenia una especie mas
llamativa visualmente.

**Que se eligio:** no priorizar `Helicobacter pylori` para la pieza 31.

**Que se descarto:** usar una bacteria asociada al estomago, a gastritis y a
ulcera como primera imagen del microbioma intestinal de la demo.

**Por que:** puede funcionar como ejemplo microbiologico aislado, pero empuja la
narrativa hacia patologia gastrica y no hacia equilibrio, diversidad o
microbioma intestinal. Introduce una lectura mas agresiva de la que pide la
pieza.

**Que reabriria la decision:** que el guion de sala cambie hacia enfermedad,
inflamacion gastrica o relaciones microbioma-patologia, o que el museo pida
explicitamente un contraste entre bacterias beneficiosas y dañinas.

## 2026-08-13 - No presentar una reconstruccion 360 del microbioma como si fuera fotografia

**Que se probo:** una busqueda de panoramas 360 ya publicados relacionados con
laboratorio, suelo, bosque y posibles escenas "dentro del microbioma".

**Que se eligio:** separar dos familias: fotografias 360 reales para
laboratorio y entornos naturales, y reconstrucciones declaradas para cualquier
escena interna del intestino o del ecosistema microbiano a escala
microscopica.

**Que se descarto:** sugerir que existe una fotografia 360 reutilizable del
interior del microbioma o usar una reconstruccion sin rotularla como tal.

**Por que:** en esta pasada si aparecen 360 reales reutilizables para
laboratorio y bosque/suelo, pero no una captura fotografica del interior del
microbioma. Si se fuerza esa equivalencia, la pieza gana espectacularidad y
pierde honestidad.

**Que reabriria la decision:** que el museo aporte una reconstruccion propia ya
validada, o que aparezca un activo 360 con base cientifica, licencia y
rotulacion suficientemente claras para usarlo como reconstruccion declarada.

## 2026-08-13 - Entregar el 360 como modulo y no como pantalla copiada de la demo

**Que se probo:** reutilizar el visor 360 existente y aislarlo del recorrido de
Paranal y del cascaron de la app de pruebas.

**Que se eligio:** empaquetar un modulo independiente en
`src/panorama-module.ts`, con salida siempre visible, cadena de degradacion por
modulo, equivalente textual y arranque sin framework.

**Que se descarto:** pedir al integrador que copie pantallas de la demo o que
reconstruya a mano la logica de hotspots, carga, textos y fallback.

**Por que:** la app destino es Astro y hoy no comparte el shell de esta demo.
La pieza util es el visor encapsulado y cargable bajo demanda, no la pagina
completa.

**Que reabriria la decision:** que la app del museo adopte exactamente el mismo
stack y layout que esta demo, o que se necesite una integracion mas profunda que
un modulo autocontenido no cubra.

## 2026-07-31 - Recalibrado manual de orientacion 360 revertido el mismo dia

**Que se probo:** el commit `cdbdf75` del 31 de julio de 2026 añadio un boton
`Restablecer orientacion segun el movil` en el visor 360 y un metodo
`resetMotionOrientation()` en `src/panorama-viewer.ts` para borrar la
calibracion de sensores y volver a alinear la vista con el dispositivo.

**Que se eligio:** conservar el visor 360 sin ese recalibrado manual en la
interfaz.

**Que se descarto:** mantener un control explicito de recalibrado durante el
modo por sensores.

**Por que:** el propio historial del repositorio muestra que la funcion se
introdujo en `cdbdf75` y se revirtio 13 minutos despues en `5053a80`, sin
entrada de bitacora, issue ni prueba adjunta que conserve el motivo. Lo unico
seguro que queda documentado es el intento y el revert. A partir de ese
historial inferimos algo mas modesto: el recalibrado no llego a consolidarse
como mejora validada y se prefirio volver al comportamiento anterior antes de
seguir explorandolo.

**Que reabriria la decision:** reproducir una deriva real de orientacion en
moviles, confirmar que los visitantes necesitan recentrar la vista sin salir del
modo sensor, o disponer de pruebas en dispositivo que demuestren que el
recalibrado aporta una mejora estable y no introduce confusion.

## 2026-08-13 - Bacilo esquematico propio para la prueba de escala y demo

**Que se probo:** sustituir el modelo de prueba generico de `S-02` por un
`bacilo-esquematico.glb/usdz` propio, con escala declarada por coordinacion y
rotulo obligatorio de contenido.

**Que se eligio:** integrar el bacilo esquematico en `public/s02/` como modelo
de prueba actual para RA minima y penumbra, manteniendo visible el texto
`Aumentado 150.000 veces · en realidad mide 2 µm` y
`Modelo esquemático, no una reconstrucción científica`.

**Que se descarto:** seguir midiendo la escala de demo con `ToyCar.glb` como si
su comportamiento sustituyera al modelo real que se quiere enseñar.

**Por que:** con un activo propio desaparecen las dudas de licencia, se fija la
escala que importa para la ficha 31 y se evita presentar como cientificamente
fiel un modelo comercial que no lo es. Ademas, el peso del GLB recibido
(`159.812 B`) reduce la sospecha de descarga como cuello de botella: si tarda,
la explicacion principal pasa a ser apertura de sesion, luz o anclaje.

**Que reabriria la decision:** que la medicion fisica con cinta muestre un
tamaño distinto de `30 cm` en el cuerpo, que la pieza resulte incomoda en sala o
que coordinacion regenere el modelo con otra escala declarada.

## 2026-08-17 - Migracion del escaneo por `X` a ArUco en la rama `dev`

**Que se probo:** la linea de escaneo web que venia de cuatro `X` negras en las
esquinas se sustituyo por deteccion ArUco sobre `OpenCV.js`, manteniendo el
flujo de boton `Escaneo` y superposicion del modelo 3D sobre la hoja. El
recorrido real de cambios en esta migracion queda reflejado en los commits
`61a7c3d`, `6f0669c`, `f1f2e57`, `6e1dbd5` y `1ba5433`.

**Que se eligio:** dejar el flujo ArUco como estado actual de `dev`, con estas
propiedades:

- el boton `Escaneo` abre un modal propio y no entra directamente en AR;
- antes de abrir la camara se hace una comprobacion previa de compatibilidad;
- el detector se carga en cliente mediante `ensureMarkerDetectorReady()` en
  `src/marker-scan.ts`;
- la deteccion usa el diccionario `DICT_4X4_50`;
- la app ya no depende de un patron fijo `0, 1, 2, 3`;
- la app acepta cualquier grupo de `4` marcadores ArUco distintos, uno en cada
  esquina de la hoja;
- el ejemplo publicado para la seta roja usa los IDs `7`, `12`, `31` y `23`;
- la plantilla publicada es estatica (`public/markers/aruco-board.html` y
  `public/markers/aruco-board.svg`) y ya no depende de generar los marcadores en
  tiempo real dentro de la propia pagina.

**Que se descarto:** varias decisiones intermedias se abandonaron durante la
exploracion:

- mantener el escaneo por cuatro `X` como camino principal en web;
- dejar que el HTML de la plantilla dibujara los ArUco descargando `OpenCV.js`
  en tiempo real;
- restringir el detector a los IDs fijos `0`, `1`, `2` y `3`;
- abrir la camara de forma inmediata sin avisar antes al usuario si su
  navegador podia usar realmente la funcion.

**Por que:** la experiencia con `X` era fragil y costaba separar falsos
positivos de confirmaciones reales. ArUco ofrece una referencia visual mas
estable, mas conocida y mejor alineada con un flujo de "marcador impreso". Al
mismo tiempo, el cambio exigia dos ajustes practicos que tambien se han dejado
integrados: una hoja de ejemplo fiable para probar la seta y una comprobacion
previa para no pedir camara a ciegas cuando el navegador no puede cargar el
detector.

**Que quedo implementado exactamente:** el estado actual de la rama `dev`
incluye estas piezas concretas:

1. `src/marker-scan.ts` carga `OpenCV.js` en navegador y expone
   `ensureMarkerDetectorReady()`, `analyzeMarkerFrame()`, `trackMarker()` y el
   resto del flujo de seguimiento.
2. `src/main.ts` integra el modal de escaneo ArUco, la apertura de camara, la
   confirmacion de cuatro esquinas, la previsualizacion del modelo y el salto a
   AR.
3. `public/markers/aruco-board.html` y `public/markers/aruco-board.svg` sirven
   como hoja de ejemplo imprimible para la seta roja.
4. `README.md` ya explica la regla de uso: `4` marcadores ArUco distintos del
   diccionario `4x4_50`, uno en cada esquina, con margen blanco y hoja completa
   visible al iniciar el escaneo.
5. El precheck de compatibilidad del escaneo comprueba contexto seguro,
   disponibilidad de `getUserMedia`, estado del permiso de camara y carga del
   detector antes de mostrar `Iniciar escaneo`.

**Consecuencias:** el flujo es mas honesto y mas controlable para pruebas en
movil, pero sigue teniendo compromisos tecnicos claros:

- depende de poder cargar `OpenCV.js` en el navegador;
- necesita camara, contexto seguro y una hoja completa visible;
- sigue siendo una exploracion publicada en `dev`, no una solucion cerrada de
  sala;
- la plantilla de ejemplo vale para la seta roja, pero la logica ya esta
  preparada para reutilizar otros grupos de cuatro IDs del mismo diccionario.

**Que reabriria la decision:** mover `OpenCV.js` al propio proyecto para no
depender de red, cambiar de diccionario ArUco si algun movil concreto detecta
mejor otra familia, o volver a cuestionar el flujo si en pruebas reales sigue
habiendo jitter, perdida frecuente de seguimiento o problemas de carga en
navegadores concretos.

## 2026-08-18 - El modo mirada no forma parte del modulo 360 entregado

**Que se probo:** el visor 360 conserva rastros del experimento estereoscopico
con objetivos de mirada en `src/panorama-viewer.ts`, mientras que el modulo
empaquetado para integracion en `src/panorama-module.ts` expone hotspots
tactiles como interaccion base.

**Que se eligio:** tratar el modo mirada como una linea de prototipo asociada al
visor estereo y no como comportamiento implicito del modulo 360 entregado.

**Que se descarto:** describir la integracion actual como si ya ofreciera
activacion por mirada en uso normal, o sustituir los puntos tactiles por una
mirada sin temporizacion visible.

**Por que:** el estado actual del codigo separa ambos caminos. En el visor,
`setGazeNavigationTargets()` y los marcadores 3D solo se muestran en modo
estereo, mientras que los hotspots HTML del modulo son los que resuelven la
navegacion ordinaria. Si se mezclan ambos sin condicion explicita, la lectura
pasaria a depender de hacia donde apunta el movil, incluso fuera del contexto
de sensores para el que se probo la idea.

**Que reabriria la decision:** una nueva iteracion de integracion que necesite
modo manos libres o visor estereoscopico. Si se retoma, deberia hacerse con un
retardo visible de permanencia, por ejemplo un aro de progreso, y ligado al
modo por sensores en lugar de al modo general tactil.

## 2026-09-09 - Catalogo web ampliado a seis modelos

**Que se probo:** el catalogo de `src/ar/models.ts` incluye una sexta pieza,
`empty-house`, con GLB y USDZ en `public/models/`, accion propia de iluminar el
interior, sonido, particulas y prueba unitaria que exige exactamente seis
modelos con IDs, archivos, numeros de pieza, semillas y acciones unicas.

**Que se eligio:** documentar el estado actual como una experiencia de seis
modelos: seta roja, cristal aurora, medusa celeste, totem solar, flor cosmica y
casa vacia.

**Que se descarto:** seguir describiendo la aplicacion como una demo de cinco
modelos, porque eso ya no coincide con el catalogo ni con los tests.

**Por que:** otro desarrollador necesita que README, guia tecnica y catalogo
hablen el mismo idioma. Si la documentacion dice "cinco", parece que
`empty-house` es un sobrante o una regresion.

**Que reabriria la decision:** retirar la casa vacia del catalogo, convertirla
en prueba interna no visible o sustituirla por una pieza de museo final.

## 2026-09-09 - Video 360 local como opcion del panorama

**Que se probo:** `createPanoramaTour()` mantiene tres escenas fotograficas por
defecto y anade una cuarta escena `video-360` cuando recibe `videoUrl`. La app
carga por defecto `public/videos/eagle-360.mp4`; `teal-ridge-360.mp4` queda
como referencia pesada y no se usa por defecto.

**Que se eligio:** mantener el video 360 como opcion local desde
`Explorar paisaje`, con eleccion posterior entre modo normal y VR.

**Que se descarto:** cargar el video 8K pesado como experiencia base o
considerar el recorrido fotografico sustituido por video.

**Por que:** el sample `eagle-360.mp4` tiene un peso y resolucion mas razonables
para moviles que el video pesado de referencia. La carga debe seguir siendo
explicita porque los videos 360 son activos grandes y pueden fallar como textura
WebGL en algunos dispositivos.

**Que reabriria la decision:** disponer de un video propio optimizado y
licenciado para sala, medir rendimiento en moviles objetivo o decidir que el
recorrido debe ser solo fotografico por requisitos de peso/offline.

## 2026-09-09 - Tunel de desarrollo movil con worktrees opcionales

**Que se probo:** `scripts/dev-tunnel.ps1` arranca Vite con `VITE_BASE_PATH=/`,
busca un puerto libre, muestra URL local/LAN y puede abrir tunel con
`localtunnel`, `cloudflared`, `ngrok` o ninguno. Con `-Branch`, crea o reutiliza
un worktree bajo `.worktrees/`.

**Que se eligio:** documentar `pnpm dev:tunnel`, `pnpm dev:local` y
`pnpm dev:cloudflare` como vias principales para probar en movil sin esperar a
GitHub Pages.

**Que se descarto:** depender siempre de Pages para probar cambios en telefono.

**Por que:** AR, camara, sensores y comportamiento movil se validan mejor en
dispositivo real. Un tunel HTTPS acorta el ciclo de prueba y los worktrees
permiten aislar una rama sin mover el checkout principal.

**Que reabriria la decision:** problemas recurrentes de disponibilidad del
tunel, politicas de red del museo o adopcion de otro flujo de preview estable.
