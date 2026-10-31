/* Studio Kí. website header: collapses the nav behind one menu button below 768 px.
   Without JavaScript the links stay visible and stacked, so they are always reachable. */
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
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
    setOpen(button.getAttribute('aria-expanded') !== 'true', false);
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
