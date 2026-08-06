import { describe, expect, it } from 'vitest';
import { findModelDefinition, MODEL_CATALOG } from './models';

describe('catálogo de modelos 3D', () => {
  it('contiene exactamente seis modelos con archivos y efectos propios', () => {
    expect(MODEL_CATALOG).toHaveLength(6);
    expect(new Set(MODEL_CATALOG.map((model) => model.id)).size).toBe(6);
    expect(new Set(MODEL_CATALOG.map((model) => model.file)).size).toBe(6);
    expect(new Set(MODEL_CATALOG.map((model) => model.effect.seed)).size).toBe(6);
    expect(new Set(MODEL_CATALOG.map((model) => model.actionLabel)).size).toBe(6);
  });

  it('localiza cada modelo por su identificador', () => {
    MODEL_CATALOG.forEach((model) => {
      expect(findModelDefinition(model.id)).toBe(model);
    });
  });
});
