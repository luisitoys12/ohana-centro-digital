# Centro de Información Digital — Ohana Instituto Irapuato

Sitio web estático generado con [Lume](https://lume.land) (Deno) y publicado en GitHub Pages.

## Estructura

```
ohana-centro-digital/
├── _components/       # Componentes Vento reutilizables
├── _includes/         # Layouts base
├── .github/workflows/ # CI/CD con GitHub Actions
├── src/               # Contenido del sitio
│   ├── _data.yml      # Datos globales del sitio
│   ├── index.md       # Página principal
│   ├── quienes-somos/
│   ├── programas/
│   ├── inscripcion/
│   ├── contacto/
│   └── recursos/
│       ├── tdah/
│       ├── neurodesarrollo/
│       ├── inclusion/
│       ├── salud-mental/
│       ├── profesionales/
│       └── blog/
├── static/
│   ├── css/site.css
│   └── js/site.js
├── _config.ts
└── deno.json
```

## Desarrollo local

```bash
deno task serve
```

## Despliegue

El sitio se publica automáticamente en GitHub Pages al hacer push a `main`.

## Pendientes de configuración

- [ ] Reemplazar `[TELÉFONO]`, `[WHATSAPP]`, `[EMAIL]`, `[DOMINIO]`, `[GA4_ID]`, `[FORM_ENDPOINT]` en `src/_data.yml`
- [ ] Activar GitHub Pages: Settings > Pages > Source > GitHub Actions
