/**
 * Bindings disponibles en el runtime de Cloudflare.
 *
 * La configuración de despliegue se construye desde `vite.config.ts`, por lo
 * que Wrangler no puede generar este archivo automáticamente al no existir un
 * `wrangler.jsonc`. Se mantienen estos tipos aquí para que TypeScript pueda
 * comprobar tanto el Worker como el acceso a D1 durante el desarrollo.
 */
type Fetcher = {
  fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
};

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(column?: string): Promise<T | null>;
  run<T = unknown>(): Promise<{ results?: T[] }>;
  all<T = unknown>(): Promise<{ results: T[] }>;
  raw<T = unknown[]>(): Promise<T[]>;
}

interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<T[]>;
  exec(query: string): Promise<unknown>;
}

declare module "cloudflare:workers" {
  export const env: {
    DB?: D1Database;
  };
}
