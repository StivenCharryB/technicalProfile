# MEMORY.md — technical profile
Memoria del proyecto entre sesiones. Máximo ~50 líneas.

## Estado actual
- v1 funcionando y validado en producción: Portfolio web empresarial para Stiven Alberto Charry Bonilla.
- Toda la data técnica, títulos de secciones, proyectos, roles y responsabilidades localizada completamente en español para reclutadores.
- Suite de pruebas unitarias (`npm run test`) ejecutando 8 tests con 100% de éxito en Vitest.
- Linter (`npm run lint`) pasando con 0 errores y 0 advertencias.

## Decisiones (y por qué)
- Arquitectura por capas (`domain`, `infrastructure`, `components`, `app`) para desacoplar datos técnicos de la presentación visual y facilitar mantenimiento.
- Paleta oscura técnica empresarial (carbón profundo `#090D16`, bordes translúcidos, acentos cyan/esmeralda) evitando clichés de portfolios junior.
- Textos y títulos traducidos a español con vocabulario técnico profesional para maximizar comprensión y conversión con reclutadores hispanohablantes.
- SVGs inline para logos de redes (LinkedIn, GitHub) para evitar incompatibilidades con paquetes externos en Turbopack.
- Vitest configurado con ESM (`vitest.config.mts`) para pruebas rápidas y compatibilidad total con TypeScript.

## Aprendizajes y errores a evitar
- Next.js 16 desaconseja llamadas a `new Date()` sin directiva de caché en server components durante el prerenderizado estático; se usa constante o cliente.
- Desactivar `agentRules` en `next.config.ts` para evitar sobreescritura accidental del `AGENTS.md` del usuario.
- Firebase CLI cachea el proyecto activo por ruta en `%USERPROFILE%\.config\configstore\firebase-tools.json` (`activeProjects`). Si se asigna con mayúsculas (ej. Display Name `StivenCharry` en vez del Project ID `stivencharry`), la CLI falla antes de ejecutar cualquier comando.

## Próximos pasos
- Despliegue en plataforma productiva (Firebase Hosting / Vercel).
- Añadir tests end-to-end una vez disponible el entorno de navegador si se requiere.