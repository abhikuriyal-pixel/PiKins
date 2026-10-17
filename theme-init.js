/* Runs before styles paint. A blocked storage API must never break the page. */
(() => {
  const root = document.documentElement;
  // Refresh starts a new visit at the hero. Keep incoming deep links and normal
  // Back/Forward navigation intact; only a real browser reload clears the hash.
  const navigation = performance.getEntriesByType('navigation')[0];
  const reloading = navigation ? navigation.type === 'reload' : performance.navigation?.type === 1;
  if (reloading) {
    history.scrollRestoration = 'manual';
    history.replaceState(history.state, '', location.pathname + location.search);
    window.scrollTo(0, 0);
    window.addEventListener('DOMContentLoaded', () => window.scrollTo(0, 0), { once: true });
    window.addEventListener('pageshow', () => {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => window.scrollTo(0, 0));
    }, { once: true });
    // Browsers may restore a reload's saved position after pageshow/rAF. Keep
    // that restoration suppressed until actual history travel or leaving the page.
    const restoreHistory = () => { history.scrollRestoration = 'auto'; };
    window.addEventListener('popstate', restoreHistory);
    window.addEventListener('pagehide', restoreHistory);
  }
  let saved;
  try { saved = localStorage.getItem('pikins-site-theme'); } catch { /* private / restricted storage */ }
  const valid = saved === 'light' || saved === 'dark';
  const theme = valid ? saved : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  root.dataset.theme = theme;
})();
