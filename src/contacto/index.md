---
title: Contacto
description: "Contáctanos en Ohana Instituto Irapuato. Estamos aquí para orientarte y acompañar a tu familia."
layout: base.vto
---

<section class="page-hero">
  <div class="container">
    <h1 class="page-hero__title">Contacto</h1>
    <p class="page-hero__description">Estamos aquí para escucharte y orientarte. No estás solo.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="cards-grid">
      {{ include "../../_components/card.vto" { title: "📞 Teléfono", description: "[TELÉFONO]" } }}
      {{ include "../../_components/card.vto" { title: "💬 WhatsApp", description: "Escríbenos a [WHATSAPP]" } }}
      {{ include "../../_components/card.vto" { title: "✉️ Correo electrónico", description: "[EMAIL]" } }}
      {{ include "../../_components/card.vto" { title: "📍 Ubicación", description: "Irapuato, Guanajuato, México" } }}
    </div>

## Envíanos un mensaje

<!-- Reemplaza [FORM_ENDPOINT] con la URL real de tu formulario -->
<form action="[FORM_ENDPOINT]" method="POST" class="contact-form">
  <div class="form-group">
    <label for="nombre">Nombre completo</label>
    <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre">
  </div>
  <div class="form-group">
    <label for="email">Correo electrónico</label>
    <input type="email" id="email" name="email" required placeholder="tu@correo.com">
  </div>
  <div class="form-group">
    <label for="telefono">Teléfono / WhatsApp</label>
    <input type="tel" id="telefono" name="telefono" placeholder="477 000 0000">
  </div>
  <div class="form-group">
    <label for="mensaje">¿En qué podemos ayudarte?</label>
    <textarea id="mensaje" name="mensaje" rows="5" required placeholder="Cuéntanos sobre tu hijo o la situación..."></textarea>
  </div>
  <button type="submit" class="btn btn--primary">Enviar mensaje</button>
</form>

  </div>
</section>
