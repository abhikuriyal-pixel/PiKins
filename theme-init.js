/* Runs before styles paint. A blocked storage API must never break the page. */
(() => {
  const root = document.documentElement;
  let saved;
  try { saved = localStorage.getItem('pikins-site-theme'); } catch { /* private / restricted storage */ }
  const valid = saved === 'light' || saved === 'dark';
  const theme = valid ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.dataset.theme = theme;
})();
