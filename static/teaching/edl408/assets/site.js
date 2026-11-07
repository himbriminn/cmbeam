const menu = document.querySelector('.menu-button');
const scrim = document.querySelector('.sidebar-scrim');
const search = document.querySelector('#search');
const results = document.querySelector('#search-results');

function closeMenu() {
  document.body.classList.remove('nav-open');
  menu?.setAttribute('aria-expanded', 'false');
}

menu?.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  menu.setAttribute('aria-expanded', String(open));
});
scrim?.addEventListener('click', closeMenu);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
    results.hidden = true;
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    search?.focus();
  }
});

search?.addEventListener('input', () => {
  const query = search.value.trim().toLocaleLowerCase('is');
  if (!query) {
    results.hidden = true;
    return;
  }
  const matches = (window.SEARCH_INDEX || []).filter((item) =>
    `${item.title} ${item.chapter} ${item.text}`.toLocaleLowerCase('is').includes(query)
  ).slice(0, 8);
  results.innerHTML = matches.length
    ? matches.map((item) => `<a href="${item.url}"><strong>${item.title}</strong><small>${item.chapter}</small></a>`).join('')
    : '<a href="#"><strong>Ekkert fannst</strong><small>Reyndu annað leitarorð.</small></a>';
  results.hidden = false;
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.search-wrap')) results.hidden = true;
});
