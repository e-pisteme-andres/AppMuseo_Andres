# Devolución módulo 360

## 5. Modo mirada

Lo único que merece pasar al agente de integración desde esta revisión es el
modo mirada del visor 360.

Estado real en este repositorio:

- El prototipo estereoscópico sí llegó a probar navegación guiada por mirada.
- El módulo 360 que hemos empaquetado para integrar no usa mirada como
  interacción general.
- En la integración actual los puntos del recorrido son objetivos táctiles.

Qué significa esto para la siguiente iteración:

- Si se recupera el modo mirada, debe presentarse como un modo específico
  apoyado en sensores de orientación, no como sustituto general de los puntos
  táctiles.
- La activación no debería ser instantánea: hace falta un retardo visible, con
  un aro o indicador de permanencia que se complete antes de disparar la acción.
- Conviene atarlo al modo por sensores y no al modo general, para no dejar la
  lectura o la navegación dependiendo simplemente de hacia dónde apunta el
  móvil cuando el visitante está usando la versión táctil normal.

Qué lo reabriría:

- Una integración que vuelva a necesitar uso con visor estereoscópico o manos
  libres.
- Pruebas de usuario que demuestren que el modo táctil no basta en ese contexto.
