/* animations.js — Animations au scroll (IntersectionObserver) */
document.addEventListener('DOMContentLoaded', function () {
  var els = document.querySelectorAll('.fade-in');
  if (!els.length) return;

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.07 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('visible'); });
  }
});
