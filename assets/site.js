/*
  Fills in the addresses from config.js, the one place they are written. The pages carry only
  plain fallbacks (a link to the Support page, the link text without a link), so a change in
  config.js reaches every page and an old address can never linger in one of them.
*/
(function () {
  var cfg = window.BARATHEA_DOCS || {};
  function pending(v) { return typeof v !== 'string' || v === '' || /^\{\{[A-Z_]+\}\}$/.test(v); }
  function each(selector, fn) { Array.prototype.forEach.call(document.querySelectorAll(selector), fn); }

  // Links whose address and text come from the config: the support inbox and the docs address.
  each('a[data-config]', function (a) {
    var key = a.getAttribute('data-config');
    var v = cfg[key];
    if (pending(v)) return;
    if (key === 'SUPPORT_EMAIL') { a.href = 'mailto:' + v; a.textContent = v; }
    else if (key === 'DOCS_BASE') { a.href = v.replace(/\/+$/, '') + '/'; a.textContent = v.replace(/^https?:\/\//, '').replace(/\/+$/, ''); }
  });

  // Text that becomes a link once the config has its address (the demo stores). Until then it
  // stays text, with a short note, so nobody follows a placeholder.
  each('[data-config-link]', function (el) {
    var v = cfg[el.getAttribute('data-config-link')];
    if (pending(v)) {
      el.classList.add('is-pending');
      el.textContent = el.textContent + ' (link coming soon)';
      return;
    }
    var a = document.createElement('a');
    a.href = v;
    a.className = el.className;
    a.textContent = el.textContent;
    el.parentNode.replaceChild(a, el);
  });

  // Plain text that shows a config value.
  each('[data-config-text]', function (el) {
    var v = cfg[el.getAttribute('data-config-text')];
    if (!pending(v)) el.textContent = v;
  });

  // Reference pages: one button opens every folded table (for searching the page).
  each('[data-open-all]', function (btn) {
    var folds = document.querySelectorAll('details.ref__fold');
    if (!folds.length) return;
    btn.hidden = false;
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('data-state') !== 'open';
      Array.prototype.forEach.call(folds, function (d) { d.open = open; });
      btn.setAttribute('data-state', open ? 'open' : 'closed');
      btn.textContent = open ? 'Close every table' : 'Open every table';
    });
  });
})();
