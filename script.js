document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section, .hero-title, .hero-image");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.25 }
  );

  sections.forEach(sec => observer.observe(sec));
});
