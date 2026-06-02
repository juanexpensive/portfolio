const samuelNavLinks = document.querySelectorAll(".site-nav a");
const samuelSections = [...document.querySelectorAll("main section[id]")];
const samuelRevealItems = document.querySelectorAll(".reveal");
const samuelLangButtons = document.querySelectorAll("[data-lang-button]");
const samuelI18nNodes = document.querySelectorAll("[data-i18n]");

const samuelTranslations = {
  en: {
    "meta.title": "Juan Caro Vaquero",
    "meta.description": "Line-art indie manga styled portfolio variant for Juan Caro Vaquero.",
    "nav.aria": "Main navigation",
    "nav.home": "Home",
    "nav.about": "About Me",
    "nav.stack": "Stack",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "lang.selector": "Language selector",
    "hero.eyebrow": "portfolio / line-art notes",
    "hero.subtitle": "Fullstack Dev & Law",
    "hero.note": "I'm Juan, a fullstack developer with a background in law. I build software with a focus on clean architecture and thoughtful design :D",
    "hero.ctaProjects": "View Projects",
    "hero.ctaContact": "Contact",
    "hero.ctaCv": "CV coming soon",
    "hero.socialAria": "Social media",
    "hero.sideAria": "Side notes",
    "hero.sideLabel": "side note",
    "hero.listTitle": "Shopping list for the week:",
    "hero.list1": "Monster White",
    "hero.list2": "Complete set of a Warhammer army",
    "hero.list3": "Food?",
    "hero.list4": "Monster White",
    "about.eyebrow": "About Me",
    "about.title": "Why I Do What I Do",
    "about.p1": "I had always been intrigued by coding, and I didn't want to live with the regret of never trying it. Once I took the leap, I fell in love with it and decided to pivot from my legal background to tech",
    "about.p2": "I like building software that looks good, runs fast, and is clean. I enjoy learning from others and always try to be helpful.",
    "about.p3": "When I get stuck on a tough problem, I like to take my time to think it through. To break through roadblocks, I usually do one of two things: I write about the problem to organize my thoughts, or I explain it to my friends and peers to gain a completely new perspective.",
    "about.doodleAria": "Kitty placeholder",
    "stack.eyebrow": "Stack",
    "stack.title": "Skills",
    "stack.languages": "Languages",
    "stack.frameworks": "Frameworks / Tech",
    "stack.frameworksAria": "Frameworks and technologies",
    "projects.eyebrow": "Personal Projects",
    "projects.title": "My works",
    "projects.ploteaAria": "Plotea visual placeholder",
    "projects.ploteaP1": "I HATE LETTERBOXD!",
    "projects.ploteaP2": "So I created the version of Letterboxd I wanted to use: a clean, intuitive app. I designed the architecture with scalability in mind, using clean architecture principles.",
    "projects.payTogetherAria": "PayTogether visual placeholder",
    "projects.imageMissing": "Image missing here",
    "projects.payTogetherP1": "[WRITE YOUR TEXT HERE MANUALLY] Summarize how AI OCR works, the receipt flow, and your technical role.",
    "projects.spainP1": "I created S-Pain to visualize and analyze price data across Spanish provinces. It scrapes data from MIVAU, processes it with Python, and presents it in an interactive Streamlit dashboard. I just felt like doing some data work and this was a fun way to do it!",
    "projects.statesAria": "Reference UI states",
    "projects.loading": "loading",
    "projects.empty": "empty",
    "projects.error": "error",
    "experience.eyebrow": "Experience",
    "experience.title": "My Journey",
    "experience.tecnosisRole": "Software Development Internship",
    "experience.tecnosisDesc": "Backend/Frontend development using .NET, Blazor, MySQL, and JavaScript for a web & app notification management.",
    "experience.sevillajamRole": "Game Developer & Producer",
    "experience.sevillajamDesc": "Core logic in C# and Unity during a 48-hour event under pressure.",
    "experience.doodleAria": "Kitty placeholder",
    "footer.eyebrow": "Contact me!",
    "footer.code": "console.log(\"Thanks!.\");",
  },
  es: {
    "meta.title": "Juan Caro Vaquero",
    "meta.description": "Variante del portfolio de Juan Caro Vaquero con estética line-art indie manga.",
    "nav.aria": "Navegación principal",
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.stack": "Stack",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "lang.selector": "Selector de idioma",
    "hero.eyebrow": "portfolio / apuntes line-art",
    "hero.subtitle": "Dev Fullstack y Derecho",
    "hero.note": "Soy Juan, desarrollador fullstack con formación en derecho. Construyo software con foco en clean architecture y en un diseño pensado con cariño :D",
    "hero.ctaProjects": "Ver proyectos",
    "hero.ctaContact": "Contacto",
    "hero.ctaCv": "CV próximamente",
    "hero.socialAria": "Redes sociales",
    "hero.sideAria": "Notas al margen",
    "hero.sideLabel": "nota lateral",
    "hero.listTitle": "Lista de la compra de la semana:",
    "hero.list1": "Monster White",
    "hero.list2": "Ejército completo de Warhammer",
    "hero.list3": "¿Comida?",
    "hero.list4": "Monster White",
    "about.eyebrow": "Sobre mí",
    "about.title": "Por qué hago lo que hago",
    "about.p1": "Siempre me había intrigado programar y no quería vivir con la espina de no haberlo intentado nunca. Cuando di el salto, me enamoré de ello y decidí pasar del mundo jurídico al tecnológico.",
    "about.p2": "Me gusta construir software que se vea bien, vaya rápido y esté limpio. Disfruto aprendiendo de los demás e intento ser útil siempre que puedo.",
    "about.p3": "Cuando me atasco con un problema complicado, me gusta tomarme mi tiempo para pensarlo bien. Para salir de un bloqueo suelo hacer una de estas dos cosas: escribir sobre el problema para ordenar mis ideas, o explicárselo a amigos y compañeros para ganar una perspectiva completamente nueva.",
    "about.doodleAria": "Ilustración decorativa de Punpun",
    "stack.eyebrow": "Stack",
    "stack.title": "Habilidades",
    "stack.languages": "Lenguajes",
    "stack.frameworks": "Frameworks / Tech",
    "stack.frameworksAria": "Frameworks y tecnologías",
    "projects.eyebrow": "Proyectos personales",
    "projects.title": "Mis cosas",
    "projects.ploteaAria": "Imagen de Plotea",
    "projects.ploteaP1": "¡ODIO LETTERBOXD!",
    "projects.ploteaP2": "Así que hice la versión de Letterboxd que a mí me gustaría usar: una app limpia e intuitiva. Diseñé la arquitectura pensando en la escalabilidad y aplicando principios de clean architecture.",
    "projects.payTogetherAria": "Imagen de PayTogether",
    "projects.imageMissing": "Aquí falta imagen",
    "projects.payTogetherP1": "[ESCRIBE AQUÍ TU TEXTO MANUALMENTE] Resume cómo funciona el OCR con IA, el flujo del ticket y cuál fue tu papel técnico.",
    "projects.spainP1": "Creé S-Pain para visualizar y analizar datos de precios de las provincias españolas. Hace scraping de datos del MIVAU, los procesa con Python y los presenta en un dashboard interactivo hecho con Streamlit. Me apetecía hacer algo de datos y esta fue una forma divertida de hacerlo.",
    "projects.statesAria": "Estados de interfaz de referencia",
    "projects.loading": "cargando",
    "projects.empty": "vacío",
    "projects.error": "error",
    "experience.eyebrow": "Experiencia",
    "experience.title": "Mi recorrido",
    "experience.tecnosisRole": "Prácticas de desarrollo de software",
    "experience.tecnosisDesc": "Desarrollo backend y frontend con .NET, Blazor, MySQL y JavaScript para la gestión de notificaciones web y app.",
    "experience.sevillajamRole": "Desarrollador y productor de videojuegos",
    "experience.sevillajamDesc": "Lógica principal en C# y Unity durante un evento de 48 horas bajo presión.",
    "experience.doodleAria": "Ilustración decorativa de gato",
    "footer.eyebrow": "¡Contáctame!",
    "footer.code": "console.log(\"¡Gracias!.\");",
  },
};

const samuelLanguageStorageKey = "samuel-language";

const applySamuelLanguage = (language) => {
  const strings = samuelTranslations[language] ?? samuelTranslations.en;

  samuelI18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = strings[key];

    if (!value) {
      return;
    }

    const attrName = node.dataset.i18nAttr;

    if (attrName) {
      node.setAttribute(attrName, value);
      if (node.tagName === "TITLE") {
        document.title = value;
      }
      return;
    }

    node.textContent = value;
  });

  document.documentElement.lang = language;

  samuelLangButtons.forEach((button) => {
    const isActive = button.dataset.langButton === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  window.localStorage.setItem(samuelLanguageStorageKey, language);
};

const getInitialSamuelLanguage = () => {
  const savedLanguage = window.localStorage.getItem(samuelLanguageStorageKey);

  if (savedLanguage && samuelTranslations[savedLanguage]) {
    return savedLanguage;
  }

  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
};

samuelNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId ? document.querySelector(targetId) : null;

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const syncSamuelActiveLink = () => {
  const offset = window.scrollY + window.innerHeight * 0.25;
  let currentId = samuelSections[0]?.id ?? "";

  samuelSections.forEach((section) => {
    if (offset >= section.offsetTop) {
      currentId = section.id;
    }
  });

  samuelNavLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
  });
};

const samuelRevealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        samuelRevealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -30px 0px",
  }
);

samuelRevealItems.forEach((item) => samuelRevealObserver.observe(item));

samuelLangButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applySamuelLanguage(button.dataset.langButton);
  });
});

window.addEventListener("scroll", syncSamuelActiveLink, { passive: true });
window.addEventListener("load", () => {
  applySamuelLanguage(getInitialSamuelLanguage());
  syncSamuelActiveLink();
});

applySamuelLanguage(getInitialSamuelLanguage());
syncSamuelActiveLink();
