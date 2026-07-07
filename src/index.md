---
title: Inicio
description: "Ohana Instituto Irapuato — Centro especializado en TDAH, neurodesarrollo e inclusión educativa en Irapuato, Guanajuato."
layout: base.vto
---

{{ include "../_components/hero.vto" {
  title: "Bienvenidos a Ohana Instituto",
  subtitle: "Acompañamos el neurodesarrollo de niños, jóvenes y familias con calidez, ciencia y corazón.",
  cta: { text: "Conoce nuestros programas", link: "/programas/" },
  ctaSecondary: { text: "Contáctanos", link: "/contacto/" }
} }}

<section class="section">
  <div class="container">
    <h2 class="section__title">¿En qué te podemos ayudar?</h2>
    <p class="section__lead">En Ohana trabajamos con niños y jóvenes con TDAH, dificultades de aprendizaje, trastornos del neurodesarrollo y sus familias.</p>
    <div class="cards-grid">
      {{ include "../_components/card.vto" { title: "TDAH", description: "Evaluación, diagnóstico y acompañamiento terapéutico para niños y jóvenes con Trastorno por Déficit de Atención e Hiperactividad.", link: "/recursos/tdah/", linkText: "Conocer más" } }}
      {{ include "../_components/card.vto" { title: "Neurodesarrollo", description: "Programas especializados para apoyar el desarrollo neurológico y las habilidades cognitivas en la infancia y adolescencia.", link: "/recursos/neurodesarrollo/", linkText: "Conocer más" } }}
      {{ include "../_components/card.vto" { title: "Inclusión Educativa", description: "Estrategias y herramientas para que cada niño pueda aprender y crecer en un ambiente inclusivo y adaptado a sus necesidades.", link: "/recursos/inclusion/", linkText: "Conocer más" } }}
      {{ include "../_components/card.vto" { title: "Salud Mental", description: "Apoyo psicológico y emocional para niños, adolescentes y familias. Porque la salud mental es parte del bienestar integral.", link: "/recursos/salud-mental/", linkText: "Conocer más" } }}
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <h2 class="section__title">¿Por qué Ohana?</h2>
    <p class="section__lead">Ohana significa familia. Trabajamos con cada niño y familia desde un enfoque integral, empático y basado en evidencia científica.</p>
    <div class="cards-grid">
      {{ include "../_components/card.vto" { title: "Equipo especializado", description: "Psicólogos, terapeutas y educadores con formación continua y experiencia en neurodesarrollo." } }}
      {{ include "../_components/card.vto" { title: "Enfoque familiar", description: "Involucramos a la familia en cada etapa del proceso para lograr resultados duraderos." } }}
      {{ include "../_components/card.vto" { title: "Atención personalizada", description: "Cada programa se adapta a las necesidades únicas de cada niño y su contexto." } }}
    </div>
  </div>
</section>
