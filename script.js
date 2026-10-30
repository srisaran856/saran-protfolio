// Mobile menu
const btn = document.querySelector('.menu-btn');
const links = document.getElementById('nav-links');
btn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => {
  if (e.target.tagName === 'A') { links.classList.remove('open'); btn.setAttribute('aria-expanded', false); }
});
// Project cards: "Show Details" opens a popup box (scrolls up and down)
document.querySelectorAll('.pcard').forEach(card => {
  const dlg = card.querySelector('.pdialog');
  const open = () => { dlg.showModal(); dlg.scrollTop = 0; };
  card.querySelector('.more').addEventListener('click', open);
  card.querySelector('.thumb').addEventListener('click', open);
  dlg.querySelector('.close').addEventListener('click', () => dlg.close());
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
});

document.getElementById('year').textContent = new Date().getFullYear();
