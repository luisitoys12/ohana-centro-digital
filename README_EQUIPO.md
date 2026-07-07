# Guía para el Equipo — Ohana Centro Digital

## ¿Cómo editar contenido?

Todo el contenido editable se encuentra en la carpeta `src/`. Cada página es un archivo Markdown (`.md`).

### Datos globales

Edita `src/_data.yml` para actualizar información de contacto, nombre del instituto, redes sociales y otros datos que aparecen en todo el sitio.

### Páginas principales

| Archivo | Sección |
|---|---|
| `src/index.md` | Página de inicio |
| `src/quienes-somos/index.md` | Quiénes somos |
| `src/programas/index.md` | Programas |
| `src/inscripcion/index.md` | Inscripción |
| `src/contacto/index.md` | Contacto |

### Recursos informativos

Se encuentran en `src/recursos/` organizados por categoría.

## Flujo de trabajo

1. Crea una rama con tu nombre: `git checkout -b nombre/descripcion-cambio`
2. Edita los archivos necesarios
3. Haz commit con un mensaje descriptivo
4. Abre un Pull Request hacia `main`
5. El sitio se publica automáticamente al hacer merge

## Placeholders pendientes

Busca y reemplaza estas etiquetas en todo el proyecto:

- `[TELÉFONO]` — Número de teléfono fijo
- `[WHATSAPP]` — Número de WhatsApp con código de país (ej. 5214771234567)
- `[EMAIL]` — Correo electrónico de contacto
- `[DOMINIO]` — Dominio del sitio (ej. ohanairapuato.edu.mx)
- `[GA4_ID]` — ID de Google Analytics 4 (ej. G-XXXXXXXXXX)
- `[FORM_ENDPOINT]` — URL del endpoint del formulario de contacto
