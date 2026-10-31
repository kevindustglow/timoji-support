/* Studio Kí. website header.
   1. Theme toggle: switches light / dark and remembers the choice in this browser.
      Until a visitor picks one, the site follows the system setting.
   2. Below 768 px the nav collapses behind one menu button.
   Without JavaScript the links stay visible and stacked, and the site follows the system theme. */
(function () {
  var root = document.documentElement;
  var header = document.querySelector('.site-header');
  if (!header) return;

  /* ---------- Theme toggle ---------- */
  var themeButton = header.querySelector('.site-header__theme');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  var metas = document.querySelectorAll('meta[name="theme-color"]');

  function currentTheme() {
    var chosen = root.getAttribute('data-theme');
    if (chosen === 'light' || chosen === 'dark') return chosen;
    return systemDark.matches ? 'dark' : 'light';
  }
  function syncThemeUI() {
    if (themeButton) themeButton.setAttribute('aria-pressed', currentTheme() === 'dark' ? 'true' : 'false');
    if (root.hasAttribute('data-theme')) {
      var surface = getComputedStyle(root).getPropertyValue('--surface').trim();
      for (var i = 0; i < metas.length; i++) metas[i].setAttribute('content', surface);
    }
  }
  if (themeButton) {
    themeButton.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* private mode: still switches for this page */ }
      syncThemeUI();
    });
  }
  var onSystemChange = function () { if (!root.hasAttribute('data-theme')) syncThemeUI(); };
  if (systemDark.addEventListener) systemDark.addEventListener('change', onSystemChange); else systemDark.addListener(onSystemChange);
  syncThemeUI();

  /* ---------- Mobile menu ---------- */
  var button = header.querySelector('.site-header__menu');
  var nav = header.querySelector('.site-header__nav');
  if (!button || !nav) return;
  var narrow = window.matchMedia('(max-width: 767.98px)');

  function setOpen(open, returnFocus) {
    header.classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open && returnFocus && (header.contains(document.activeElement) || document.activeElement === document.body)) button.focus();
  }

  button.addEventListener('click', function () {
    var open = button.getAttribute('aria-expanded') !== 'true';
    setOpen(open, false);
    if (open) { var first = nav.querySelector('a'); if (first) first.focus(); }
  });
  nav.addEventListener('click', function (event) {
    if (narrow.matches && event.target.closest('a')) setOpen(false, false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && header.classList.contains('is-open')) setOpen(false, true);
  });
  document.addEventListener('click', function (event) {
    if (header.classList.contains('is-open') && !header.contains(event.target)) setOpen(false, true);
  });
  var onChange = function () { if (!narrow.matches) setOpen(false, false); };
  if (narrow.addEventListener) narrow.addEventListener('change', onChange); else narrow.addListener(onChange);
})();
