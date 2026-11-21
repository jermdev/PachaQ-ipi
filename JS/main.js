/* ===== PachaQ'ipi · JS principal ===== */
(function () {
  'use strict';

  /* ---------- Íconos ---------- */
  const ICONS = {
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    sparkle: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    wifioff: '<path d="M1 1l22 22"/><path d="M16.7 11.1A11 11 0 0 1 21 13.6"/><path d="M5 12.9a11 11 0 0 1 5.2-2.8"/><path d="M8.5 16.4a6 6 0 0 1 7 0"/><path d="M12 20h.01"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    bag: '<rect x="4" y="8" width="16" height="13" rx="3"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    trophy: '<path d="M6 9H4a2 2 0 0 1-2-2V5h4"/><path d="M18 9h2a2 2 0 0 0 2-2V5h-4"/><path d="M6 3h12v6a6 6 0 0 1-12 0z"/><path d="M12 15v4"/><path d="M8 21h8"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
    play: '<polygon points="6 4 20 12 6 20 6 4"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M12 18h.01"/>',
    arrow: '<path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    alert: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5"/><path d="M12 16h.01"/>',
    chevron: '<path d="M9 6l6 6-6 6"/>'
  };
  const ic = (n, s) => `<svg width="${s || 18}" height="${s || 18}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`;

  const root = document.body.dataset.root || '';
  const page = document.body.dataset.page || '';
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ---------- Componentes compartidos ---------- */
  function headerHTML() {
    const links = [
      ['inicio', 'Inicio', root + 'index.html'],
      ['servicios', 'Servicios', root + 'Pages/servicios.html'],
      ['nosotros', 'Nosotros', root + 'Pages/nosotros.html'],
      ['contacto', 'Contacto', root + 'Pages/contacto.html']
    ];
    const nav = links.map(l => `<a href="${l[2]}" class="${page === l[0] ? 'active' : ''}">${l[1]}</a>`).join('');
    const right = page === 'perfil'
      ? `<span style="font-size:14px;font-weight:500">Joquer Querales</span><span class="avatar-mini">JQ</span>`
      : `<a class="btn btn-outline" href="${root}Pages/perfil.html">Iniciar Sesión</a>`;
    const navBlock = page === 'perfil' ? '<nav style="visibility:hidden"></nav>' : `<nav id="main-nav">${nav}</nav>`;
    return `<div class="container nav">
      <a class="brand" href="${root}index.html"><span class="logo">${ic('home', 18)}</span>PachaQ'ipi</a>
      ${navBlock}
      <button class="menu-toggle" aria-label="Abrir menú" id="menu-toggle">☰</button>
      ${right}
    </div>`;
  }
  function footerHTML() {
    return `<div class="container"><span>© 2026 PachaQ'ipi · Kawsay Startup</span>
      <nav><a href="#">Términos</a><a href="#">Privacidad</a><a href="#">Soporte</a></nav></div>`;
  }
  function phoneHTML() {
    return `<div class="phone">
      <div class="phone-top"><small>Buenos días</small><b>Familia Querales</b><span class="jq">JQ</span></div>
      <div class="phone-body">
        <div class="pcard"><div class="row"><b>Preparación familiar</b><span class="pill">En progreso</span></div>
          <div class="row" style="justify-content:flex-start;gap:10px;margin-top:6px">
            <div class="ring"><span>62%</span></div>
            <div><div>3 tareas pendientes para estar 100% listos</div><small style="color:#6f5b4e;font-size:7px">Mochila 60% · Zonas seguras 1 de 2</small></div>
          </div></div>
        <div class="pcard"><div class="row"><b>Diagnóstico IA</b><span class="pill">Riesgo medio</span></div>
          <div style="margin-top:4px">Reforzar anclajes en el 2.º piso y completar insumos de la mochila.</div></div>
        <b style="font-size:9px">Tareas pendientes</b>
        <div class="ptask"><span class="ico">${ic('bag', 12)}</span><div style="flex:1"><b>Completar la mochila de emergencia</b><small>Faltan 4 artículos</small></div>${ic('chevron', 10)}</div>
        <div class="ptask"><span class="ico">${ic('pin', 12)}</span><div style="flex:1"><b>Registrar zona segura externa</b><small>Punto de encuentro</small></div>${ic('chevron', 10)}</div>
        <div class="pbtns"><span class="g">✓ ¡Estoy bien!</span><span class="r">⊘ Ayuda</span></div>
      </div>
      <div class="ptab"><span>🏠<br>Inicio</span><span>👥<br>Familia</span><span>☰<br>Plan</span></div>
    </div>`;
  }

  const h = $('#site-header'); if (h) { h.className = 'site-header'; h.innerHTML = headerHTML(); }
  const f = $('#site-footer'); if (f) { f.className = 'site-footer'; f.innerHTML = footerHTML(); }
  $$('[data-phone]').forEach(el => { el.innerHTML = phoneHTML(); });
  $$('[data-ic]').forEach(el => { el.innerHTML = ic(el.dataset.ic, +el.dataset.size || 18); el.style.display = 'inline-flex'; });
  const mt = $('#menu-toggle'); if (mt) mt.addEventListener('click', () => { const n = $('#main-nav'); if (n) n.classList.toggle('open'); });

  /* ---------- Newsletter ---------- */
  const nl = $('#newsletter-form');
  if (nl) nl.addEventListener('submit', e => {
    e.preventDefault();
    const v = $('#nl-email').value.trim(), m = $('#nl-msg');
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { m.textContent = '¡Listo! Te suscribiste al boletín preventivo.'; nl.reset(); }
    else m.textContent = 'Ingresa un correo válido.';
  });

  /* ---------- Datos de demo ---------- */
  const FAMILY = [
    { id: 'papa', nombre: 'Papá', lugar: 'trabajo', letra: 'P', hora: 'Hoy, 8:42', estado: 'warn', x: 170, y: 80 },
    { id: 'mama', nombre: 'Mamá', lugar: 'Mercado', letra: 'M', hora: 'Hoy, 8:45', estado: 'ok', x: 95, y: 200 },
    { id: 'diego', nombre: 'Diego', lugar: 'Universidad', letra: 'D', hora: 'Hoy, 9:10', estado: 'ok', x: 255, y: 125 },
    { id: 'abuela', nombre: 'Abuela', lugar: 'Casa', letra: 'A', hora: 'Hoy, 9:10', estado: 'danger', x: 440, y: 150 }
  ];
  const ESTADO = {
    warn: { txt: 'Sin confirmar', ico: 'clock' },
    ok: { txt: 'A salvo', ico: 'check' },
    danger: { txt: 'Requiere auxilio', ico: 'alert' }
  };
  const badge = e => `<span class="badge ${e}">${ic(ESTADO[e].ico, 12)} ${ESTADO[e].txt}</span>`;
  const PLACES = { casa: { x: 440, y: 150, n: 'Casa' }, colegio: { x: 560, y: 205, n: 'Colegio' }, estadio: { x: 235, y: 215, n: 'Estadio municipal' } };

  /* ---------- Mapa SVG ---------- */
  const pinPath = (x, y, c) => `<g transform="translate(${x - 9},${y - 24})"><path d="M9 0C4 0 0 4 0 9c0 7 9 15 9 15s9-8 9-15c0-5-4-9-9-9z" fill="${c}"/><circle cx="9" cy="9" r="3.5" fill="#fff"/></g>`;
  const REPORT_PINS = [[120, 55], [215, 45], [290, 40], [260, 60], [360, 75], [395, 105], [400, 85], [410, 120], [440, 100], [345, 125], [55, 175], [75, 195], [30, 190], [430, 195]];

  function mapSVG(o) {
    o = o || {};
    const members = o.members || [];
    const colorOf = s => s === 'ok' ? '#2f7d32' : s === 'danger' ? '#d13438' : '#e55a0c';
    let s = `<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa de la zona">
      <rect width="800" height="300" fill="#ede5d8"/>
      <g fill="#fff">
        <rect x="0" y="168" width="800" height="16"/><rect x="0" y="232" width="520" height="14"/>
        <rect x="118" y="0" width="14" height="300"/><rect x="296" y="0" width="14" height="300"/><rect x="470" y="0" width="14" height="190"/>
      </g>
      <g fill="none" stroke="#3a2a20" stroke-width="1" opacity=".75">
        <ellipse cx="610" cy="120" rx="55" ry="32"/><ellipse cx="610" cy="120" rx="115" ry="62"/>
        <ellipse cx="600" cy="120" rx="185" ry="95"/><ellipse cx="590" cy="120" rx="270" ry="135"/>
      </g>
      <rect x="520" y="175" width="80" height="45" rx="6" fill="#dcebd9" opacity=".8"/>
      <ellipse cx="330" cy="300" rx="110" ry="62" fill="#cfe5f7"/>
      <text x="330" y="286" font-size="11" text-anchor="middle" fill="#3a2418">Zona tsunami</text>
      <rect x="322" y="228" width="16" height="62" fill="#f4b183"/><text x="330" y="240" font-size="8" text-anchor="middle" fill="#3a2418">puente</text>
      <path d="M640 0h160v75a12 12 0 0 1-12 12H652a12 12 0 0 1-12-12z" fill="#6b4a38"/><text x="720" y="42" font-size="11" text-anchor="middle" fill="#fff">Ladera</text>
      <rect x="548" y="190" width="24" height="16" rx="3" fill="#c9d8a8" stroke="#6b7f3a"/><text x="560" y="201" font-size="7" text-anchor="middle">Colegio</text>
      <rect x="222" y="205" width="26" height="16" rx="3" fill="#c9d8a8" stroke="#6b7f3a"/><text x="235" y="216" font-size="7" text-anchor="middle">Estadio</text>`;
    if (o.reports !== false) REPORT_PINS.forEach(p => { s += pinPath(p[0], p[1], '#e55a0c'); });
    (o.extraPlaces || []).forEach(k => {
      const p = PLACES[k]; if (!p) return;
      s += `<circle cx="${p.x}" cy="${p.y}" r="14" fill="#c9d8a8" stroke="#6b7f3a" stroke-width="2"/><text x="${p.x}" y="${p.y + 3}" font-size="8" text-anchor="middle" font-weight="700">${p.n.split(' ')[0].slice(0, 5)}</text>`;
    });
    if (o.route) {
      const a = o.route.from, b = o.route.to;
      s += `<line x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke="#2f7d32" stroke-width="3" stroke-dasharray="6 6" opacity=".5"/>
            <polyline points="${a.x},${a.y} ${b.x},${a.y} ${b.x},${b.y}" fill="none" stroke="#2f7d32" stroke-width="4" stroke-linejoin="round"/>`;
    }
    members.forEach(m => {
      const c = colorOf(m.estado), sel = o.selected === m.id;
      s += `<g class="pin-member" data-id="${m.id}"><circle cx="${m.x}" cy="${m.y}" r="${sel ? 17 : 13}" fill="#f2ede4" stroke="${c}" stroke-width="${sel ? 4 : 2.5}"/>
            <text x="${m.x}" y="${m.y + 4}" font-size="11" font-weight="700" text-anchor="middle" fill="#3a2418">${m.letra}</text></g>`;
    });
    s += `</svg>`;
    return s;
  }
  const drawMap = (el, o) => { el.innerHTML = mapSVG(o); };

  /* ================= HU-020 · Mapa familiar ================= */
  const demoMapa = $('#demo-mapa');
  if (demoMapa) {
    const fam = FAMILY.map(m => Object.assign({}, m));
    let selected = null;
    const mapEl = $('#map-familia'), list = $('#fam-list'), info = $('#fam-info');
    const recomendacion = () => {
      const aux = fam.filter(m => m.estado === 'danger'), pend = fam.filter(m => m.estado === 'warn');
      let t = '';
      if (aux.length) t += aux.map(m => `Verificar estado de ${m.nombre === 'Abuela' ? 'la Abuela' : m.nombre} en ${m.lugar}`).join('<br>• ');
      else if (pend.length) t += 'Esperar la confirmación de ' + pend.map(m => m.nombre).join(', ');
      else t = 'Todos los integrantes están a salvo. Mantengan la comunicación.';
      return (aux.length ? '• ' : '') + t;
    };
    const render = () => {
      drawMap(mapEl, { members: fam, selected });
      list.innerHTML = fam.map(m => `<div class="family-row ${selected === m.id ? 'sel' : ''}" data-id="${m.id}">
        <span class="mini-av ${m.estado}">${m.letra}</span>
        <div class="who">${m.nombre} - ${m.lugar}<small>${m.hora}</small></div>${badge(m.estado)}</div>`).join('');
      const s = fam.find(m => m.id === selected);
      const safe = fam.filter(m => m.estado === 'ok').map(m => m.nombre);
      info.innerHTML = `<p><b>${s ? `${s.nombre} (${s.id === 'papa' ? 'Jefe de hogar' : 'integrante'}): última actualización a las ${s.hora.replace('Hoy, ', '0').replace('00', '0')}.` : 'Selecciona un integrante en la lista o en el mapa.'}</b>${s ? ` Batería al ${s.id === 'papa' ? 62 : 48 + s.nombre.length * 3}%.` : ''}</p>
        <p><b>${safe.length ? safe.join(' y ') + ' se ubican en la (Zona A)' : 'Aún nadie confirmó estar a salvo.'}</b></p>
        <p style="margin-top:10px">Recomendación IA:</p><p>${recomendacion()}</p>`;
    };
    const pick = id => { selected = id; render(); };
    list.addEventListener('click', e => { const r = e.target.closest('.family-row'); if (r) pick(r.dataset.id); });
    mapEl.addEventListener('click', e => { const g = e.target.closest('.pin-member'); if (g) pick(g.dataset.id); });
    $('#btn-ciclar').addEventListener('click', () => {
      const m = fam.find(x => x.id === selected);
      if (!m) { info.insertAdjacentHTML('beforeend', '<div class="alert warn">Primero selecciona un integrante.</div>'); return; }
      const orden = ['warn', 'ok', 'danger'];
      m.estado = orden[(orden.indexOf(m.estado) + 1) % 3]; render();
    });
    render();
  }

  /* ================= HU-021 · Punto de encuentro ================= */
  const demoEnc = $('#demo-encuentro');
  if (demoEnc) {
    const CAND = [
      { id: 'colegio', nombre: 'Losa deportiva del colegio', desc: 'Zona plana despejada', d: { papa: 780, mama: 650, diego: 700, abuela: 1500 } },
      { id: 'estadio', nombre: 'Estadio municipal', desc: 'Refugio oficial', d: { papa: 900, mama: 1000, diego: 850, abuela: 1300 } },
      { id: 'plaza', nombre: 'Plaza vecinal Los Pinos', desc: 'Espacio abierto central', d: { papa: 1100, mama: 1200, diego: 1000, abuela: 600 } }
    ];
    const mapEl = $('#map-encuentro'), res = $('#enc-result'), side = $('#enc-side');
    let principal = null, secundario = null, calculado = null;
    const fmt = m => m >= 1000 ? (m / 1000).toFixed(1).replace('.', ',') + ' km' : Math.round(m) + ' m';
    const incl = () => $$('input[name=integ]:checked', demoEnc).map(c => c.value);
    const drawBase = () => drawMap(mapEl, { members: FAMILY.map(m => Object.assign({}, m, { estado: 'ok' })), extraPlaces: [] });
    const calc = ids => CAND.map(c => {
      const ds = ids.map(i => c.d[i]);
      return Object.assign({}, c, { avg: ds.reduce((a, b) => a + b, 0) / ds.length, max: Math.max.apply(null, ds) });
    }).sort((a, b) => a.avg - b.avg);
    const fijados = () => `Principal: ${principal ? principal.nombre : 'sin fijar'} · Secundario: ${secundario ? secundario.nombre : 'sin fijar'}`;
    const show = () => {
      if (!calculado) { res.innerHTML = '<p class="note">Selecciona integrantes y pulsa «Recomendar puntos de encuentro seguros».</p>'; return; }
      const [a, b] = calculado;
      res.innerHTML = `
        <div class="place"><b>Mejor opción: ${a.nombre}</b> · ${a.desc} · a ${fmt(a.avg)} en promedio (el más lejano: ${fmt(a.max)})
          <div class="tags"><button class="btn btn-outline btn-sm" data-fix="p0">Fijar como principal</button><button class="btn btn-outline btn-sm" data-fix="s0">Fijar como secundario</button></div></div>
        <div class="place"><b>Alternativa: ${b.nombre}</b> · ${b.desc} · a ${fmt(b.avg)} en promedio (el más lejano: ${fmt(b.max)})
          <div class="tags"><button class="btn btn-outline btn-sm" data-fix="p1">Fijar como principal</button><button class="btn btn-outline btn-sm" data-fix="s1">Fijar como secundario</button></div></div>
        <div class="place"><b>Lugares descartados</b>
          <p class="discard">Parque del Malecón: zona de inundación por tsunami.</p>
          <p class="discard">Mirador de la ladera: riesgo de desprendimiento de rocas.</p>
          <p class="note">${fijados()}</p></div>`;
    };
    $('#btn-recomendar').addEventListener('click', () => {
      const ids = incl();
      if (!ids.length) { res.innerHTML = '<div class="alert warn">Selecciona al menos un integrante para calcular.</div>'; return; }
      calculado = calc(ids); principal = secundario = null; side.innerHTML = ''; $('#enc-bloq').checked = false; show();
    });
    res.addEventListener('click', e => {
      const k = e.target.dataset.fix; if (!k || !calculado) return;
      const c = calculado[+k[1]];
      if (k[0] === 'p') principal = c; else secundario = c;
      show();
      mapEl.dataset.p = principal ? principal.id : '';
      drawMap(mapEl, { members: FAMILY.map(m => Object.assign({}, m, { estado: 'ok' })), extraPlaces: [principal && principal.id, secundario && secundario.id].filter(Boolean) });
    });
    $('#btn-intermedio').addEventListener('click', () => {
      if (!$('#enc-bloq').checked) { side.innerHTML = '<div class="alert warn">Marca primero «El punto principal está bloqueado» para sugerir un punto intermedio.</div>'; return; }
      if (!calculado) { side.innerHTML = '<div class="alert warn">Primero calcula los puntos de encuentro.</div>'; return; }
      const ids = incl(), bloqueado = principal || calculado[0];
      const resto = calc(ids).filter(c => c.id !== bloqueado.id);
      const i = resto[0];
      side.innerHTML = `<div class="alert ok"><b>Punto intermedio sugerido: ${i.nombre}</b><br>${i.desc} · a ${fmt(i.avg)} en promedio (el más lejano: ${fmt(i.max)}). Evita ${bloqueado.nombre}, que está bloqueado.</div>`;
    });
    drawBase(); show();
  }

  /* ================= HU-022 · Ruta segura ================= */
  const demoRuta = $('#demo-ruta');
  if (demoRuta) {
    const DIST = { // km por avenidas anchas
      casa: { papa: 1.8, mama: 1.2, diego: 2.4, abuela: 0 },
      colegio: { papa: 2.1, mama: 1.9, diego: 1.6, abuela: 0.8 },
      estadio: { papa: 1.0, mama: 0.9, diego: 1.1, abuela: 2.0 }
    };
    const NOTAS = {
      'mama-casa': { t: 'warn', m: 'Se evitó el puente del malecón: queda en zona de tsunami.' },
      'diego-casa': { t: 'warn', m: 'Se evitó la ladera: riesgo de desprendimientos.' }
    };
    const mapEl = $('#map-ruta'), out = $('#ruta-out');
    let ultimo = null;
    const base = { members: FAMILY.map(m => Object.assign({}, m, { estado: 'ok' })) };
    drawMap(mapEl, Object.assign({ extraPlaces: ['casa'] }, base));
    $('#btn-ruta').addEventListener('click', () => {
      const who = $('#ruta-quien').value, dest = $('#ruta-dest').value, mov = $('#ruta-mov').checked;
      const m = FAMILY.find(x => x.id === who), d = PLACES[dest];
      const km = DIST[dest][who];
      if (!km) { out.innerHTML = `<div class="alert warn">${m.nombre} ya se encuentra en ese lugar.</div>`; ultimo = null; return; }
      const vel = mov ? 2.5 : 4.5, min = Math.round(km / vel * 60);
      ultimo = { nombre: m.nombre, min };
      drawMap(mapEl, Object.assign({}, base, { extraPlaces: [dest], route: { from: m, to: d } }));
      const nota = NOTAS[who + '-' + dest];
      out.innerHTML = `<h4 style="font-size:17px">Llegará en unos ${min} min</h4>
        <p class="note">Por avenidas anchas · ${km.toFixed(1).replace('.', ',')} km a pie · velocidad considerada: ${vel.toString().replace('.', ',')} km/h${mov ? ' (movilidad reducida)' : ''}.</p>
        <div class="alert ${nota ? 'warn' : 'ok'}">${nota ? nota.m : 'Sin puentes, laderas ni calles estrechas en este recorrido.'}</div>
        <p class="note" style="margin-top:8px">Descartamos la «ruta directa por calles locales» (línea punteada) porque cruza calles estrechas.</p>`;
    });
    $('#btn-compartir').addEventListener('click', () => {
      const msg = $('#ruta-share');
      msg.innerHTML = ultimo ? `<div class="alert ok">Se envió a tu familia: ${ultimo.nombre} llegará en unos ${ultimo.min} min.</div>`
        : '<div class="alert warn">Primero calcula una ruta.</div>';
    });
  }

  /* ================= HU-018 · Última ubicación sin red ================= */
  const demoUbi = $('#demo-ubicacion');
  if (demoUbi) {
    const chkEmerg = $('#ubi-emerg'), chkSenal = $('#ubi-senal');
    const aviso = $('#ubi-aviso'), bandeja = $('#ubi-bandeja'), fam = $('#ubi-familia');
    let cola = 0, enviado = false, aSalvo = false;
    const hora = () => new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' });
    let ultima = { h: '08:40', t: 'Campus universitario, zona este', b: 54 };
    const render = () => {
      bandeja.innerHTML = cola
        ? `Pendiente de conexión: se enviará automáticamente (${cola}).`
        : (enviado ? 'Bandeja vacía: tu última ubicación ya fue enviada a tu familia.' : 'Bandeja vacía.');
      fam.innerHTML = `<div class="alert">Última ubicación registrada a las ${ultima.h}. Dirección referencial: ${ultima.t}. Batería al ${ultima.b}%.${aSalvo ? '<br><b>Estado: A salvo ✔</b>' : ''}</div>`;
    };
    const intentarEnvio = () => {
      if (cola && chkSenal.checked) {
        ultima = { h: hora(), t: 'Campus universitario, zona este', b: 51 };
        cola = 0; enviado = true; aviso.innerHTML = '<div class="alert ok">Volvió la señal: tu ubicación se envió sola a tu familia.</div>';
      }
      render();
    };
    chkSenal.addEventListener('change', intentarEnvio);
    $('#btn-sismo').addEventListener('click', () => {
      if (!chkEmerg.checked) { aviso.innerHTML = '<div class="alert danger">Activa la «Ubicación temporal de emergencia» para guardar y enviar tu ubicación.</div>'; return; }
      enviado = false; cola = 1;
      if (chkSenal.checked) { aviso.innerHTML = '<div class="alert warn">¡Sismo simulado! Enviando tu ubicación…</div>'; intentarEnvio(); }
      else { aviso.innerHTML = '<div class="alert warn">¡Sismo simulado! Sin señal: tu ubicación quedó guardada en el teléfono.</div>'; render(); }
    });
    $('#btn-salvo').addEventListener('click', () => {
      if (!chkEmerg.checked) { aviso.innerHTML = '<div class="alert danger">Activa la ubicación de emergencia para avisar que estás a salvo.</div>'; return; }
      aSalvo = true;
      if (!chkSenal.checked) { cola = 1; aviso.innerHTML = '<div class="alert warn">Marcado como «a salvo». Se enviará al volver la señal.</div>'; render(); }
      else { cola = 0; enviado = true; aviso.innerHTML = '<div class="alert ok">Tu familia ya sabe que estás a salvo.</div>'; render(); }
    });
    render();
  }

  /* ================= HU-025 · Formulario de contacto ================= */
  const form = $('#contact-form');
  if (form) {
    const LABELS = { nombre: 'Nombre completo', correo: 'Correo electrónico', celular: 'Celular', distrito: 'Distrito de residencia', perfil: 'Perfil de usuario', mensaje: 'Mensaje o consulta' };
    const rules = {
      nombre: v => v.trim().split(/\s+/).filter(Boolean).length >= 2 || 'Ingresa tu nombre y apellido.',
      correo: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Ingresa un correo válido (ej. nombre@email.com).',
      celular: v => /^9\d{8}$/.test(v.replace(/\s/g, '')) || 'Ingresa un celular peruano de 9 dígitos que empiece con 9.',
      distrito: v => v.trim().length >= 3 || 'Ingresa tu distrito de residencia.',
      perfil: v => !!v || 'Selecciona tu perfil de usuario.',
      mensaje: v => v.trim().length >= 10 || 'Escribe tu consulta (mínimo 10 caracteres).'
    };
    const keys = Object.keys(rules);
    /* Valida un campo: vacío -> "obligatorio"; si no, aplica su regla. Marca el error junto al campo (CA-04). */
    const check = k => {
      const inp = form.elements[k], box = $('#err-' + k);
      const r = inp.value.trim() === '' ? `El campo «${LABELS[k]}» es obligatorio.` : rules[k](inp.value);
      inp.classList.toggle('err', r !== true);
      inp.setAttribute('aria-invalid', r === true ? 'false' : 'true');
      inp.setAttribute('aria-describedby', 'err-' + k);
      box.textContent = r === true ? '' : r;
      return r === true;
    };
    keys.forEach(k => {
      const inp = form.elements[k];
      /* Validación en tiempo real (CA-02): al salir del campo y, una vez tocado, mientras se escribe. */
      inp.addEventListener('blur', () => { inp.dataset.touched = '1'; check(k); });
      inp.addEventListener('input', () => { if (inp.dataset.touched) check(k); });
      inp.addEventListener('change', () => { inp.dataset.touched = '1'; check(k); });
    });
    form.addEventListener('submit', e => {
      e.preventDefault();
      const msg = $('#form-msg');
      keys.forEach(k => { form.elements[k].dataset.touched = '1'; });
      const invalid = keys.filter(k => !check(k));
      if (invalid.length) {
        msg.className = 'alert danger';
        msg.textContent = 'Revisa los campos marcados: todos son obligatorios.';
        form.elements[invalid[0]].focus(); /* posiciona el foco en el primer campo faltante */
        return;
      }
      const data = {}; keys.forEach(k => { data[k] = form.elements[k].value.trim(); }); data.fecha = new Date().toISOString();
      try { const l = JSON.parse(localStorage.getItem('pachaqipi_consultas') || '[]'); l.push(data); localStorage.setItem('pachaqipi_consultas', JSON.stringify(l)); } catch (_) { /* sin storage */ }
      msg.className = 'alert ok';
      msg.textContent = `¡Gracias, ${data.nombre.split(' ')[0]}! Recibimos tu solicitud. Te escribiremos al correo ${data.correo} con los siguientes pasos y la orientación sobre PachaQ'ipi.`;
      form.reset();
      keys.forEach(k => { const i = form.elements[k]; delete i.dataset.touched; i.classList.remove('err'); i.setAttribute('aria-invalid', 'false'); });
    });
  }

  /* ================= Perfil ================= */
  const hist = $('#perfil-hist');
  if (hist) {
    const items = [
      { n: 'Jordan: Univ. Lima', h: 'Ayer, 18:30', i: 'JT', e: 'warn' },
      { n: 'Joquer: Oficina', h: 'Hoy, 8:45', i: 'JQ', e: 'ok' },
      { n: 'María: Casa', h: 'Hoy, 9:10', i: 'MA', e: 'ok' }
    ];
    hist.innerHTML = items.map(x => `<div class="loc-item"><span class="mini-av ${x.e}">${x.i}</span><div class="who">${x.n}<small>${x.h}</small></div>${badge(x.e)}</div>`).join('');
    drawMap($('#perfil-mapa'), { reports: false, members: [] });
    const printPlan = () => window.print();
    $$('[data-plan]').forEach(b => b.addEventListener('click', printPlan));
    $('#btn-logout').addEventListener('click', () => { window.location.href = root + 'index.html'; });
  }
})();
