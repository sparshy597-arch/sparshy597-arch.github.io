// ---------- edit your details here ----------
const ME = { email: "sparshy66@gmail.com", tz: "Asia/Kolkata" };
const SONG = { spotify: "spotify:track:5TRPicyLGbAF2LGBFbHGvO" }; // Flashing Lights · Kanye West ft. Dwele

const GH = "https://github.com/sparshy597-arch";
const PROJECTS = [
  { id: "hive", name: "Hive", tag: "A team of AI agents that works while you watch.", status: ["New", "#60a5fa"], img: "assets/shots/hive.jpg",
    desc: "A lead agent plans the task, five specialists work on it in parallel, a critic reviews, and you get one finished result. Every agent's thinking streams live.",
    tags: ["Node.js", "Claude API", "Ollama", "SSE"], note: "Coming to GitHub" },
  { id: "bablu", name: "Bablu Bouncer", tag: "A 3D driving game in the browser.", status: ["Play it", "#fbbf24"], img: "assets/shots/bablu.jpg",
    desc: "A game I made with Divydev: drive a monster truck around a 3D world, right in your browser. No install.",
    tags: ["JavaScript", "3D", "Game dev"], demo: "https://sparshy597-arch.github.io/bablu-bouncer/", repo: GH + "/bablu-bouncer" },
  { id: "island", name: "Island", tag: "A Dynamic Island for Windows.", status: ["New", "#60a5fa"], img: "assets/shots/island.jpg",
    desc: "A glass pill at the top of the screen with now playing, volume, charging and clipboard live activities. Native WPF with WinRT and Core Audio.",
    tags: ["C#", "WPF", "WinRT"], note: "Coming to GitHub" },
  { id: "flux", name: "Flux", tag: "Android add-ons, running on my phone.", status: ["On my phone", "#4ade80"], img: "assets/shots/flux.jpg",
    desc: "A liquid edge panel with live battery, storage and memory rings, a custom volume slider and a glass music widget. Plain Java, no root.",
    tags: ["Java", "Android", "Accessibility"], note: "Coming to GitHub" },
  { id: "halo", name: "Halo", tag: "A TV home screen, with a web demo.", status: ["Live demo", "#4ade80"], img: "assets/shots/halo.jpg",
    desc: "A TV interface you can drive with the arrow keys: featured shows, an Up Next row and real photos. The Android app version reads the TV's own apps and inputs.",
    tags: ["JavaScript", "Java", "Android TV"], demo: "https://sparshy597-arch.github.io/halo-tv/", repo: GH + "/halo-tv" },
  { id: "sursangeet", name: "Sur Sangeet Academy", tag: "A real client website, live on its own domain.", status: ["Client", "#f472b6"], img: "assets/shots/sursangeet.jpg",
    desc: "The website for an online Kathak and Bollywood dance academy in Lucknow: classes, programs and free-trial booking.",
    tags: ["HTML", "CSS", "JavaScript"], demo: "https://sursangeetdance.com/", repo: GH + "/sur-sangeet-dance" },
  { id: "sonora", name: "Sonora", tag: "Drop a track and watch it move.", status: ["Live demo", "#4ade80"], img: "assets/shots/soundwave.jpg",
    desc: "A music visualiser: load any song and it is drawn live from its frequencies, with playback controls and PNG export.",
    tags: ["JavaScript", "Web Audio API", "Canvas"], demo: "https://sparshy597-arch.github.io/soundwave/", repo: GH + "/soundwave" },
  { id: "comfort", name: "Comfort Zone", tag: "One small social challenge a day.", status: ["Live demo", "#4ade80"], img: "assets/shots/comfort.jpg",
    desc: "Predict how anxious you'll feel, do the challenge, then rate how it really went. Glass UI with light and dark mode and a sample account.",
    tags: ["HTML", "CSS", "JavaScript"], demo: "https://sparshy597-arch.github.io/comfort-zone/", repo: GH + "/comfort-zone" },
  { id: "cafe", name: "Café ordering site", tag: "Order coffee, book a table.", status: ["Live demo", "#4ade80"], img: "assets/shots/hackclub.jpg",
    desc: "A café website with a filterable menu, a basket and table booking, built for Hack Club.",
    tags: ["HTML", "CSS", "JavaScript"], demo: "https://sparshy597-arch.github.io/hack-club-cafe/", repo: GH + "/hack-club-cafe" },
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
    p.demo ? `<a class="btn sm primary" href="${p.demo}" target="_blank" rel="noopener">${p.id === "bablu" ? "Play" : "Live"} ${arrow}</a>` : "",
    p.repo ? `<a class="btn sm" href="${p.repo}" target="_blank" rel="noopener"><img src="assets/icons/ui-github.svg" alt="" width="14" height="14"> Repo</a>` : "",
    !p.demo && !p.repo ? `<span class="p-note">${p.note || "Coming soon"}</span>` : "",
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
$$("[data-f]").forEach((b) => b.addEventListener("click", () => {
  $$("[data-f]").forEach((x) => x.setAttribute("aria-selected", x === b));
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
      ctrl.addListener("ready", () => { if (wantPlay) { ctrl.seek(0); ctrl.play(); } });
    });
  };
  const s = document.createElement("script");
  s.src = "https://open.spotify.com/embed/iframe-api/v1"; s.async = true;
  s.onerror = () => { playBtn.classList.remove("loading"); window.open("https://open.spotify.com/track/" + SONG.spotify.split(":").pop(), "_blank", "noopener"); };
  document.body.appendChild(s);
}
const playIt = () => {
  np.hidden = false;
  if (!controller) { wantPlay = true; playBtn.classList.add("loading"); loadSpotify(); return; }
  controller.togglePlay();
};
playBtn.addEventListener("click", playIt);
$("[data-play2]")?.addEventListener("click", playIt);

// ---------- banner video ----------
const vid = $("[data-video]"), vbtn = $("[data-vpause]");
if (vid) {
  const setV = (paused) => { vbtn.setAttribute("aria-pressed", paused); vbtn.setAttribute("aria-label", paused ? "Play the banner video" : "Pause the banner video"); };
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { vid.removeAttribute("autoplay"); vid.pause(); setV(true); }
  vbtn.addEventListener("click", () => { if (vid.paused) { vid.play(); setV(false); } else { vid.pause(); setV(true); } });
  vid.addEventListener("error", () => vbtn.hidden = true, true);
}

// ---------- games & shows ----------
const GAMES = [
  ["Valorant", "valorant.jpg", "mp", "Riot · FPS"], ["Minecraft", "", "mp", "Mojang · Sandbox"], ["PUBG: Battlegrounds", "g578080.jpg", "mp", "Battle royale"],
  ["Call of Duty", "g1938090.jpg", "mp", "FPS"], ["Combat Master", "g2281730.jpg", "mp", "FPS"],
  ["Red Dead Redemption 2", "g1174180.jpg", "story", "Rockstar"], ["GTA V", "g271590.jpg", "story", "Rockstar"],
  ["The Last of Us Part I", "g1888930.jpg", "story", "Naughty Dog"], ["God of War", "g1593500.jpg", "story", "Santa Monica"],
  ["Cyberpunk 2077", "g1091500.jpg", "story", "CD Projekt Red"], ["The Witcher 3", "g292030.jpg", "story", "CD Projekt Red"],
  ["Detroit: Become Human", "g1222140.jpg", "story", "Quantic Dream"], ["Spider-Man Remastered", "g1817070.jpg", "story", "Insomniac"],
  ["Uncharted", "g1659420.jpg", "story", "Naughty Dog"], ["Ghost of Tsushima", "g2215430.jpg", "story", "Sucker Punch"],
];
const WATCH = [
  ["The Mentalist", "s_mentalist.jpg", "Show · 2008"], ["Dexter", "s_dexter.jpg", "Show · 2006"], ["Breaking Bad", "s_breakingbad.jpg", "Show · 2008"],
  ["Sherlock", "s_sherlock.jpg", "Show · 2010"], ["Mindhunter", "s_mindhunter.jpg", "Show · 2017"], ["Prison Break", "s_prisonbreak.jpg", "Show · 2005"],
  ["Lucifer", "s_lucifer.jpg", "Show · 2016"], ["Money Heist", "s_moneyheist.jpg", "Show · 2017"], ["Better Call Saul", "s_bettercallsaul.jpg", "Show · 2015"],
  ["True Detective", "s_truedetective.jpg", "Show · 2014"], ["You", "s_you.jpg", "Show · 2018"], ["The Boys", "s_theboys.jpg", "Show · 2019"],
  ["Se7en", "m_se7en.jpg", "Film · 1995"], ["Shutter Island", "m_shutterisland.jpg", "Film · 2010"], ["Prisoners", "m_prisoners.jpg", "Film · 2013"],
  ["Gone Girl", "m_gonegirl.jpg", "Film · 2014"],
];
const poster = (name, img, sub, cat) => `<figure class="poster" ${cat ? `data-g="${cat}"` : ""}>
  ${img ? `<img src="assets/fav/${img}" alt="${esc(name)} poster" width="400" height="600" loading="lazy">`
        : `<div class="mc" aria-label="${esc(name)}"><span>MINECRAFT</span></div>`}
  <figcaption><b>${esc(name)}</b><span>${esc(sub)}</span></figcaption></figure>`;
$("[data-games]").innerHTML = GAMES.map(([n, i, c, s]) => poster(n, i, s, c)).join("");
$("[data-watch]").innerHTML = WATCH.map(([n, i, s]) => poster(n, i, s)).join("");
$$("[data-gf]").forEach((b) => b.addEventListener("click", () => {
  $$("[data-gf]").forEach((x) => x.setAttribute("aria-selected", x === b));
  $$("[data-games] .poster").forEach((p) => p.classList.toggle("off", b.dataset.gf !== "all" && p.dataset.g !== b.dataset.gf));
}));
