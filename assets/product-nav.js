/* Studio Kí. Product nav (home pages only).
   1. Marks the link for the section in view with aria-current="true".
   2. Below 768 px the links move behind a chevron toggle; Escape, a link tap or a tap outside closes it.
   Without JavaScript the links stay visible in a row under the product name. */
(function () {
  var bar = document.querySelector('.product-nav');
  if (!bar) return;
  var links = Array.prototype.slice.call(bar.querySelectorAll('.product-nav__links a[href^="#"]'));

  /* ---------- Section in view ---------- */
  if ('IntersectionObserver' in window) {
    var targets = [];
    links.forEach(function (a) {
      var el = document.getElementById(a.getAttribute('href').slice(1));
      if (el) targets.push({ link: a, el: el });
    });
    var visible = new Set();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) visible.add(e.target); else visible.delete(e.target); });
      var current = null;
      targets.forEach(function (t) { if (!current && visible.has(t.el)) current = t; });
      targets.forEach(function (t) {
        if (t === current) t.link.setAttribute('aria-current', 'true'); else t.link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-80px 0px -50% 0px' });
    targets.forEach(function (t) { observer.observe(t.el); });
  }

  /* ---------- Mobile panel ---------- */
  var toggle = bar.querySelector('.product-nav__toggle');
  var list = bar.querySelector('.product-nav__links');
  if (!toggle || !list) return;
  var narrow = window.matchMedia('(max-width: 767.98px)');

  function setOpen(open, returnFocus) {
    bar.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open && returnFocus && (bar.contains(document.activeElement) || document.activeElement === document.body)) toggle.focus();
  }
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') !== 'true';
    setOpen(open, false);
    if (open) { var first = list.querySelector('a'); if (first) first.focus(); }
  });
  list.addEventListener('click', function (event) {
    if (narrow.matches && event.target.closest('a')) setOpen(false, false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && bar.classList.contains('is-open')) setOpen(false, true);
  });
  document.addEventListener('click', function (event) {
    if (bar.classList.contains('is-open') && !bar.contains(event.target)) setOpen(false, true);
  });
  var onChange = function () { if (!narrow.matches) setOpen(false, false); };
  if (narrow.addEventListener) narrow.addEventListener('change', onChange); else narrow.addListener(onChange);
})();
