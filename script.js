// Custom Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('ring');
let mx = -100, my = -100, rx = -100, ry = -100;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animateCursor() {
  cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.width = '52px';
    ring.style.height = '52px';
    ring.style.borderColor = 'rgba(200,249,125,0.7)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.width = '36px';
    ring.style.height = '36px';
    ring.style.borderColor = 'rgba(200,249,125,0.4)';
  });
});

// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Fade-up on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Force show everything immediately as fallback
document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));

setTimeout(() => {
  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
}, 100);