/* =============================================================
   sidebar.js — Ouverture/fermeture sidebar sur mobile
   ============================================================= */
document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var sidebar   = document.querySelector('.sidebar');
  if (!hamburger || !sidebar) return;

  hamburger.addEventListener('click', function () {
    sidebar.classList.toggle('open');
  });

  /* Ferme la sidebar si on clique en dehors */
  document.addEventListener('click', function (e) {
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });
});
