// ===== AOS init =====
AOS.init({ duration: 900, easing: 'ease-out-cubic', once: true });

// ===== mobile nav toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// ===== footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== theme toggle (dark <-> light) =====
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

function setTheme(mode){
  document.body.classList.toggle('light', mode === 'light');
  themeToggle.textContent = mode === 'light' ? '☀' : '☾';
  localStorage.setItem('theme', mode);
}

// start dark neon by default
setTheme(savedTheme || (prefersDark ? 'dark' : 'dark'));

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.contains('light');
  setTheme(isLight ? 'dark' : 'light');
});

// ===== cursor trail glow =====
const cursorLayer = document.getElementById('cursor');
window.addEventListener('mousemove', (e) => {
  cursorLayer.style.setProperty('--x', e.clientX + 'px');
  cursorLayer.style.setProperty('--y', e.clientY + 'px');
});

// ===== inline demo chart (optional) =====
const canvas = document.getElementById('salesChart');
if (canvas && window.Chart) {
  const ctx = canvas.getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan','Feb','Mar','Apr','May','Jun'],
      datasets: [{
        label: 'Monthly Sales (k$)',
        data: [12,19,8,15,22,18]
      }]
    },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
  });
}
