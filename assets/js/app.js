/* Georgy Residence — electrical plan viewer */
(function () {
  'use strict';

  var GR = window.GR = window.GR || {};
  var D = window.HOUSE_DATA;
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var host = document.getElementById('plan-host');
  var $ = function (id) { return document.getElementById(id); };

  /* ---------------- plan ---------------- */

  host.innerHTML = window.PLAN_SVG;
  var svg = host.querySelector('svg');
  svg.setAttribute('id', 'plan-svg');

  var base = D.meta.viewBox.split(/\s+/).map(Number);
  var view = { x: base[0], y: base[1], w: base[2], h: base[3] };
  var lastK = null;
  // marker sizes are authored for a 928-unit-wide plan; scale to this drawing
  var SC = base[2] / 928;
  var R_RING = 5 * SC, R_CORE = 1.9 * SC, R_HIT = 11 * SC, LAB_OFF = 8.5 * SC, LAB_FS = 7.6 * SC;

  function applyView() {
    svg.setAttribute('viewBox', view.x + ' ' + view.y + ' ' + view.w + ' ' + view.h);
    // keep markers a constant size on screen regardless of zoom
    var k = view.w / base[2];
    if (markers && k !== lastK) {
      lastK = k;
      markers.style.fontSize = (LAB_FS * k) + 'px';
      markers.style.setProperty('--mk-k', k);
      markers.style.setProperty('--mk-r', (R_RING * k) + 'px');
      markers.style.setProperty('--mk-r2', (R_RING * 3.4 * k) + 'px');
      for (var i = 0; i < markerScaled.length; i++) {
        var s = markerScaled[i];
        if (s.set) s.set(k);
        else s.el.setAttribute(s.attr, (s.v * k).toFixed(2));
      }
    }
  }

  // Keep the plan's aspect independent of the stage so nothing is cropped.
  function fit() {
    view = { x: base[0], y: base[1], w: base[2], h: base[3] };
    applyView();
  }
  applyView();

  /* ---------------- markers ---------------- */

  var markers = null;
  var markerScaled = [];
  var byId = {};
  var markerEls = {};

  markers = document.createElementNS(SVG_NS, 'g');
  markers.setAttribute('id', 'markers');
  svg.appendChild(markers);

  D.boards.forEach(function (b) {
    byId[b.id] = b;
    var done = !!(b.devices && b.devices.length);

    var g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('class', 'mk' + (done ? '' : ' todo') + (b.layout ? ' lay' : ''));
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'button');
    g.setAttribute('aria-label', 'Switchboard ' + b.id + ', ' + b.room);

    var pulse = document.createElementNS(SVG_NS, 'circle');
    pulse.setAttribute('class', 'mk-pulse');
    pulse.setAttribute('cx', b.x); pulse.setAttribute('cy', b.y); pulse.setAttribute('r', R_RING);

    var ring = document.createElementNS(SVG_NS, 'circle');
    ring.setAttribute('class', 'mk-ring');
    ring.setAttribute('cx', b.x); ring.setAttribute('cy', b.y); ring.setAttribute('r', R_RING);

    var core = document.createElementNS(SVG_NS, 'circle');
    core.setAttribute('class', 'mk-core');
    core.setAttribute('cx', b.x); core.setAttribute('cy', b.y); core.setAttribute('r', R_CORE);

    var hit = document.createElementNS(SVG_NS, 'circle');
    hit.setAttribute('class', 'mk-hit');
    hit.setAttribute('cx', b.x); hit.setAttribute('cy', b.y); hit.setAttribute('r', R_HIT);

    var lab = document.createElementNS(SVG_NS, 'text');
    lab.setAttribute('class', 'mk-label');
    lab.setAttribute('x', b.x); lab.setAttribute('y', b.y - LAB_OFF);
    lab.setAttribute('text-anchor', 'middle');
    lab.textContent = b.id;

    markerScaled.push(
      { el: pulse, attr: 'r', v: R_RING }, { el: ring, attr: 'r', v: R_RING },
      { el: core, attr: 'r', v: R_CORE }, { el: hit, attr: 'r', v: R_HIT },
      { el: lab, attr: 'y', v: 0 }
    );
    // label offset scales too — store the anchor separately
    markerScaled[markerScaled.length - 1] = {
      el: lab, attr: 'y', v: 0, base: b.y, off: -7.5,
      set: function (k) { lab.setAttribute('y', (b.y - LAB_OFF * k).toFixed(2)); }
    };

    g.appendChild(pulse); g.appendChild(ring); g.appendChild(core);
    g.appendChild(lab); g.appendChild(hit);
    markers.appendChild(g);
    markerEls[b.id] = g;

    g.addEventListener('click', function (e) { e.stopPropagation(); open(b.id); });
    g.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(b.id); }
    });
  });

  /* ---------------- pan & zoom ---------------- */

  var MIN_W = base[2] * 0.055, MAX_W = base[2] * 1.6;

  function clientToSvg(cx, cy) {
    var r = svg.getBoundingClientRect();
    // account for preserveAspectRatio letterboxing
    var scale = Math.min(r.width / view.w, r.height / view.h);
    var offX = (r.width - view.w * scale) / 2;
    var offY = (r.height - view.h * scale) / 2;
    return {
      x: view.x + (cx - r.left - offX) / scale,
      y: view.y + (cy - r.top - offY) / scale,
      scale: scale
    };
  }

  function zoomAt(cx, cy, factor) {
    var p = clientToSvg(cx, cy);
    var nw = Math.min(MAX_W, Math.max(MIN_W, view.w * factor));
    var k = nw / view.w;
    view.x = p.x - (p.x - view.x) * k;
    view.y = p.y - (p.y - view.y) * k;
    view.w = nw;
    view.h = view.h * k;
    applyView();
  }

  host.addEventListener('wheel', function (e) {
    e.preventDefault();
    zoomAt(e.clientX, e.clientY, Math.exp(e.deltaY * 0.0012));
  }, { passive: false });

  var drag = null;
  host.addEventListener('pointerdown', function (e) {
    if (e.target.closest('.mk')) return;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false };
    host.setPointerCapture(e.pointerId);
    host.classList.add('dragging');
  });
  host.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var r = svg.getBoundingClientRect();
    var scale = Math.min(r.width / view.w, r.height / view.h);
    view.x -= (e.clientX - drag.x) / scale;
    view.y -= (e.clientY - drag.y) / scale;
    drag.x = e.clientX; drag.y = e.clientY; drag.moved = true;
    applyView();
  });
  function endDrag(e) {
    if (!drag || e.pointerId !== drag.id) return;
    drag = null; host.classList.remove('dragging');
  }
  host.addEventListener('pointerup', endDrag);
  host.addEventListener('pointercancel', endDrag);

  // pinch
  var pts = {}, pinch = null;
  host.addEventListener('pointerdown', function (e) { pts[e.pointerId] = e; });
  host.addEventListener('pointermove', function (e) {
    if (!(e.pointerId in pts)) return;
    pts[e.pointerId] = e;
    var ids = Object.keys(pts);
    if (ids.length !== 2) { pinch = null; return; }
    var a = pts[ids[0]], b = pts[ids[1]];
    var dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    var mx = (a.clientX + b.clientX) / 2, my = (a.clientY + b.clientY) / 2;
    if (pinch) { drag = null; zoomAt(mx, my, pinch / dist); }
    pinch = dist;
  });
  function clearPt(e) { delete pts[e.pointerId]; if (Object.keys(pts).length < 2) pinch = null; }
  host.addEventListener('pointerup', clearPt);
  host.addEventListener('pointercancel', clearPt);

  $('zoom-in').onclick = function () { var r = svg.getBoundingClientRect(); zoomAt(r.left + r.width / 2, r.top + r.height / 2, 1 / 1.35); };
  $('zoom-out').onclick = function () { var r = svg.getBoundingClientRect(); zoomAt(r.left + r.width / 2, r.top + r.height / 2, 1.35); };
  $('zoom-reset').onclick = function () { fit(); };

  function flyTo(b) {
    var targetW = Math.min(view.w, base[2] * 0.2);
    view.h = targetW * (view.h / view.w);
    view.w = targetW;
    // if the side panel covers part of the stage, bias the centre left
    var bias = 0;
    if (!panel.hidden && !isNarrow()) {
      var r = svg.getBoundingClientRect();
      bias = (panel.getBoundingClientRect().width / r.width) * view.w * 0.5;
    }
    view.x = b.x - view.w / 2 + bias;
    view.y = b.y - view.h / 2;
    applyView();
  }

  /* ---------------- layers ---------------- */

  var layerBox = $('layers');
  var LKEY = 'gr-layers-v1';

  var prefs = {};
  try { prefs = JSON.parse(localStorage.getItem(LKEY) || '{}') || {}; } catch (e) { prefs = {}; }
  function savePrefs() {
    try { localStorage.setItem(LKEY, JSON.stringify(prefs)); } catch (e) { /* blocked */ }
  }

  var chips = {};
  D.layers.forEach(function (L) {
    // a remembered choice wins over the drawing's default
    var on = L.locked ? true : (L.id in prefs ? !!prefs[L.id] : !!L.on);

    var btn = document.createElement('button');
    btn.className = 'layer-chip';
    btn.type = 'button';
    btn.setAttribute('aria-pressed', String(on));
    if (L.locked) btn.setAttribute('data-locked', 'true');
    btn.style.color = 'var(--c-' + L.id + ', var(--ink-2))';
    btn.innerHTML = '<i class="swatch"></i><span>' + L.label + '</span>';
    if (L.older) btn.classList.add('older');
    document.body.classList.toggle('off-' + L.id, !on);
    btn.onclick = function () {
      if (L.locked) return;
      var next = btn.getAttribute('aria-pressed') !== 'true';
      btn.setAttribute('aria-pressed', String(next));
      document.body.classList.toggle('off-' + L.id, !next);
      prefs[L.id] = next;
      savePrefs();
      markDefaults();
    };
    chips[L.id] = btn;
    layerBox.appendChild(btn);
  });

  // a small reset appears once the layers differ from the drawing's defaults
  var resetBtn = document.createElement('button');
  resetBtn.className = 'layer-chip reset-layers';
  resetBtn.type = 'button';
  resetBtn.title = 'Back to the default layers';
  resetBtn.innerHTML = '<span>Reset layers</span>';
  resetBtn.onclick = function () {
    prefs = {};
    savePrefs();
    D.layers.forEach(function (L) {
      var on = L.locked ? true : !!L.on;
      chips[L.id].setAttribute('aria-pressed', String(on));
      document.body.classList.toggle('off-' + L.id, !on);
    });
    markDefaults();
  };
  layerBox.appendChild(resetBtn);

  function markDefaults() {
    var changed = D.layers.some(function (L) {
      if (L.locked) return false;
      return (L.id in prefs) && !!prefs[L.id] !== !!L.on;
    });
    resetBtn.hidden = !changed;
  }
  markDefaults();

  /* ---------------- index ---------------- */

  var listEl = $('index-list');

  function summarise(b) {
    var sw = 0, sk = 0, other = [];
    b.devices.forEach(function (d) {
      var n = parseInt(d.q, 10) || 1;
      if (d.kind === 'light') sw += n;
      else if (d.kind === 'socket' || d.kind === 'socket-switch') sk += n;
      else other.push(n > 1 ? n + '\u00d7 ' + d.label.toLowerCase() : d.label.toLowerCase());
    });
    var bits = [];
    if (sw) bits.push(sw + ' switch' + (sw > 1 ? 'es' : ''));
    if (sk) bits.push(sk + ' socket' + (sk > 1 ? 's' : ''));
    return bits.concat(other).join(' \u00b7 ');
  }

  function renderIndex(q) {
    q = (q || '').trim().toLowerCase();
    listEl.innerHTML = '';
    var shown = 0;
    D.rooms.forEach(function (room) {
      var items = D.boards.filter(function (b) {
        if (b.room !== room) return false;
        if (!q) return true;
        var hay = b.id + ' ' + b.room + ' ' + (b.layout ? b.layout.title + ' ' + b.layout.note : '') +
          ' ' + (b.devices || []).map(function (d) { return d.label + ' ' + d.t; }).join(' ') +
          (b.hfl ? ' ' + b.hfl.cm : '');
        return hay.toLowerCase().indexOf(q) > -1;
      });
      if (!items.length) return;
      shown += items.length;
      var wrap = document.createElement('div');
      wrap.className = 'room-group';
      var h = document.createElement('div');
      h.className = 'room-head';
      h.textContent = room;
      wrap.appendChild(h);
      items.forEach(function (b) {
        var done = !!(b.devices && b.devices.length);
        var btn = document.createElement('button');
        btn.className = 'board-btn' + (done ? ' done' : '') + (b.layout ? ' has-layout' : '');
        btn.type = 'button';
        btn.dataset.id = b.id;
        btn.innerHTML = '<span class="tag"></span><span class="name"></span><span class="meta"></span>';
        btn.querySelector('.tag').textContent = b.id;
        var mine2 = GR.layoutFor ? GR.layoutFor(b.id) : null;
        var nm = (mine2 && mine2.title) || (b.layout && b.layout.title);
        if (GR.editor && GR.editor.isArranged(b.id)) btn.classList.add('arranged');
        btn.querySelector('.name').textContent = nm || (done ? summarise(b) : 'No schedule on drawing');
        btn.querySelector('.meta').textContent = b.plate ? b.plate + 'M' : '';
        btn.onclick = function () { open(b.id, true); };
        wrap.appendChild(btn);
      });
      listEl.appendChild(wrap);
    });
    if (!shown) {
      var p = document.createElement('p');
      p.className = 'empty-note';
      p.textContent = 'Nothing matches “' + q + '”.';
      listEl.appendChild(p);
    }
  }
  renderIndex();

  $('search').addEventListener('input', function (e) { renderIndex(e.target.value); });

  /* ---------------- panel ---------------- */

  var panel = $('panel'), panelBody = $('panel-body'), scrim = $('scrim');
  var current = null;
  var isNarrow = function () { return window.matchMedia('(max-width:900px)').matches; };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  var K = D.deviceKinds;

  function scheduleHtml(b) {
    var h = '<div class="spec">';
    h += '<div class="spec-top">';
    if (b.plate) h += '<div class="chip chip-plate"><b>' + b.plate + 'M</b><span>plate</span></div>';
    else if (b.plateTable) h += '<div class="chip chip-plate"><b>' + b.plateTable + 'M</b><span>plate</span></div>';
    if (b.hfl) {
      h += '<div class="chip"><b>' + esc(b.hfl.cm) + ' cm</b><span>' +
           (b.hfl.approx ? 'height ~' : 'height') + '</span></div>';
    }
    var n = b.devices.reduce(function (s, d) { return s + (parseInt(d.q, 10) || 1); }, 0);
    h += '<div class="chip"><b>' + n + '</b><span>points</span></div>';
    h += '</div>';
    h += '<table class="dev"><tbody>';
    b.devices.forEach(function (d) {
      var k = K[d.kind] || K.light;
      h += '<tr><td class="dev-sw"><i style="--k-f:' + k.fill + ';--k-s:' + k.stroke + '"></i></td>' +
           '<td class="dev-n">' + esc(d.label) + '</td>' +
           '<td class="dev-q">' + esc(d.q || '1') + '</td></tr>';
    });
    h += '</tbody></table>';
    if (b.hfl && b.hfl.approx) h += '<p class="fine">* height marked approximate on the drawing.</p>';
    if (b.plateConflict) {
      h += '<div class="flag todo"><svg viewBox="0 0 24 24"><path d="M12 8v5M12 16.5v.01"/>' +
        '<circle cx="12" cy="12" r="9"/></svg><span>The two Rev 8 sheets disagree on this board: ' +
        'the schedule table says <b>' + b.plate + 'M</b>, the module-box count says <b>' +
        b.plateTable + 'M</b>. Worth checking with Sourorja.</span></div>';
    }
    h += '</div>';
    return h;
  }

  function plateHtml(modules, faces, note) {
    faces = faces || {};
    var total = modules.reduce(function (n, m) { return n + (m.w || 1); }, 0);
    var h = '<div class="board-wrap">';
    if (faces.left || faces.right) {
      h += '<div class="board-faces"><span>' + (faces.left ? '&larr; ' + esc(faces.left) : '') +
           '</span><span>' + (faces.right ? esc(faces.right) + ' &rarr;' : '') + '</span></div>';
    }
    h += '<div class="plate">';
    modules.forEach(function (m) {
      var t = K[m.type] || K.light;
      var w = (m.w || 1) === 1 ? 52 : (m.w || 1) * 50;
      h += '<div class="mod' + (m.optional ? ' optional' : '') + (m.label ? '' : ' unnamed') +
        '" style="width:' + w + 'px;--mod-fill:' + t.fill + ';--mod-stroke:' + t.stroke +
        ';--mod-text:' + t.text + '" title="' + esc(m.label || '') + '">' +
        (m.optional ? '<span class="opt">opt</span>' : '') +
        '<span>' + esc(m.label || (m.cad ? m.cad.toLowerCase() : '—')) + '</span></div>';
    });
    h += '</div><div class="plate-meta"><span>' + modules.length + ' positions</span>' +
         '<span>' + total + 'M' + (note ? ' ' + note : '') + '</span></div></div>';
    return h;
  }

  function layoutHtml(L) {
    var src = L.confidence === 'yours' ? 'yours' : 'from Figma';
    var h = '<div class="pb-h">Physical layout <span class="src">' + src + '</span></div>';
    if (L.confidence !== 'yours') {
      h += '<div class="flag ' + (L.confidence === 'strong' ? '' : 'todo') + '">' +
        '<svg viewBox="0 0 24 24"><path d="M12 8v5M12 16.5v.01"/><circle cx="12" cy="12" r="9"/></svg>' +
        '<span><b>' + (L.confidence === 'strong' ? 'Confident match' : 'Likely match') + '.</b> ' +
        esc(L.why) + '</span></div>';
    }
    return h + plateHtml(L.modules, L.faces, 'as drawn');
  }

  function open(id, fly) {
    var b = byId[id];
    if (!b) return;
    current = id;

    Object.keys(markerEls).forEach(function (k) { markerEls[k].classList.remove('active'); });
    markerEls[id].classList.add('active');
    Array.prototype.forEach.call(listEl.querySelectorAll('.board-btn'), function (el) {
      el.setAttribute('aria-current', String(el.dataset.id === id));
    });

    var done = !!(b.devices && b.devices.length);
    var h = '';
    h += '<div class="pb-eyebrow"><span class="pb-id' + (done ? '' : ' todo') + '">' + esc(b.id) + '</span><span>' + esc(b.room) + '</span></div>';
    var nameSrc = (GR.layoutFor && GR.layoutFor(b.id)) || b.layout;
    h += '<h2 class="pb-title" id="panel-title">' +
         esc((nameSrc && nameSrc.title) || ('Switchboard ' + b.id)) + '</h2>';
    h += '<p class="pb-sub">' + esc((nameSrc && nameSrc.note) ||
         (done ? 'Schedule from the Rev 8 drawing.' : 'No schedule on the drawing for this board.')) + '</p>';

    if (done) h += scheduleHtml(b);
    else h += '<div class="flag todo"><svg viewBox="0 0 24 24"><path d="M12 8v5M12 16.5v.01"/><circle cx="12" cy="12" r="9"/></svg>' +
              '<span>This board is marked on the plan but has no schedule table on Rev 8.</span></div>';

    var ed = GR.editor;
    var mine = GR.layoutFor ? GR.layoutFor(b.id) : null;
    if (ed && ed.active()) {
      h += ed.html(b);
    } else if (mine) {
      h += layoutHtml(mine);
    } else if (b.layout) {
      h += layoutHtml(b.layout);
    }

    h += '<div class="pb-h">Location</div><dl class="kv">' +
         '<dt>Room</dt><dd>' + esc(b.room) +
           (b.roomGuess ? ' <span class="fine">(from position — not in the module table)</span>' : '') +
           '</dd>' +
         '<dt>Board</dt><dd>' + esc(b.id) + '</dd>' +
         '</dl>';

    h += '<div class="pb-actions"><button class="btn" id="btn-locate">Zoom to this board</button></div>';

    panelBody.innerHTML = h;
    panel.hidden = false;
    scrim.hidden = !isNarrow();

    if (ed && ed.active()) ed.wire(b);
    var loc = $('btn-locate');
    if (loc) loc.onclick = function () { flyTo(b); };
    if (fly) flyTo(b);

    $('hint').classList.add('gone');
  }

  function close() {
    panel.hidden = true;
    scrim.hidden = true;
    current = null;
    Object.keys(markerEls).forEach(function (k) { markerEls[k].classList.remove('active'); });
    Array.prototype.forEach.call(listEl.querySelectorAll('.board-btn'), function (el) {
      el.setAttribute('aria-current', 'false');
    });
  }

  $('panel-close').onclick = close;
  scrim.onclick = close;
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
    if (e.key === '/' && document.activeElement !== $('search')) { e.preventDefault(); $('search').focus(); }
  });

  /* ---------------- chrome ---------------- */

  var btnIndex = $('btn-index');
  if (isNarrow()) document.body.classList.add('no-index');
  btnIndex.onclick = function () {
    var hidden = document.body.classList.toggle('no-index');
    btnIndex.setAttribute('aria-expanded', String(!hidden));
  };
  btnIndex.setAttribute('aria-expanded', String(!document.body.classList.contains('no-index')));

  var btnInfo = $('btn-info');
  if (btnInfo) btnInfo.onclick = function () {
    var m = D.meta, dr = m.drawing || {};
    var h = '<div class="pb-eyebrow"><span class="pb-id">REV ' + esc(dr.rev || '') + '</span><span>' +
            esc(dr.date || '') + '</span></div>';
    h += '<h2 class="pb-title" id="panel-title">' + esc(dr.name || m.subtitle) + '</h2>';
    h += '<p class="pb-sub">' + esc(dr.by || '') + (dr.project ? ' &middot; ' + esc(dr.project) : '') + '</p>';
    if (m.notes && m.notes.length) {
      h += '<div class="pb-h">Notes on the drawing</div><ol class="notes">';
      m.notes.forEach(function (n) { h += '<li>' + esc(n) + '</li>'; });
      h += '</ol>';
    }
    h += '<div class="pb-h">Counts</div><dl class="kv">' +
      '<dt>Boards marked</dt><dd>' + D.boards.length + '</dd>' +
      '<dt>With a schedule</dt><dd>' + D.boards.filter(function (b) { return b.devices; }).length + '</dd>' +
      '<dt>With a Figma layout</dt><dd>' + D.boards.filter(function (b) { return b.layout; }).length + '</dd>' +
      '<dt>Rooms</dt><dd>' + D.rooms.length + '</dd></dl>';
    if (m.sheets) {
      h += '<div class="pb-h">Drawing set</div><div class="sheets">';
      m.sheets.forEach(function (sh) {
        h += '<div class="sheet"><b>' + esc(sh[0]) + '</b><i>' + esc(sh[1]) + '</i>' +
             '<span>' + esc(sh[2]) + '</span></div>';
      });
      h += '</div>';
    }
    if (m.gi && m.gi.length) {
      var tot = 0, mods = 0;
      m.gi.forEach(function (r) { tot += r[1]; mods += r[0] * r[1]; });
      h += '<div class="pb-h">GI boxes to order</div>' +
        '<table class="gi"><thead><tr><th>Module box</th><th style="text-align:right">Count</th></tr></thead><tbody>';
      m.gi.forEach(function (r) { h += '<tr><td>' + r[0] + 'M</td><td>' + r[1] + '</td></tr>'; });
      h += '<tr><td>Total</td><td>' + tot + ' boxes</td></tr></tbody></table>';
      if (m.giNote) m.giNote.forEach(function (n) { h += '<p class="fine">' + esc(n) + '</p>'; });
    }
    var conf = D.boards.filter(function (b) { return b.plateConflict; });
    if (conf.length) {
      h += '<div class="pb-h">Sheets disagree</div>';
      conf.forEach(function (b) {
        h += '<div class="flag todo"><svg viewBox="0 0 24 24"><path d="M12 8v5M12 16.5v.01"/>' +
          '<circle cx="12" cy="12" r="9"/></svg><span><b>' + esc(b.id) + '</b> — schedule table ' +
          b.plate + 'M, module-box count ' + b.plateTable + 'M.</span></div>';
      });
    }
    if (m.legend && m.legend.length) {
      h += '<div class="pb-h">Symbols (Rev 5 key)</div><dl class="kv">';
      m.legend.forEach(function (r) {
        h += '<dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd>';
      });
      h += '</dl>';
    }
    if (m.unmatchedLayouts && m.unmatchedLayouts.length) {
      h += '<div class="pb-h">Figma layouts with no Rev 8 match</div>';
      m.unmatchedLayouts.forEach(function (u) {
        h += '<div class="flag todo"><svg viewBox="0 0 24 24"><path d="M12 8v5M12 16.5v.01"/>' +
             '<circle cx="12" cy="12" r="9"/></svg><span><b>' + esc(u.title) + '</b><br>' +
             esc(u.why) + '</span></div>';
      });
    }
    panelBody.innerHTML = h;
    panel.hidden = false;
    scrim.hidden = !isNarrow();
  };

  var btnTheme = $('btn-theme');
  try {
    var saved = localStorage.getItem('gr-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  } catch (err) { /* storage unavailable */ }
  btnTheme.onclick = function () {
    var cur = document.documentElement.getAttribute('data-theme');
    if (!cur) cur = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('gr-theme', next); } catch (err) { /* ignore */ }
  };

  setTimeout(function () { $('hint').classList.add('gone'); }, 7000);

  /* ---------------- hooks for the editor ---------------- */

  GR.byId = function (id) { return byId[id]; };
  GR.open = open;
  GR.currentId = function () { return current; };
  GR.refreshIndex = function () { renderIndex($('search').value); };
  GR.plateHtml = plateHtml;
  GR.previewOnly = function () { /* full redraw happens on save */ };

  // deep link: index.html#S13
  var hash = (location.hash || '').replace('#', '');
  if (hash && byId[hash]) open(hash, true);
  window.addEventListener('hashchange', function () {
    var h2 = (location.hash || '').replace('#', '');
    if (h2 && byId[h2]) open(h2, true);
  });
})();
