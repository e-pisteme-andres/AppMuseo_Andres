# Museo AR

Prototipo web móvil para mostrar piezas 3D sobre la imagen de la cámara del
teléfono.

## Funcionalidad

- Solicita la cámara trasera al abrir la aplicación.
- Permite alternar entre tres modelos 3D demostrativos.
- Los modelos se pueden girar y ampliar mediante gestos táctiles.
- Muestra una alternativa clara si la cámara está bloqueada o no disponible.

La cámara requiere HTTPS en un teléfono real. La aplicación no captura,
almacena ni transmite imágenes del dispositivo.

## Desarrollo

Requiere Node.js 22.13 o posterior.

```bash
npm install
npm run dev
npm run build
npm test
```

La interfaz utiliza [`<model-viewer>`](https://modelviewer.dev/) y modelos
demostrativos alojados por su proyecto oficial. Estos recursos se sustituirán
por las piezas definitivas del museo en una fase posterior.
