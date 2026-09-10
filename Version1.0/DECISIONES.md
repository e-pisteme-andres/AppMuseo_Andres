# Registro de decisiones de la aplicacion

Este documento es un registro vivo de las decisiones tomadas durante el
desarrollo de App Museo AR. Su objetivo es explicar no solo que se decidio,
sino tambien por que se hizo y que alternativas se descartaron.

La idea es actualizarlo cada vez que una decision cambie arquitectura,
plataformas soportadas, experiencia de usuario, dependencias, despliegue,
privacidad, rendimiento o mantenimiento del proyecto.

## Como registrar una decision

Usa este formato para nuevas entradas:

```md
### YYYY-MM-DD - Titulo breve

**Estado:** aceptada | descartada | revisada | pendiente

**Contexto:** problema o necesidad que origina la decision.

**Decision:** solucion elegida o alternativa descartada.

**Motivo:** razones tecnicas, de producto o de mantenimiento.

**Consecuencias:** impacto positivo, compromisos asumidos y posibles riesgos.
```

## Decisiones aceptadas

### 2026-08-03 - Mantener una experiencia web y una app nativa iOS

**Estado:** aceptada

**Contexto:** la aplicacion necesita funcionar en Android con ARCore y tambien
en iPhone/iPad, donde el soporte WebXR no ofrece la misma cobertura funcional.

**Decision:** mantener la experiencia web en `src/` y una implementacion nativa
iOS en `ios/`.

**Motivo:** WebXR permite una experiencia AR rica en Android desde el navegador,
mientras que ARKit y RealityKit permiten replicar en iOS funciones avanzadas
como anchors, profundidad, render 3D nativo, gestos, panorama y corte de modelo.

**Consecuencias:** el proyecto tiene mas superficie de mantenimiento porque hay
dos implementaciones, pero gana compatibilidad real y una experiencia mas
consistente entre plataformas.

### 2026-08-03 - Usar Three.js como motor 3D principal en web

**Estado:** aceptada

**Contexto:** la app web necesita cargar modelos GLB, renderizar escenas 3D,
gestionar camaras, materiales, particulas, WebXR y panorama 360.

**Decision:** usar `three` como dependencia de runtime.

**Motivo:** Three.js resuelve la mayor parte de la complejidad 3D del navegador:
WebGL, GLTFLoader, escena, camara, luces, materiales, particulas y soporte WebXR.
Tambien se aprovecha en scripts de generacion/exportacion de activos.

**Consecuencias:** se reduce mucho el codigo propio necesario para render 3D,
pero las actualizaciones de Three.js deben probarse en dispositivos reales
porque pueden afectar WebXR, materiales, loaders o exporters.

### 2026-08-03 - Priorizar WebXR en Android y AR Quick Look como fallback iOS web

**Estado:** aceptada

**Contexto:** Android compatible con ARCore puede ejecutar WebXR `immersive-ar`,
pero Safari en iOS no ofrece la misma experiencia WebXR.

**Decision:** seleccionar WebXR cuando esta disponible y usar AR Quick Look en
iOS como alternativa web.

**Motivo:** WebXR permite hit test, anchors, profundidad, overlay y render
interactivo con Three.js. AR Quick Look permite abrir modelos USDZ en iOS sin
obligar a instalar la app nativa, aunque con menor interactividad.

**Consecuencias:** el fallback web de iOS no tiene paridad completa con Android.
La documentacion y la UI deben comunicar que Quick Look es una alternativa, no
la experiencia AR completa.

### 2026-08-03 - Fijar el modelo a la superficie detectada

**Estado:** aceptada

**Contexto:** la app coloca piezas 3D sobre una mesa o suelo y necesita que el
usuario entienda la escala fisica y la posicion del modelo.

**Decision:** una vez colocada la malla, el modelo permanece fijado a la
superficie. No se permite desplazamiento libre; el usuario controla rotacion,
escala y corte.

**Motivo:** bloquear la traslacion evita errores de manipulacion, mantiene la
relacion fisica con la superficie y simplifica la experiencia en movil.

**Consecuencias:** se pierde libertad de edicion espacial, pero se gana
estabilidad, claridad y una interaccion mas adecuada para una experiencia de
museo guiada.

### 2026-08-03 - Usar una malla de 1 x 1 metro como referencia de escala

**Estado:** aceptada

**Contexto:** el usuario necesita saber donde se colocara el modelo y entender
su escala sobre una superficie real.

**Decision:** mostrar una malla cian de 1 x 1 metro anclada a la superficie.

**Motivo:** una referencia fisica visible ayuda a validar plano, escala,
orientacion y posicion antes y despues de colocar el modelo.

**Consecuencias:** la malla ocupa parte de la escena, pero reduce confusion y
mejora la percepcion espacial.

### 2026-08-03 - Solicitar oclusion por profundidad cuando el dispositivo la soporte

**Estado:** aceptada

**Contexto:** los objetos reales deberian poder ocultar el modelo y la malla
cuando estan delante de ellos.

**Decision:** solicitar `depth-sensing` en WebXR con uso GPU optimizado y usar
scene depth, person depth o scene reconstruction en iOS cuando esten disponibles.

**Motivo:** la oclusion aumenta el realismo y evita que las piezas parezcan
flotar por encima de objetos fisicos cercanos.

**Consecuencias:** no todos los dispositivos soportan profundidad. La app debe
mantenerse funcional cuando la oclusion no esta disponible e informar el estado
durante la experiencia.

### 2026-08-03 - Implementar el corte vertical tambien en iOS con Metal

**Estado:** aceptada

**Contexto:** el corte vertical es una funcion principal de la experiencia web y
debe conservarse en la app nativa iOS.

**Decision:** usar `CustomMaterial` y shader Metal para aplicar el corte en la
implementacion iOS.

**Motivo:** RealityKit no replica directamente el clipping plane de Three.js con
la misma API, por lo que Metal permite controlar el efecto de forma nativa y con
mejor integracion en el pipeline iOS.

**Consecuencias:** la app iOS gana paridad funcional, pero incorpora codigo de
shader que requiere pruebas especificas en dispositivo y cuidado al actualizar
Xcode/iOS.

### 2026-08-03 - Generar activos compartidos mediante scripts

**Estado:** aceptada

**Contexto:** el proyecto necesita modelos GLB, USDZ para iOS, codigos QR,
iconos y panoramas preparados para despliegue.

**Decision:** centralizar la preparacion de activos en scripts Node dentro de
`scripts/`.

**Motivo:** automatizar la generacion reduce trabajo manual, evita divergencias
entre web e iOS y permite que CI reproduzca los activos esperados.

**Consecuencias:** los scripts pasan a ser parte critica del build. Cuando se
cambian modelos o rutas, tambien se debe validar `pnpm generate:assets`,
`pnpm generate:ios-assets` y `pnpm validate:ios`.

### 2026-08-03 - Incluir una experiencia panoramica 360

**Estado:** aceptada

**Contexto:** no todos los dispositivos o navegadores podran iniciar una sesion
AR completa, y la aplicacion tambien quiere ofrecer contenido exploratorio.

**Decision:** incluir un recorrido panoramico 360 con escenas, hotspots,
navegacion, zoom, pantalla completa y persistencia de progreso.

**Motivo:** el panorama ofrece una experiencia accesible incluso sin AR, aporta
contenido contextual y amplia el valor de la aplicacion mas alla de colocar
modelos 3D.

**Consecuencias:** aumenta el numero de activos y controles de UI, pero mejora
la continuidad de uso en dispositivos no compatibles con AR.

### 2026-08-03 - Guardar progreso localmente

**Estado:** aceptada

**Contexto:** la app necesita recordar la vista y el estado del recorrido sin
crear cuentas ni enviar datos a un servidor.

**Decision:** usar `localStorage` para guardar progreso local de la aplicacion y
del panorama.

**Motivo:** es una solucion simple, privada y suficiente para persistencia de
estado en un proyecto estatico publicado en GitHub Pages.

**Consecuencias:** el progreso puede perderse si el usuario borra datos del
navegador o usa navegacion privada, pero se evita infraestructura backend y
tratamiento de datos personales.

### 2026-08-03 - Publicar main y dev con GitHub Pages

**Estado:** aceptada

**Contexto:** se necesita una version estable y una version de desarrollo
accesibles por URL para probar en dispositivos reales.

**Decision:** el workflow de Pages compila `main` y `dev`, publica `main` en la
raiz y `dev` bajo `/AppMuseo_Andres/dev/`.

**Motivo:** permite validar cambios de la rama de desarrollo en moviles sin
mezclarlos necesariamente con la version principal.

**Consecuencias:** el workflow es mas complejo porque descarga y compila dos
ramas, pero facilita QA y comparacion entre versiones.

## Decisiones descartadas

### 2026-08-03 - Hacer una unica experiencia web con paridad total en iOS

**Estado:** descartada

**Contexto:** una unica base web seria mas simple de mantener que web + iOS
nativo.

**Decision descartada:** depender solo de la web para Android e iOS con la misma
experiencia AR completa.

**Motivo:** iOS no ofrece la misma cobertura WebXR que Android/Chrome con
ARCore. AR Quick Look sirve como fallback, pero no cubre toda la interaccion
personalizada de la app.

**Consecuencias:** se mantiene una implementacion nativa iOS para conseguir
mejor compatibilidad y paridad funcional.

### 2026-08-03 - Permitir desplazamiento libre del modelo despues de colocarlo

**Estado:** descartada

**Contexto:** una experiencia 3D podria permitir mover, rotar y escalar el
modelo libremente tras colocarlo.

**Decision descartada:** permitir que el usuario arrastre el modelo por la
superficie despues de fijarlo.

**Motivo:** el desplazamiento libre aumenta el riesgo de perder la referencia
fisica, complica los gestos tactiles y puede hacer menos clara la experiencia.

**Consecuencias:** se conserva un flujo mas guiado: primero se fija la
superficie y despues se manipula el modelo mediante rotacion, escala, corte y
acciones.

### 2026-08-03 - Movimiento libre con movil y gafas pasivas

**Estado:** descartada

**Contexto:** al incorporar un modo para gafas tipo Cardboard, se estudio si el
usuario podria moverse libremente por un espacio virtual llevando el movil
dentro de las gafas.

**Decision descartada:** implementar movimiento libre continuo usando solo el
movil y unas gafas pasivas.

**Motivo:** el movil en este tipo de gafas puede detectar orientacion de cabeza,
pero no ofrece seguimiento posicional fiable de pasos o desplazamiento real. El
movimiento continuo simulado exigiria controles adicionales, como mando,
gamepad, boton externo o gestos antes de insertar el movil, y aumenta el riesgo
de mareo o desorientacion.

**Consecuencias:** para una futura experiencia virtual con gafas se priorizara
un modelo guiado, como teleport por mirada o navegacion por puntos, en lugar de
caminar libremente. Esto mantiene la experiencia mas estable, compatible y
adecuada para un recorrido de museo.

### 2026-08-03 - Exigir profundidad como requisito obligatorio

**Estado:** descartada

**Contexto:** la oclusion por profundidad mejora el realismo de AR.

**Decision descartada:** bloquear la experiencia si el dispositivo no ofrece
depth sensing, scene depth o LiDAR.

**Motivo:** muchos dispositivos compatibles con AR no ofrecen todas las
capacidades de profundidad. Hacerla obligatoria reduciria demasiado la audiencia.

**Consecuencias:** la app debe degradar correctamente: usa oclusion cuando esta
activa y sigue funcionando cuando no esta disponible.

### 2026-08-03 - Depender de un backend para progreso o configuracion

**Estado:** descartada

**Contexto:** un backend permitiria guardar progreso remoto, analiticas o
configuracion dinamica.

**Decision descartada:** introducir servidor, base de datos o cuentas de usuario
para el estado actual del proyecto.

**Motivo:** la aplicacion puede funcionar como sitio estatico, con menos coste,
menor complejidad y menos implicaciones de privacidad.

**Consecuencias:** no hay sincronizacion entre dispositivos ni panel remoto,
pero el despliegue en GitHub Pages es simple y el tratamiento de datos se reduce.

### 2026-08-03 - Gestionar manualmente activos web e iOS por separado

**Estado:** descartada

**Contexto:** los activos 3D y visuales podrian mantenerse a mano en cada
plataforma.

**Decision descartada:** copiar o convertir manualmente modelos, QR, USDZ e
iconos cada vez que cambien.

**Motivo:** el trabajo manual favorece errores, divergencias entre plataformas y
fallos dificiles de reproducir en CI.

**Consecuencias:** se mantiene la generacion automatizada mediante scripts, y
los cambios de activos deben pasar por el flujo documentado de generacion y
validacion.
