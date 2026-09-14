(() => {
  'use strict';
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('chemistry-theme');
  if (savedTheme === 'dark' || (!savedTheme && matchMedia('(prefers-color-scheme: dark)').matches)) body.classList.add('dark');
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('chemistry-theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  const calculatePressure = () => {
    const n = Number(document.getElementById('calcN').value);
    const temperature = Number(document.getElementById('calcT').value);
    const volume = Number(document.getElementById('calcV').value);
    const output = document.getElementById('calcP');
    output.textContent = volume > 0 && n >= 0 && temperature >= 0 ? `${(n * 0.0821 * temperature / volume).toFixed(2)} atm` : 'V > 0 필요';
  };
  ['calcN', 'calcT', 'calcV'].forEach((id) => document.getElementById(id).addEventListener('input', calculatePressure));

  const cards = [...document.querySelectorAll('.searchable')];
  const units = [...document.querySelectorAll('.unit')];
  const emptyState = document.getElementById('emptyState');
  document.getElementById('searchInput').addEventListener('input', (event) => {
    const term = event.target.value.trim().toLocaleLowerCase('ko');
    cards.forEach((card) => { card.hidden = Boolean(term) && !card.textContent.toLocaleLowerCase('ko').includes(term); });
    units.forEach((unit) => { unit.hidden = Boolean(term) && ![...unit.querySelectorAll('.searchable')].some((card) => !card.hidden); });
    emptyState.hidden = !term || units.some((unit) => !unit.hidden);
  });

  const toast = document.getElementById('toast');
  let toastTimer;
  document.querySelectorAll('[data-formula]').forEach((button) => button.addEventListener('click', async () => {
    const formula = button.dataset.formula;
    try { await navigator.clipboard.writeText(formula); } catch { const textArea = Object.assign(document.createElement('textarea'), { value: formula }); document.body.append(textArea); textArea.select(); document.execCommand('copy'); textArea.remove(); }
    toast.textContent = `'${formula}' 공식이 복사되었습니다.`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }));
})();
