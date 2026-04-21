/* =========================================================
JAPAN’26 — script.js
Loaded at end of <body> — DOM is already ready.
No DOMContentLoaded wrapper needed or used.
========================================================= */

const TRIP_START   = new Date(“2026-05-09”);
const TRIP_END     = new Date(“2026-05-20”);
const BUDGET_LIMIT = 200000;
const GBP_RATE     = 0.0052;
const STATE_KEY    = “jp26_v3”;

/* ── ITINERARY ── */
const ITINERARY = [
{
day: 1, date: “09 May”, title: “Arrival in Tokyo”, city: “Tokyo”, walk: 1,
items: [
{ time: “18:30”, name: “Arrive at Haneda Airport (HND)”, tags: [“travel”] },
{ time: “20:00”, name: “Check-in at hotel — Akasaka”, tags: [“travel”] },
{ time: “21:00”, name: “Shibuya Crossing & short night walk”, tags: [“fun”,“walk”] },
{ time: “21:30”, name: “Dinner — halal-friendly options near Shibuya”, tags: [“food”,“halal”] }
]
},
{
day: 2, date: “10 May”, title: “Shinjuku + Drift Tour”, city: “Tokyo”, walk: 2,
items: [
{ time: “11:00”, name: “Shinjuku — Kabukicho, tech stores”, tags: [“shop”,“fun”] },
{ time: “16:00”, name: “Rest at hotel”, tags: [“rest”] },
{ time: “17:30”, name: “Tokyo Drift / Go-Kart Experience”, tags: [“fun”,“experience”] }
]
},
{
day: 3, date: “11 May”, title: “Ikebukuro + Harry Potter Studio”, city: “Tokyo”, walk: 2,
items: [
{ time: “10:00”, name: “Ikebukuro — Animate & anime shops”, tags: [“shop”,“fun”] },
{ time: “12:00”, name: “Travel to Harry Potter Studio Tour”, tags: [“travel”] },
{ time: “13:00”, name: “Harry Potter Studio Tour Tokyo”, tags: [“fun”,“experience”] }
]
},
{
day: 4, date: “12 May”, title: “Shibuya · Harajuku · Mario Kart · Sky”, city: “Tokyo”, walk: 2,
items: [
{ time: “10:30”, name: “Shibuya 109 (fashion)”, tags: [“shop”] },
{ time: “11:30”, name: “LOFT / lifestyle stores”, tags: [“shop”] },
{ time: “12:00”, name: “Harajuku Takeshita Street”, tags: [“shop”,“walk”] },
{ time: “13:00”, name: “Mario Kart Street Tour (afternoon slot)”, tags: [“fun”,“experience”] },
{ time: “15:00”, name: “Break / explore Shibuya”, tags: [“rest”] },
{ time: “17:30”, name: “Shibuya Sky (sunset → night)”, tags: [“view”,“fun”] },
{ time: “19:30”, name: “Gyumon Halal Yakiniku — Dinner”, tags: [“food”,“halal”] }
]
},
{
day: 5, date: “13 May”, title: “Tokyo → Kyoto + Fushimi Inari”, city: “Kyoto”, walk: 2,
items: [
{ time: “09:00”, name: “Shinkansen to Kyoto”, tags: [“travel”] },
{ time: “12:00”, name: “Hotel check-in / luggage drop”, tags: [“travel”] },
{ time: “14:00”, name: “Fushimi Inari — first section”, tags: [“walk”,“view”] }
]
},
{
day: 6, date: “14 May”, title: “Arashiyama + teamLab Biovortex”, city: “Kyoto”, walk: 2,
items: [
{ time: “09:00”, name: “Arashiyama Bamboo Grove (flat path)”, tags: [“walk”,“view”] },
{ time: “11:00”, name: “River cafés — relax”, tags: [“rest”,“food”] },
{ time: “18:00”, name: “teamLab Biovortex Kyoto”, tags: [“fun”,“experience”] }
]
},
{
day: 7, date: “15 May”, title: “Kiyomizu-dera → Sannenzaka → Gion”, city: “Kyoto”, walk: 3,
items: [
{ time: “10:30”, name: “Taxi to Kiyomizu-dera”, tags: [“travel”] },
{ time: “11:00”, name: “Kiyomizu-dera Temple”, tags: [“walk”,“view”] },
{ time: “12:30”, name: “Downhill Sannenzaka / Ninenzaka”, tags: [“walk”,“shop”] },
{ time: “17:00”, name: “Gion District evening walk”, tags: [“walk”,“view”] }
]
},
{
day: 8, date: “16 May”, title: “Kyoto → Osaka + Dotonbori”, city: “Osaka”, walk: 2,
items: [
{ time: “10:00”, name: “Train to Osaka”, tags: [“travel”] },
{ time: “12:00”, name: “Hotel check-in — Namba area”, tags: [“travel”] },
{ time: “14:00”, name: “Namba Yasaka Shrine”, tags: [“view”] },
{ time: “18:00”, name: “Dotonbori night walk”, tags: [“walk”,“food”,“fun”] }
]
},
{
day: 9, date: “17 May”, title: “Osaka Castle + Umeda Sky”, city: “Osaka”, walk: 2,
items: [
{ time: “09:00”, name: “Osaka Castle (elevator route)”, tags: [“view”,“walk”] },
{ time: “15:00”, name: “Rest / café break”, tags: [“rest”] },
{ time: “18:00”, name: “Umeda Sky Building (sunset)”, tags: [“view”,“fun”] }
]
},
{
day: 10, date: “18 May”, title: “Shinsaibashi + Rinku Outlets”, city: “Osaka”, walk: 2,
items: [
{ time: “11:00”, name: “Shinsaibashi Shopping Street”, tags: [“shop”] },
{ time: “15:00”, name: “Rinku Premium Outlets (near KIX)”, tags: [“shop”,“food”] }
]
},
{
day: 11, date: “19 May”, title: “Chill Day + Packing”, city: “Osaka”, walk: 1,
items: [
{ time: “10:00”, name: “Free time — arcades, cafés, last shops”, tags: [“fun”,“rest”] },
{ time: “18:00”, name: “Packing + early night”, tags: [“rest”] }
]
},
{
day: 12, date: “20 May”, title: “Departure from KIX”, city: “Osaka”, walk: 1,
items: [
{ time: “07:00”, name: “Travel to Kansai Airport (KIX)”, tags: [“travel”] },
{ time: “09:30”, name: “Flight departure — さようなら Japan 🇯🇵”, tags: [“travel”] }
]
}
];

/* ── PACKING ── */
const PACKING = [
{ cat: “📄 Documents”, items: [
{ name: “Passport (valid 6+ months)”, essential: true },
{ name: “Travel insurance docs”, essential: true },
{ name: “Printed hotel confirmations”, essential: false },
{ name: “Emergency contact card”, essential: true }
]},
{ cat: “💳 Tech & Money”, items: [
{ name: “Unlocked smartphone”, essential: true },
{ name: “Japan SIM card (pre-order)”, essential: true },
{ name: “Power bank 20,000mAh”, essential: true },
{ name: “Type A plug adaptor (2-pin flat)”, essential: true },
{ name: “¥150,000+ cash (many places cash only)”, essential: true },
{ name: “IC / Suica card (top up at airport)”, essential: true },
{ name: “Google Maps offline — Tokyo & Osaka”, essential: true },
{ name: “Google Translate offline Japanese pack”, essential: true }
]},
{ cat: “👟 Clothing”, items: [
{ name: “Comfortable walking trainers”, essential: true },
{ name: “Slip-on shoes (for temples)”, essential: true },
{ name: “Light rain jacket / travel umbrella”, essential: true },
{ name: “Smart-casual outfit for restaurants”, essential: false },
{ name: “12 days casual clothing”, essential: true }
]},
{ cat: “💊 Health”, items: [
{ name: “Prescription meds + spare supply”, essential: true },
{ name: “Blister plasters — lots!”, essential: true },
{ name: “Sunscreen SPF 50+”, essential: true },
{ name: “Hand sanitiser”, essential: false },
{ name: “Ibuprofen / paracetamol”, essential: false }
]},
{ cat: “⛩ Japan-Specific”, items: [
{ name: “Hyperdia / Navitime app installed”, essential: true },
{ name: “Small day bag / tote for outings”, essential: false },
{ name: “Coin wallet (vending machines!)”, essential: false },
{ name: “Snacks from home”, essential: false }
]}
];

/* ── INFO ── */
const INFO = [
{ ico:“🚨”, val:“110 / 119”,       lbl:“Police / Ambulance” },
{ ico:“💴”, val:“¥ JPY”,           lbl:“Currency” },
{ ico:“🔌”, val:“100V Type A”,     lbl:“Plug / Voltage” },
{ ico:“⏰”, val:“JST +9”,          lbl:“Timezone” },
{ ico:“🌡”, val:“18–25°C”,         lbl:“May Weather” },
{ ico:“🚆”, val:“IC Card”,         lbl:“Best Transit” },
{ ico:“💧”, val:“Tap safe”,        lbl:“Drinking Water” },
{ ico:“📶”, val:“IIJmio / Docomo”, lbl:“Best SIMs” }
];

/* ── TIPS ── */
const TIPS = [
“Remove shoes at ryokans, some restaurants, and traditional spaces.”,
“Don’t eat while walking — find a spot to sit. It’s a cultural norm.”,
“Stay quiet on trains. No phone calls. Headphones are fine.”,
“Carry cash. Ramen shops, shrines, small izakayas are cash only.”,
“IC card (Suica) works on almost all transit AND most konbinis.”,
“7-Eleven ATMs reliably accept foreign cards for cash.”,
“Book popular restaurants 2–3 weeks ahead online.”,
“Bins are rare outside konbinis — carry a small bag for rubbish.”,
“Konbini (convenience stores) are outstanding. Use them daily.”,
“Google Translate camera mode works brilliantly on menus.”,
“Halal: look for ハラール labels or ask staff. Gyumon in Shinjuku is great.”,
“Bowing is the greeting — a small nod is perfectly polite as a visitor.”
];

/* ── PHRASES ── */
const PHRASES = [
{ jp:“ありがとうございます”, rom:“Arigatou gozaimasu”,     en:“Thank you very much” },
{ jp:“すみません”,           rom:“Sumimasen”,               en:“Excuse me / Sorry” },
{ jp:“お願いします”,         rom:“Onegaishimasu”,           en:“Please” },
{ jp:“英語を話せますか？”,   rom:“Eigo o hanasemasu ka?”,   en:“Do you speak English?” },
{ jp:“どこですか？”,         rom:“Doko desu ka?”,           en:“Where is it?” },
{ jp:“いくらですか？”,       rom:“Ikura desu ka?”,          en:“How much is this?” },
{ jp:“ハラールですか？”,     rom:“Harāru desu ka?”,         en:“Is this Halal?” },
{ jp:“おいしい！”,           rom:“Oishii!”,                 en:“Delicious!” },
{ jp:“ひとつください”,       rom:“Hitotsu kudasai”,         en:“One please” },
{ jp:“トイレはどこですか？”, rom:“Toire wa doko desu ka?”,  en:“Where is the toilet?” }
];

/* ── BUDGET CATS ── */
const BUDGET_CATS = [
{ ico:“🍜”, label:“Food” },
{ ico:“🚆”, label:“Travel” },
{ ico:“🏨”, label:“Stay” },
{ ico:“🛍”,  label:“Shopping” },
{ ico:“🎭”, label:“Experiences” },
{ ico:“🧾”, label:“Misc” }
];

/* =========================================================
STATE
========================================================= */
function loadState() {
try {
var raw = localStorage.getItem(STATE_KEY);
var s   = raw ? JSON.parse(raw) : {};
return {
completed: s.completed  || {},
packing:   s.packing    || {},
budget:    s.budget     || [],
budgetCat: typeof s.budgetCat === “number” ? s.budgetCat : 0,
notes:     s.notes      || “”
};
} catch(e) {
return { completed:{}, packing:{}, budget:[], budgetCat:0, notes:”” };
}
}

function saveState() {
try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch(e) {}
}

var state = loadState();

/* =========================================================
BOOT  (IIFE — runs immediately, DOM already built)
========================================================= */
(function boot() {
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
setupReset();
setupInstallBanner();
setupOfflineBadge();

document.getElementById(“petal-btn”).addEventListener(“click”, function() {
for (var i = 0; i < 30; i++) {
(function(delay) {
setTimeout(spawnPetal, delay);
})(i * 90);
}
});

document.getElementById(“budget-add-btn”).addEventListener(“click”, addExpense);
})();

/* =========================================================
COUNTDOWN
========================================================= */
function updateCountdown() {
var now  = new Date();
var diff = Math.ceil((TRIP_START - now) / 86400000);

var numEl = document.getElementById(“cd-num”);
var lblEl = document.getElementById(“cd-label”);
var subEl = document.getElementById(“cd-sub”);
var hdrEl = document.getElementById(“hdr-sub”);

if (diff > 0) {
numEl.textContent = diff;
lblEl.textContent = diff === 1 ? “Day to go!” : “Days to go”;
subEl.textContent = diff <= 14 ? “Pack your bags — nearly time! 🎒” : “Planning mode 🗾”;
hdrEl.textContent = diff + “d until Tokyo”;
} else if (diff === 0) {
numEl.textContent = “✈”;
lblEl.textContent = “Today’s the day!”;
subEl.textContent = “いってらっしゃい — have an incredible trip!”;
hdrEl.textContent = “Travel day ✈”;
for (var i = 0; i < 30; i++) {
(function(d){ setTimeout(spawnPetal, d); })(i * 80);
}
} else {
var d = Math.abs(diff);
numEl.textContent = d;
lblEl.textContent = d === 1 ? “Day in Japan” : “Days in Japan”;
subEl.textContent = “Explore, eat, enjoy every moment 🇯🇵”;
hdrEl.textContent = “In Japan 🇯🇵”;
}
}

/* =========================================================
ITINERARY
========================================================= */
function renderDays() {
var wrap = document.getElementById(“days-container”);
wrap.innerHTML = “”;

for (var di = 0; di < ITINERARY.length; di++) {
(function(day) {
var card = document.createElement(“div”);
card.className = “day-card”;
card.dataset.day = day.day;

```
  /* Walk dots */
  var walkStr = "";
  for (var w = 0; w < 3; w++) walkStr += w < day.walk ? "●" : "○";

  var hdr = document.createElement("div");
  hdr.className = "dc-hdr";
  hdr.innerHTML =
    '<div class="dc-num">' + day.day + '<div class="dc-num-sub">DAY</div></div>' +
    '<div class="dc-info">' +
      '<div class="dc-title">' + day.title + '</div>' +
      '<div class="dc-meta">' +
        '<div class="dc-city-dot"></div>' +
        '<span>' + day.city + '</span>' +
        '<span> · </span>' +
        '<span>' + day.items.length + ' stops</span>' +
        '<span> · </span>' +
        '<span class="walk-dots" title="Walk intensity">' + walkStr + '</span>' +
      '</div>' +
      '<div class="dc-date-line">' + day.date + '</div>' +
      '<div class="dc-progress"><div class="dc-progress-fill" id="dc-prog-' + day.day + '"></div></div>' +
    '</div>' +
    '<div class="dc-chevron">▾</div>';

  var body  = document.createElement("div");
  body.className = "dc-body";
  var inner = document.createElement("div");
  inner.className = "dc-body-inner";
  var acts  = document.createElement("div");
  acts.className = "activities";

  var divider = document.createElement("div");
  divider.className = "act-divider";
  acts.appendChild(divider);

  for (var ii = 0; ii < day.items.length; ii++) {
    (function(item, idx) {
      var key  = day.day + "-" + idx;
      var done = !!state.completed[key];

      var act = document.createElement("div");
      act.className = "act" + (done ? " done" : "");

      var tagHTML = "";
      for (var ti = 0; ti < item.tags.length; ti++) {
        var t = item.tags[ti];
        tagHTML += '<span class="act-tag tag-' + t + '">' + t + '</span>';
      }

      act.innerHTML =
        '<div class="act-chk">' + (done ? "✓" : "") + '</div>' +
        '<div class="act-body">' +
          '<div class="act-time">' + item.time + '</div>' +
          '<div class="act-name">' + item.name + '</div>' +
          '<div class="act-tags">' + tagHTML + '</div>' +
        '</div>';

      act.addEventListener("click", (function(k, el, dn) {
        return function() { toggleActivity(k, el, dn); };
      })(key, act, day.day));

      acts.appendChild(act);
    })(day.items[ii], ii);
  }

  inner.appendChild(acts);
  body.appendChild(inner);

  hdr.addEventListener("click", function() {
    card.classList.toggle("day-open");
  });

  card.appendChild(hdr);
  card.appendChild(body);
  wrap.appendChild(card);

  updateDayProgress(day.day);
})(ITINERARY[di]);
```

}
}

function toggleActivity(key, el, dayNum) {
state.completed[key] = !state.completed[key];
saveState();
el.classList.toggle(“done”, !!state.completed[key]);
el.querySelector(”.act-chk”).textContent = state.completed[key] ? “✓” : “”;
updateDayProgress(dayNum);
updateProgress();
}

function updateDayProgress(dayNum) {
var day   = null;
for (var i = 0; i < ITINERARY.length; i++) {
if (ITINERARY[i].day === dayNum) { day = ITINERARY[i]; break; }
}
if (!day) return;

var done = 0;
for (var j = 0; j < day.items.length; j++) {
if (state.completed[dayNum + “-” + j]) done++;
}
var pct  = Math.round((done / day.items.length) * 100);
var fill = document.getElementById(“dc-prog-” + dayNum);
if (fill) fill.style.width = pct + “%”;

var card = document.querySelector(”.day-card[data-day=’” + dayNum + “’]”);
if (card) card.classList.toggle(“completed”, pct === 100);
}

function updateProgress() {
var total = 0, done = 0;
for (var i = 0; i < ITINERARY.length; i++) {
for (var j = 0; j < ITINERARY[i].items.length; j++) {
total++;
if (state.completed[ITINERARY[i].day + “-” + j]) done++;
}
}
var pct  = total ? Math.round(done / total * 100) : 0;
var circ = 2 * Math.PI * 30;

document.getElementById(“ring-pct”).textContent = pct;
document.getElementById(“ring-fill”).style.strokeDashoffset = circ - (pct / 100) * circ;

var msgs = [
[“Your journey awaits 🌸”,    “Tap activities to log them as complete.”],
[“First steps taken 🍜”,       “One activity at a time — you’ve got this.”],
[“Making great progress 🚄”,   “The ramen, shrines, neon — soaking it in.”],
[“Halfway through Japan 🗾”,   “Memories made every step of the way.”],
[“Almost done — amazing! ⛩”,  “You’ve seen so much — finish strong!”],
[“Trip complete! 🎌”,          “Arigatou gozaimashita! 🙏”]
];
var idx = Math.min(Math.floor(pct / 20), 5);
document.getElementById(“prog-title”).textContent = msgs[idx][0];
document.getElementById(“prog-sub”).textContent   = msgs[idx][1];

var dots = document.getElementById(“day-dots”);
dots.innerHTML = “”;
for (var di = 0; di < ITINERARY.length; di++) {
var d = 0;
for (var dj = 0; dj < ITINERARY[di].items.length; dj++) {
if (state.completed[ITINERARY[di].day + “-” + dj]) d++;
}
var dot = document.createElement(“div”);
dot.className = “day-dot”;
if (d === ITINERARY[di].items.length) dot.classList.add(“full”);
else if (d > 0) dot.classList.add(“partial”);
dot.title = “Day “ + ITINERARY[di].day + “: “ + ITINERARY[di].title;
dots.appendChild(dot);
}
}

/* =========================================================
ROUTE BAR
========================================================= */
function renderRoute() {
var wrap = document.getElementById(“route-bar”);
wrap.innerHTML = “”;

var cities = [];
for (var i = 0; i < ITINERARY.length; i++) {
if (cities.indexOf(ITINERARY[i].city) === -1) cities.push(ITINERARY[i].city);
}

/* Active = first city with incomplete items */
var activeCity = cities[cities.length - 1];
outer:
for (var i = 0; i < ITINERARY.length; i++) {
for (var j = 0; j < ITINERARY[i].items.length; j++) {
if (!state.completed[ITINERARY[i].day + “-” + j]) {
activeCity = ITINERARY[i].city;
break outer;
}
}
}

for (var ci = 0; ci < cities.length; ci++) {
var city = document.createElement(“div”);
city.className = “route-city” + (cities[ci] === activeCity ? “ active-city” : “”);
city.innerHTML = ‘<div class="rc-dot"></div><div class="rc-name">’ + cities[ci] + ‘</div>’;
wrap.appendChild(city);
if (ci < cities.length - 1) {
var line = document.createElement(“div”);
line.className = “route-line”;
wrap.appendChild(line);
}
}
}

/* =========================================================
PACKING
========================================================= */
function renderPacking() {
var wrap = document.getElementById(“pack-container”);
wrap.innerHTML = “”;

for (var ci = 0; ci < PACKING.length; ci++) {
(function(cat, catIdx) {
var done = 0;
for (var i = 0; i < cat.items.length; i++) {
if (state.packing[catIdx + “-” + i]) done++;
}
var pct = Math.round(done / cat.items.length * 100);

```
  var section = document.createElement("div");
  section.className = "pack-cat";

  var hdr = document.createElement("div");
  hdr.className = "pack-cat-hdr";
  hdr.innerHTML =
    '<div class="pack-cat-left">' + cat.cat + '</div>' +
    '<span class="pack-pct" id="pack-pct-' + catIdx + '">' + done + '/' + cat.items.length + ' · ' + pct + '%</span>';
  section.appendChild(hdr);

  var list = document.createElement("div");
  list.className = "pack-items-list";

  for (var ii = 0; ii < cat.items.length; ii++) {
    (function(item, itemIdx) {
      var key  = catIdx + "-" + itemIdx;
      var pkd  = !!state.packing[key];

      var row = document.createElement("div");
      row.className = "pack-item" + (pkd ? " done" : "");
      row.innerHTML =
        '<div class="pack-check">' + (pkd ? "✓" : "") + '</div>' +
        '<div class="pack-name">' + item.name + '</div>' +
        '<span class="pack-badge ' + (item.essential ? "badge-must" : "badge-opt") + '">' +
          (item.essential ? "must" : "opt") + '</span>';

      row.addEventListener("click", (function(k, r, ci) {
        return function() {
          state.packing[k] = !state.packing[k];
          saveState();
          r.classList.toggle("done", !!state.packing[k]);
          r.querySelector(".pack-check").textContent = state.packing[k] ? "✓" : "";
          var cat2   = PACKING[ci];
          var done2  = 0;
          for (var x = 0; x < cat2.items.length; x++) {
            if (state.packing[ci + "-" + x]) done2++;
          }
          var pctEl = document.getElementById("pack-pct-" + ci);
          if (pctEl) pctEl.textContent = done2 + "/" + cat2.items.length + " · " + Math.round(done2 / cat2.items.length * 100) + "%";
        };
      })(key, row, catIdx));

      list.appendChild(row);
    })(cat.items[ii], ii);
  }

  section.appendChild(list);
  wrap.appendChild(section);
})(PACKING[ci], ci);
```

}
}

/* =========================================================
BUDGET
========================================================= */
function renderBudget() {
renderBudgetCats();
renderBudgetEntries();
updateBudgetTotals();
}

function renderBudgetCats() {
var wrap = document.getElementById(“budget-cats”);
wrap.innerHTML = “”;
for (var i = 0; i < BUDGET_CATS.length; i++) {
(function(cat, idx) {
var div = document.createElement(“div”);
div.className = “budget-cat” + (state.budgetCat === idx ? “ active” : “”);
div.textContent = cat.ico + “ “ + cat.label;
div.addEventListener(“click”, function() {
state.budgetCat = idx;
saveState();
var all = document.querySelectorAll(”.budget-cat”);
for (var j = 0; j < all.length; j++) all[j].classList.toggle(“active”, j === idx);
});
wrap.appendChild(div);
})(BUDGET_CATS[i], i);
}
}

function renderBudgetEntries() {
var wrap = document.getElementById(“budget-entries”);
wrap.innerHTML = “”;

if (!state.budget.length) {
wrap.innerHTML = ‘<div style="font-size:12px;color:var(--mist);text-align:center;padding:20px 0">No expenses yet — start logging!</div>’;
return;
}

for (var ri = 0; ri < state.budget.length; ri++) {
(function(entry, realIdx) {
var row = document.createElement(“div”);
row.className = “budget-entry”;
var gbp = Math.round(entry.amt * GBP_RATE);
row.innerHTML =
‘<div class="budget-entry-left">’ +
‘<div class="budget-entry-ico">’ + entry.ico + ‘</div>’ +
‘<div>’ +
‘<div class="budget-entry-desc">’ + entry.desc + ‘</div>’ +
‘<div class="budget-entry-cat">’ + entry.cat + ’ · £’ + gbp + ‘</div>’ +
‘</div>’ +
‘</div>’ +
‘<div class="budget-entry-right">’ +
‘<div class="budget-entry-amt">¥’ + Number(entry.amt).toLocaleString() + ‘</div>’ +
‘<div class="budget-del" title="Delete">✕</div>’ +
‘</div>’;

```
  row.querySelector(".budget-del").addEventListener("click", function() {
    if (confirm('Delete "' + entry.desc + '"?')) {
      state.budget.splice(realIdx, 1);
      saveState();
      renderBudgetEntries();
      updateBudgetTotals();
    }
  });

  wrap.appendChild(row);
})(state.budget[state.budget.length - 1 - ri], state.budget.length - 1 - ri);
```

}
}

function updateBudgetTotals() {
var total = 0;
for (var i = 0; i < state.budget.length; i++) total += Number(state.budget[i].amt);
var gbp  = Math.round(total * GBP_RATE);
var rem  = BUDGET_LIMIT - total;
var pct  = Math.min(100, Math.round(total / BUDGET_LIMIT * 100));

document.getElementById(“budget-total”).textContent = total.toLocaleString();
document.getElementById(“budget-gbp”).textContent   = “£” + gbp.toLocaleString();

var remEl = document.getElementById(“budget-remaining”);
if (remEl) remEl.textContent = rem >= 0 ? “¥” + Math.round(rem / 1000) + “k left” : “Over by ¥” + Math.round(Math.abs(rem) / 1000) + “k”;
var cntEl = document.getElementById(“budget-count”);
if (cntEl) cntEl.textContent = state.budget.length;
var glEl = document.getElementById(“budget-gbp-label”);
if (glEl) glEl.textContent = “£” + gbp.toLocaleString();

document.getElementById(“budget-fill”).style.width = pct + “%”;
}

function addExpense() {
var desc = document.getElementById(“budget-desc”).value.trim();
var amt  = parseInt(document.getElementById(“budget-amt”).value, 10);
var cat  = BUDGET_CATS[state.budgetCat];

if (!desc || !amt || amt <= 0) {
showToast(“Enter a description and amount ¥”);
return;
}

state.budget.push({ desc:desc, amt:amt, ico:cat.ico, cat:cat.label });
saveState();

document.getElementById(“budget-desc”).value = “”;
document.getElementById(“budget-amt”).value  = “”;

renderBudgetEntries();
updateBudgetTotals();
showToast(“¥” + amt.toLocaleString() + “ logged “ + cat.ico);
}

/* =========================================================
INFO
========================================================= */
function renderInfo() {
var wrap = document.getElementById(“info-grid”);
wrap.innerHTML = “”;
for (var i = 0; i < INFO.length; i++) {
var card = document.createElement(“div”);
card.className = “info-card”;
card.innerHTML =
‘<div class="info-ico">’ + INFO[i].ico + ‘</div>’ +
‘<div class="info-val">’ + INFO[i].val + ‘</div>’ +
‘<div class="info-lbl">’ + INFO[i].lbl + ‘</div>’;
wrap.appendChild(card);
}
}

/* =========================================================
TIPS
========================================================= */
function renderTips() {
var wrap = document.getElementById(“tips-list”);
wrap.innerHTML = “”;
for (var i = 0; i < TIPS.length; i++) {
var row = document.createElement(“div”);
row.className = “tip”;
var num = (i + 1 < 10 ? “0” : “”) + (i + 1);
row.innerHTML = ‘<div class="tip-num">’ + num + ‘</div><div class="tip-text">’ + TIPS[i] + ‘</div>’;
wrap.appendChild(row);
}
}

/* =========================================================
PHRASES
========================================================= */
function renderPhrases() {
var wrap = document.getElementById(“phrases-container”);
wrap.innerHTML = “”;
for (var i = 0; i < PHRASES.length; i++) {
(function(p) {
var row = document.createElement(“div”);
row.className = “phrase”;
row.innerHTML =
‘<div class="phrase-jp">’ + p.jp + ‘</div>’ +
‘<div class="phrase-romaji">’ + p.rom + ‘</div>’ +
‘<div class="phrase-en">’ + p.en + ‘</div>’ +
‘<div class="phrase-copied">Copied ✓</div>’;
row.addEventListener(“click”, function() {
if (navigator.clipboard && navigator.clipboard.writeText) {
navigator.clipboard.writeText(p.jp).catch(function(){});
}
var c = row.querySelector(”.phrase-copied”);
c.style.display = “block”;
setTimeout(function(){ c.style.display = “none”; }, 1600);
});
wrap.appendChild(row);
})(PHRASES[i]);
}
}

/* =========================================================
NOTES
========================================================= */
function renderNotes() {
var ta    = document.getElementById(“notes-ta”);
var saved = document.getElementById(“notes-saved”);
ta.value  = state.notes || “”;
var timer;
ta.addEventListener(“input”, function() {
state.notes = ta.value;
clearTimeout(timer);
timer = setTimeout(function() {
saveState();
saved.classList.add(“show”);
setTimeout(function(){ saved.classList.remove(“show”); }, 1200);
}, 400);
});
}

/* =========================================================
TABS
========================================================= */
function setupTabs() {
var nav = document.getElementById(“bnav”);
nav.addEventListener(“click”, function(e) {
var btn = e.target.closest(”[data-view]”);
if (!btn) return;
var view = btn.dataset.view;
var views = document.querySelectorAll(”.view”);
for (var i = 0; i < views.length; i++) views[i].classList.remove(“active”);
document.getElementById(“view-” + view).classList.add(“active”);
var tabs = document.querySelectorAll(”.bntab”);
for (var j = 0; j < tabs.length; j++) tabs[j].classList.toggle(“active”, tabs[j] === btn);
document.getElementById(“app”).scrollTop = 0;
});
}

/* =========================================================
RESET
========================================================= */
function setupReset() {
document.getElementById(“reset-btn”).addEventListener(“click”, function() {
if (!confirm(“Reset trip progress & packing? Notes and budget are kept.”)) return;
state.completed = {};
state.packing   = {};
saveState();
renderDays();
renderRoute();
renderPacking();
updateProgress();
showToast(“Progress reset ↺”);
});
}

/* =========================================================
INSTALL BANNER
========================================================= */
function setupInstallBanner() {
var deferred = null;
window.addEventListener(“beforeinstallprompt”, function(e) {
e.preventDefault();
deferred = e;
var banner = document.getElementById(“install-banner”);
if (banner) banner.classList.add(“vis”);
});
var btn = document.getElementById(“install-btn”);
if (btn) btn.addEventListener(“click”, function() {
if (!deferred) return;
deferred.prompt();
deferred.userChoice.then(function(r) {
if (r.outcome === “accepted”) showToast(“App installed 🎌”);
deferred = null;
var banner = document.getElementById(“install-banner”);
if (banner) banner.classList.remove(“vis”);
});
});
window.addEventListener(“appinstalled”, function() {
showToast(“Japan’26 installed 🌸”);
var banner = document.getElementById(“install-banner”);
if (banner) banner.classList.remove(“vis”);
});
}

/* =========================================================
OFFLINE
========================================================= */
function setupOfflineBadge() {
function upd() { document.body.classList.toggle(“offline”, !navigator.onLine); }
window.addEventListener(“online”,  function(){ upd(); showToast(“Back online ✓”); });
window.addEventListener(“offline”, function(){ upd(); showToast(“Offline — data saved ✓”); });
upd();
}

/* =========================================================
PETALS  — fixed: uses CSS vars for independent axes
petal-fall moves Y only; rotate is separate via CSS
========================================================= */
function spawnPetal() {
var el = document.createElement(“div”);
el.className = “petal”;

var size = 14 + Math.random() * 12;
el.style.width  = size + “px”;
el.style.height = size * 1.35 + “px”;
el.style.left   = (Math.random() * 105 - 2) + “vw”;
el.style.top    = “-50px”;

var fallDur  = 5 + Math.random() * 5;
var swayAmp  = 20 + Math.random() * 30;
var swayDur  = 2 + Math.random() * 2;
var spinDur  = 4 + Math.random() * 4;
var delay    = Math.random() * 0.4;

el.style.setProperty(”–fall-dur”,  fallDur  + “s”);
el.style.setProperty(”–sway-amp”,  swayAmp  + “px”);
el.style.setProperty(”–sway-dur”,  swayDur  + “s”);
el.style.setProperty(”–spin-dur”,  spinDur  + “s”);
el.style.animationDelay = delay + “s”;

/* Random hue shift for variety */
var hue = Math.random() * 30 - 10;
el.style.filter = “hue-rotate(” + hue + “deg) brightness(” + (0.9 + Math.random() * 0.2) + “)”;

document.body.appendChild(el);
var removeAfter = (fallDur + delay + 0.5) * 1000;
setTimeout(function(){ if (el.parentNode) el.parentNode.removeChild(el); }, removeAfter);
}

/* =========================================================
TOAST
========================================================= */
function showToast(msg) {
var t = document.getElementById(“toast”);
t.textContent = msg;
t.classList.add(“show”);
clearTimeout(t._tmr);
t._tmr = setTimeout(function(){ t.classList.remove(“show”); }, 2200);
}