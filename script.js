// Intersection Observer for fade / slide animations

const observerOptions = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right").forEach((el) => {
  observer.observe(el);
});
