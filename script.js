// Simple IntersectionObserver to reveal each section + timeline cards smoothly

const observerOptions = {
  threshold: 0.2,
};

const revealOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(
  revealOnScroll,
  observerOptions
);

document.querySelectorAll(".section").forEach((section) => {
  // hero already visible, skip
  if (section.id === "hero") return;
  sectionObserver.observe(section);
});

// Separate observer for each timeline card so they slide in nicely
const cardObserver = new IntersectionObserver(revealOnScroll, {
  threshold: 0.2,
});

document.querySelectorAll(".timeline-card").forEach((card) => {
  cardObserver.observe(card);
});
