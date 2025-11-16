// Slide-in animation for ABOUT ME and timeline items

document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".slide-target, .timeline-item");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  targets.forEach((el) => observer.observe(el));
});
