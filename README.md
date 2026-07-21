# Museo AR

Prototipo web móvil para colocar piezas 3D sobre superficies reales mediante
realidad aumentada.

## Funcionalidad

- Inicia una sesión WebXR o el visor AR nativo del teléfono.
- Permite alternar entre tres modelos 3D demostrativos.
- Detecta planos horizontales como mesas y suelos.
- Mantiene el modelo anclado mientras el visitante mueve la cámara.
- Permite girar, ampliar y recolocar las piezas mediante gestos.

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
