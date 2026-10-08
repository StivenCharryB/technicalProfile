# AGENTS.md — technical profile
es un proyecto que muestra mi información técnica, con el propósito de que los reclutadores y empresas puedan entender mi perfil técnico.

## Stack y estructura
- vamos a trabajar con next.js y typescript
- vamos a trabajar con tailwind
- vamos a trabajar con arquitectura por capas

## Comandos
- por ahora no hay comandos

## Convenciones
- vamos realizar código limpio claro y mantenible
- Vamos a seguir patrones de diseño SOLID
- Textos de la interfaz en español.
- Código simple, nombres descriptivos y comentarios solo donde aporten.
- Diseño limpio y responsive; cualquier pantalla nueva debe verse bien en el móvil. 

## Reglas de dominio / trampas conocidas
- Lo que es fácil hacer mal y el agente no puede deducir leyendo el código.

## Forma de trabajar
- vamos a trabajar por modulos
- vamos a planificar antes de tocar código, tamaño de los cambios, qué explicar al
terminar.

## Límites
- ✅ Siempre: lo que debe hacer sin preguntar.
- ⚠️ Pregunta antes: dependencias nuevas, archivos nuevos, cambios en el formato de
datos…
- 🚫 Nunca: nunca debes realizar commits e instalar dependencias, ni usar gestores de paquetes, debes utilizar npm.

## Verificación
- antes de finalizar un cambio debes ejecutar npm run lint y npm run test
- si hay algun error debes corregirlo

## Memoria
- Al empezar, lee `MEMORY.md` para conocer el estado del proyecto y las decisiones
tomadas.
- Al terminar una tarea, actualízalo: estado actual, decisiones importantes (con su
porqué) y errores a evitar.
- Mantenlo breve (máximo ~50 líneas): resume o elimina lo que ya no aporte.
- Si algo se convierte en una regla permanente, propón moverlo a `AGENTS.md` en lugar de
dejarlo en la memoria.
- No guardes nunca datos sensibles (claves, tokens, datos personale)
