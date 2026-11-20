// ---------- edit your details here ----------
const ME = { email: "sparshy66@gmail.com", tz: "Asia/Kolkata", github: "https://github.com/sparshy597-arch" };
const SONG = "spotify:track:1lbNgoJ5iMrMluCyhI4OQP"; // Victory Lap · Fred again.., Skepta, PlaqueBoyMax

const GH = ME.github;
const PROJECTS = [
  { id: "hive", size: "big", cat: "ai web", name: "Hive", one: "A team of AI agents that works while you watch.", badge: ["New", "#60a5fa"], img: "assets/shots/hive.jpg",
    desc: "A lead agent plans the task and splits it up. Five specialists work in parallel, a critic reviews, and you get one finished deliverable. Every agent's thinking streams live over Server-Sent Events.",
    tags: ["Node.js", "Claude API", "Ollama", "SSE"], note: "Source coming soon" },
  { id: "island", size: "", cat: "desktop", name: "Island", one: "A Dynamic Island for Windows.", badge: ["New", "#60a5fa"], img: "assets/shots/island.jpg",
    desc: "A glass pill with now playing, volume, charging and clipboard live activities. Native WPF, WinRT media sessions, Core Audio through COM.",
    tags: ["C#", "WPF", "WinRT"], note: "Source coming soon" },
  { id: "flux", size: "", cat: "mobile", name: "Flux", one: "Android add-ons, running on my phone.", badge: ["On my phone", "#5ee6a8"], img: "assets/shots/flux.jpg",
    desc: "A liquid edge panel with live battery, storage and memory rings, a custom volume slider and a glass music widget. Pure Java, no root.",
    tags: ["Java", "Android", "Accessibility"], note: "Source coming soon" },
  { id: "halo", size: "wide", cat: "mobile", name: "Halo", one: "A home screen app for Android TV.", badge: ["Live", "#5ee6a8"], img: "assets/shots/halo.jpg",
    desc: "Reads every installed app, HDMI input and the volume straight from Android, opens the TV's own settings, and uninstalls cleanly.",
    tags: ["Java", "Android TV", "JavaScript"], repo: GH + "/halo-tv" },
  { id: "ours", size: "wide", cat: "web", name: "Ours", one: "A private photo library for two people.", badge: ["Private", "#8b8c95"], mock: true,
    desc: "Full-quality originals stored in your own Google Drive, behind a Cloudflare Worker API written with Hono. React 19 frontend.",
    tags: ["React 19", "TypeScript", "Hono", "Cloudflare"], note: "Private repo" },
  { id: "comfort", size: "", cat: "web", name: "Comfort Zone", one: "One small social challenge a day.", badge: ["Demo", "#5ee6a8"], img: "assets/shots/comfort.jpg",
    desc: "Predict the fear, do the challenge, rate how it really felt. Glass UI with light and dark mode.",
    tags: ["HTML", "CSS", "JavaScript"], repo: GH + "/comfort-zone" },
  { id: "darwaza", size: "", cat: "web", name: "Darwaza", one: "Event tickets, booked as a squad.", badge: ["Demo", "#5ee6a8"], img: "assets/shots/darwaza.jpg",
    desc: "Buyer, organiser and admin views in one working demo, with sample data that refreshes daily.",
    tags: ["JavaScript", "HTML", "CSS"], note: "Repo coming soon" },
  { id: "bablu", size: "", cat: "web", name: "Bablu Bouncer", one: "A small browser arcade game.", badge: ["Play it", "#fbbf24"], img: "assets/shots/spotify.jpg",
    desc: "A quick bouncer game that runs in the browser. Pictured: a lock-screen music player I built alongside it.",
    tags: ["JavaScript", "Canvas"], demo: "https://sparshy597-arch.github.io/bablu-bouncer/", repo: GH + "/bablu-bouncer" },
];

const STACK = {
  Languages: [["TypeScript", "typescript"], ["JavaScript", "javascript"], ["Java", "java"], ["Python", "python"], ["C#", ""]],
  "Frontend & mobile": [["React", "react"], ["Vite", "vitejs"], ["HTML", "html-5"], ["CSS", "css"], ["Android", "android"]],
  "Backend & AI": [["Node.js", "nodejs"], ["Hono", "hono"], ["Cloudflare Workers", "cloudflare"], ["Firebase", "firebase"]],
  Tools: [["Git", "git"], ["GitHub", "github", 1], ["Figma", "figma"], ["Blender", "blender"], ["Unity", "unity", 1]],
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- toast, email, year, clock ----------
const toast = $("[data-toast]"); let tt;
const say = (m) => { toast.textContent = m; toast.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove("on"), 1800); };
async function copyEmail() { try { await navigator.clipboard.writeText(ME.email); say("Email copied: " + ME.email); } catch { say(ME.email); } }
$$("[data-mailto]").forEach((a) => (a.href = "mailto:" + ME.email));
$$("[data-copy]").forEach((b) => b.addEventListener("click", copyEmail));
$("[data-year]").textContent = new Date().getFullYear();
const fmt = new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: ME.tz });
const tick = () => ($("[data-clock]").textContent = fmt.format(new Date()).toLowerCase());
tick(); setInterval(tick, 15000);

// count-up stats
$$("[data-count]").forEach((el) => {
  const to = +el.dataset.count, plus = to >= 10 ? "+" : "";
  if (calm) { el.textContent = to + plus; return; }
  let n = 0; const t = setInterval(() => { n++; el.textContent = n + (n === to ? plus : ""); if (n >= to) clearInterval(t); }, 900 / to);
});

// ---------- nav ----------
const nav = $("[data-nav]");
const onScroll = () => nav.classList.toggle("scrolled", scrollY > 20);
addEventListener("scroll", onScroll, { passive: true }); onScroll();
const navLinks = $$(".links a");
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) navLinks.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach((s) => io.observe(s));
const menu = $("[data-menu]"), mnav = $("#mnav");
const setMenu = (open) => { menu.setAttribute("aria-expanded", open); menu.setAttribute("aria-label", open ? "Close menu" : "Open menu"); mnav.hidden = !open; document.body.style.overflow = open ? "hidden" : ""; };
menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
$$("a", mnav).forEach((a) => a.addEventListener("click", () => setMenu(false)));

// ---------- editor: typed profile ----------
const CODE = [
  [["c", "// hi, this is me"]],
  [["k", "const "], ["p", "sparsh"], ["", " = {"]],
  [["", "  role: "], ["s", "\"Software Engineer\""], ["", ","]],
  [["", "  age: "], ["n", "17"], ["", ","]],
  [["", "  based: "], ["s", "\"India\""], ["", ","]],
  [["", "  builds: ["], ["s", "\"web\""], ["", ", "], ["s", "\"android\""], ["", ", "], ["s", "\"windows\""], ["", ", "], ["s", "\"ai\""], ["", "],"]],
  [["", "  stack: ["], ["s", "\"TypeScript\""], ["", ", "], ["s", "\"Java\""], ["", ", "], ["s", "\"C#\""], ["", ", "], ["s", "\"Python\""], ["", "],"]],
  [["", "  shipping: "], ["s", "\"Hive · Island · Flux\""], ["", ","]],
  [["", "  openTo: "], ["s", "\"freelance & collabs\""], ["", ","]],
  [["", "};"]],
  [["", ""]],
  [["p", "sparsh"], ["", "."], ["f", "build"], ["", "("], ["s", "\"your idea\""], ["", ");"]],
];
const codeEl = $("[data-code]");
// lines are typed one character at a time; each line counts one extra step for its line break
function renderCode(budget) {
  const rows = [];
  for (const line of CODE) {
    if (budget < 0) break;
    let row = "";
    for (const [cls, text] of line) {
      const t = text.slice(0, Math.max(0, budget));
      budget -= text.length;
      if (t) row += cls ? `<span class="${cls}">${esc(t)}</span>` : esc(t);
      if (budget < 0) break;
    }
    rows.push(row);
    budget -= 1;
  }
  rows[rows.length - 1] += '<span class="caret"></span>';
  codeEl.innerHTML = rows.map((r) => `<span class="ln">${r || " "}</span>`).join("");
}
const total = CODE.reduce((n, line) => n + line.reduce((m, [, t]) => m + t.length, 0) + 1, 0) - 1;
if (calm) renderCode(total);
else { let i = 0; const ty = setInterval(() => { i = Math.min(i + 2, total); renderCode(i); if (i >= total) clearInterval(ty); }, 24); }

// ---------- projects ----------
const arrow = `<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const oursCols = [["#7a5c43", "#3a2a1f"], ["#41606e", "#1d2c33"], ["#5f6b48", "#2a3020"], ["#6e4848", "#2e1d1d"], ["#4a5568", "#20242d"], ["#8a7350", "#3a2f20"], ["#3e6150", "#1a2a22"], ["#485f6e", "#1d2830"]];
$("[data-projects]").innerHTML = PROJECTS.map((p) => {
  const href = p.demo || p.repo;
  const inner = p.mock
    ? `<div class="mock-ours" style="position:absolute;inset:0" aria-hidden="true"><div class="app">${oursCols.map(([a, b]) => `<i style="--a:${a};--b:${b}"></i>`).join("")}</div></div>`
    : `<img src="${p.img}" alt="${esc(p.name)}: ${esc(p.one)}" width="1200" height="750" loading="lazy">`;
  const media = `<${href ? `a href="${href}" target="_blank" rel="noopener" tabindex="-1"` : "div"} class="pj-media">${inner}<span class="pj-badge" style="--c:${p.badge[1]}"><i></i>${p.badge[0]}</span></${href ? "a" : "div"}>`;
  const links = [
    p.demo ? `<a class="btn primary" href="${p.demo}" target="_blank" rel="noopener">Play ${arrow}</a>` : "",
    p.repo ? `<a class="btn glass" href="${p.repo}" target="_blank" rel="noopener"><img src="assets/icons/ui-github.svg" alt="" width="14" height="14"> Code</a>` : "",
    p.note && !p.repo ? `<span class="note">${p.note.includes("Private") ? "🔒 " : ""}${p.note}</span>` : "",
  ].join("");
  return `<article class="pj ${p.size}" id="p-${p.id}" data-cat="${p.cat}">${media}
    <div class="pj-body"><h3>${esc(p.name)}</h3><p class="one">${esc(p.one)}</p><p class="desc">${esc(p.desc)}</p>
    <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul><div class="pj-links">${links}</div></div></article>`;
}).join("");
$$("[data-pf]").forEach((b) => b.addEventListener("click", () => {
  $$("[data-pf]").forEach((x) => x.setAttribute("aria-selected", x === b));
  const f = b.dataset.pf;
  $$(".pj").forEach((el) => el.classList.toggle("off", f !== "all" && !el.dataset.cat.split(" ").includes(f)));
}));

// ---------- stack ----------
$("[data-stack]").innerHTML = Object.entries(STACK).map(([g, items]) =>
  `<div class="sgroup"><h4>${g}</h4><div>${items.map(([n, i, ink]) =>
    `<span class="tool">${i ? `<img src="assets/icons/${i}.svg" alt=""${ink ? ' class="ink"' : ""}>` : `<span class="cs">C#</span>`}${n}</span>`).join("")}</div></div>`).join("");

// ---------- github graph ----------
const C = window.CONTRIB || { total: 0, days: [] };
$$("[data-total]").forEach((e) => (e.textContent = C.total.toLocaleString()));
if (C.days.length) {
  const graph = $("[data-graph]"), months = $("[data-months]");
  const first = new Date(C.days[0][0] + "T00:00:00").getDay();
  const cells = [...Array(first).fill(null), ...C.days];
  const weeks = Math.ceil(cells.length / 7);
  months.style.gridTemplateColumns = `repeat(${weeks}, 14px)`;
  let last = -1;
  for (let w = 0; w < weeks; w++) {
    const d = cells[w * 7] || cells.slice(w * 7, w * 7 + 7).find(Boolean);
    const m = d ? new Date(d[0] + "T00:00:00").getMonth() : last;
    const s = document.createElement("span");
    if (m !== last && w < weeks - 2) s.textContent = new Date(2026, m, 1).toLocaleString("en", { month: "short" });
    last = m; months.appendChild(s);
  }
  for (const c of cells) {
    const i = document.createElement("i");
    if (!c) { i.style.visibility = "hidden"; graph.appendChild(i); continue; }
    const n = c[1], l = n === 0 ? 0 : n < 2 ? 1 : n < 4 ? 2 : n < 7 ? 3 : 4;
    if (l) i.className = "l" + l;
    i.title = `${n} contribution${n === 1 ? "" : "s"} on ${c[0]}`;
    graph.appendChild(i);
  }
}

// ---------- song (Spotify's official iFrame API) ----------
const songBtn = $("[data-play]"), player = $("[data-player]");
let ctrl = null, want = false, loading = false;
const setOn = (on) => { songBtn.setAttribute("aria-pressed", on); songBtn.classList.remove("loading"); };
function loadSpotify() {
  if (loading) return; loading = true;
  window.onSpotifyIframeApiReady = (API) => {
    API.createController($("#spotify-embed"), { uri: SONG, width: "100%", height: 80, theme: "dark" }, (c) => {
      ctrl = c;
      c.addListener("playback_update", (e) => setOn(!e.data.isPaused));
      c.addListener("ready", () => { songBtn.classList.remove("loading"); if (want) c.play(); });
    });
  };
  const s = document.createElement("script");
  s.src = "https://open.spotify.com/embed/iframe-api/v1"; s.async = true;
  s.onerror = () => { songBtn.classList.remove("loading"); window.open("https://open.spotify.com/track/" + SONG.split(":").pop(), "_blank", "noopener"); };
  document.body.appendChild(s);
}
function toggleSong() {
  player.hidden = false;
  if (!ctrl) { want = true; songBtn.classList.add("loading"); loadSpotify(); return; }
  ctrl.togglePlay();
}
songBtn.addEventListener("click", toggleSong);
$("[data-pclose]").addEventListener("click", () => { if (ctrl) ctrl.pause(); player.hidden = true; });

// ---------- command menu ----------
const kbar = $("[data-kbar]"), kin = $("[data-kinput]"), klist = $("[data-klist]");
const go = (id) => () => document.getElementById(id).scrollIntoView({ behavior: calm ? "auto" : "smooth" });
const CMDS = [
  { t: "What I do", k: "section", run: go("do") }, { t: "Selected work", k: "section", run: go("work") },
  { t: "How I work", k: "section", run: go("process") }, { t: "Experience & stack", k: "section", run: go("experience") },
  { t: "Contact", k: "section", run: go("contact") }, { t: "Copy email", k: "action", run: copyEmail },
  { t: "Play my song", k: "music", run: toggleSong }, { t: "Open GitHub", k: "link", run: () => window.open(ME.github, "_blank", "noopener") },
  ...PROJECTS.map((p) => ({ t: "Project: " + p.name, k: "work", run: go("p-" + p.id) })),
];
let sel = 0, shown = CMDS;
function kRender() {
  const q = kin.value.toLowerCase().trim();
  shown = CMDS.filter((c) => c.t.toLowerCase().includes(q));
  sel = Math.min(sel, Math.max(0, shown.length - 1));
  klist.innerHTML = shown.map((c, i) => `<li role="option" aria-selected="${i === sel}" data-i="${i}">${esc(c.t)}<small>${c.k}</small></li>`).join("") || `<li>No matches</li>`;
}
function kOpen() { kin.value = ""; sel = 0; kRender(); kbar.showModal(); kin.focus(); }
function kRun(i) { const c = shown[i]; if (!c) return; kbar.close(); c.run(); }
$$("[data-kopen]").forEach((b) => b.addEventListener("click", kOpen));
addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); kbar.open ? kbar.close() : kOpen(); }
  if (e.key === "Escape") setMenu(false);
});
kin.addEventListener("input", () => { sel = 0; kRender(); });
kin.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") { sel = (sel + 1) % Math.max(1, shown.length); kRender(); e.preventDefault(); }
  if (e.key === "ArrowUp") { sel = (sel - 1 + shown.length) % Math.max(1, shown.length); kRender(); e.preventDefault(); }
  if (e.key === "Enter") kRun(sel);
});
klist.addEventListener("click", (e) => { const li = e.target.closest("li[data-i]"); if (li) kRun(+li.dataset.i); });
kbar.addEventListener("click", (e) => { if (e.target === kbar) kbar.close(); });
