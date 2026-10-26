/* Splits "Coming soon" into single letters so each one can rise in on its own
   delay (see .soon .ch in css/style.css). Screen readers still get the whole
   phrase from aria-label. */
(function () {
  var el = document.querySelector('[data-split]');
  if (!el) return;

  var text = el.textContent.trim();
  el.setAttribute('aria-label', text);
  el.textContent = '';

  var line = document.createElement('span');
  line.className = 'soon-line';
  line.setAttribute('aria-hidden', 'true');

  for (var i = 0; i < text.length; i++) {
    var ch = document.createElement('span');
    ch.className = text[i] === ' ' ? 'ch ch-space' : 'ch';
    ch.textContent = text[i] === ' ' ? ' ' : text[i];
    ch.style.setProperty('--i', i);
    line.appendChild(ch);
  }

  el.appendChild(line);
  el.classList.add('is-split');
})();
