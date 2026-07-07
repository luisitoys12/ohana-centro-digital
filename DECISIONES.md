# Registro de Decisiones Técnicas

## 2026-07 — Arquitectura inicial

### Generador de sitio estático: Lume (Deno)

**Decisión:** Usar Lume v2 con Deno como generador de sitio estático.

**Razón:** Lume ofrece un ecosistema moderno, tipado con TypeScript nativo en Deno, soporte para plantillas Vento, y despliegue sencillo a GitHub Pages. No requiere Node.js ni dependencias pesadas.

**Alternativas consideradas:** Hugo, Astro, Eleventy.

### Motor de plantillas: Vento

**Decisión:** Usar Vento (`.vto`) como motor de plantillas.

**Razón:** Es el motor nativo de Lume, con sintaxis clara y soporte completo para componentes y layouts.

### Despliegue: GitHub Pages + GitHub Actions

**Decisión:** Publicar el sitio en GitHub Pages usando el workflow de CI/CD en `.github/workflows/deploy.yml`.

**Razón:** Gratuito, confiable, integrado con el repositorio. El workflow se dispara automáticamente en cada push a `main`.

### Idioma y tono

**Decisión:** Español de México, tono cálido y profesional.

**Razón:** El público objetivo es familias y profesionales en Irapuato, Guanajuato.
