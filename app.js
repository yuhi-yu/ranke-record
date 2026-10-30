const STORAGE_KEY = "ranke-training-v2";
const LEGACY_STORAGE_KEY = "ranke-fitness-v1";

const PHASES = {
  bulk: {
    label: "增肌期",
    short: "增肌",
    note: "稳定训练，给身体足够的恢复空间。"
  },
  cut: {
    label: "减脂期",
    short: "减脂",
    note: "保持训练质量，关注恢复与状态变化。"
  }
};

const APPETITES = [
  { id: "none", score: 1, label: "没胃口", face: "😖", description: "今天不太想吃" },
  { id: "low", score: 2, label: "偏低", face: "😕", description: "比平时吃得少" },
  { id: "normal", score: 3, label: "正常", face: "😐", description: "和平时差不多" },
  { id: "good", score: 4, label: "不错", face: "🙂", description: "有食欲，状态不错" },
  { id: "hungry", score: 5, label: "特别饿", face: "😋", description: "一直想吃东西" }
];

const INTENSITIES = [
  { id: "low", label: "轻" },
  { id: "normal", label: "中" },
  { id: "high", label: "高" }
];

const icons = {
  logo: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.8 13.2c2.7-.1 4-1.3 5-4.2.5-1.3 1.2-1.6 2-.7 1.4 1.5 2.1 3.7 2.8 5.9.4 1.2 1 1.4 1.7.4.8-1.2 1.5-3 2.3-4.4.3-.6.8-.8 1.5-.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="19.2" cy="9" r="1.1" fill="currentColor"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 15.3a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z" stroke="currentColor" stroke-width="1.7"/><path d="M19.4 13.5c.1-.5.1-1 0-1.5l1.7-1.3-1.8-3.1-2 .8c-.4-.3-.8-.6-1.3-.7l-.3-2.2h-3.6l-.3 2.2c-.5.2-.9.4-1.3.7l-2-.8-1.8 3.1 1.7 1.3c-.1.5-.1 1 0 1.5l-1.7 1.3 1.8 3.1 2-.8c.4.3.8.6 1.3.7l.3 2.2h3.6l.3-2.2c.5-.2.9-.4 1.3-.7l2 .8 1.8-3.1-1.7-1.3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  dumbbell: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 8v8m12-8v8M3.5 10v4m17-4v4M6 12h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  run: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="15.5" cy="4.5" r="1.8" fill="currentColor"/><path d="m13 8-3 4 4 2-2 6M13 8l4 2 3 5M10 12l-3 1M12 14l-3 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15" rx="3" stroke="currentColor" stroke-width="1.7"/><path d="M7.5 3v4M16.5 3v4M3.5 9.5h17M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19V9m5 10V5m5 14v-7m5 7V3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 7h14m-9-3h4l1 3H9l1-3Zm-3 3 1 13h8l1-13M10 11v5m4-5v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 16V4m0 0L8 8m4-4 4 4M5 20h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 1.3 5.2L18 10l-4.7 1.8L12 17l-1.3-5.2L6 10l4.7-1.8L12 3Zm7 11 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.7"/><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 15.3A8.5 8.5 0 0 1 8.7 4a8.7 8.7 0 1 0 11.3 11.3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function pad(value) {
  return String(value).padStart(2, "0");
}

function dateKey(date = new Date()) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function dateFromKey(key) {
  const [year, month, day] = String(key).split("-").map(Number);
  return new Date(year, month - 1, day, 12);
}

function shiftDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function formatDate(key, options = {}) {
  const date = dateFromKey(key);
  return new Intl.DateTimeFormat("zh-CN", {
    month: options.month === false ? undefined : "long",
    day: options.day === false ? undefined : "numeric",
    weekday: options.weekday === false ? undefined : "short"
  }).format(date);
}

function formatMonth(date) {
  return `${date.getFullYear()}年${date.getMonth() + 1}月`;
}

function makeEmptyData() {
  return { version: 2, days: {} };
}

function normalizeAppetite(value) {
  return APPETITES.some((item) => item.id === value) ? value : null;
}

function normalizeWorkout(item, forcedKind = null) {
  if (!item) return null;
  const activity = EXERCISE_DATABASE.find((entry) =>
    entry.id === item.activityId ||
    entry.id === item.sourceActivityId ||
    entry.name === item.name
  );
  const kind = forcedKind || item.kind || (item.category === "cardio" ? "cardio" : "strength");
  return {
    id: item.id || id("workout"),
    kind,
    activityId: activity?.id || item.activityId || item.sourceActivityId || null,
    name: item.name || activity?.name || (kind === "cardio" ? "有氧" : "力量训练"),
    group: item.group || activity?.group || item.trainingGroup || "",
    duration: Math.max(1, Number(item.duration) || activity?.defaultDuration || 30),
    intensity: ["low", "normal", "high"].includes(item.intensity) ? item.intensity : "normal",
    time: item.time || "12:00"
  };
}

function normalizeData(raw) {
  const days = {};
  Object.entries(raw?.days || {}).forEach(([key, day]) => {
    const workouts = Array.isArray(day?.workouts)
      ? day.workouts.map((item) => normalizeWorkout(item, "strength")).filter(Boolean)
      : [];
    days[key] = {
      phase: ["bulk", "cut"].includes(day?.phase) ? day.phase : null,
      appetite: normalizeAppetite(day?.appetite),
      workouts
    };
  });
  return { version: 2, days };
}

function migrateLegacy(raw) {
  const migrated = makeEmptyData();
  Object.entries(raw?.days || {}).forEach(([key, day]) => {
    const workouts = [
      ...(Array.isArray(day?.workouts) ? day.workouts.map((item) => normalizeWorkout(item, "strength")) : []),
      ...(Array.isArray(day?.cardio) ? day.cardio.map((item) => normalizeWorkout(item, "cardio")) : [])
    ].filter(Boolean);
    if (workouts.length) {
      migrated.days[key] = { phase: null, appetite: null, workouts };
    }
  });
  const today = dateKey();
  if (raw?.settings?.bulkMonth) {
    migrated.days[today] ||= { phase: null, appetite: null, workouts: [] };
    migrated.days[today].phase = "bulk";
  }
  return migrated;
}

function loadData() {
  try {
    const current = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (current?.days) {
      localStorage.removeItem(LEGACY_STORAGE_KEY);
      return normalizeData(current);
    }
  } catch {
    // Ignore malformed local data and try the old format below.
  }

  try {
    const legacy = JSON.parse(localStorage.getItem(LEGACY_STORAGE_KEY));
    if (legacy?.days) {
      const migrated = migrateLegacy(legacy);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
      localStorage.removeItem(LEGACY_STORAGE_KEY);
      return migrated;
    }
  } catch {
    // Ignore malformed legacy data.
  }
  return makeEmptyData();
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function getDay(key, create = false) {
  if (!db.days[key] && create) {
    db.days[key] = { phase: null, appetite: null, workouts: [] };
  }
  return db.days[key] || { phase: null, appetite: null, workouts: [] };
}

function id(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function activityById(idValue) {
  return EXERCISE_DATABASE.find((item) => item.id === idValue) || null;
}

function appetiteById(idValue) {
  return APPETITES.find((item) => item.id === idValue) || null;
}

function intensityLabel(idValue) {
  return INTENSITIES.find((item) => item.id === idValue)?.label || "中";
}

function currentTime() {
  return new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
}

function currentPhaseStreak() {
  const today = new Date();
  const phase = getDay(dateKey(today)).phase;
  if (!phase) return 0;
  let count = 0;
  let cursor = today;
  while (getDay(dateKey(cursor)).phase === phase) {
    count += 1;
    cursor = shiftDays(cursor, -1);
  }
  return count;
}

function todayWorkoutCount() {
  return getDay(dateKey()).workouts.length;
}

let db = loadData();
let activeTab = ["today", "record", "calendar"].includes(new URLSearchParams(location.search).get("tab"))
  ? new URLSearchParams(location.search).get("tab")
  : "today";
let recordMode = "training";
let workoutKind = "strength";
let selectedActivityId = "chest";
let calendarCursor = new Date();
calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth(), 1, 12);
let selectedDayKey = null;
let deferredInstallPrompt = null;

function renderTopbar() {
  $("#topbar").innerHTML = `
    <button class="brand-lockup brand-button" data-nav="today" aria-label="回到今日">
      <span class="brand-mark">${icons.logo}</span>
      <span class="brand-name">燃刻</span>
    </button>
    <div class="topbar-actions">
      <button class="icon-button" data-action="install" aria-label="安装应用">${icons.download}</button>
      <button class="icon-button" data-action="settings" aria-label="打开设置">${icons.settings}</button>
    </div>
  `;
}

function pageHeader(eyebrow, title, note = "", right = "") {
  return `
    <div class="page-head">
      <div class="page-head-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span>${eyebrow}</p>
        <h1>${title}</h1>
        ${note ? `<p class="page-head-note">${note}</p>` : ""}
      </div>
      ${right}
    </div>
  `;
}

function renderWeekStrip() {
  const today = new Date();
  return `
    <div class="week-strip" aria-label="最近七天周期">
      ${Array.from({ length: 7 }, (_, index) => {
        const date = shiftDays(today, index - 6);
        const key = dateKey(date);
        const day = getDay(key);
        const phase = day.phase;
        const weekday = ["日", "一", "二", "三", "四", "五", "六"][date.getDay()];
        return `
          <button class="week-day ${phase ? `is-${phase}` : ""} ${index === 6 ? "is-today" : ""}"
            data-day-open="${key}" aria-label="${formatDate(key)}">
            <span>${weekday}</span>
            <i></i>
            <small>${date.getDate()}</small>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function renderWorkoutRow(workout, allowDelete = false) {
  const isCardio = workout.kind === "cardio";
  return `
    <div class="workout-row">
      <span class="workout-icon ${isCardio ? "cardio" : "strength"}">
        ${isCardio ? icons.run : icons.dumbbell}
      </span>
      <div class="workout-copy">
        <strong>${escapeHTML(workout.name)}</strong>
        <span>${workout.duration} 分钟 · ${intensityLabel(workout.intensity)}强度 · ${escapeHTML(workout.time)}</span>
      </div>
      <span class="workout-kind">${isCardio ? "有氧" : workout.group ? `${escapeHTML(workout.group)}部` : "无氧"}</span>
      ${allowDelete ? `<button class="delete-button" data-delete-workout="${workout.id}" aria-label="删除训练">${icons.trash}</button>` : ""}
    </div>
  `;
}

function renderToday() {
  const key = dateKey();
  const day = getDay(key);
  const phase = PHASES[day.phase] || null;
  const appetite = appetiteById(day.appetite);
  const streak = currentPhaseStreak();
  const date = new Date();

  $("#screen").innerHTML = `
    <div class="page-enter">
      ${pageHeader(
        `${date.getMonth() + 1}月${date.getDate()}日 · ${new Intl.DateTimeFormat("zh-CN", { weekday: "long" }).format(date)}`,
        "今天，<span class='thin'>练了什么？</span>",
        "只记录训练、周期和身体状态。",
        `<span class="header-mark">${icons.sun}</span>`
      )}

      <section class="phase-card ${day.phase ? `is-${day.phase}` : "is-empty"}">
        <div class="phase-topline">
          <span class="live-label"><span class="live-dot"></span>TRAINING PHASE</span>
          <span>${streak ? `连续第 ${streak} 天` : "尚未标记"}</span>
        </div>
        <div class="phase-main">
          <div>
            <p class="phase-kicker">当前周期</p>
            <strong>${phase ? phase.label : "选择今天"}</strong>
            <p>${phase ? phase.note : "增肌还是减脂，今天由你决定。"}</p>
          </div>
          <span class="phase-orb">${day.phase === "cut" ? icons.moon : icons.sun}</span>
        </div>
        <div class="phase-actions">
          <button class="phase-choice ${day.phase === "bulk" ? "is-active" : ""}" data-set-phase="bulk">${icons.sun}增肌期</button>
          <button class="phase-choice ${day.phase === "cut" ? "is-active cut" : ""}" data-set-phase="cut">${icons.moon}减脂期</button>
          ${day.phase ? `<button class="phase-clear" data-clear-phase aria-label="清除今日周期">清除</button>` : ""}
        </div>
        ${renderWeekStrip()}
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <h2>今天练了什么</h2>
            <p>${day.workouts.length ? `${day.workouts.length} 条训练记录` : "还没有训练记录"}</p>
          </div>
          <button class="text-button" data-open-record="training">记录 ${icons.plus}</button>
        </div>
        <div class="glass-card workout-list">
          ${day.workouts.length
            ? day.workouts.map((workout) => renderWorkoutRow(workout)).join("")
            : `
              <div class="empty-state">
                <span class="empty-icon">${icons.dumbbell}</span>
                <strong>今天还没有训练</strong>
                <p>从胸、背、肩、腿，或坡度走、爬楼机开始。</p>
                <button class="inline-action" data-open-record="training">${icons.plus}记录训练</button>
              </div>
            `}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div>
            <h2>今天的胃口</h2>
            <p>只做状态记录，不判断好坏</p>
          </div>
          ${appetite ? `<span class="status-chip appetite-${appetite.score}">${appetite.face} ${appetite.label}</span>` : ""}
        </div>
        ${renderAppetiteStrip(day.appetite)}
      </section>

      <section class="daily-note-card">
        <span>${icons.spark}</span>
        <p>${phase
          ? `今天处于${phase.label}。${day.workouts.length ? "训练已记录，保持你自己的节奏。" : "记录训练后，这一天会更完整。"}`
          : "先标记今天属于增肌期还是减脂期，再开始记录训练。"}</p>
      </section>
    </div>
  `;
}

function renderAppetiteStrip(selected) {
  return `
    <div class="appetite-strip">
      ${APPETITES.map((item) => `
        <button class="appetite-option ${selected === item.id ? "is-active" : ""} level-${item.score}"
          data-set-appetite="${item.id}" aria-pressed="${selected === item.id}">
          <span class="appetite-face">${item.face}</span>
          <strong>${item.label}</strong>
        </button>
      `).join("")}
    </div>
  `;
}

function renderWorkoutForm() {
  const activities = EXERCISE_DATABASE.filter((item) => item.kind === workoutKind);
  const selected = activities.find((item) => item.id === selectedActivityId) || activities[0];
  if (selected && selectedActivityId !== selected.id) selectedActivityId = selected.id;

  return `
    <div class="record-lead ${workoutKind === "strength" ? "strength" : "cardio"}">
      <small>TRAINING LOG</small>
      <strong>${workoutKind === "strength" ? "今天练哪个部位？" : "今天做了什么有氧？"}</strong>
      <p>${workoutKind === "strength" ? "胸、背、肩、腿，记录大概就够。" : "坡度走、爬楼机，先记录下来。"}</p>
    </div>
    <div class="kind-switch">
      <button class="${workoutKind === "strength" ? "is-active" : ""}" data-workout-kind="strength">${icons.dumbbell}无氧训练</button>
      <button class="${workoutKind === "cardio" ? "is-active" : ""}" data-workout-kind="cardio">${icons.run}有氧训练</button>
    </div>
    <div class="activity-grid">
      ${activities.map((activity) => `
        <button class="activity-card ${selectedActivityId === activity.id ? "is-selected" : ""}"
          data-select-activity="${activity.id}">
          <span>${activity.kind === "strength" ? activity.group : icons.run}</span>
          <strong>${activity.name}</strong>
          <small>${activity.kind === "strength" ? "按训练部位记录" : "有氧"}</small>
        </button>
      `).join("")}
    </div>
    <form data-form="workout" class="training-form">
      <div class="form-grid">
        <div class="form-field">
          <label for="workout-duration">训练时长</label>
          <div class="input-suffix">
            <input class="form-input" id="workout-duration" name="duration" type="number" inputmode="numeric"
              min="1" max="600" value="${selected?.defaultDuration || 30}" required />
            <span>分钟</span>
          </div>
        </div>
        <div class="form-field">
          <label for="workout-intensity">训练强度</label>
          <select class="form-select" id="workout-intensity" name="intensity">
            ${INTENSITIES.map((item) => `<option value="${item.id}" ${item.id === "normal" ? "selected" : ""}>${item.label}强度</option>`).join("")}
          </select>
        </div>
      </div>
      <button class="primary-button" type="submit">${icons.plus}加入今天训练</button>
    </form>
    <section class="section compact-section">
      <div class="section-head">
        <div><h2>今天已记录</h2><p>${getDay(dateKey()).workouts.length} 条训练</p></div>
      </div>
      <div class="glass-card workout-list">
        ${getDay(dateKey()).workouts.length
          ? getDay(dateKey()).workouts.map((workout) => renderWorkoutRow(workout, true)).join("")
          : `<div class="empty-inline">还没有训练记录</div>`}
      </div>
    </section>
  `;
}

function renderAppetiteRecord() {
  const current = getDay(dateKey()).appetite;
  return `
    <div class="record-lead appetite">
      <small>APPETITE</small>
      <strong>今天胃口怎么样？</strong>
      <p>点一下记录，今天不需要再重复填写。</p>
    </div>
    <div class="appetite-detail-grid">
      ${APPETITES.map((item) => `
        <button class="appetite-detail ${current === item.id ? "is-active" : ""} level-${item.score}"
          data-set-appetite="${item.id}" aria-pressed="${current === item.id}">
          <span>${item.face}</span>
          <strong>${item.label}</strong>
          <small>${item.description}</small>
          <i>${icons.check}</i>
        </button>
      `).join("")}
    </div>
    ${current ? `
      <div class="selection-note">
        <span>${icons.check}</span>
        <p>今天已记录为「${appetiteById(current).label}」</p>
      </div>
    ` : `<div class="selection-note empty"><span>${icons.spark}</span><p>选择最接近今天真实感受的一项。</p></div>`}
  `;
}

function renderRecord() {
  $("#screen").innerHTML = `
    <div class="page-enter">
      ${pageHeader("DAILY LOG", `记录今天，<span class="thin">就这些。</span>`, "训练和胃口，记录真实状态。")}
      <div class="mode-switch" role="tablist" aria-label="记录类型">
        <button class="mode-button ${recordMode === "training" ? "is-active" : ""}" data-record-mode="training" role="tab" aria-selected="${recordMode === "training"}">${icons.dumbbell}训练</button>
        <button class="mode-button ${recordMode === "appetite" ? "is-active" : ""}" data-record-mode="appetite" role="tab" aria-selected="${recordMode === "appetite"}">🙂 胃口</button>
      </div>
      ${recordMode === "training" ? renderWorkoutForm() : renderAppetiteRecord()}
    </div>
  `;
}

function monthSummary() {
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  let bulkDays = 0;
  let cutDays = 0;
  let workoutDays = 0;
  Object.entries(db.days).forEach(([key, day]) => {
    const date = dateFromKey(key);
    if (date.getFullYear() !== year || date.getMonth() !== month) return;
    if (day.phase === "bulk") bulkDays += 1;
    if (day.phase === "cut") cutDays += 1;
    if (day.workouts.length) workoutDays += 1;
  });
  return { bulkDays, cutDays, workoutDays };
}

function renderCalendarGrid() {
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const first = new Date(year, month, 1, 12);
  const leading = (first.getDay() + 6) % 7;
  const totalDays = new Date(year, month + 1, 0).getDate();
  const cells = [];
  const today = dateKey();

  for (let i = 0; i < leading; i += 1) {
    cells.push(`<span class="calendar-day is-blank"></span>`);
  }

  for (let dayNumber = 1; dayNumber <= totalDays; dayNumber += 1) {
    const key = `${year}-${pad(month + 1)}-${pad(dayNumber)}`;
    const day = getDay(key);
    const appetite = appetiteById(day.appetite);
    cells.push(`
      <button class="calendar-day ${day.phase ? `is-${day.phase}` : ""} ${key === today ? "is-today" : ""}"
        data-day-open="${key}" aria-label="${formatDate(key)} ${day.phase ? PHASES[day.phase].label : "未标记"}">
        <span class="calendar-number">${dayNumber}</span>
        <span class="calendar-marks">
          ${day.workouts.length ? `<i class="mark workout"></i>` : ""}
          ${appetite ? `<i class="mark appetite">${appetite.face}</i>` : ""}
        </span>
      </button>
    `);
  }

  while (cells.length % 7 !== 0) {
    cells.push(`<span class="calendar-day is-blank"></span>`);
  }

  return `
    <div class="calendar-weekdays">
      ${["一", "二", "三", "四", "五", "六", "日"].map((day) => `<span>${day}</span>`).join("")}
    </div>
    <div class="calendar-grid">${cells.join("")}</div>
  `;
}

function renderCalendar() {
  const summary = monthSummary();
  const today = getDay(dateKey());
  const phase = PHASES[today.phase];
  const streak = currentPhaseStreak();

  $("#screen").innerHTML = `
    <div class="page-enter">
      ${pageHeader("PHASE CALENDAR", `一周一周，<span class="thin">看清方向。</span>`, "点击日期，补记当天的增肌期或减脂期。")}
      <section class="cycle-summary ${today.phase ? `is-${today.phase}` : "is-empty"}">
        <div class="cycle-summary-copy">
          <span>当前周期</span>
          <strong>${phase ? phase.label : "尚未标记"}</strong>
          <p>${phase ? `已连续 ${streak} 天` : "从今日页标记你的周期"}</p>
        </div>
        <div class="cycle-counts">
          <div><strong>${summary.bulkDays}</strong><span>增肌日</span></div>
          <div><strong>${summary.cutDays}</strong><span>减脂日</span></div>
          <div><strong>${summary.workoutDays}</strong><span>训练日</span></div>
        </div>
      </section>

      <section class="calendar-card">
        <div class="calendar-head">
          <button class="calendar-arrow" data-calendar-step="-1" aria-label="上个月">${icons.chevron}</button>
          <strong>${formatMonth(calendarCursor)}</strong>
          <button class="calendar-arrow next" data-calendar-step="1" aria-label="下个月">${icons.chevron}</button>
        </div>
        ${renderCalendarGrid()}
        <div class="calendar-legend">
          <span><i class="legend-phase bulk"></i>增肌期</span>
          <span><i class="legend-phase cut"></i>减脂期</span>
          <span><i class="legend-dot"></i>训练记录</span>
        </div>
      </section>

      <button class="calendar-today-button" data-calendar-today>
        ${icons.calendar}回到今天
      </button>
    </div>
  `;
}

function render() {
  renderTopbar();
  if (activeTab === "record") renderRecord();
  else if (activeTab === "calendar") renderCalendar();
  else renderToday();

  $$(".nav-item").forEach((item) => {
    const active = item.dataset.nav === activeTab;
    item.classList.toggle("is-active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  window.scrollTo(0, 0);
}

function switchTab(tab) {
  if (!["today", "record", "calendar"].includes(tab)) return;
  activeTab = tab;
  render();
}

function setPhase(key, phase) {
  const day = getDay(key, true);
  day.phase = phase;
  saveData();
  render();
  showToast(`${formatDate(key, { weekday: false })}已标记为${PHASES[phase].label}`);
}

function clearPhase(key) {
  const day = getDay(key, true);
  day.phase = null;
  saveData();
  render();
  showToast("已清除这天的周期");
}

function setAppetite(appetiteId) {
  const day = getDay(dateKey(), true);
  day.appetite = appetiteId;
  saveData();
  render();
  showToast(`今天的胃口：${appetiteById(appetiteId).label}`);
}

function recordWorkout(form) {
  const activity = activityById(selectedActivityId);
  if (!activity) {
    showToast("请先选择训练内容");
    return;
  }
  const formData = new FormData(form);
  const duration = Number(formData.get("duration"));
  if (!Number.isFinite(duration) || duration <= 0) {
    showToast("请填写训练时长");
    return;
  }
  const workout = {
    id: id("workout"),
    kind: activity.kind,
    activityId: activity.id,
    name: activity.name,
    group: activity.group,
    duration: Math.round(duration),
    intensity: String(formData.get("intensity") || "normal"),
    time: currentTime()
  };
  const day = getDay(dateKey(), true);
  day.workouts.push(workout);
  saveData();
  render();
  showToast(`${activity.name}已记录`);
}

function deleteWorkout(workoutId) {
  const day = getDay(dateKey(), true);
  day.workouts = day.workouts.filter((workout) => workout.id !== workoutId);
  saveData();
  render();
  showToast("训练记录已删除");
}

function openDaySheet(key) {
  selectedDayKey = key;
  const day = getDay(key);
  const phase = PHASES[day.phase];
  const appetite = appetiteById(day.appetite);
  const sheet = $("#bottomSheet");
  sheet.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="sheet-head">
      <div>
        <small>DAY DETAIL</small>
        <h2 id="sheetTitle">${formatDate(key, { month: true })}</h2>
      </div>
      <button class="sheet-close" data-action="close-sheet" aria-label="关闭">${icons.close}</button>
    </div>
    <div class="day-sheet-phase">
      <span class="day-sheet-label">当天周期</span>
      <strong>${phase ? phase.label : "未标记"}</strong>
    </div>
    <div class="sheet-phase-actions">
      <button class="sheet-phase-button bulk ${day.phase === "bulk" ? "is-active" : ""}" data-sheet-phase="bulk">${icons.sun}<span>增肌期</span></button>
      <button class="sheet-phase-button cut ${day.phase === "cut" ? "is-active" : ""}" data-sheet-phase="cut">${icons.moon}<span>减脂期</span></button>
    </div>
    <button class="clear-button" data-sheet-clear-phase>不标记周期</button>
    <div class="day-sheet-summary">
      <div><span>训练</span><strong>${day.workouts.length ? `${day.workouts.length} 条` : "无记录"}</strong></div>
      <div><span>胃口</span><strong>${appetite ? `${appetite.face} ${appetite.label}` : "未记录"}</strong></div>
    </div>
    ${day.workouts.length ? `<div class="glass-card workout-list sheet-workouts">${day.workouts.map((workout) => renderWorkoutRow(workout)).join("")}</div>` : ""}
    ${key === dateKey() ? `<button class="primary-button" data-action="close-sheet" data-open-record="training">${icons.plus}记录今天的训练</button>` : ""}
  `;
  $("#sheetBackdrop").hidden = false;
  sheet.hidden = false;
  document.body.style.overflow = "hidden";
  syncVisualViewport();
}

function openSettings() {
  const sheet = $("#bottomSheet");
  sheet.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="sheet-head">
      <div><small>SETTINGS</small><h2 id="sheetTitle">设置</h2></div>
      <button class="sheet-close" data-action="close-sheet" aria-label="关闭">${icons.close}</button>
    </div>
    <div class="settings-card">
      ${settingsRow("download", "安装到手机", "离线运行，不需要联网", "install")}
      ${settingsRow("download", "导出备份", "保存训练和周期记录", "export-data")}
      ${settingsRow("upload", "导入备份", "从备份文件恢复", "import-data")}
      ${settingsRow("trash", "清空全部记录", "删除这台设备上的所有记录", "reset-data", true)}
    </div>
    <div class="about-card">
      <span>${icons.spark}</span>
      <div><strong>燃刻 2.0</strong><p>只记录训练、周期和身体状态。所有数据保存在本机。</p></div>
    </div>
  `;
  $("#sheetBackdrop").hidden = false;
  sheet.hidden = false;
  document.body.style.overflow = "hidden";
  syncVisualViewport();
}

function settingsRow(iconName, title, subtitle, action, danger = false) {
  return `
    <button class="settings-row ${danger ? "is-danger" : ""}" data-action="${action}">
      <span class="settings-icon">${icons[iconName]}</span>
      <span class="settings-copy"><strong>${title}</strong><small>${subtitle}</small></span>
      <span class="settings-chevron">${icons.chevron}</span>
    </button>
  `;
}

function closeSheet() {
  if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  document.body.classList.remove("keyboard-open");
  $("#sheetBackdrop").hidden = true;
  $("#bottomSheet").hidden = true;
  document.body.style.overflow = "";
}

let toastTimer = null;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function syncVisualViewport() {
  const viewport = window.visualViewport;
  const visualHeight = Math.max(260, viewport?.height || window.innerHeight);
  const offsetTop = viewport?.offsetTop || 0;
  const keyboardInset = Math.max(0, window.innerHeight - visualHeight - offsetTop);
  document.documentElement.style.setProperty("--vvh", `${visualHeight}px`);
  document.documentElement.style.setProperty("--keyboard-inset", `${keyboardInset}px`);
  document.body.classList.toggle("keyboard-open", keyboardInset > 100);
}

function exportData() {
  const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `燃刻记录-${dateKey()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("备份已生成");
}

function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed?.days) throw new Error("invalid");
      db = normalizeData(parsed);
      saveData();
      closeSheet();
      render();
      showToast("记录已恢复");
    } catch {
      showToast("备份文件格式不正确");
    } finally {
      $("#importFile").value = "";
    }
  };
  reader.readAsText(file);
}

function resetData() {
  if (!window.confirm("将删除全部训练、周期和胃口记录，是否继续？建议先导出备份。")) return;
  db = makeEmptyData();
  saveData();
  closeSheet();
  activeTab = "today";
  render();
  showToast("全部记录已清空");
}

function showInstallTip(message) {
  const tip = $("#installTip");
  tip.textContent = message;
  tip.hidden = false;
  window.setTimeout(() => { tip.hidden = true; }, 4500);
}

async function triggerInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const result = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (result.outcome === "accepted") showToast("安装已开始");
    return;
  }
  const standalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  if (standalone) {
    showToast("你已经在使用安装版燃刻");
    return;
  }
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  showInstallTip(isIOS
    ? "iPhone：Safari → 分享 → 添加到主屏幕。"
    : "安卓：浏览器菜单 → 安装应用或添加到主屏幕。");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  if (nav) {
    switchTab(nav.dataset.nav);
    return;
  }

  const recordModeButton = event.target.closest("[data-record-mode]");
  if (recordModeButton) {
    recordMode = recordModeButton.dataset.recordMode;
    render();
    return;
  }

  const openRecord = event.target.closest("[data-open-record]");
  if (openRecord) {
    closeSheet();
    recordMode = openRecord.dataset.openRecord;
    if (recordMode === "training") {
      const first = EXERCISE_DATABASE.find((item) => item.kind === workoutKind);
      selectedActivityId = selectedActivityId || first?.id;
    }
    switchTab("record");
    return;
  }

  const phaseButton = event.target.closest("[data-set-phase]");
  if (phaseButton) {
    setPhase(dateKey(), phaseButton.dataset.setPhase);
    return;
  }

  const clearPhaseButton = event.target.closest("[data-clear-phase]");
  if (clearPhaseButton) {
    clearPhase(dateKey());
    return;
  }

  const appetiteButton = event.target.closest("[data-set-appetite]");
  if (appetiteButton) {
    setAppetite(appetiteButton.dataset.setAppetite);
    return;
  }

  const kindButton = event.target.closest("[data-workout-kind]");
  if (kindButton) {
    workoutKind = kindButton.dataset.workoutKind;
    selectedActivityId = EXERCISE_DATABASE.find((item) => item.kind === workoutKind)?.id || null;
    render();
    return;
  }

  const activityButton = event.target.closest("[data-select-activity]");
  if (activityButton) {
    selectedActivityId = activityButton.dataset.selectActivity;
    const activity = activityById(selectedActivityId);
    $$("[data-select-activity]").forEach((button) => {
      button.classList.toggle("is-selected", button.dataset.selectActivity === selectedActivityId);
    });
    const durationField = $("#workout-duration");
    if (durationField && activity) durationField.value = activity.defaultDuration;
    return;
  }

  const deleteButton = event.target.closest("[data-delete-workout]");
  if (deleteButton) {
    deleteWorkout(deleteButton.dataset.deleteWorkout);
    return;
  }

  const dayButton = event.target.closest("[data-day-open]");
  if (dayButton) {
    openDaySheet(dayButton.dataset.dayOpen);
    return;
  }

  const calendarStep = event.target.closest("[data-calendar-step]");
  if (calendarStep) {
    calendarCursor = new Date(
      calendarCursor.getFullYear(),
      calendarCursor.getMonth() + Number(calendarStep.dataset.calendarStep),
      1,
      12
    );
    render();
    return;
  }

  if (event.target.closest("[data-calendar-today]")) {
    calendarCursor = new Date(new Date().getFullYear(), new Date().getMonth(), 1, 12);
    render();
    return;
  }

  const sheetPhase = event.target.closest("[data-sheet-phase]");
  if (sheetPhase) {
    setPhase(selectedDayKey, sheetPhase.dataset.sheetPhase);
    closeSheet();
    return;
  }

  if (event.target.closest("[data-sheet-clear-phase]")) {
    clearPhase(selectedDayKey);
    closeSheet();
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (action === "settings") openSettings();
  else if (action === "close-sheet") closeSheet();
  else if (action === "install") triggerInstall();
  else if (action === "export-data") exportData();
  else if (action === "import-data") $("#importFile").click();
  else if (action === "reset-data") resetData();
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  if (form.dataset.form === "workout") recordWorkout(form);
});

$("#sheetBackdrop").addEventListener("click", closeSheet);
$("#importFile").addEventListener("change", (event) => importData(event.target.files?.[0]));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !$("#bottomSheet").hidden) closeSheet();
});
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
});
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", syncVisualViewport);
  window.visualViewport.addEventListener("scroll", syncVisualViewport);
}
window.addEventListener("resize", syncVisualViewport);

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

syncVisualViewport();
saveData();
render();

const launchTab = new URLSearchParams(location.search).get("tab");
if (["today", "record", "calendar"].includes(launchTab)) {
  history.replaceState(null, "", location.pathname);
}
