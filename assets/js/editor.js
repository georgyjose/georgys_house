/* Georgy Residence — switch arrangement editor.
   Seeds each board from its CAD schedule, lets you order and name the switches,
   and exports a layouts.js overlay you can commit. */
(function () {
  'use strict';

  var D = window.HOUSE_DATA;
  var API = window.GR;                 // hooks published by app.js
  if (!D || !API) return;

  var KEY = 'gr-layouts-v1';
  var K = D.deviceKinds;
  var TYPES = ['light', 'fan', 'socket', 'socket-switch', 'heavy', 'data', 'blank'];
  var TYPE_LABEL = {
    light: 'Switch', fan: 'Fan / regulator', socket: 'Socket',
    'socket-switch': 'Switch for socket', heavy: 'High load', data: 'Data', blank: 'Blank'
  };
  K.blank = { label: 'Blank', fill: 'transparent', stroke: '#c7ccd4', text: '#6b7280' };

  /* ---------- store ---------- */

  // committed arrangements ship in layouts.js; this browser's edits sit on top
  var base = window.HOUSE_LAYOUTS || {};
  var saved = {};
  Object.keys(base).forEach(function (k) { saved[k] = JSON.parse(JSON.stringify(base[k])); });
  try {
    var local = JSON.parse(localStorage.getItem(KEY) || '{}');
    Object.keys(local).forEach(function (k) { saved[k] = local[k]; });
  } catch (e) { /* storage blocked */ }
  function persist() {
    // only this browser's divergence from the committed file goes to storage
    var diff = {};
    Object.keys(saved).forEach(function (k) {
      if (JSON.stringify(saved[k]) !== JSON.stringify(base[k])) diff[k] = saved[k];
    });
    try { localStorage.setItem(KEY, JSON.stringify(diff)); } catch (e) { /* full / blocked */ }
    paintProgress();
  }

  /* ---------- seeding ---------- */

  function normType(t) {
    t = (t || '').toUpperCase().trim();
    if (t.indexOf('TWO WAY') === 0) return t.indexOf('(M') > -1 ? 'TWO WAY(M)' : 'TWO WAY';
    if (t === '5/15') return '5/15A';
    return t;
  }
  function signature(b) {
    var c = {};
    (b.devices || []).forEach(function (d) {
      var t = normType(d.t), n = parseInt(d.q, 10) || 1;
      c[t] = (c[t] || 0) + n;
    });
    return Object.keys(c).sort().map(function (k) { return k + ':' + c[k]; }).join('|');
  }
  var SIGS = {};
  D.boards.forEach(function (b) {
    if (!b.devices) return;
    var s = signature(b);
    (SIGS[s] = SIGS[s] || []).push(b.id);
  });

  // a known Figma layout per signature, used to pre-fill sibling boards
  var SIG_LAYOUT = {};
  D.boards.forEach(function (b) {
    if (b.layout && b.devices) {
      var s = signature(b);
      if (!SIG_LAYOUT[s]) SIG_LAYOUT[s] = { id: b.id, layout: b.layout };
    }
  });

  // default width + ordering weight per CAD device type
  var SPEC = {
    'ONE WAY':      { w: 1, k: 'light', o: 10 },
    'TWO WAY':      { w: 1, k: 'light', o: 20 },
    'TWO WAY(M)':   { w: 1, k: 'light', o: 21 },
    'MASTER':       { w: 1, k: 'light', o: 25 },
    'FAN KNOB':     { w: 2, k: 'fan',   o: 30 },
    'AC':           { w: 2, k: 'heavy', o: 40 },
    'MOTOR SWITCH': { w: 2, k: 'heavy', o: 41 },
    '15/30A':       { w: 2, k: 'heavy', o: 50 },
    '5/15A':        { w: 2, k: 'socket', o: 55 },
    'FLOOR MOUNT':  { w: 2, k: 'socket', o: 56 },
    'CAT 6':        { w: 1, k: 'data',  o: 60 },
    'HFL (AC)':     { w: 2, k: 'heavy', o: 45 },
    'HFL (WALL FAN)': { w: 2, k: 'fan', o: 35 }
  };

  function seed(b) {
    // 1. the board's own Figma layout wins
    if (b.layout) {
      return b.layout.modules.map(function (m) {
        return { label: m.label, type: m.type, w: m.w || 1, optional: !!m.optional };
      });
    }
    // 2. a sibling with the same device signature lends its labels
    var sib = b.devices ? SIG_LAYOUT[signature(b)] : null;
    if (sib) {
      return sib.layout.modules.map(function (m) {
        return { label: m.label, type: m.type, w: m.w || 1, optional: !!m.optional,
                 from: sib.id };
      });
    }
    // 3. otherwise expand the CAD devices into unnamed modules
    var out = [];
    (b.devices || []).forEach(function (d) {
      var t = normType(d.t), sp = SPEC[t] || { w: 1, k: 'light', o: 99 };
      var n = parseInt(d.q, 10) || 1;
      for (var i = 0; i < n; i++) {
        out.push({ label: '', type: sp.k, w: sp.w, optional: false, cad: t, o: sp.o + i * 0.01 });
      }
    });
    out.sort(function (a, c) { return (a.o || 0) - (c.o || 0); });
    out.forEach(function (m) { delete m.o; });
    return out;
  }

  function current(id) {
    if (saved[id]) return saved[id];
    var b = API.byId(id);
    var sib = (!b.layout && b.devices) ? SIG_LAYOUT[signature(b)] : null;
    var src = b.layout || (sib && sib.layout);
    return { title: (src && src.title) || '', note: (src && src.note) || '',
             faces: JSON.parse(JSON.stringify((src && src.faces) || {})),
             modules: seed(b), draft: true };
  }
  function isArranged(id) {
    var s = saved[id];
    return !!(s && s.modules && s.modules.length &&
              s.modules.every(function (m) { return (m.label || '').trim() || m.type === 'blank'; }));
  }

  /* ---------- progress ---------- */

  var progEl = document.getElementById('progress');
  var footEl = document.getElementById('side-foot');
  function paintProgress() {
    if (!progEl) return;
    var total = D.boards.filter(function (b) { return b.devices; }).length;
    var done = D.boards.filter(function (b) { return isArranged(b.id); }).length;
    progEl.innerHTML = '<div class="prog-bar"><i style="width:' +
      (total ? Math.round(done / total * 100) : 0) + '%"></i></div>' +
      '<span>' + done + ' of ' + total + ' boards arranged</span>';
    API.refreshIndex();
  }

  /* ---------- editor UI ---------- */

  var editing = false;
  var btn = document.getElementById('btn-edit');

  function setEditing(on) {
    editing = on;
    document.body.classList.toggle('editing', on);
    btn.setAttribute('aria-pressed', String(on));
    if (progEl) progEl.hidden = !on;
    if (footEl) footEl.hidden = !on;
    paintProgress();
    var cur = API.currentId();
    if (cur) API.open(cur);
  }
  if (btn) btn.onclick = function () { setEditing(!editing); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var SUGGEST = ['Tube light', 'Roof light', 'Ceiling light', 'Wall light', 'Mirror light',
    'Wardrobe light', 'Table lamp', 'Bedside lamp', 'Foot lamp', 'Dressing table light',
    'Sunshade light', 'Fan', 'Fan (2 way)', 'Fan regulator', 'Exhaust fan',
    'Plug point', 'Switch for plug point', 'Geyser', 'AC', 'Master switch', 'Bell'];

  function editorHtml(b) {
    var L = current(b.id);
    var used = L.modules.reduce(function (n, m) { return n + (m.w || 1); }, 0);
    var target = b.plate || 0;
    var sibs = (b.devices ? (SIGS[signature(b)] || []) : []).filter(function (i) { return i !== b.id; });
    var lent = L.modules.length && L.modules[0].from;

    var h = '<div class="ed">';
    h += '<label class="ed-f"><span>Board name</span>' +
         '<input id="ed-title" type="text" value="' + esc(L.title) + '" placeholder="e.g. Bedside switch"></label>';
    h += '<label class="ed-f"><span>Note</span>' +
         '<input id="ed-note" type="text" value="' + esc(L.note) + '" placeholder="e.g. Closer to the room door"></label>';
    h += '<div class="ed-f2">' +
         '<label class="ed-f"><span>Left of board</span><input id="ed-fl" type="text" value="' +
         esc(L.faces.left || '') + '" placeholder="e.g. Bed"></label>' +
         '<label class="ed-f"><span>Right of board</span><input id="ed-fr" type="text" value="' +
         esc(L.faces.right || '') + '" placeholder="e.g. Door"></label></div>';

    if (lent) {
      h += '<div class="flag todo"><svg viewBox="0 0 24 24"><path d="M12 8v5M12 16.5v.01"/>' +
           '<circle cx="12" cy="12" r="9"/></svg><span>Pre-filled from <b>' + esc(lent) +
           '</b>, which has the same devices. Edit the names to suit this room.</span></div>';
    }

    h += '<div class="pb-h">Modules, left to right' +
         '<span class="tally' + (target && used !== target ? ' warn' : '') + '">' + used + 'M' +
         (target ? ' / ' + target + 'M on drawing' : '') + '</span></div>';

    h += '<ol class="mods" id="ed-mods">';
    L.modules.forEach(function (m, i) {
      h += '<li class="mrow" data-i="' + i + '" draggable="true">' +
        '<span class="grip" aria-hidden="true">⠿</span>' +
        '<input class="m-label" type="text" value="' + esc(m.label) + '" placeholder="' +
          esc(m.cad ? m.cad.toLowerCase() : 'what it controls') + '" aria-label="Label">' +
        '<select class="m-type" aria-label="Type">' +
          TYPES.map(function (t) {
            return '<option value="' + t + '"' + (m.type === t ? ' selected' : '') + '>' +
                   TYPE_LABEL[t] + '</option>';
          }).join('') +
        '</select>' +
        '<select class="m-w" aria-label="Width">' +
          [1, 2, 3].map(function (w) {
            return '<option value="' + w + '"' + ((m.w || 1) === w ? ' selected' : '') + '>' + w + 'M</option>';
          }).join('') +
        '</select>' +
        '<button class="m-opt' + (m.optional ? ' on' : '') + '" title="Optional">opt</button>' +
        '<button class="m-up" aria-label="Move up">↑</button>' +
        '<button class="m-dn" aria-label="Move down">↓</button>' +
        '<button class="m-del" aria-label="Remove">×</button>' +
        '</li>';
    });
    h += '</ol>';
    h += '<div class="ed-add"><button class="btn" id="ed-add">+ Add module</button>' +
         '<button class="btn btn-ghost" id="ed-reset">Reset to drawing</button></div>';

    h += '<div class="pb-h">Quick names</div><div class="chips">' +
         SUGGEST.map(function (s) { return '<button class="sg">' + esc(s) + '</button>'; }).join('') +
         '</div>';

    h += '<div class="pb-h">Preview</div>' + API.plateHtml(L.modules, L.faces);

    if (sibs.length) {
      h += '<div class="pb-h">Same devices</div>' +
        '<p class="fine">' + sibs.map(esc).join(', ') + ' have an identical device list.</p>' +
        '<button class="btn" id="ed-apply">Copy this arrangement to ' + sibs.length + ' board' +
        (sibs.length > 1 ? 's' : '') + '</button>';
    }
    h += '</div>';
    return h;
  }

  function wire(b) {
    var L = current(b.id);
    var root = document.getElementById('panel-body');

    function save() {
      L.draft = false;
      saved[b.id] = { title: L.title, note: L.note, faces: L.faces, modules: L.modules };
      persist();
    }
    function redraw() { save(); API.open(b.id); }

    function field(id, set) {
      var el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('input', function () { set(el.value); save(); });
    }
    field('ed-title', function (v) { L.title = v; });
    field('ed-note', function (v) { L.note = v; });
    field('ed-fl', function (v) { L.faces = L.faces || {}; L.faces.left = v; });
    field('ed-fr', function (v) { L.faces = L.faces || {}; L.faces.right = v; });

    var list = document.getElementById('ed-mods');
    if (list) {
      Array.prototype.forEach.call(list.querySelectorAll('.mrow'), function (row) {
        var i = +row.dataset.i, m = L.modules[i];
        row.querySelector('.m-label').addEventListener('input', function (e) {
          m.label = e.target.value; delete m.from; save();
        });
        row.querySelector('.m-type').addEventListener('change', function (e) {
          m.type = e.target.value; redraw();
        });
        row.querySelector('.m-w').addEventListener('change', function (e) {
          m.w = +e.target.value; redraw();
        });
        row.querySelector('.m-opt').onclick = function () { m.optional = !m.optional; redraw(); };
        row.querySelector('.m-up').onclick = function () {
          if (i > 0) { L.modules.splice(i - 1, 0, L.modules.splice(i, 1)[0]); redraw(); }
        };
        row.querySelector('.m-dn').onclick = function () {
          if (i < L.modules.length - 1) { L.modules.splice(i + 1, 0, L.modules.splice(i, 1)[0]); redraw(); }
        };
        row.querySelector('.m-del').onclick = function () { L.modules.splice(i, 1); redraw(); };

        row.addEventListener('dragstart', function (e) {
          e.dataTransfer.setData('text/plain', String(i));
          e.dataTransfer.effectAllowed = 'move';
          row.classList.add('dragging');
        });
        row.addEventListener('dragend', function () { row.classList.remove('dragging'); });
        row.addEventListener('dragover', function (e) { e.preventDefault(); row.classList.add('over'); });
        row.addEventListener('dragleave', function () { row.classList.remove('over'); });
        row.addEventListener('drop', function (e) {
          e.preventDefault(); row.classList.remove('over');
          var from = +e.dataTransfer.getData('text/plain');
          if (from === i || isNaN(from)) return;
          L.modules.splice(i, 0, L.modules.splice(from, 1)[0]);
          redraw();
        });
      });
    }

    var add = document.getElementById('ed-add');
    if (add) add.onclick = function () {
      L.modules.push({ label: '', type: 'light', w: 1, optional: false });
      redraw();
    };
    var reset = document.getElementById('ed-reset');
    if (reset) reset.onclick = function () {
      if (base[b.id]) saved[b.id] = JSON.parse(JSON.stringify(base[b.id]));
      else delete saved[b.id];
      persist(); API.open(b.id);
    };

    // clicking a suggestion fills the focused (or first empty) label
    var lastFocus = null;
    if (root) root.addEventListener('focusin', function (e) {
      if (e.target.classList && e.target.classList.contains('m-label')) lastFocus = e.target;
    });
    Array.prototype.forEach.call(root ? root.querySelectorAll('.sg') : [], function (s) {
      s.onclick = function () {
        var target = lastFocus;
        if (!target) {
          target = Array.prototype.filter.call(root.querySelectorAll('.m-label'), function (i) {
            return !i.value.trim();
          })[0];
        }
        if (!target) return;
        target.value = s.textContent;
        var row = target.closest('.mrow');
        L.modules[+row.dataset.i].label = s.textContent;
        delete L.modules[+row.dataset.i].from;
        save();
        var nxt = Array.prototype.filter.call(root.querySelectorAll('.m-label'), function (i) {
          return !i.value.trim();
        })[0];
        lastFocus = nxt || null;
        if (nxt) nxt.focus();
        API.previewOnly(L.modules, L.faces);
      };
    });

    var apply = document.getElementById('ed-apply');
    if (apply) apply.onclick = function () {
      var sibs = (SIGS[signature(b)] || []).filter(function (i) { return i !== b.id; });
      save();
      sibs.forEach(function (id) {
        saved[id] = JSON.parse(JSON.stringify(saved[b.id]));
      });
      persist();
      apply.textContent = 'Copied to ' + sibs.join(', ');
      apply.disabled = true;
    };
  }

  /* ---------- export / import ---------- */

  function exportText() {
    var obj = {};
    Object.keys(saved).sort().forEach(function (id) {
      var s = saved[id];
      obj[id] = {
        title: s.title || '', note: s.note || '',
        faces: s.faces || {},
        modules: s.modules.map(function (m) {
          var o = { label: m.label || '', type: m.type, w: m.w || 1 };
          if (m.optional) o.optional = true;
          return o;
        })
      };
    });
    return '// Switch arrangements for Georgy Residence.\n' +
           '// Edited in the app; overrides `layout` in boards.js.\n' +
           '// Generated ' + new Date().toISOString().slice(0, 10) + '\n' +
           'window.HOUSE_LAYOUTS = ' + JSON.stringify(obj, null, 1) + ';\n';
  }
  var bx = document.getElementById('btn-export');
  if (bx) bx.onclick = function () {
    var blob = new Blob([exportText()], { type: 'text/javascript' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'layouts.js';
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
  };
  var bi = document.getElementById('btn-import');
  var fi = document.getElementById('file-import');
  if (bi && fi) {
    bi.onclick = function () { fi.click(); };
    fi.onchange = function () {
      var f = fi.files[0];
      if (!f) return;
      var r = new FileReader();
      r.onload = function () {
        var txt = String(r.result);
        var i = txt.indexOf('{'), j = txt.lastIndexOf('}');
        try {
          var obj = JSON.parse(txt.slice(i, j + 1));
          Object.keys(obj).forEach(function (k) { saved[k] = obj[k]; });
          persist();
          var cur = API.currentId();
          if (cur) API.open(cur);
        } catch (e) { alert('Could not read that file.'); }
      };
      r.readAsText(f);
      fi.value = '';
    };
  }

  /* ---------- hand the hooks back to app.js ---------- */

  API.editor = {
    active: function () { return editing; },
    html: editorHtml,
    wire: wire,
    current: current,
    isArranged: isArranged
  };

  // a saved arrangement should show in view mode too
  API.layoutFor = function (id) {
    var s = saved[id];
    if (!s) return null;
    return { title: s.title, note: s.note, faces: s.faces, modules: s.modules,
             confidence: 'yours', why: 'Your arrangement, saved in this browser.' };
  };

  paintProgress();
})();
