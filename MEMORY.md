# MEMORY.md — technical profile
Memoria del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- v1 funcionando y validado en producción: Portfolio web empresarial para Stiven Alberto Charry Bonilla.
- SEO técnico de alta conversión implementado: metadatos avanzados, Schema.org JSON-LD (Person, WebSite, ProfilePage), `robots.ts` y `sitemap.ts`.
- Suite de pruebas unitarias (`npm run test`) ejecutando 8 tests con 100% de éxito en Vitest.
- Linter (`npm run lint`) y build estático (`npm run build`) pasando con 0 errores y 0 advertencias.

## Decisiones (y por qué)
- Arquitectura por capas (`domain`, `infrastructure`, `components`, `app`) para desacoplar datos técnicos de la presentación visual y facilitar mantenimiento.
- Paleta oscura técnica empresarial (carbón profundo `#090D16`, bordes translúcidos, acentos cyan/esmeralda) evitando clichés de portfolios junior.
- URL canónica base: `https://stivencharry.web.app` (Firebase Hosting).
- Datos estructurados Schema.org con grafo enriquecido (`Person`, `WebSite`, `ProfilePage`) vinculando alias ('Stiven Charry', 'Stiven Alberto Charry Bonilla'), cargos y redes profesionales (LinkedIn, GitHub) para Google Knowledge Graph.
- Vitest configurado con ESM (`vitest.config.mts`) para pruebas rápidas y compatibilidad total con TypeScript.

## Aprendizajes y errores a evitar
- Next.js con `output: 'export'` requiere `export const dynamic = 'force-static'` en `robots.ts` y `sitemap.ts` para permitir el prerenderizado estático de archivos XML y TXT.
- Next.js 16 desaconseja llamadas a `new Date()` sin directiva de caché en server components durante el prerenderizado estático; se usa constante o cliente.
- Desactivar `agentRules` en `next.config.ts` para evitar sobreescritura accidental del `AGENTS.md` del usuario.

## Próximos pasos
- Despliegue en plataforma productiva (Firebase Hosting).
- Enviar `https://stivencharry.web.app/sitemap.xml` a Google Search Console tras el despliegue.