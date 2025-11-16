// Simple Intersection Observer for slide-in animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.25,
  }
);

document
  .querySelectorAll(".slide-in-left, .slide-in-right, .slide-in-up")
  .forEach((el) => observer.observe(el));
