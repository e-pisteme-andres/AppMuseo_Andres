import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renderiza la experiencia mínima del museo", async () => {
  const response = await render();
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Museo AR<\/title>/i);
  assert.match(html, /Vista 3D/);
  assert.match(html, /Traje espacial/);
  assert.match(html, /Caballo/);
  assert.match(html, /Casco/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("incluye apertura de cámara y tres modelos", async () => {
  const source = await readFile(
    new URL("../app/MuseumCamera.tsx", import.meta.url),
    "utf8",
  );

  assert.match(source, /getUserMedia/);
  assert.match(source, /facingMode:\s*\{ ideal: "environment" \}/);
  assert.equal((source.match(/src: "https:\/\/modelviewer\.dev/g) ?? []).length, 3);
  assert.match(source, /Abrir cámara/);
});
