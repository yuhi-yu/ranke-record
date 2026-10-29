const STORAGE_KEY = "ranke-fitness-v1";
const now = () => new Date();

const icons = {
  logo: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.8 13.2c2.7-.1 4-1.3 5-4.2.5-1.3 1.2-1.6 2-.7 1.4 1.5 2.1 3.7 2.8 5.9.4 1.2 1 1.4 1.7.4.8-1.2 1.5-3 2.3-4.4.3-.6.8-.8 1.5-.7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="19.2" cy="9" r="1.1" fill="currentColor"/></svg>`,
  settings: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 15.3a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z" stroke="currentColor" stroke-width="1.7"/><path d="M19.4 13.5c.1-.5.1-1 0-1.5l1.7-1.3-1.8-3.1-2 .8c-.4-.3-.8-.6-1.3-.7l-.3-2.2h-3.6l-.3 2.2c-.5.2-.9.4-1.3.7l-2-.8-1.8 3.1 1.7 1.3c-.1.5-.1 1 0 1.5l-1.7 1.3 1.8 3.1 2-.8c.4.3.8.6 1.3.7l.3 2.2h3.6l.3-2.2c.5-.2.9-.4 1.3-.7l2 .8 1.8-3.1-1.7-1.3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  chevron: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 6 6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  food: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3v8m2-8v8M7 7h2m0 0c0 2.3-1 3.5-2 4.3V21m8-18v18m0-18c3 1 4 3 4 6s-1.4 4.2-4 4.5V3Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  dumbbell: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 8v8m12-8v8M3.5 10v4m17-4v4M6 12h12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  run: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="15.5" cy="4.5" r="1.8" fill="currentColor"/><path d="m13 8-3 4 4 2-2 6M13 8l4 2 3 5M10 12l-3 1M12 14l-3 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  flame: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 21c4 0 6.5-2.7 6.5-6.2 0-3.3-1.8-5.8-4.1-7.7.2 2.5-.9 4-2.3 4.7.2-4-2.1-6.8-4.5-8.8.1 4.4-4.1 7.4-4.1 12.1C4.5 18.5 7.7 21 13 21Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3 1.3 5.2L18 10l-4.7 1.8L12 17l-1.3-5.2L6 10l4.7-1.8L12 3Zm7 11 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  scale: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" stroke-width="1.7"/><path d="M8 10a5 5 0 0 1 8 0M12 10l2-2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  target: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.7"/><path d="m16 8 4-4m0 0h-4m4 0v4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 15.3A8.5 8.5 0 0 1 8.7 4a8.7 8.7 0 1 0 11.3 11.3Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`,
  chart: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19V9m5 10V5m5 14v-7m5 7V3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="8" r="3.5" stroke="currentColor" stroke-width="1.7"/><path d="M5.5 20c.5-4 2.7-6 6.5-6s6 2 6.5 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  upload: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 16V4m0 0L8 8m4-4 4 4M5 20h14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 7h14m-9-3h4l1 3H9l1-3Zm-3 3 1 13h8l1-13M10 11v5m4-5v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  bell: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 9a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  link: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l2.4-2.4a4 4 0 0 0-5.7-5.7L11 7.3m3 3.1a4 4 0 0 0-5.7 0l-2.4 2.4a4 4 0 0 0 5.7 5.7l1.4-1.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  apple: `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 7c-4-2-7 0-7 4.5C5 16 8 21 11 21c1 0 1.4-.5 2.5-.5S15 21 16 21c3 0 5-5 5-9 0-3-2.4-4.5-5-4.5-1.7 0-2.7.8-4-.5Zm0 0c0-2 1-3.4 3-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function dateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateFromOffset(offset) {
  const date = new Date();
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + offset);
  return date;
}

function shiftDays(date, amount) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function id(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function number(value, fallback = 0) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function fmt(value) {
  return new Intl.NumberFormat("zh-CN", { maximumFractionDigits: 0 }).format(value);
}

function oneDecimal(value) {
  return Number(value).toFixed(1).replace(".0", "");
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function makeSeedData() {
  const days = {};
  const foodTemplates = [
    ["燕麦 · 鸡蛋 · 蓝莓", 510, 31, 63, 15],
    ["香煎鸡胸藜麦碗", 760, 52, 86, 21],
    ["希腊酸奶 · 香蕉", 310, 22, 41, 7]
  ];

  for (let i = 13; i >= 1; i -= 1) {
    const key = dateKey(dateFromOffset(-i));
    const foodSets = [
      [[390, 26, 44, 11], [640, 44, 68, 19], [210, 15, 24, 5]],
      [[560, 34, 71, 14], [860, 57, 96, 25], [360, 24, 42, 9]],
      [[520, 36, 59, 15], [760, 51, 85, 22], [400, 28, 43, 10]],
      [[440, 29, 52, 11], [700, 47, 81, 18], [280, 19, 32, 7]]
    ][i % 4].map((values, index) => ({
      id: id(`food-${i}-${index}`),
      name: ["早餐", "午餐", "训练后加餐"][index],
      portion: ["混合早餐", "鸡胸主食碗", "酸奶水果"][index],
      calories: values[0],
      protein: values[1],
      carbs: values[2],
      fat: values[3],
      mealType: ["早餐", "午餐", "加餐"][index],
      time: ["08:10", "12:35", "17:20"][index]
    }));
    days[key] = {
      foods: foodSets,
      workouts: i % 3 !== 2 ? [{
        id: id(`workout-${i}`),
        name: i % 2 ? "下肢蹲" : "上肢推",
        duration: i % 2 ? 58 : 52,
        calories: i % 2 ? 365 : 312,
        exercises: i % 2
          ? [{ name: "深蹲", sets: 4, reps: 8, weight: 75 }, { name: "罗马尼亚硬拉", sets: 3, reps: 10, weight: 55 }]
          : [{ name: "卧推", sets: 4, reps: 8, weight: 60 }, { name: "上斜哑铃", sets: 3, reps: 10, weight: 20 }],
        time: "18:20"
      }] : [],
      cardio: i % 4 === 1 ? [{
        id: id(`cardio-${i}`),
        name: "坡度走",
        duration: 20,
        calories: 96,
        distance: 1.8,
        time: "07:10"
      }] : [],
      weight: [68.1, 68.2, 68, 68.4, 68.3, 68.5, 68.4, 68.6, 68.5, 68.7, 68.6, 68.5, 68.4][i - 1] || 68.4,
      bodyFat: 13.8
    };
  }

  const today = dateKey();
  days[today] = {
    foods: foodTemplates.map((food, index) => ({
      id: id(`food-today-${index}`),
      name: ["混合燕麦碗", "香煎鸡胸藜麦碗", "希腊酸奶 · 香蕉"][index],
      portion: ["燕麦 50g / 鸡蛋 2 个", "鸡胸 180g / 藜麦 150g", "酸奶 180g / 香蕉 1 根"][index],
      calories: food[1],
      protein: food[2],
      carbs: food[3],
      fat: food[4],
      mealType: ["早餐", "午餐", "加餐"][index],
      time: ["08:12", "12:36", "16:45"][index]
    })),
    workouts: [{
      id: id("workout-today"),
      name: "上肢推",
      duration: 52,
      calories: 312,
      exercises: [
        { name: "杠铃卧推", sets: 4, reps: 8, weight: 60 },
        { name: "上斜哑铃推", sets: 3, reps: 10, weight: 20 },
        { name: "侧平举", sets: 3, reps: 15, weight: 8 },
        { name: "绳索下压", sets: 3, reps: 12, weight: 25 }
      ],
      time: "18:20"
    }],
    cardio: [{
      id: id("cardio-today"),
      name: "坡度走",
      duration: 18,
      calories: 105,
      distance: 1.6,
      time: "07:15"
    }],
    weight: 68.4,
    bodyFat: 13.8
  };

  return {
    version: 1,
    createdAt: new Date().toISOString(),
    isDemo: true,
    profile: {
      name: "林序",
      sex: "male",
      age: 28,
      height: 175,
      weight: 68.4,
      bodyFat: 13.8,
      activity: 1.375
    },
    settings: {
      targetCalories: 2700,
      proteinGoal: 170,
      carbsGoal: 335,
      fatGoal: 72,
      fatigueWeek: false,
      bulkMonth: true,
      bulkStartedAt: dateKey(dateFromOffset(-18)),
      reminder: true
    },
    days
  };
}

function loadData() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed?.profile && parsed?.days && parsed?.settings) return parsed;
  } catch (error) {
    console.warn("读取本地数据失败，已创建新的数据。", error);
  }
  return makeSeedData();
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
}

function getDay(key = dateKey(), create = false) {
  if (!db.days[key] && create) {
    db.days[key] = { foods: [], workouts: [], cardio: [], weight: null, bodyFat: null };
  }
  return db.days[key] || { foods: [], workouts: [], cardio: [], weight: null, bodyFat: null };
}

function getTotals(day = getDay()) {
  return {
    calories: day.foods.reduce((sum, item) => sum + number(item.calories), 0),
    protein: day.foods.reduce((sum, item) => sum + number(item.protein), 0),
    carbs: day.foods.reduce((sum, item) => sum + number(item.carbs), 0),
    fat: day.foods.reduce((sum, item) => sum + number(item.fat), 0),
    workoutCalories: day.workouts.reduce((sum, item) => sum + number(item.calories), 0),
    cardioCalories: day.cardio.reduce((sum, item) => sum + number(item.calories), 0)
  };
}

function calculateBMR(profile = db.profile) {
  const adjustment = profile.sex === "female" ? -161 : 5;
  return Math.round(
    10 * number(profile.weight, 68) +
    6.25 * number(profile.height, 175) -
    5 * number(profile.age, 28) +
    adjustment
  );
}

function calculateEnergy(day = getDay()) {
  const totals = getTotals(day);
  const bmr = calculateBMR();
  const nonExercise = Math.round(bmr * (number(db.profile.activity, 1.375) - 1));
  const exercise = totals.workoutCalories + totals.cardioCalories;
  const tdee = bmr + nonExercise + exercise;
  const remaining = number(db.settings.targetCalories) - totals.calories;
  return { ...totals, bmr, nonExercise, exercise, tdee, remaining };
}

function greeting() {
  const hour = now().getHours();
  if (hour < 6) return "夜深了";
  if (hour < 11) return "早上好";
  if (hour < 14) return "中午好";
  if (hour < 18) return "下午好";
  return "晚上好";
}

function dateLabel(date = now()) {
  return new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric" }).format(date);
}

function weekdayLabel(date = now()) {
  return new Intl.DateTimeFormat("zh-CN", { weekday: "short" }).format(date);
}

function bulkWeekNumber() {
  const start = new Date(`${db.settings.bulkStartedAt || dateKey()}T12:00:00`);
  return Math.max(1, Math.floor((Date.now() - start.getTime()) / 604800000) + 1);
}

function icon(name) {
  return icons[name] || icons.spark;
}

function pageHeader({ eyebrow, title, note, right }) {
  return `
    <div class="page-head">
      <div class="page-head-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span>${eyebrow}</p>
        <h1>${title}</h1>
        ${note ? `<p class="page-head-note">${note}</p>` : ""}
      </div>
      ${right || ""}
    </div>
  `;
}

function progress(value, goal) {
  if (!number(goal)) return 0;
  return clamp((number(value) / number(goal)) * 100, 0, 100);
}

function renderTopbar() {
  const initial = escapeHTML(db.profile.name?.trim()?.slice(0, 1) || "我");
  $("#topbar").innerHTML = `
    <div class="brand-lockup">
      <span class="brand-mark">${icon("logo")}</span>
      <span class="brand-name">燃刻</span>
    </div>
    <div class="topbar-actions">
      <button class="icon-button" data-action="install" aria-label="安装应用">${icon("download")}</button>
      <button class="avatar-button" data-nav="profile" aria-label="打开我的页面">${initial}</button>
    </div>
  `;
}

function energyRing(percent) {
  return `
    <div class="energy-ring" aria-label="今日热量进度 ${Math.round(percent)}%">
      <svg viewBox="0 0 120 120" role="img">
        <circle class="track" cx="60" cy="60" r="49" pathLength="100"></circle>
        <circle class="progress" cx="60" cy="60" r="49" pathLength="100"
          stroke-dasharray="${Math.max(percent, 1)} 100"></circle>
      </svg>
      <div class="ring-center">
        <strong>${Math.round(percent)}%</strong>
        <span>目标完成</span>
      </div>
    </div>
  `;
}

function coachMessage() {
  const energy = calculateEnergy();
  const proteinLeft = Math.max(0, number(db.settings.proteinGoal) - energy.protein);
  if (db.settings.fatigueWeek) {
    return {
      title: "减量模式已打开",
      copy: "保留 2–3 RIR，今天优先恢复与有氧，不追训练容量。"
    };
  }
  if (proteinLeft > 0) {
    return {
      title: `再补 ${Math.round(proteinLeft)}g 蛋白质`,
      copy: "今天训练已完成，下一餐可加入鸡胸、酸奶或蛋白粉。"
    };
  }
  return {
    title: "今天的营养目标已达标",
    copy: "维持稳定节奏，睡前记录体重会让趋势更准确。"
  };
}

function mealGroupLabel(type) {
  return { "早餐": "早餐", "午餐": "午餐", "晚餐": "晚餐", "加餐": "加餐" }[type] || "饮食";
}

function renderTimeline(day, emptyAction = true) {
  const rows = [];
  day.workouts.forEach((item) => {
    rows.push({
      icon: "dumbbell",
      color: "blue",
      title: item.name,
      sub: `${item.exercises?.length || 1} 个动作 · ${item.duration || 0} 分钟`,
      value: `${fmt(item.calories)} kcal`,
      caption: item.time || "力量训练"
    });
  });
  day.cardio.forEach((item) => {
    rows.push({
      icon: "run",
      color: "lime",
      title: item.name,
      sub: `${item.duration || 0} 分钟${item.distance ? ` · ${item.distance} km` : ""}`,
      value: `${fmt(item.calories)} kcal`,
      caption: item.time || "有氧"
    });
  });
  day.foods.forEach((item) => {
    rows.push({
      icon: "food",
      color: "orange",
      title: item.name,
      sub: item.portion || mealGroupLabel(item.mealType),
      value: `${fmt(item.calories)} kcal`,
      caption: item.time || item.mealType
    });
  });

  if (!rows.length) {
    return `
      <div class="timeline-card">
        <div class="empty-row">
          今天还没有记录
          ${emptyAction ? `<button data-action="record-food">开始记录</button>` : ""}
        </div>
      </div>
    `;
  }

  return `
    <div class="timeline-card">
      ${rows.slice(0, 7).map((row) => `
        <div class="timeline-row">
          <span class="timeline-icon ${row.color}">${icon(row.icon)}</span>
          <div class="timeline-copy">
            <strong>${escapeHTML(row.title)}</strong>
            <span>${escapeHTML(row.sub)}</span>
          </div>
          <div class="timeline-value">
            <strong>${escapeHTML(row.value)}</strong>
            <span>${escapeHTML(row.caption)}</span>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

function renderToday() {
  const day = getDay();
  const energy = calculateEnergy(day);
  const target = number(db.settings.targetCalories, 2700);
  const percent = progress(energy.calories, target);
  const remaining = target - energy.calories;
  const coach = coachMessage();
  const phaseText = db.settings.bulkMonth ? `增肌期 · 第 ${bulkWeekNumber()} 周` : "维持期 · 稳定输出";

  $("#screen").innerHTML = `
    <div class="page-enter">
      ${pageHeader({
        eyebrow: `${greeting()}，${escapeHTML(db.profile.name || "训练者")}`,
        title: `把今天，<span class="thin">练扎实。</span>`,
        note: "",
        right: `
          <div class="header-date">
            <strong>${now().getDate()}</strong>
            <span>${weekdayLabel()} · ${now().getMonth() + 1}月</span>
          </div>
        `
      })}

      <div class="status-strip">
        <button class="phase-pill" data-action="open-goals">
          <span class="spark">✦</span>${phaseText}${icon("chevron")}
        </button>
        <button class="status-pill ${db.settings.fatigueWeek ? "is-on" : ""}" data-action="toggle-fatigue">
          ${icon("moon")}${db.settings.fatigueWeek ? "疲劳管理周" : "疲劳管理"}
        </button>
      </div>

      <section class="hero-card" aria-label="今日能量总览">
        <div class="hero-topline">
          <span class="live-label"><span class="live-dot"></span>今日能量</span>
          <span>${db.isDemo ? "示例数据" : "本地实时"}</span>
        </div>
        <div class="hero-main">
          <div class="hero-copy">
            <p class="hero-kicker">已摄入</p>
            <div class="hero-value">${fmt(energy.calories)}<small>kcal</small></div>
            <p class="hero-sub">
              ${remaining >= 0 ? `目标 ${fmt(target)}，还可摄入 <strong>${fmt(remaining)}</strong>` : `已超出目标 <strong>${fmt(Math.abs(remaining))}</strong> kcal`}
            </p>
          </div>
          ${energyRing(percent)}
        </div>
        <div class="hero-metrics">
          <div class="hero-metric">
            <span>基础代谢</span>
            <strong>${fmt(energy.bmr)} <small>kcal</small></strong>
          </div>
          <div class="hero-metric">
            <span>运动消耗</span>
            <strong>${fmt(energy.exercise)} <small>kcal</small></strong>
          </div>
          <div class="hero-metric">
            <span>预计总消耗</span>
            <strong>${fmt(energy.tdee)} <small>kcal</small></strong>
          </div>
        </div>
      </section>

      <section class="section" aria-labelledby="quick-title">
        <div class="section-head">
          <h2 id="quick-title">快速记录</h2>
          <span class="text-button">3 秒完成</span>
        </div>
        <div class="quick-grid">
          <button class="quick-action food" data-action="record-food">
            <span class="quick-action-icon">${icon("food")}</span>
            <strong>记饮食</strong>
            <span>食物 · 热量 · 三大项</span>
          </button>
          <button class="quick-action training" data-action="record-training">
            <span class="quick-action-icon">${icon("dumbbell")}</span>
            <strong>记训练</strong>
            <span>动作 · 组数 · 重量</span>
          </button>
          <button class="quick-action cardio" data-action="record-cardio">
            <span class="quick-action-icon">${icon("run")}</span>
            <strong>记有氧</strong>
            <span>时长 · 距离 · 消耗</span>
          </button>
        </div>
      </section>

      <section class="section" aria-label="今日建议">
        <div class="coach-card">
          <span class="coach-orb">${icon("spark")}</span>
          <div class="coach-copy">
            <small>今日建议</small>
            <strong>${escapeHTML(coach.title)}</strong>
            <p>${escapeHTML(coach.copy)}</p>
          </div>
          <button class="coach-arrow" data-nav="trends" aria-label="查看趋势">${icon("arrow")}</button>
        </div>
      </section>

      <section class="section" aria-labelledby="macro-title">
        <div class="section-head">
          <div>
            <h2 id="macro-title">营养进度</h2>
            <p>蛋白质优先，热量服务于训练目标</p>
          </div>
          <button class="text-button" data-action="open-goals">调整 ${icon("chevron")}</button>
        </div>
        <div class="macros-card">
          ${macroRow("蛋白质", energy.protein, db.settings.proteinGoal, "", "g")}
          ${macroRow("碳水", energy.carbs, db.settings.carbsGoal, "carbs", "g")}
          ${macroRow("脂肪", energy.fat, db.settings.fatGoal, "fat", "g")}
        </div>
      </section>

      <section class="section" aria-labelledby="today-log-title">
        <div class="section-head">
          <div>
            <h2 id="today-log-title">今日记录</h2>
            <p>${day.workouts.length + day.cardio.length + day.foods.length} 条记录</p>
          </div>
          <button class="text-button" data-nav="record">全部 ${icon("arrow")}</button>
        </div>
        ${renderTimeline(day)}
      </section>
    </div>
  `;
}

function macroRow(label, value, goal, className, unit) {
  return `
    <div class="macro-row">
      <span class="macro-label"><span class="macro-dot ${className}"></span>${label}</span>
      <div class="macro-track">
        <div class="macro-fill ${className}" style="width:${progress(value, goal)}%"></div>
      </div>
      <span class="macro-value"><strong>${Math.round(value)}</strong> / ${Math.round(goal)}${unit}</span>
    </div>
  `;
}

const recordMeta = {
  food: {
    eyebrow: "DIET LOG",
    title: "吃进去的，<span class='thin'>都算数。</span>",
    leadTitle: "一顿一顿，\n把营养补足。",
    leadCopy: "记录热量，也记录蛋白质、碳水和脂肪。",
    className: "orange",
    heading: "添加食物"
  },
  training: {
    eyebrow: "STRENGTH LOG",
    title: "每一组，<span class='thin'>都有重量。</span>",
    leadTitle: "动作、重量、次数，\n留下今天的进步。",
    leadCopy: "自动累计训练时长与力量消耗。",
    className: "blue",
    heading: "添加训练动作"
  },
  cardio: {
    eyebrow: "CARDIO LOG",
    title: "让心率，<span class='thin'>再走一会儿。</span>",
    leadTitle: "有氧不是惩罚，\n是心肺的长期投资。",
    leadCopy: "记录种类、时长、距离与额外消耗。",
    className: "violet",
    heading: "添加有氧"
  },
  weight: {
    eyebrow: "BODY DATA",
    title: "看趋势，<span class='thin'>不看单点。</span>",
    leadTitle: "每天同一时间，\n记录同一个你。",
    leadCopy: "建议晨起如厕后、进食前测量。",
    className: "lime",
    heading: "记录身体数据"
  }
};

function renderRecordForm(type, compact = false) {
  if (type === "food") {
    return `
      <form data-form="food">
        <div class="form-grid">
          <div class="form-field full">
            <label for="food-name">吃了什么</label>
            <input class="form-input" id="food-name" name="name" placeholder="例如：鸡胸肉藜麦碗" required autocomplete="off" />
          </div>
          <div class="form-field full">
            <label for="food-portion">份量或组成（可选）</label>
            <input class="form-input" id="food-portion" name="portion" placeholder="鸡胸 180g / 藜麦 150g" autocomplete="off" />
          </div>
          <div class="form-field">
            <label for="food-cal">热量</label>
            <div class="input-suffix">
              <input class="form-input" id="food-cal" name="calories" type="number" inputmode="decimal" min="0" placeholder="650" required />
              <span>kcal</span>
            </div>
          </div>
          <div class="form-field">
            <label for="meal-type">餐次</label>
            <select class="form-select" id="meal-type" name="mealType">
              <option>早餐</option><option>午餐</option><option>晚餐</option><option>加餐</option>
            </select>
          </div>
          <div class="form-field">
            <label for="food-protein">蛋白质</label>
            <div class="input-suffix">
              <input class="form-input" id="food-protein" name="protein" type="number" inputmode="decimal" min="0" placeholder="45" />
              <span>g</span>
            </div>
          </div>
          <div class="form-field">
            <label for="food-carbs">碳水</label>
            <div class="input-suffix">
              <input class="form-input" id="food-carbs" name="carbs" type="number" inputmode="decimal" min="0" placeholder="70" />
              <span>g</span>
            </div>
          </div>
          <div class="form-field">
            <label for="food-fat">脂肪</label>
            <div class="input-suffix">
              <input class="form-input" id="food-fat" name="fat" type="number" inputmode="decimal" min="0" placeholder="18" />
              <span>g</span>
            </div>
          </div>
        </div>
        <button class="primary-button" type="submit">${icon("plus")}加入今日饮食</button>
      </form>
    `;
  }
  if (type === "training") {
    return `
      <form data-form="training">
        <div class="form-grid">
          <div class="form-field full">
            <label for="training-name">动作名称</label>
            <input class="form-input" id="training-name" name="name" placeholder="例如：杠铃卧推" required autocomplete="off" />
          </div>
          <div class="form-field">
            <label for="training-duration">训练时长</label>
            <div class="input-suffix">
              <input class="form-input" id="training-duration" name="duration" type="number" inputmode="numeric" min="0" placeholder="45" value="45" />
              <span>分钟</span>
            </div>
          </div>
          <div class="form-field">
            <label for="training-cal">消耗</label>
            <div class="input-suffix">
              <input class="form-input" id="training-cal" name="calories" type="number" inputmode="decimal" min="0" placeholder="260" value="260" />
              <span>kcal</span>
            </div>
          </div>
          <div class="form-field">
            <label for="training-sets">组数</label>
            <div class="input-suffix">
              <input class="form-input" id="training-sets" name="sets" type="number" inputmode="numeric" min="0" placeholder="4" value="4" />
              <span>组</span>
            </div>
          </div>
          <div class="form-field">
            <label for="training-reps">次数</label>
            <div class="input-suffix">
              <input class="form-input" id="training-reps" name="reps" type="number" inputmode="numeric" min="0" placeholder="8" value="8" />
              <span>次</span>
            </div>
          </div>
          <div class="form-field full">
            <label for="training-weight">使用重量（可选）</label>
            <div class="input-suffix">
              <input class="form-input" id="training-weight" name="weight" type="number" inputmode="decimal" min="0" placeholder="60" />
              <span>kg</span>
            </div>
          </div>
        </div>
        <button class="primary-button" type="submit">${icon("plus")}完成训练记录</button>
      </form>
    `;
  }
  if (type === "cardio") {
    return `
      <form data-form="cardio">
        <div class="form-grid">
          <div class="form-field full">
            <label for="cardio-name">有氧类型</label>
            <input class="form-input" id="cardio-name" name="name" placeholder="例如：坡度走、慢跑、骑车" required autocomplete="off" />
          </div>
          <div class="form-field">
            <label for="cardio-duration">时长</label>
            <div class="input-suffix">
              <input class="form-input" id="cardio-duration" name="duration" type="number" inputmode="numeric" min="0" placeholder="30" value="30" required />
              <span>分钟</span>
            </div>
          </div>
          <div class="form-field">
            <label for="cardio-cal">消耗</label>
            <div class="input-suffix">
              <input class="form-input" id="cardio-cal" name="calories" type="number" inputmode="decimal" min="0" placeholder="180" value="180" />
              <span>kcal</span>
            </div>
          </div>
          <div class="form-field full">
            <label for="cardio-distance">距离（可选）</label>
            <div class="input-suffix">
              <input class="form-input" id="cardio-distance" name="distance" type="number" inputmode="decimal" min="0" step="0.1" placeholder="3.2" />
              <span>km</span>
            </div>
          </div>
        </div>
        <button class="primary-button" type="submit">${icon("plus")}完成有氧记录</button>
      </form>
    `;
  }
  return `
    <form data-form="weight">
      <div class="form-grid">
        <div class="form-field">
          <label for="weight-value">体重</label>
          <div class="input-suffix">
            <input class="form-input" id="weight-value" name="weight" type="number" inputmode="decimal" step="0.1" min="20" max="300" value="${oneDecimal(db.profile.weight)}" required />
            <span>kg</span>
          </div>
        </div>
        <div class="form-field">
          <label for="body-fat">体脂率（可选）</label>
          <div class="input-suffix">
            <input class="form-input" id="body-fat" name="bodyFat" type="number" inputmode="decimal" step="0.1" min="1" max="70" value="${db.profile.bodyFat ? oneDecimal(db.profile.bodyFat) : ""}" />
            <span>%</span>
          </div>
        </div>
      </div>
      <button class="primary-button" type="submit">${icon("scale")}保存身体数据</button>
    </form>
  `;
}

function renderRecentRecords(type) {
  const day = getDay();
  const lists = {
    food: day.foods,
    training: day.workouts,
    cardio: day.cardio,
    weight: day.weight ? [{ id: "weight-today", name: `${oneDecimal(day.weight)} kg`, calories: day.bodyFat ? `${oneDecimal(day.bodyFat)}% 体脂` : "", weight: day.weight }] : []
  };
  const items = lists[type] || [];
  if (!items.length) {
    return `<div class="empty-row">还没有今天的记录</div>`;
  }
  return items.slice().reverse().map((item) => {
    if (type === "weight") {
      return `
        <div class="recent-item">
          <div class="recent-item-main"><strong>${escapeHTML(item.name)}</strong><span>今日体重记录</span></div>
          <span class="recent-item-value">${escapeHTML(item.calories || "—")}</span>
          <span></span>
        </div>
      `;
    }
    const detail = type === "food"
      ? `P ${Math.round(item.protein || 0)} · C ${Math.round(item.carbs || 0)} · F ${Math.round(item.fat || 0)}`
      : type === "training"
        ? `${item.duration || 0} 分钟 · ${item.exercises?.[0]?.sets || 0} 组`
        : `${item.duration || 0} 分钟${item.distance ? ` · ${item.distance} km` : ""}`;
    return `
      <div class="recent-item">
        <div class="recent-item-main">
          <strong>${escapeHTML(item.name)}</strong>
          <span>${escapeHTML(detail)}</span>
        </div>
        <span class="recent-item-value">${fmt(item.calories)} kcal</span>
        <button class="delete-button" data-delete="${type}" data-id="${escapeHTML(item.id)}" aria-label="删除">${icon("trash")}</button>
      </div>
    `;
  }).join("");
}

function renderRecord() {
  const meta = recordMeta[recordType];
  const foodsQuick = [
    ["鸡胸肉 150g", 248, 46, 0, 6],
    ["米饭 1 碗", 230, 5, 50, 1],
    ["鸡蛋 2 个", 144, 13, 1, 10],
    ["乳清蛋白 1 勺", 120, 24, 3, 2]
  ];

  $("#screen").innerHTML = `
    <div class="page-enter">
      ${pageHeader({
        eyebrow: meta.eyebrow,
        title: meta.title,
        note: "所有数据只保存在你的手机里。"
      })}
      <div class="segment-control" role="tablist" aria-label="记录类型">
        ${["food", "training", "cardio", "weight"].map((type) => `
          <button class="segment-button ${recordType === type ? "is-active" : ""}" data-record-tab="${type}" role="tab" aria-selected="${recordType === type}">
            ${{ food: "饮食", training: "训练", cardio: "有氧", weight: "身体" }[type]}
          </button>
        `).join("")}
      </div>
      <section class="record-lead ${meta.className}">
        <small>QUICK LOG</small>
        <strong>${meta.leadTitle.replace("\n", "<br>")}</strong>
        <p>${meta.leadCopy}</p>
      </section>
      <section class="form-card">
        <div class="form-head">
          <strong>${meta.heading}</strong>
          <span>${recordType === "weight" ? "建议每天固定时间" : "留空项按 0 计算"}</span>
        </div>
        ${recordType === "food" ? `
          <div class="preset-row" aria-label="常用食物">
            ${foodsQuick.map((food) => `
              <button class="preset-chip" data-preset='${JSON.stringify({ name: food[0], calories: food[1], protein: food[2], carbs: food[3], fat: food[4] }).replaceAll("'", "&#39;")}'>
                ${food[0]} · ${food[1]}
              </button>
            `).join("")}
          </div>
        ` : ""}
        ${renderRecordForm(recordType)}
      </section>
      <section class="section recent-list">
        <div class="section-head">
          <h2>今天已记录</h2>
          <span class="text-button">${new Date().toLocaleDateString("zh-CN")}</span>
        </div>
        <div>${renderRecentRecords(recordType)}</div>
      </section>
    </div>
  `;
}

function lastSevenDays() {
  const days = [];
  for (let i = 6; i >= 0; i -= 1) {
    const date = dateFromOffset(-i);
    const key = dateKey(date);
    const day = getDay(key);
    days.push({ date, key, day, totals: getTotals(day) });
  }
  return days;
}

function renderCalorieChart() {
  const days = lastSevenDays();
  const max = Math.max(number(db.settings.targetCalories), ...days.map((item) => item.totals.calories), 1);
  return `
    <div class="chart-card">
      <div class="chart-top">
        <div>
          <h3>近 7 天热量</h3>
          <p>摄入与目标之间的节奏</p>
        </div>
        <span class="chart-badge">${Math.round(days.reduce((sum, item) => sum + item.totals.calories, 0) / 7)} 日均</span>
      </div>
      <div class="bar-chart">
        ${days.map((item, index) => {
          const height = clamp((item.totals.calories / max) * 100, 4, 100);
          const dayName = index === 6 ? "今天" : ["日", "一", "二", "三", "四", "五", "六"][item.date.getDay()];
          return `
            <div class="bar-column" title="${dateKey(item.date)}：${item.totals.calories} kcal">
              <span class="bar-value">${Math.round(item.totals.calories / 100) / 10}k</span>
              <div class="bar ${index === 6 ? "today" : ""} ${item.totals.calories > number(db.settings.targetCalories) ? "over" : ""}" style="height:${height}%"></div>
              <span class="bar-day">${dayName}</span>
            </div>
          `;
        }).join("")}
      </div>
      <div class="chart-footer">
        <div class="legend">
          <span><i class="legend-dot"></i>摄入</span>
          <span><i class="legend-dot target"></i>目标 ${fmt(db.settings.targetCalories)}</span>
        </div>
        <span>单位 kcal</span>
      </div>
    </div>
  `;
}

function renderWeightChart() {
  const days = lastSevenDays();
  const values = days.map((item) => number(item.day.weight, number(db.profile.weight)));
  const min = Math.min(...values) - 0.25;
  const max = Math.max(...values) + 0.25;
  const range = Math.max(0.5, max - min);
  const points = values.map((value, index) => {
    const x = 10 + (index * 300) / 6;
    const y = 82 - ((value - min) / range) * 62;
    return [x, y];
  });
  const line = points.map((point) => point.join(",")).join(" ");
  const area = `M${points[0][0]},90 L${points.map((point) => point.join(",")).join(" L")} L${points.at(-1)[0]},90 Z`;
  const delta = values.at(-1) - values[0];

  return `
    <div class="chart-card">
      <div class="chart-top">
        <div>
          <h3>体重趋势</h3>
          <p>7 日变化 ${delta >= 0 ? "+" : ""}${delta.toFixed(1)} kg</p>
        </div>
        <span class="chart-badge">${db.settings.bulkMonth ? "增肌节奏" : "维持节奏"}</span>
      </div>
      <div class="weight-chart-wrap">
        <svg class="weight-chart" viewBox="0 0 320 96" preserveAspectRatio="none" role="img" aria-label="近 7 天体重趋势">
          <defs>
            <linearGradient id="weightGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="#d8ff58" stop-opacity=".55"></stop>
              <stop offset="100%" stop-color="#d8ff58" stop-opacity="0"></stop>
            </linearGradient>
          </defs>
          <line class="grid-line" x1="0" y1="20" x2="320" y2="20"></line>
          <line class="grid-line" x1="0" y1="51" x2="320" y2="51"></line>
          <line class="grid-line" x1="0" y1="82" x2="320" y2="82"></line>
          <path class="area" d="${area}"></path>
          <polyline class="line" points="${line}"></polyline>
          ${points.map((point, index) => `<circle class="dot" cx="${point[0]}" cy="${point[1]}" r="${index === 6 ? 4 : 2.3}"></circle>`).join("")}
        </svg>
        <div class="weight-labels">
          ${days.map((item, index) => `<span>${index === 6 ? "今天" : `${item.date.getMonth() + 1}/${item.date.getDate()}`}</span>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function weekMetrics() {
  const days = lastSevenDays();
  let workoutMinutes = 0;
  let cardioMinutes = 0;
  let totalVolume = 0;
  let sessions = 0;
  days.forEach(({ day }) => {
    day.workouts.forEach((workout) => {
      sessions += 1;
      workoutMinutes += number(workout.duration);
      (workout.exercises || []).forEach((exercise) => {
        totalVolume += number(exercise.sets) * number(exercise.reps) * number(exercise.weight);
      });
    });
    day.cardio.forEach((cardio) => {
      cardioMinutes += number(cardio.duration);
    });
  });
  return { sessions, workoutMinutes, cardioMinutes, totalVolume };
}

function renderHeatmap() {
  const cells = [];
  for (let i = 13; i >= 0; i -= 1) {
    const date = dateFromOffset(-i);
    const day = getDay(dateKey(date));
    const entries = day.foods.length + day.workouts.length + day.cardio.length;
    const level = entries >= 6 ? 3 : entries >= 3 ? 2 : entries > 0 ? 1 : 0;
    cells.push(`<div class="heat-day level-${level} ${i === 0 ? "today" : ""}" title="${dateKey(date)} · ${entries} 条记录">${date.getDate()}</div>`);
  }
  return `<div class="calendar-heat">${cells.join("")}</div>`;
}

function renderTrends() {
  const metrics = weekMetrics();
  $("#screen").innerHTML = `
    <div class="page-enter">
      ${pageHeader({
        eyebrow: "WEEKLY REVIEW",
        title: `看见变化，<span class="thin">再做决定。</span>`,
        note: "不追求每天完美，只看一周是否在正确方向。"
      })}
      <div class="insight-stack">
        ${renderCalorieChart()}
        ${renderWeightChart()}
      </div>
      <section class="section">
        <div class="section-head">
          <div>
            <h2>本周训练负荷</h2>
            <p>力量、有氧与总容量</p>
          </div>
          <span class="chart-badge">${metrics.sessions} 次力量</span>
        </div>
        <div class="metric-grid">
          <div class="metric-card"><span>训练时长</span><strong>${metrics.workoutMinutes}<small> 分钟</small></strong><p>力量训练累计</p></div>
          <div class="metric-card"><span>训练容量</span><strong>${Math.round(metrics.totalVolume / 100) / 10}<small> 吨</small></strong><p>组数 × 次数 × 重量</p></div>
          <div class="metric-card"><span>有氧时长</span><strong>${metrics.cardioMinutes}<small> 分钟</small></strong><p>低强度稳态为主</p></div>
          <div class="metric-card"><span>记录完成</span><strong>${lastSevenDays().filter((item) => getTotals(item.day).calories > 0).length}<small> / 7 天</small></strong><p>饮食记录覆盖</p></div>
        </div>
      </section>
      <section class="section">
        <div class="section-head">
          <div>
            <h2>周期管理</h2>
            <p>疲劳周与增肌期独立控制</p>
          </div>
        </div>
        <div class="cycle-card">
          <div>
            <small>THIS WEEK</small>
            <strong>${db.settings.fatigueWeek ? "疲劳管理周 · 进行中" : "常规训练周"}</strong>
            <p>${db.settings.fatigueWeek ? "建议减少 20–30% 训练容量，保留动作质量。" : "按计划推进，关注睡眠和训练表现。"}</p>
          </div>
          <button class="toggle ${db.settings.fatigueWeek ? "is-on" : ""}" data-action="toggle-fatigue" aria-label="切换疲劳管理周" aria-pressed="${db.settings.fatigueWeek}"></button>
        </div>
        <div class="cycle-card">
          <div>
            <small>THIS MONTH</small>
            <strong>${db.settings.bulkMonth ? `增肌期 · 第 ${bulkWeekNumber()} 周` : "维持期 · 稳定"}</strong>
            <p>${db.settings.bulkMonth ? "建议每周体重增长 0.15–0.3% ，蛋白质保持充足。" : "热量接近消耗，适合观察体重与恢复。"}</p>
          </div>
          <button class="toggle ${db.settings.bulkMonth ? "is-on" : ""}" data-action="toggle-bulk" aria-label="切换增肌期" aria-pressed="${db.settings.bulkMonth}"></button>
        </div>
      </section>
      <section class="section">
        <div class="section-head">
          <div>
            <h2>记录热力</h2>
            <p>最近 14 天</p>
          </div>
        </div>
        <div class="chart-card">${renderHeatmap()}</div>
      </section>
    </div>
  `;
}

function renderProfile() {
  const bmr = calculateBMR();
  const profile = db.profile;
  $("#screen").innerHTML = `
    <div class="page-enter">
      ${pageHeader({
        eyebrow: "MY TRAINING COCKPIT",
        title: `你的身体，<span class="thin">你的规则。</span>`,
        note: "调整目标、周期和数据，所有信息仅保存在本机。"
      })}
      <section class="profile-card">
        <div class="profile-main">
          <span class="profile-avatar">${escapeHTML(profile.name?.slice(0, 1) || "我")}</span>
          <div>
            <h2>${escapeHTML(profile.name || "训练者")}</h2>
            <p>${profile.sex === "female" ? "女性" : "男性"} · ${profile.age} 岁 · 目标 ${db.settings.bulkMonth ? "增肌" : "维持"}</p>
          </div>
        </div>
        <div class="profile-stats">
          <div class="profile-stat"><span>身高</span><strong>${oneDecimal(profile.height)}<small>cm</small></strong></div>
          <div class="profile-stat"><span>体重</span><strong>${oneDecimal(profile.weight)}<small>kg</small></strong></div>
          <div class="profile-stat"><span>基础代谢</span><strong>${fmt(bmr)}<small>kcal</small></strong></div>
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>身体与目标</h2></div>
        <div class="settings-card">
          ${settingsButton("user", "身体档案", `${profile.sex === "female" ? "女性" : "男性"} · ${profile.age} 岁 · ${oneDecimal(profile.height)} cm`, "edit-profile")}
          ${settingsButton("target", "营养目标", `${fmt(db.settings.targetCalories)} kcal · P ${db.settings.proteinGoal} / C ${db.settings.carbsGoal} / F ${db.settings.fatGoal}`, "edit-goals")}
          ${settingsToggle("moon", "疲劳管理周", "本周降低训练容量", "fatigueWeek", db.settings.fatigueWeek)}
          ${settingsToggle("spark", "本月增肌期", `当前第 ${bulkWeekNumber()} 周`, "bulkMonth", db.settings.bulkMonth)}
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2>手机与数据</h2></div>
        <div class="settings-card">
          ${settingsButton("apple", "安装到手机主屏幕", "离线启动 · 全屏使用 · 无服务器", "install")}
          ${settingsButton("link", "桌面快捷入口", "长按图标或创建快捷指令", "widget-help")}
          ${settingsButton("download", "导出本地备份", "生成 JSON 数据文件", "export-data")}
          ${settingsButton("upload", "导入备份", "从 JSON 文件恢复全部数据", "import-data")}
          ${settingsButton("trash", "清空并重新开始", "移除示例数据，从空白开始", "reset-data", "danger")}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <div><h2>今日片段</h2><p>可作为主屏幕快捷入口</p></div>
        </div>
        <div class="widget-preview">
          <small>燃刻 · TODAY</small>
          <strong>${fmt(calculateEnergy().calories)} <span>/ ${fmt(db.settings.targetCalories)} kcal</span></strong>
          <p>${calculateEnergy().remaining >= 0 ? `还可摄入 ${fmt(calculateEnergy().remaining)} kcal` : `超出 ${fmt(Math.abs(calculateEnergy().remaining))} kcal`} · ${db.settings.fatigueWeek ? "减量周" : "训练日"}</p>
          <div class="widget-actions">
            <button data-action="record-food" aria-label="快速记录饮食">${icon("food")}</button>
            <button data-action="record-training" aria-label="快速记录训练">${icon("dumbbell")}</button>
          </div>
        </div>
      </section>

      <section class="formula-card">
        <strong>基础代谢怎么算？</strong>
        <p>采用 Mifflin–St Jeor 公式计算，再结合你的日常活动系数与当天运动消耗，估算总消耗。它是起点，不是绝对答案；持续观察 2–3 周体重趋势再调整。</p>
      </section>
      <p class="app-meta">燃刻 RANKE · v1.0<br>离线优先 · 数据不会离开你的设备${db.isDemo ? " · 当前含示例数据" : ""}</p>
    </div>
  `;
}

function settingsButton(iconName, title, subtitle, action, extra = "") {
  return `
    <button class="settings-row settings-row-button" data-action="${action}">
      <span class="settings-icon ${extra}">${icon(iconName)}</span>
      <span class="settings-copy"><strong>${title}</strong><span>${subtitle}</span></span>
      <span class="settings-chevron">${icon("chevron")}</span>
    </button>
  `;
}

function settingsToggle(iconName, title, subtitle, setting, enabled) {
  return `
    <div class="settings-row">
      <span class="settings-icon">${icon(iconName)}</span>
      <span class="settings-copy"><strong>${title}</strong><span>${subtitle}</span></span>
      <button class="toggle ${enabled ? "is-on" : ""}" data-action="toggle-${setting === "fatigueWeek" ? "fatigue" : "bulk"}" aria-label="切换${title}" aria-pressed="${enabled}"></button>
    </div>
  `;
}

function render() {
  renderTopbar();
  if (activeTab === "record") renderRecord();
  else if (activeTab === "trends") renderTrends();
  else if (activeTab === "profile") renderProfile();
  else renderToday();
  $$(".nav-item").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.nav === activeTab);
    item.setAttribute("aria-current", item.dataset.nav === activeTab ? "page" : "false");
  });
  window.scrollTo(0, 0);
}

function switchTab(tab) {
  if (!["today", "record", "trends", "profile"].includes(tab)) return;
  activeTab = tab;
  render();
}

function openSheet(type) {
  const backdrop = $("#sheetBackdrop");
  const sheet = $("#bottomSheet");
  let title = "";
  let kicker = "";
  let body = "";

  if (["food", "training", "cardio", "weight"].includes(type)) {
    const meta = recordMeta[type];
    title = meta.heading;
    kicker = type === "food" ? "记一顿" : type === "training" ? "记训练" : type === "cardio" ? "记有氧" : "记身体";
    body = renderRecordForm(type, true);
  } else if (type === "profile") {
    title = "身体档案";
    kicker = "PROFILE";
    body = `
      <form data-form="profile">
        <div class="form-grid">
          <div class="form-field full">
            <label for="profile-name">称呼</label>
            <input class="form-input" id="profile-name" name="name" value="${escapeHTML(db.profile.name)}" required />
          </div>
          <div class="form-field">
            <label for="profile-sex">生理性别</label>
            <select class="form-select" id="profile-sex" name="sex">
              <option value="male" ${db.profile.sex === "male" ? "selected" : ""}>男性</option>
              <option value="female" ${db.profile.sex === "female" ? "selected" : ""}>女性</option>
            </select>
          </div>
          <div class="form-field">
            <label for="profile-age">年龄</label>
            <div class="input-suffix"><input class="form-input" id="profile-age" name="age" type="number" min="12" max="100" value="${db.profile.age}" required /><span>岁</span></div>
          </div>
          <div class="form-field">
            <label for="profile-height">身高</label>
            <div class="input-suffix"><input class="form-input" id="profile-height" name="height" type="number" inputmode="decimal" min="100" max="250" value="${oneDecimal(db.profile.height)}" required /><span>cm</span></div>
          </div>
          <div class="form-field">
            <label for="profile-weight">体重</label>
            <div class="input-suffix"><input class="form-input" id="profile-weight" name="weight" type="number" inputmode="decimal" step="0.1" min="20" max="300" value="${oneDecimal(db.profile.weight)}" required /><span>kg</span></div>
          </div>
          <div class="form-field">
            <label for="profile-fat">体脂率</label>
            <div class="input-suffix"><input class="form-input" id="profile-fat" name="bodyFat" type="number" inputmode="decimal" step="0.1" min="1" max="70" value="${db.profile.bodyFat ? oneDecimal(db.profile.bodyFat) : ""}" /><span>%</span></div>
          </div>
          <div class="form-field">
            <label for="profile-activity">非运动活动量</label>
            <select class="form-select" id="profile-activity" name="activity">
              <option value="1.2" ${number(db.profile.activity) === 1.2 ? "selected" : ""}>久坐少动</option>
              <option value="1.375" ${number(db.profile.activity) === 1.375 ? "selected" : ""}>日常活动适中</option>
              <option value="1.55" ${number(db.profile.activity) === 1.55 ? "selected" : ""}>经常走动</option>
              <option value="1.725" ${number(db.profile.activity) === 1.725 ? "selected" : ""}>高活动工作</option>
            </select>
          </div>
        </div>
        <button class="primary-button" type="submit">${icon("user")}保存身体档案</button>
      </form>
    `;
  } else if (type === "goals") {
    title = "营养目标";
    kicker = "DAILY TARGET";
    body = `
      <form data-form="goals">
        <div class="form-grid">
          <div class="form-field full">
            <label for="goal-calories">每日热量目标</label>
            <div class="input-suffix"><input class="form-input" id="goal-calories" name="targetCalories" type="number" min="800" max="6000" value="${db.settings.targetCalories}" required /><span>kcal</span></div>
          </div>
          <div class="form-field">
            <label for="goal-protein">蛋白质</label>
            <div class="input-suffix"><input class="form-input" id="goal-protein" name="proteinGoal" type="number" min="0" max="500" value="${db.settings.proteinGoal}" /><span>g</span></div>
          </div>
          <div class="form-field">
            <label for="goal-carbs">碳水</label>
            <div class="input-suffix"><input class="form-input" id="goal-carbs" name="carbsGoal" type="number" min="0" max="800" value="${db.settings.carbsGoal}" /><span>g</span></div>
          </div>
          <div class="form-field">
            <label for="goal-fat">脂肪</label>
            <div class="input-suffix"><input class="form-input" id="goal-fat" name="fatGoal" type="number" min="0" max="300" value="${db.settings.fatGoal}" /><span>g</span></div>
          </div>
          <div class="form-field">
            <label for="goal-mode">当前周期</label>
            <select class="form-select" id="goal-mode" name="mode">
              <option value="bulk" ${db.settings.bulkMonth ? "selected" : ""}>增肌期</option>
              <option value="maintain" ${!db.settings.bulkMonth ? "selected" : ""}>维持期</option>
            </select>
          </div>
        </div>
        <button class="primary-button" type="submit">${icon("target")}保存每日目标</button>
      </form>
    `;
  } else if (type === "widget-help") {
    title = "桌面快捷入口";
    kicker = "WIDGET & SHORTCUT";
    body = `
      <div class="formula-card" style="margin-top:0">
        <strong>先安装到主屏幕</strong>
        <p>iPhone：Safari → 分享 → 添加到主屏幕。安卓：Chrome → 右上角菜单 → 安装应用或添加到主屏幕。安装后无需网络即可打开。</p>
      </div>
      <div class="formula-card">
        <strong>快速记录入口</strong>
        <p>长按燃刻图标，可直接选择「记一顿」「记训练」「记体重」。iPhone 也可在「快捷指令」中创建打开这些入口的快捷指令，并添加到锁屏或主屏幕。</p>
      </div>
      <div class="formula-card">
        <strong>系统级桌面小组件</strong>
        <p>纯网页应用不能直接注册 iOS WidgetKit 或 Android AppWidget。若需要可实时显示并一键记录的原生系统组件，需要后续用 Capacitor 封装并加入两端的原生 Widget 扩展；当前版本已把数据和快速链接准备好。</p>
      </div>
      <button class="primary-button" data-action="install">${icon("download")}安装燃刻</button>
    `;
  }

  sheet.innerHTML = `
    <div class="sheet-handle"></div>
    <div class="sheet-head">
      <div><small>${kicker}</small><h2 id="sheetTitle">${title}</h2></div>
      <button class="sheet-close" data-action="close-sheet" aria-label="关闭">${icon("close")}</button>
    </div>
    ${body}
  `;
  backdrop.hidden = false;
  sheet.hidden = false;
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => $("input, select, button", sheet)?.focus({ preventScroll: true }));
}

function closeSheet() {
  $("#sheetBackdrop").hidden = true;
  $("#bottomSheet").hidden = true;
  document.body.style.overflow = "";
}

let toastTimer;
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function timeNow() {
  return new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false });
}

function submitRecord(type, form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const day = getDay(dateKey(), true);
  if (type === "food") {
    day.foods.push({
      id: id("food"),
      name: data.name.trim(),
      portion: data.portion.trim(),
      calories: number(data.calories),
      protein: number(data.protein),
      carbs: number(data.carbs),
      fat: number(data.fat),
      mealType: data.mealType,
      time: timeNow()
    });
  } else if (type === "training") {
    day.workouts.push({
      id: id("workout"),
      name: data.name.trim(),
      duration: number(data.duration),
      calories: number(data.calories),
      exercises: [{
        name: data.name.trim(),
        sets: number(data.sets),
        reps: number(data.reps),
        weight: number(data.weight)
      }],
      time: timeNow()
    });
  } else if (type === "cardio") {
    day.cardio.push({
      id: id("cardio"),
      name: data.name.trim(),
      duration: number(data.duration),
      calories: number(data.calories),
      distance: number(data.distance),
      time: timeNow()
    });
  } else if (type === "weight") {
    day.weight = number(data.weight);
    day.bodyFat = data.bodyFat ? number(data.bodyFat) : null;
    db.profile.weight = day.weight;
    db.profile.bodyFat = day.bodyFat || db.profile.bodyFat;
  }
  saveData();
  closeSheet();
  render();
  showToast(type === "weight" ? "身体数据已记录" : "记录已保存，只在这台设备上");
}

function deleteRecord(type, itemId) {
  const day = getDay(dateKey(), false);
  if (type === "food") day.foods = day.foods.filter((item) => item.id !== itemId);
  if (type === "training") day.workouts = day.workouts.filter((item) => item.id !== itemId);
  if (type === "cardio") day.cardio = day.cardio.filter((item) => item.id !== itemId);
  saveData();
  render();
  showToast("记录已删除");
}

function updateProfile(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  db.profile = {
    ...db.profile,
    name: data.name.trim() || "训练者",
    sex: data.sex,
    age: number(data.age, 28),
    height: number(data.height, 175),
    weight: number(data.weight, 68),
    bodyFat: number(data.bodyFat),
    activity: number(data.activity, 1.375)
  };
  saveData();
  closeSheet();
  render();
  showToast("身体档案已更新");
}

function updateGoals(form) {
  const data = Object.fromEntries(new FormData(form).entries());
  db.settings.targetCalories = number(data.targetCalories, 2700);
  db.settings.proteinGoal = number(data.proteinGoal);
  db.settings.carbsGoal = number(data.carbsGoal);
  db.settings.fatGoal = number(data.fatGoal);
  const wasBulking = db.settings.bulkMonth;
  db.settings.bulkMonth = data.mode === "bulk";
  if (!wasBulking && db.settings.bulkMonth) db.settings.bulkStartedAt = dateKey();
  saveData();
  closeSheet();
  render();
  showToast("每日目标已更新");
}

function toggleSetting(key) {
  db.settings[key] = !db.settings[key];
  if (key === "bulkMonth" && db.settings.bulkMonth) db.settings.bulkStartedAt = dateKey();
  saveData();
  render();
  showToast(db.settings[key] ? (key === "fatigueWeek" ? "已进入疲劳管理周" : "已进入增肌期") : (key === "fatigueWeek" ? "已退出疲劳管理周" : "已切换到维持期"));
}

function exportData() {
  const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `燃刻备份-${dateKey()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("备份文件已生成");
}

function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (!parsed.profile || !parsed.days || !parsed.settings) throw new Error("invalid");
      db = parsed;
      saveData();
      closeSheet();
      render();
      showToast("备份已恢复");
    } catch {
      showToast("文件格式不正确，未导入");
    } finally {
      $("#importFile").value = "";
    }
  };
  reader.readAsText(file);
}

function resetData() {
  const confirmed = window.confirm("将清空当前所有记录与示例数据。建议先导出备份，是否继续？");
  if (!confirmed) return;
  db = {
    ...db,
    isDemo: false,
    days: {
      [dateKey()]: { foods: [], workouts: [], cardio: [], weight: null, bodyFat: null }
    }
  };
  saveData();
  activeTab = "today";
  closeSheet();
  render();
  showToast("已清空，可以开始记录了");
}

function showInstallTip(message) {
  const tip = $("#installTip");
  tip.textContent = message;
  tip.hidden = false;
  setTimeout(() => { tip.hidden = true; }, 4500);
}

async function triggerInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    const result = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    if (result.outcome === "accepted") showToast("安装已开始");
    return;
  }
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const standalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  if (standalone) {
    showToast("你已经在使用安装版燃刻");
    return;
  }
  showInstallTip(isIOS
    ? "iPhone：请用 Safari 打开，点底部「分享」→「添加到主屏幕」。"
    : "安卓：打开浏览器菜单，选择「安装应用」或「添加到主屏幕」。");
}

const launchParams = new URLSearchParams(location.search);
const requestedTab = launchParams.get("tab");
let activeTab = ["today", "record", "trends", "profile"].includes(requestedTab) ? requestedTab : "today";
let recordType = "food";
let db = loadData();
let deferredInstallPrompt = null;

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-nav]");
  if (nav) {
    switchTab(nav.dataset.nav);
    return;
  }

  const recordTab = event.target.closest("[data-record-tab]");
  if (recordTab) {
    recordType = recordTab.dataset.recordTab;
    renderRecord();
    return;
  }

  const preset = event.target.closest("[data-preset]");
  if (preset) {
    const food = JSON.parse(preset.dataset.preset);
    const form = $('form[data-form="food"]');
    if (form) {
      Object.entries(food).forEach(([key, value]) => {
        const field = form.elements.namedItem(key);
        if (field) field.value = value;
      });
      form.elements.namedItem("name")?.focus();
    }
    return;
  }

  const deleteButton = event.target.closest("[data-delete]");
  if (deleteButton) {
    deleteRecord(deleteButton.dataset.delete, deleteButton.dataset.id);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (["record-food", "record-training", "record-cardio", "record-weight"].includes(action)) {
    openSheet(action.replace("record-", ""));
  } else if (action === "toggle-fatigue") {
    toggleSetting("fatigueWeek");
  } else if (action === "toggle-bulk") {
    toggleSetting("bulkMonth");
  } else if (action === "edit-profile") {
    openSheet("profile");
  } else if (action === "open-goals" || action === "edit-goals") {
    openSheet("goals");
  } else if (action === "close-sheet") {
    closeSheet();
  } else if (action === "install") {
    triggerInstall();
  } else if (action === "widget-help") {
    openSheet("widget-help");
  } else if (action === "export-data") {
    exportData();
  } else if (action === "import-data") {
    $("#importFile").click();
  } else if (action === "reset-data") {
    resetData();
  }
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  const type = form.dataset.form;
  if (["food", "training", "cardio", "weight"].includes(type)) submitRecord(type, form);
  else if (type === "profile") updateProfile(form);
  else if (type === "goals") updateGoals(form);
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

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => console.warn("离线缓存注册失败", error));
  });
}

saveData();
render();

const launchAction = launchParams.get("action");
if (["food", "training", "cardio", "weight"].includes(launchAction)) {
  requestAnimationFrame(() => openSheet(launchAction));
  history.replaceState(null, "", location.pathname);
}
