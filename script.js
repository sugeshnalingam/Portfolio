document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-on-scroll");

  if (!("IntersectionObserver" in window)) {
    faders.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach(el => observer.observe(el));
});
