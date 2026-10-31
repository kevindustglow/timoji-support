/* Studio Kí. feature card rows: Previous / Next buttons for each horizontally scrolling track.
   Previous is disabled at the start, Next at the end, and both hide when every card fits.
   Without JavaScript the buttons stay hidden and the track still scrolls. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var sections = document.querySelectorAll('.fc-section');
  Array.prototype.forEach.call(sections, function (section) {
    var track = section.querySelector('.fc-track');
    var controls = section.querySelector('.fc-controls');
    if (!track || !controls) return;
    var buttons = controls.querySelectorAll('.fc-ctl');

    function step() {
      var card = track.querySelector('.fc');
      if (!card) return track.clientWidth;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 24;
      return card.getBoundingClientRect().width + gap;
    }
    function update() {
      var max = track.scrollWidth - track.clientWidth;
      controls.hidden = max <= 1;
      Array.prototype.forEach.call(buttons, function (b) {
        var dir = Number(b.getAttribute('data-dir'));
        b.disabled = dir < 0 ? track.scrollLeft <= 1 : track.scrollLeft >= max - 1;
      });
    }
    Array.prototype.forEach.call(buttons, function (b) {
      b.addEventListener('click', function () {
        track.scrollBy({ left: Number(b.getAttribute('data-dir')) * step(), behavior: reduce.matches ? 'auto' : 'smooth' });
      });
    });
    var pending = false;
    function schedule() { if (pending) return; pending = true; requestAnimationFrame(function () { pending = false; update(); }); }
    track.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('load', update);
    update();
  });
})();
