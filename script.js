/* =========================================================
   JAPAN'26 — MAIN SCRIPT (FULL REBUILD)
   ========================================================= */

/* =========================================================
   CONSTANTS
   ========================================================= */
const TRIP_START = new Date("2026-05-08");
const TRIP_END   = new Date("2026-05-20");
const BUDGET_LIMIT = 200000;
const GBP_RATE = 0.0052;

/* =========================================================
   ITINERARY DATA — 12 DAYS
   ========================================================= */
const ITINERARY = [
  {
    day: 1,
    date: "2026-05-09",
    title: "Arrival in Tokyo",
    city: "Tokyo",
    walk: 1,
    items: [
      { time: "18:30", name: "Arrive at Haneda Airport (HND)", tags: ["travel"] },
      { time: "20:00", name: "Check-in at hotel (Akasaka)", tags: ["travel"] },
      { time: "21:00", name: "Shibuya Crossing & short night walk", tags: ["fun","walk"] },
      { time: "21:30", name: "Dinner (halal-friendly options)", tags: ["food","halal"] }
    ]
  },
    {
    day: 2,
    date: "2026-05-10",
    title: "Shinjuku + Drift Tour",
    city: "Tokyo",
    walk: 2,
    items: [
      { time: "11:00", name: "Shinjuku exploring (Kabukicho, tech stores)", tags: ["shop","fun"] },
      { time: "16:00", name: "Rest at hotel", tags: ["rest"] },
      { time: "17:30", name: "Tokyo Drift / Go-Kart Experience", tags: ["fun","experience"] }
    ]
  },

  {
    day: 3,
    date: "2026-05-11",
    title: "Ikebukuro + Harry Potter Studio Tour",
    city: "Tokyo",
    walk: 2,
    items: [
      { time: "10:00", name: "Ikebukuro – Animate & anime shops", tags: ["shop","fun"] },
      { time: "12:00", name: "Travel to Harry Potter Studio Tour", tags: ["travel"] },
      { time: "13:00", name: "Harry Potter Studio Tour Tokyo", tags: ["fun","experience"] }
    ]
  },

  {
    day: 4,
    date: "2026-05-12",
    title: "Shibuya • Harajuku • Mario Kart • Shibuya Sky",
    city: "Tokyo",
    walk: 2,
    items: [
      { time: "10:30", name: "Shibuya 109 (fashion)", tags: ["shop"] },
      { time: "11:30", name: "LOFT / lifestyle stores", tags: ["shop"] },
      { time: "12:00", name: "Harajuku Takeshita Street", tags: ["shop","walk"] },
      { time: "13:00", name: "Mario Kart Street Tour (Afternoon slot)", tags: ["fun","experience"] },
      { time: "15:00", name: "Break / explore Shibuya", tags: ["rest"] },
      { time: "17:30", name: "Shibuya Sky (sunset → night)", tags: ["view","fun"] },
      { time: "19:30", name: "Gyumon Halal Yakiniku (Dinner)", tags: ["food","halal"] }
    ]
  },

  {
    day: 5,
    date: "2026-05-13",
    title: "Tokyo → Kyoto + Fushimi Inari (gentle route)",
    city: "Kyoto",
    walk: 2,
    items: [
      { time: "09:00", name: "Shinkansen to Kyoto", tags: ["travel"] },
      { time: "12:00", name: "Hotel check-in / luggage drop", tags: ["travel"] },
      { time: "14:00", name: "Fushimi Inari (first section only)", tags: ["walk","view"] }
    ]
  },

  {
    day: 6,
    date: "2026-05-15",
    title: "Arashiyama + teamLab Biovortex",
    city: "Kyoto",
    walk: 2,
    items: [
      { time: "09:00", name: "Arashiyama Bamboo Grove (flat path)", tags: ["walk","view"] },
      { time: "11:00", name: "River cafés (relax)", tags: ["rest","food"] },
      { time: "18:00", name: "teamLab Biovortex Kyoto", tags: ["fun","experience"] }
    ]
  },

  {
    day: 7,
    date: "2026-05-14",
    title: "Kiyomizu-dera → Sannenzaka → Gion",
    city: "Kyoto",
    walk: 3,
    items: [
      { time: "10:30", name: "Taxi to Kiyomizu-dera", tags: ["travel"] },
      { time: "11:00", name: "Kiyomizu-dera Temple", tags: ["walk","view"] },
      { time: "12:30", name: "Downhill Sannenzaka / Ninenzaka", tags: ["walk","shop"] },
      { time: "17:00", name: "Gion District evening walk", tags: ["walk","view"] }
    ]
  },
   
  {
    day: 8,
    date: "2026-05-16",
    title: "Kyoto → Osaka + Namba + Dotonbori",
    city: "Osaka",
    walk: 2,
    items: [
      { time: "10:00", name: "Train to Osaka", tags: ["travel"] },
      { time: "12:00", name: "Hotel check-in (Namba area)", tags: ["travel"] },
      { time: "14:00", name: "Namba Yasaka Shrine", tags: ["view"] },
      { time: "18:00", name: "Dotonbori night walk", tags: ["walk","food","fun"] }
    ]
  },

  {
    day: 9,
    date: "2026-05-17",
    title: "Osaka Castle + Umeda Sky",
    city: "Osaka",
    walk: 2,
    items: [
      { time: "09:00", name: "Osaka Castle (elevator route)", tags: ["view","walk"] },
      { time: "15:00", name: "Rest / café break", tags: ["rest"] },
      { time: "18:00", name: "Umeda Sky Building (sunset)", tags: ["view","fun"] }
    ]
  },

  {
    day: 10,
    date: "2026-05-18",
    title: "Shinsaibashi + Rinku Premium Outlets",
    city: "Osaka",
    walk: 2,
    items: [
      { time: "11:00", name: "Shinsaibashi Shopping Street", tags: ["shop"] },
      { time: "15:00", name: "Rinku Premium Outlets (near KIX)", tags: ["shop","food"] },
      { time: "21:00", name: "Round 1 Stadium Sennichimae", tags: ["fun"] }
    ]
  },

  {
    day: 11,
    date: "2026-05-19",
    title: "Chill Day + Packing",
    city: "Osaka",
    walk: 1,
    items: [
      { time: "10:00", name: "Free time (arcades, cafés, shopping)", tags: ["fun","rest"] },
      { time: "18:00", name: "Packing + early night", tags: ["rest"] }
    ]
  },

  {
    day: 12,
    date: "2026-05-20",
    title: "Departure from KIX",
    city: "Osaka",
    walk: 1,
    items: [
      { time: "07:00", name: "Travel to Kansai Airport (KIX)", tags: ["travel"] },
      { time: "09:30", name: "Flight departure", tags: ["travel"] }
    ]
  }
];

/* =========================================================
   STATE
   ========================================================= */
let state = {
  completed: {},
  packing: {},
  budget: [],
  notes: ""
};

const saved = localStorage.getItem("jp26");
if (saved) {
  try { state = JSON.parse(saved); }
  catch {}
}

function saveState() {
  localStorage.setItem("jp26", JSON.stringify(state));
}

/* =========================================================
   DOM READY
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  renderDays();
  renderRoute();
  renderPacking();
  renderBudget();
  renderInfo();
  renderTips();
  renderPhrases();
  renderNotes();
  updateProgress();
  updateCountdown();
  setupTabs();
  setupInstallBanner();
  setupOfflineBadge();
  setupBudgetAdd();
});

/* =========================================================
   TAG CLASS MAP
   ========================================================= */
const TAG_CLASS_MAP = {
  walk: "walk",
  food: "food",
  fun: "fun",
  shop: "shop",
  halal: "hala"
};

function tagClass(t) {
  return TAG_CLASS_MAP[t] || "misc";
}

/* =========================================================
   RENDER DAYS
   ========================================================= */
function formatDate(d) {
  const date = new Date(d);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function renderDays() {
  const wrap = document.getElementById("days-container");
  wrap.innerHTML = "";

  ITINERARY.forEach(day => {
    const card = document.createElement("div");
    card.className = "day-card";
    card.dataset.day = day.day;

    const hdr = document.createElement("div");
    hdr.className = "dc-hdr";

    hdr.innerHTML = `
      <div class="dc-num">${day.day}<div class="dc-num-sub">DAY</div></div>
      <div class="dc-info">
        <div class="dc-title">${day.title}</div>
        <div class="dc-meta">
          <div class="dc-city-dot"></div>
          <span>${day.city}</span>
          <span>•</span>
          <span>${day.items.length} activities</span>
        </div>
        <div class="dc-date">${formatDate(day.date)}</div>
        <div class="dc-progress">
          <div class="dc-progress-fill" id="dc-prog-${day.day}"></div>
        </div>
      </div>
      <div class="dc-chevron">⌄</div>
    `;

    const body = document.createElement("div");
    body.className = "dc-body";

    const inner = document.createElement("div");
    inner.className = "dc-body-inner";

    const acts = document.createElement("div");
    acts.className = "activities";

    day.items.forEach((item, idx) => {
      const key = `${day.day}-${idx}`;
      const done = !!state.completed[key];

      const act = document.createElement("div");
      act.className = "act" + (done ? " done" : "");
      act.dataset.key = key;

      const tagsHtml = item.tags
        .map(t => `<div class="act-tag tag-${tagClass(t)}">${t}</div>`)
        .join("");

      act.innerHTML = `
        <div class="act-chk">${done ? "✓" : ""}</div>
        <div class="act-body">
        <div class="act-time">${item.time}</div>
        <div class="act-name">${item.name}</div>
        <div class="act-tags">${tagsHtml}</div>
        </div>
      `;

      act.addEventListener("click", () => toggleActivity(key, act, day.day));
      acts.appendChild(act);
    });

    inner.appendChild(acts);
    body.appendChild(inner);

    hdr.addEventListener("click", () => {
      card.classList.toggle("day-open");
    });

    card.appendChild(hdr);
    card.appendChild(body);
    wrap.appendChild(card);

    updateDayProgress(day.day);
  });
}

/* =========================================================
   ACTIVITY TOGGLE
   ========================================================= */
function toggleActivity(key, element, dayNum) {
  state.completed[key] = !state.completed[key];
  saveState();

  const chk = element.querySelector(".act-chk");
  if (state.completed[key]) {
    element.classList.add("done");
    chk.textContent = "✓";
  } else {
    element.classList.remove("done");
    chk.textContent = "";
  }

  updateDayProgress(dayNum);
  updateProgress();
}

/* =========================================================
   DAY PROGRESS
   ========================================================= */
function updateDayProgress(dayNum) {
  const day = ITINERARY.find(d => d.day === dayNum);
  const total = day.items.length;

  let done = 0;
  day.items.forEach((_, idx) => {
    if (state.completed[`${dayNum}-${idx}`]) done++;
  });

  const pct = Math.round((done / total) * 100);
  const fill = document.getElementById(`dc-prog-${dayNum}`);
  if (fill) fill.style.width = pct + "%";

  const card = document.querySelector(`.day-card[data-day="${dayNum}"]`);
  if (pct === 100) card.classList.add("completed");
  else card.classList.remove("completed");
}

/* =========================================================
   OVERALL PROGRESS
   ========================================================= */
function updateProgress() {
  let total = 0;
  let done = 0;

  ITINERARY.forEach(day => {
    day.items.forEach((_, idx) => {
      total++;
      if (state.completed[`${day.day}-${idx}`]) done++;
    });
  });

  const pct = Math.round((done / total) * 100);

  const pctEl = document.getElementById("ring-pct");
  const ring = document.getElementById("ring-fill");
  const dots = document.getElementById("day-dots");

  pctEl.textContent = pct;

  const circ = 2 * Math.PI * 30;
  ring.style.strokeDashoffset = circ - (pct / 100) * circ;

  dots.innerHTML = "";
  ITINERARY.forEach(day => {
    let d = 0;
    day.items.forEach((_, idx) => {
      if (state.completed[`${day.day}-${idx}`]) d++;
    });

    const dot = document.createElement("div");
    dot.className = "day-dot";

    if (d === day.items.length) dot.classList.add("full");
    else if (d > 0) dot.classList.add("partial");

    dots.appendChild(dot);
  });
}

/* =========================================================
   ROUTE BAR
   ========================================================= */
function renderRoute() {
  const wrap = document.getElementById("route-bar");
  wrap.innerHTML = "";

  const cities = [];
  ITINERARY.forEach(day => {
    if (!cities.includes(day.city)) cities.push(day.city);
  });

  cities.forEach((cityName, i) => {
    const city = document.createElement("div");
    city.className = "route-city";

    city.innerHTML = `
      <div class="rc-dot"></div>
      <div class="rc-name">${cityName}</div>
    `;

    wrap.appendChild(city);

    if (i < cities.length - 1) {
      const line = document.createElement("div");
      line.className = "route-line";
      wrap.appendChild(line);
    }
  });
}

/* =========================================================
   COUNTDOWN
   ========================================================= */
function updateCountdown() {
  const num = document.getElementById("cd-num");
  const label = document.getElementById("cd-label");

  const now = new Date();
  const diff = TRIP_START - now;

  if (diff <= 0) {
    num.textContent = "0";
    label.textContent = "Trip in progress";
    return;
  }

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  num.textContent = days;
  label.textContent = days === 1 ? "Day to go" : "Days to go";
}

/* =========================================================
   PACKING LIST
   ========================================================= */
const PACKING_ITEMS = [
  "Passport",
  "Flight documents",
  "JR Pass / IC Card",
  "Phone charger",
  "Power bank",
  "Universal adapter",
  "Clothes",
  "Walking shoes",
  "Toiletries",
  "Medication",
  "Camera",
  "Travel pillow",
  "Umbrella",
  "Snacks"
];

function renderPacking() {
  const wrap = document.getElementById("pack-container");
  wrap.innerHTML = "";

  PACKING_ITEMS.forEach((item, idx) => {
    const key = `p-${idx}`;
    const done = !!state.packing[key];

    const row = document.createElement("div");
    row.className = "pack-item" + (done ? " done" : "");
    row.dataset.key = key;

    row.innerHTML = `
      <div class="pack-name">${item}</div>
      <div class="pack-check">${done ? "✓" : ""}</div>
    `;

    row.addEventListener("click", () => togglePack(key, row));
    wrap.appendChild(row);
  });
}

function togglePack(key, row) {
  state.packing[key] = !state.packing[key];
  saveState();

  const check = row.querySelector(".pack-check");
  if (state.packing[key]) {
    row.classList.add("done");
    check.textContent = "✓";
  } else {
    row.classList.remove("done");
    check.textContent = "";
  }
}

/* =========================================================
   BUDGET SYSTEM
   ========================================================= */
const BUDGET_CATEGORIES = [
  "Food",
  "Transport",
  "Shopping",
  "Attractions",
  "Misc"
];

function renderBudget() {
  renderBudgetCats();
  renderBudgetEntries();
  updateBudgetTotals();
}

function renderBudgetCats() {
  const wrap = document.getElementById("budget-cats");
  wrap.innerHTML = "";

  BUDGET_CATEGORIES.forEach(cat => {
    const div = document.createElement("div");
    div.className = "budget-cat";

    div.textContent = cat;

    div.addEventListener("click", () => {
      document.querySelectorAll(".budget-cat").forEach(c => c.classList.remove("active"));
      div.classList.add("active");
    });

    wrap.appendChild(div);
  });
}

function renderBudgetEntries() {
  const wrap = document.getElementById("budget-entries");
  wrap.innerHTML = "";

  if (!state.budget.length) {
    wrap.innerHTML = `
      <div style="font-size:12px;color:var(--mist);text-align:center;padding:20px 0">
        No expenses yet. Start logging!
      </div>
    `;
    return;
  }

  state.budget.forEach((entry, index) => {
    const row = document.createElement("div");
    row.className = "budget-entry";

    const amt = Number(entry.amt) || 0;
    const gbp = Math.round(amt * GBP_RATE);

    row.innerHTML = `
      <div class="budget-entry-left">
        <div class="budget-entry-desc">${entry.desc || ""}</div>
        <div class="budget-entry-cat">${entry.cat || ""}</div>
      </div>

      <div class="budget-entry-right">
        <div class="budget-entry-amt">
          ¥${amt.toLocaleString()}
          <div class="budget-entry-gbp">£${gbp.toLocaleString()}</div>
        </div>
        <div class="budget-del" data-index="${index}">✕</div>
      </div>
    `;

    row.querySelector(".budget-del").addEventListener("click", () => {
      const idx = Number(row.querySelector(".budget-del").dataset.index);
      state.budget.splice(idx, 1);      // delete by index (works for old + new)
      saveState();
      renderBudgetEntries();
      updateBudgetTotals();
      showToast("Expense removed");
    });

    wrap.appendChild(row);
  });
}

function updateBudgetTotals() {
  const total = state.budget.reduce((sum, entry) => {
    const amt = Number(entry.amt) || 0;
    return sum + amt;
  }, 0);

  const gbp = Math.round(total * GBP_RATE);

  document.getElementById("budget-total").textContent = total.toLocaleString();
  document.getElementById("budget-gbp").textContent = `£${gbp.toLocaleString()}`;
  document.getElementById("budget-limit-label").textContent =
    `of ¥${BUDGET_LIMIT.toLocaleString()} budget`;

  const pct = Math.min(100, Math.round((total / BUDGET_LIMIT) * 100));
  document.getElementById("budget-fill").style.width = pct + "%";
}

function setupBudgetAdd() {
  const btn = document.getElementById("budget-add-btn");
  btn.addEventListener("click", () => {
    const desc = document.getElementById("budget-desc").value.trim();
    const amtVal = document.getElementById("budget-amt").value;
    const amt = parseInt(amtVal, 10);
    const catEl = document.querySelector(".budget-cat.active");

    if (!desc || isNaN(amt) || !catEl) {
      showToast("Enter description, amount, and category");
      return;
    }

    state.budget.push({
      id: Date.now(),                 // new entries get an id
      desc,
      amt,
      cat: catEl.textContent
    });

    saveState();
    document.getElementById("budget-desc").value = "";
    document.getElementById("budget-amt").value = "";

    renderBudgetEntries();
    updateBudgetTotals();
    showToast("Expense added");
  });
}


/* =========================================================
   INFO CARDS
   ========================================================= */
const INFO = [
  { title: "Emergency", text: "Dial 110 for police, 119 for fire/ambulance." },
  { title: "Cash", text: "Many places accept card, but small shops prefer cash." },
  { title: "Transport", text: "IC Cards work across Tokyo, Osaka, Kyoto, Nara." },
  { title: "Etiquette", text: "No loud calls on trains. Stand on the left of escalators." }
];

function renderInfo() {
  const wrap = document.getElementById("info-grid");
  wrap.innerHTML = "";

  INFO.forEach(i => {
    const card = document.createElement("div");
    card.className = "info-card";

    card.innerHTML = `
      <div class="info-title">${i.title}</div>
      <div class="info-text">${i.text}</div>
    `;

    wrap.appendChild(card);
  });
}

/* =========================================================
   TIPS
   ========================================================= */
const TIPS = [
  { title: "Google Maps", text: "Best for trains, walking routes, and live schedules." },
  { title: "Cash Withdrawals", text: "7-Eleven ATMs accept foreign cards reliably." },
  { title: "Convenience Stores", text: "Lawson, FamilyMart, 7-Eleven have great food." },
  { title: "Weather", text: "May is warm — carry water and light layers." }
];

function renderTips() {
  const wrap = document.getElementById("tips-list");
  wrap.innerHTML = "";

  TIPS.forEach(t => {
    const card = document.createElement("div");
    card.className = "tip";

    card.innerHTML = `
      <div class="tip-title">${t.title}</div>
      <div class="tip-text">${t.text}</div>
    `;

    wrap.appendChild(card);
  });
}

/* =========================================================
   PHRASES
   ========================================================= */
const PHRASES = [
  { jp: "ありがとうございます", romaji: "Arigatou gozaimasu", en: "Thank you" },
  { jp: "すみません", romaji: "Sumimasen", en: "Excuse me / Sorry" },
  { jp: "お願いします", romaji: "Onegaishimasu", en: "Please" },
  { jp: "英語を話せますか？", romaji: "Eigo o hanasemasu ka?", en: "Do you speak English?" },
  { jp: "どこですか？", romaji: "Doko desu ka?", en: "Where is it?" }
];

function renderPhrases() {
  const wrap = document.getElementById("phrases-container");
  wrap.innerHTML = "";

  PHRASES.forEach(p => {
    const row = document.createElement("div");
    row.className = "phrase";

    row.innerHTML = `
      <div class="phrase-jp">${p.jp}</div>
      <div class="phrase-romaji">${p.romaji}</div>
      <div class="phrase-en">${p.en}</div>
    `;

    row.addEventListener("click", () => {
      navigator.clipboard.writeText(p.jp).catch(() => {});
      showToast("Copied!");
    });

    wrap.appendChild(row);
  });
}

/* =========================================================
   NOTES AUTOSAVE
   ========================================================= */
function renderNotes() {
  const ta = document.getElementById("notes-ta");
  const saved = document.getElementById("notes-saved");

  ta.value = state.notes || "";

  let timer = null;

  ta.addEventListener("input", () => {
    const val = ta.value;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      state.notes = val;
      saveState();

      saved.classList.add("show");
      setTimeout(() => saved.classList.remove("show"), 800);
    }, 250);
  });
}

/* =========================================================
   PETALS ANIMATION (🌸 FIXED)
   ========================================================= */
const petalBtn = document.getElementById("petal-btn");
if (petalBtn) {
  petalBtn.addEventListener("click", () => {
    for (let i = 0; i < 18; i++) spawnPetal();
  });
}

function spawnPetal() {
  const p = document.createElement("div");
  p.className = "petal";

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 4 + Math.random() * 3 + "s";
  p.style.opacity = 0.6 + Math.random() * 0.4;
  p.style.zIndex = 9999; // ← REQUIRED

  document.body.appendChild(p);
  setTimeout(() => p.remove(), 7000);
}


/* =========================================================
   RESET BUTTON (↺ NEW)
   ========================================================= */
const resetBtn = document.getElementById("reset-btn");
if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    if (!confirm("Reset all progress, packing, budget, and notes?")) return;

    state = {
      completed: {},
      packing: {},
      budget: [],
      notes: ""
    };

    saveState();
    location.reload();
  });
}

/* =========================================================
   TABS
   ========================================================= */
function setupTabs() {
  const tabs = document.querySelectorAll(".bntab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const view = tab.dataset.view;

      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById(`view-${view}`).classList.add("active");

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      document.getElementById("app").scrollTop = 0;
    });
  });
}

/* =========================================================
   INSTALL BANNER
   ========================================================= */
let deferredPrompt = null;

function setupInstallBanner() {
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById("install-banner").style.display = "flex";
  });

  document.getElementById("install-btn").addEventListener("click", async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;

    if (choice.outcome === "accepted") {
      showToast("App installed");
    }

    deferredPrompt = null;
    document.getElementById("install-banner").style.display = "none";
  });
}

/* =========================================================
   OFFLINE BADGE
   ========================================================= */
function setupOfflineBadge() {
  const badge = document.getElementById("offbadge");

  function update() {
    badge.style.display = navigator.onLine ? "none" : "block";
  }

  window.addEventListener("online", update);
  window.addEventListener("offline", update);
  update();
}

/* =========================================================
   TOAST
   ========================================================= */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");

  setTimeout(() => t.classList.remove("show"), 1800);
}
