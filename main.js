(() => {
  'use strict';

  const root = document.documentElement;
  const preference = matchMedia('(prefers-color-scheme: dark)');
  const storageKey = 'pikins-site-theme';
  const themeButtons = [...document.querySelectorAll('[data-theme-choice]')];
  const dialog = document.getElementById('image-dialog');
  const dialogImage = document.getElementById('dialog-image');
  const dialogTitle = document.getElementById('image-dialog-title');
  const original = document.getElementById('image-original');
  const stage = document.getElementById('dialog-stage');
  const sizeButton = document.getElementById('image-size');
  let trigger = null;
  let manualTheme = false;
  try { manualTheme = ['light', 'dark'].includes(localStorage.getItem(storageKey)); } catch { /* Optional storage. */ }

  function updateDialogImage() {
    if (!trigger) return;
    const source = trigger.dataset[root.dataset.theme];
    dialogImage.src = source;
    original.href = source;
  }
  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.themeChoice === theme)));
    document.querySelectorAll('[data-dark-source]').forEach(source => { source.media = theme === 'dark' ? 'all' : 'not all'; });
    document.querySelectorAll('img[data-light]').forEach(image => { image.src = image.dataset[theme]; });
    document.querySelectorAll('[data-screenshot]').forEach(link => { link.href = link.dataset[theme]; });
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#000000' : '#dadfdb';
    if (dialog.open) updateDialogImage();
  }

  applyTheme(root.dataset.theme || (preference.matches ? 'dark' : 'light'));
  document.querySelector('.theme-control').hidden = false;
  themeButtons.forEach(button => button.addEventListener('click', () => {
    const theme = button.dataset.themeChoice;
    manualTheme = true;
    applyTheme(theme);
    try { localStorage.setItem(storageKey, theme); } catch { /* Retain the choice for this visit. */ }
  }));
  preference.addEventListener('change', event => {
    if (!manualTheme) applyTheme(event.matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    const value = event.key === null ? null : event.newValue;
    manualTheme = value === 'light' || value === 'dark';
    applyTheme(manualTheme ? value : (preference.matches ? 'dark' : 'light'));
  });

  const menu = document.getElementById('site-nav');
  const menuButton = document.querySelector('.menu-toggle');
  menuButton.hidden = false;
  function closeMenu(restoreFocus = false) {
    menu.removeAttribute('data-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => {
    const open = !menu.hasAttribute('data-open');
    menu.toggleAttribute('data-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header, .help-popup') && menu.hasAttribute('data-open')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.hasAttribute('data-open')) closeMenu(true);
  });
  matchMedia('(max-width: 560px)').addEventListener('change', () => closeMenu());

  const helpButton = document.getElementById('help-trigger');
  const helpPopup = document.getElementById('help-popup');
  const helpStatus = document.getElementById('help-status');
  const supportEmail = document.getElementById('support-email');
  function positionHelp() {
    if (!helpPopup.matches(':popover-open')) return;
    const anchor = (helpButton.checkVisibility() ? helpButton : menuButton).getBoundingClientRect();
    const popup = helpPopup.getBoundingClientRect();
    const left = Math.max(16, Math.min(anchor.right - popup.width, innerWidth - popup.width - 16));
    const top = Math.max(16, Math.min(anchor.bottom + 10, innerHeight - popup.height - 16));
    helpPopup.style.left = `${left}px`;
    helpPopup.style.top = `${top}px`;
  }
  helpPopup.addEventListener('toggle', event => {
    const open = event.newState === 'open';
    helpButton.setAttribute('aria-expanded', String(open));
    if (open) {
      helpStatus.textContent = '';
      positionHelp();
    }
  });
  window.addEventListener('resize', positionHelp);
  window.addEventListener('scroll', positionHelp, { passive: true });
  document.getElementById('copy-support-email').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(supportEmail.textContent);
      helpStatus.textContent = 'Email address copied to clipboard.';
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(supportEmail);
      selection.removeAllRanges();
      selection.addRange(range);
      helpStatus.textContent = 'Copy unavailable. The email is selected; copy it manually.';
    }
  });

  document.querySelectorAll('[data-gallery]').forEach(gallery => {
    const tabs = [...gallery.querySelectorAll('[role="tab"]')];
    const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
    function activate(index, focus = false) {
      tabs.forEach((tab, i) => {
        tab.setAttribute('aria-selected', String(i === index));
        tab.tabIndex = i === index ? 0 : -1;
        panels[i].hidden = i !== index;
      });
      if (focus) tabs[index].focus({ preventScroll: true });
    }
    gallery.querySelector('[role="tablist"]').hidden = false;
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activate(index));
      tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index + tabs.length - 1) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next !== undefined) { event.preventDefault(); activate(next, true); }
      });
    });
    activate(0);
  });

  const featureExplorer = document.querySelector('[data-feature-explorer]');
  const featureNav = featureExplorer.querySelector('nav');
  const featureTabs = [...featureNav.querySelectorAll('a')];
  const featurePanels = featureTabs.map(tab => document.getElementById(tab.hash.slice(1)));
  const featureContent = featureExplorer.querySelector('.feature-content');
  const featureSelect = document.getElementById('feature-select');
  featureNav.setAttribute('role', 'tablist');
  featureNav.setAttribute('aria-orientation', 'vertical');
  featureExplorer.querySelector('.feature-picker').hidden = false;
  featureTabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', featurePanels[index].id);
    featurePanels[index].setAttribute('role', 'tabpanel');
    featurePanels[index].setAttribute('aria-labelledby', tab.id);
    featurePanels[index].tabIndex = 0;
  });

  function activateFeature(index, { focus = false, remember = false } = {}) {
    const changed = featurePanels[index].hidden;
    if (dialog.open) dialog.close();
    featureTabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      featurePanels[i].hidden = i !== index;
    });
    featureSelect.value = featurePanels[index].id;
    if (changed && root.dataset.motion === 'running') {
      featurePanels[index].querySelector('.chapter-copy').classList.add('motion-enter');
    }
    if (remember && location.hash !== featureTabs[index].hash) {
      try { history.pushState(null, '', featureTabs[index].hash); }
      catch { location.hash = featureTabs[index].hash; }
    }
    if (focus) featureTabs[index].focus({ preventScroll: true });
  }
  featureTabs.forEach((tab, index) => {
    tab.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      activateFeature(index, { remember: true });
    });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowDown') next = (index + 1) % featureTabs.length;
      if (event.key === 'ArrowUp') next = (index + featureTabs.length - 1) % featureTabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = featureTabs.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        activateFeature(next, { focus: true, remember: true });
      }
    });
  });
  featureSelect.addEventListener('change', () => {
    activateFeature(featurePanels.findIndex(panel => panel.id === featureSelect.value), { remember: true });
  });
  matchMedia('(max-width: 720px)').addEventListener('change', event => {
    if (event.matches && featureNav.contains(document.activeElement)) featureSelect.focus({ preventScroll: true });
    else if (!event.matches && document.activeElement === featureSelect) {
      featureTabs[featurePanels.findIndex(panel => panel.id === featureSelect.value)].focus({ preventScroll: true });
    }
  });
  function revealFeatureHash(scrollToTarget = false) {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    const chapter = target?.closest('.chapter');
    const index = featurePanels.indexOf(chapter);
    if (index < 0) return;
    activateFeature(index);
    const galleryPanel = target.closest('.gallery-panel[role="tabpanel"]');
    if (galleryPanel) document.getElementById(galleryPanel.getAttribute('aria-labelledby'))?.click();
    else if (target.matches('[data-gallery] [role="tab"]')) target.click();
    // Only an initial direct link requests positioning; feature changes stay put.
    if (scrollToTarget) requestAnimationFrame(() => {
      const destination = target === chapter || target.matches('[role="tab"]') ? featureContent : target;
      destination.scrollIntoView({ block: 'start', behavior: 'instant' });
    });
  }
  activateFeature(0);
  revealFeatureHash(Boolean(location.hash));
  window.addEventListener('hashchange', () => revealFeatureHash());
  window.addEventListener('popstate', () => revealFeatureHash());

  const comparison = document.querySelector('[data-comparison]');
  const comparisonStage = comparison.querySelector('.compare-stage');
  const range = comparison.querySelector('.compare-range');
  const beforeTag = comparison.querySelector('.compare-tag--before');
  const afterTag = comparison.querySelector('.compare-tag--after');
  function compare() {
    const value = Number(range.value);
    comparisonStage.style.setProperty('--split', `${value}%`);
    range.setAttribute('aria-valuetext', `${value}% original page, ${100 - value}% completed edits`);
    beforeTag.hidden = value < 17;
    afterTag.hidden = value > 83;
  }
  range.hidden = false;
  range.addEventListener('input', compare);
  compare();

  if (typeof dialog.showModal === 'function') {
    document.querySelectorAll('[data-screenshot]').forEach(link => link.addEventListener('click', event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      updateDialogImage();
      dialogImage.alt = link.dataset.title;
      dialogTitle.textContent = link.dataset.title;
      stage.classList.remove('is-actual');
      sizeButton.setAttribute('aria-pressed', 'false');
      sizeButton.textContent = 'Actual size';
      dialog.showModal();
      stage.scrollTop = stage.scrollLeft = 0;
    }));
    document.getElementById('image-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      dialogImage.removeAttribute('src');
      trigger?.focus({ preventScroll: true });
    });
    sizeButton.addEventListener('click', () => {
      const actual = stage.classList.toggle('is-actual');
      sizeButton.setAttribute('aria-pressed', String(actual));
      sizeButton.textContent = actual ? 'Fit to window' : 'Actual size';
    });
  }
  // CSS runs the decorative motion; observers only handle visibility and one-time fades.
  const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
  const heroTitle = document.getElementById('hero-title');
  let headlineStarted = false;
  function settleHeadline() { heroTitle.dataset.headlineState = 'settled'; }
  function syncMotion() {
    const paused = motionPreference.matches || document.hidden;
    root.dataset.motion = paused ? 'paused' : 'running';
    // A reduced-motion visit skips the entrance permanently. A background load
    // waits until first visibility, rather than spending its only entrance unseen.
    if (motionPreference.matches) headlineStarted = true;
    if (paused) {
      document.querySelectorAll('.motion-enter').forEach(element => element.classList.remove('motion-enter'));
      settleHeadline();
    } else if (!headlineStarted) {
      headlineStarted = true;
      heroTitle.dataset.headlineState = 'entering';
      document.querySelector('.hero-summary').classList.add('motion-enter');
    }
  }
  motionPreference.addEventListener('change', syncMotion);
  document.addEventListener('visibilitychange', syncMotion);
  matchMedia('print').addEventListener('change', event => {
    if (event.matches) { headlineStarted = true; settleHeadline(); }
  });
  document.addEventListener('animationend', event => {
    if (event.animationName === 'soft-appear' || event.animationName === 'hero-arrive') {
      event.target.classList.remove('motion-enter');
    } else if (event.animationName === 'headline-pixel-in' && event.target.matches('.headline-pixel--mira')) {
      settleHeadline();
    }
  });
  root.classList.add('js');
  syncMotion();
  if ('IntersectionObserver' in window) {
    const avatarObserver = new IntersectionObserver(entries => {
      for (const entry of entries) entry.target.toggleAttribute('data-avatar-visible', entry.isIntersecting);
    });
    document.querySelectorAll('[data-bot-avatar]').forEach(avatar => avatarObserver.observe(avatar));
    const revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (root.dataset.motion === 'running') entry.target.classList.add('motion-enter');
        revealObserver.unobserve(entry.target);
      }
    }, { threshold: .12 });
    document.querySelectorAll('.foundation > div, .chapter-copy, .steps li, .download-card').forEach(element => revealObserver.observe(element));
  } else {
    document.querySelectorAll('[data-bot-avatar]').forEach(avatar => avatar.setAttribute('data-avatar-visible', ''));
  }
})();
