const navLinks = document.querySelectorAll(".site-nav a");
const sections = [...document.querySelectorAll("main section[id]")];
const revealItems = document.querySelectorAll(".reveal");
const heroTitle = document.querySelector(".hero-title");

navLinks.forEach((link) => {
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

const syncActiveLink = () => {
  const offset = window.scrollY + window.innerHeight * 0.25;
  let currentId = sections[0]?.id ?? "";

  sections.forEach((section) => {
    if (offset >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${currentId}`);
  });
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -36px 0px",
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const typeHeroTitle = () => {
  if (!heroTitle) {
    return;
  }

  const fullText = heroTitle.dataset.fullText ?? heroTitle.textContent ?? "";
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    heroTitle.textContent = fullText;
    heroTitle.classList.add("is-typed");
    return;
  }

  heroTitle.textContent = "";
  let index = 0;

  const tick = () => {
    heroTitle.textContent = fullText.slice(0, index);
    if (index < fullText.length) {
      index += 1;
      window.setTimeout(tick, 45);
    } else {
      heroTitle.classList.add("is-typed");
    }
  };

  tick();
};

window.addEventListener("scroll", syncActiveLink, { passive: true });
window.addEventListener("load", () => {
  syncActiveLink();
  typeHeroTitle();
});

syncActiveLink();
