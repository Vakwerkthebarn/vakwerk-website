// script-hamburgermenu.js
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.hamburger');
  const nav = document.getElementById('primary-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // optioneel: klik buiten menu sluit het weer
  document.addEventListener('click', (e) => {
    if (!nav.classList.contains('open')) return;
    if (e.target.closest('#primary-nav') || e.target.closest('.hamburger')) return;
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });
});
