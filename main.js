// ---------- edit your details here ----------
const ME = { email: "sparshy66@gmail.com", tz: "Asia/Kolkata" };
const SONG = { spotify: "spotify:track:1lbNgoJ5iMrMluCyhI4OQP" }; // Victory Lap · Fred again.., Skepta, PlaqueBoyMax

const GH = "https://github.com/sparshy597-arch";
const PROJECTS = [
  { id: "hive", name: "Hive", tag: "An AI team that works while you watch.", status: ["New", "#60a5fa"], img: "assets/shots/hive.jpg",
    desc: "A lead agent plans your mission, five specialists work in parallel, a critic reviews, and you get one finished deliverable. Every agent's thinking streams live.",
    tags: ["Node.js", "Claude API", "SSE", "Ollama"] },
  { id: "island", name: "Island", tag: "A Dynamic Island for Windows.", status: ["New", "#60a5fa"], img: "assets/shots/island.jpg",
    desc: "A glass pill at the top of the screen with now playing, volume, charging and clipboard live activities, a focus timer and quick actions. Hides for fullscreen games.",
    tags: ["C#", "WPF", "WinRT"] },
  { id: "flux", name: "Flux", tag: "HyperOS add-ons, no root.", status: ["On my phone", "#4ade80"], img: "assets/shots/flux.jpg",
    desc: "A liquid edge panel with battery, storage and memory rings, a liquid volume slider, silent and focus pop-ups, and a glass music widget. Running on my Redmi.",
    tags: ["Java", "Android", "Accessibility"] },
  { id: "halo", name: "Halo", tag: "An Apple TV-style home screen for Android TV.", status: ["Live", "#4ade80"], img: "assets/shots/halo.jpg",
    desc: "A launcher that runs on top of the TV's own system: every tile is a real installed app, HDMI inputs and volume come from Android, and uninstalling puts everything back.",
    tags: ["Java", "Android TV", "JavaScript"], repo: GH + "/halo-tv" },
  { id: "ours", name: "Ours", tag: "A photo library for exactly two people.", status: ["Private", "#8d8d96"], mock: "ours",
    desc: "Upload from phones, keep the originals at full quality in your own Google Drive, and browse and organise together.",
    tags: ["React 19", "TypeScript", "Hono", "Cloudflare"], note: "Private" },
  { id: "comfort", name: "Comfort Zone", tag: "One small social challenge a day.", status: ["Demo", "#4ade80"], img: "assets/shots/comfort.jpg",
    desc: "Predict how anxious you'll feel, do the challenge, then rate how it really went. Over time you see the gap between the fear and the moment.",
    tags: ["HTML", "CSS", "JavaScript"], repo: GH + "/comfort-zone" },
  { id: "darwaza", name: "Darwaza", tag: "Event tickets, booked as a squad.", status: ["Demo", "#4ade80"], img: "assets/shots/darwaza.jpg",
    desc: "Buyer, organiser and admin views in one working demo. Sample data refreshes itself daily so the dates stay current.",
    tags: ["JavaScript", "HTML", "CSS"] },
  { id: "bablu", name: "Bablu Bouncer", tag: "A tiny browser game.", status: ["Live", "#4ade80"], img: "assets/shots/spotify.jpg",
    desc: "A quick arcade bouncer you can play in the browser, plus the Spotify-style lock-screen player shown here.",
    tags: ["JavaScript", "Canvas"], demo: "https://sparshy597-arch.github.io/bablu-bouncer/", repo: GH + "/bablu-bouncer" },
];

const STACK = [
  ["JavaScript", "javascript", "lang front"], ["TypeScript", "typescript", "lang front"], ["Java", "java", "lang"], ["Python", "python", "lang"],
  ["C#", "", "lang"], ["React", "react", "front"], ["Vite", "vitejs", "front"], ["HTML", "html-5", "front"], ["CSS", "css", "front"],
  ["Node.js", "nodejs", "back"], ["Hono", "hono", "back"], ["Cloudflare Workers", "cloudflare", "back"], ["Firebase", "firebase", "back"],
  ["Android", "android", "back lang"], ["Git", "git", "tools"], ["GitHub", "github", "tools", true], ["Figma", "figma", "tools"],
  ["Blender", "blender", "tools"], ["Unity", "unity", "tools", true],
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// toast + email
const toast = $("[data-toast]"); let tt;
const say = (m) => { toast.textContent = m; toast.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove("on"), 1800); };
$$("[data-mailto]").forEach((a) => (a.href = "mailto:" + ME.email));
$$("[data-copy]").forEach((b) => b.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(ME.email); say("Email copied: " + ME.email); } catch { say(ME.email); }
}));
$("[data-year]").textContent = new Date().getFullYear();

// clock
const fmt = new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: ME.tz });
const tick = () => ($("[data-clock]").textContent = fmt.format(new Date()).toLowerCase());
tick(); setInterval(tick, 15000);

// nav
const nav = $("[data-nav]");
const onScroll = () => nav.classList.toggle("scrolled", scrollY > 8);
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
addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false); });

// projects
const arrow = `<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`;
const oursCols = [["#7a5c43", "#3a2a1f"], ["#41606e", "#1d2c33"], ["#5f6b48", "#2a3020"], ["#6e4848", "#2e1d1d"], ["#4a5568", "#20242d"], ["#8a7350", "#3a2f20"], ["#3e6150", "#1a2a22"], ["#485f6e", "#1d2830"]];
$("[data-projects]").innerHTML = PROJECTS.map((p) => {
  const media = p.mock === "ours"
    ? `<div class="shot mock-ours" aria-hidden="true"><div class="app">${oursCols.map(([a, b]) => `<i style="--a:${a};--b:${b}"></i>`).join("")}</div></div>`
    : `<${p.demo || p.repo ? `a href="${p.demo || p.repo}" target="_blank" rel="noopener"` : "div"} class="shot"><img src="${p.img}" alt="${esc(p.name)}: ${esc(p.tag)}" width="1200" height="750" loading="lazy"></${p.demo || p.repo ? "a" : "div"}>`;
  const links = [
    p.demo ? `<a class="btn sm primary" href="${p.demo}" target="_blank" rel="noopener">Demo ${arrow}</a>` : "",
    p.repo ? `<a class="btn sm" href="${p.repo}" target="_blank" rel="noopener"><img src="assets/icons/ui-github.svg" alt="" width="14" height="14"> Repo</a>` : "",
    !p.demo && !p.repo ? `<span class="p-note">${p.note ? "🔒 " + p.note + " repo" : "Repo coming soon"}</span>` : "",
  ].join("");
  return `<article class="proj" id="p-${p.id}">${media}
    <div class="p-top"><h3>${esc(p.name)}</h3><span class="status" style="--c:${p.status[1]}"><i></i>${p.status[0]}</span></div>
    <p class="p-tag">${esc(p.tag)}</p><p class="p-desc">${esc(p.desc)}</p>
    <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
    <div class="p-links">${links}</div></article>`;
}).join("");

// stack
$("[data-stack]").innerHTML = STACK.map(([n, i, f, ink]) =>
  `<span class="tool" data-f="${f}">${i ? `<img src="assets/icons/${i}.svg" alt="" ${ink ? 'class="ink"' : ""}>` : `<b style="font:600 12px var(--mono);color:#a78bfa;width:20px;text-align:center">C#</b>`}${n}</span>`).join("");
$$(".filters button").forEach((b) => b.addEventListener("click", () => {
  $$(".filters button").forEach((x) => x.setAttribute("aria-selected", x === b));
  $$(".tool").forEach((t) => t.classList.toggle("off", b.dataset.f !== "all" && !t.dataset.f.split(" ").includes(b.dataset.f)));
}));

// github graph with month labels
const C = window.CONTRIB || { total: 0, days: [] };
$$("[data-total]").forEach((e) => (e.textContent = C.total.toLocaleString()));
if (C.days.length) {
  const graph = $("[data-graph]"), months = $("[data-months]");
  const first = new Date(C.days[0][0] + "T00:00:00").getDay();
  const cells = [...Array(first).fill(null), ...C.days];
  const weeks = Math.ceil(cells.length / 7);
  months.style.gridTemplateColumns = `repeat(${weeks}, 13px)`;
  let last = -1;
  for (let w = 0; w < weeks; w++) {
    const d = cells[w * 7] || cells[w * 7 + 6];
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

// ---------- song: Spotify's official iFrame API ----------
const playBtn = $("[data-play]"), np = $("[data-np]");
let controller = null, wantPlay = false, apiLoading = false;
function setPlaying(on) { playBtn.setAttribute("aria-pressed", on); playBtn.classList.remove("loading"); }
function loadSpotify() {
  if (apiLoading) return; apiLoading = true;
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    IFrameAPI.createController($("#spotify-embed"), { uri: SONG.spotify, width: "100%", height: 80, theme: "dark" }, (ctrl) => {
      controller = ctrl;
      ctrl.addListener("playback_update", (e) => setPlaying(!e.data.isPaused));
      ctrl.addListener("ready", () => { if (wantPlay) ctrl.play(); });
    });
  };
  const s = document.createElement("script");
  s.src = "https://open.spotify.com/embed/iframe-api/v1"; s.async = true;
  s.onerror = () => { playBtn.classList.remove("loading"); window.open("https://open.spotify.com/track/" + SONG.spotify.split(":").pop(), "_blank", "noopener"); };
  document.body.appendChild(s);
}
playBtn.addEventListener("click", () => {
  np.hidden = false;
  if (!controller) { wantPlay = true; playBtn.classList.add("loading"); loadSpotify(); return; }
  controller.togglePlay();
});
