const samuelNavLinks = document.querySelectorAll(".site-nav a");
const samuelSections = [...document.querySelectorAll("main section[id]")];
const samuelRevealItems = document.querySelectorAll(".reveal");

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

window.addEventListener("scroll", syncSamuelActiveLink, { passive: true });
window.addEventListener("load", syncSamuelActiveLink);
syncSamuelActiveLink();
