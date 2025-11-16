// Slide-in animation for ABOUT ME text when it enters the viewport

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('.slide-target');
  if (!target) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // only once
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(target);
});
