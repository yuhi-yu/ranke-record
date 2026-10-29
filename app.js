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

function normalizeSearch(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[\s·,，。/\\()（）_-]+/g, "");
}

function findExactFood(query) {
  const normalized = normalizeSearch(query);
  if (!normalized) return null;
  return allFoods().find((food) => {
    const names = [food.name, ...(food.aliases || [])].map(normalizeSearch);
    return names.includes(normalized);
  }) || null;
}

function findFood(query) {
  const normalized = normalizeSearch(query);
  if (!normalized) return null;
  return findExactFood(normalized) || allFoods().find((food) => {
    const names = [food.name, ...(food.aliases || [])].map(normalizeSearch);
    return names.some((name) => normalized.includes(name) || name.includes(normalized));
  }) || null;
}

function parseFoodInput(raw) {
  const compact = String(raw ?? "").replace(/\s+/g, "");
  const amountMatch = compact.match(/(\d+(?:\.\d+)?)(kg|千克|克|g|ml|毫升)/i);
  const mealType = /早餐|早饭|早上/.test(compact) ? "早餐"
    : /午餐|午饭|中午/.test(compact) ? "午餐"
    : /晚餐|晚饭|晚上/.test(compact) ? "晚餐"
    : /加餐|夜宵|下午茶/.test(compact) ? "加餐"
    : null;
  let grams = null;
  if (amountMatch) {
    grams = number(amountMatch[1]);
    if (/kg|千克/i.test(amountMatch[2])) grams *= 1000;
  }
  const query = amountMatch ? compact.replace(amountMatch[0], "") : compact;
  const isNaturalInput = Boolean(amountMatch || mealType) || /半碗|一碗|一杯|一个|一根|一片|一份|一勺/.test(compact);
  const food = isNaturalInput ? findFood(query) : findExactFood(query);
  if (!grams && food) {
    const servingMultiplier = compact.includes("半碗") || compact.includes("半杯")
      ? 0.5
      : /一碗|一杯|一个|一根|一片|一份|一勺/.test(compact)
        ? 1
        : null;
    if (servingMultiplier) grams = (food.defaultGrams || 100) * servingMultiplier;
  }
  return { food, grams, mealType };
}

function findExactActivity(query) {
  const normalized = normalizeSearch(query);
  if (!normalized) return null;
  return EXERCISE_DATABASE.find((activity) => {
    const names = [activity.name, ...(activity.aliases || [])].map(normalizeSearch);
    return names.includes(normalized);
  }) || null;
}

function calculateFoodNutrition(food, grams) {
  const ratio = Math.max(0, number(grams)) / 100;
  return {
    calories: Math.round(number(food?.calories) * ratio),
    protein: Math.round(number(food?.protein) * ratio * 10) / 10,
    carbs: Math.round(number(food?.carbs) * ratio * 10) / 10,
    fat: Math.round(number(food?.fat) * ratio * 10) / 10
  };
}

function estimateActivityCalories(activity, minutes, intensity = 1) {
  if (!activity) return 0;
  return Math.max(0, Math.round(
    number(activity.met) * number(intensity, 1) * 3.5 * number(db.profile.weight, 68) / 200 * number(minutes)
  ));
}

function suggestedMealType() {
  const hour = now().getHours();
  if (hour < 10) return "早餐";
  if (hour < 15) return "午餐";
  if (hour < 21) return "晚餐";
  return "加餐";
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
        sourceActivityId: i % 2 ? "leg-training" : "chest-training",
        name: i % 2 ? "腿部训练" : "胸部训练",
        duration: i % 2 ? 58 : 52,
        calories: i % 2 ? 365 : 312,
        trainingGroup: i % 2 ? "腿" : "胸",
        intensity: 1,
        exercises: [],
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
      sourceActivityId: "chest-training",
      name: "胸部训练",
      duration: 52,
      calories: 312,
      trainingGroup: "胸",
      intensity: 1,
      exercises: [],
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
    customFoods: [],
    days
  };
}

function loadData() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed?.profile && parsed?.days && parsed?.settings) {
      parsed.customFoods = Array.isArray(parsed.customFoods) ? parsed.customFoods : [];
      return parsed;
    }
  } catch (error) {
    console.warn("读取本地数据失败，已创建新的数据。", error);
  }
  return makeSeedData();
}

function allFoods() {
  return [...(db.customFoods || []), ...FOOD_DATABASE];
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
      sub: item.trainingGroup
        ? `${item.trainingGroup}部 · ${item.duration || 0} 分钟`
        : `${item.exercises?.length || 1} 个动作 · ${item.duration || 0} 分钟`,
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
          <span class="text-button">自动换算</span>
        </div>
        <div class="quick-grid">
          <button class="quick-action food" data-action="record-food">
            <span class="quick-action-icon">${icon("food")}</span>
            <strong>记饮食</strong>
            <span>输入食物和克数</span>
          </button>
          <button class="quick-action training" data-action="record-training">
            <span class="quick-action-icon">${icon("dumbbell")}</span>
            <strong>训练 / 有氧</strong>
            <span>胸背肩腿 + 坡度有氧</span>
          </button>
          <button class="quick-action body" data-action="record-weight">
            <span class="quick-action-icon">${icon("scale")}</span>
            <strong>记身体</strong>
            <span>体重 · 体脂趋势</span>
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
    leadTitle: "输入食物和克数，\n营养自动换算。",
    leadCopy: "内置常见食物数据库，不再手填热量和三大营养素。",
    className: "orange",
    heading: "添加食物"
  },
  training: {
    eyebrow: "TRAINING LOG",
    title: "力量和心肺，<span class='thin'>一起记。</span>",
    leadTitle: "只选部位，\n消耗交给系统估算。",
    leadCopy: "无氧按胸、背、肩、腿记录；有氧优先使用坡度和爬楼机。",
    className: "blue",
    heading: "添加训练或有氧"
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

function renderFoodPickResult(food, grams) {
  if (!food) {
    return `<p class="auto-empty">输入食物名称或选择下方常用食物，营养值会自动出现。</p>`;
  }
  const nutrition = calculateFoodNutrition(food, grams);
  return `
    <div class="auto-result">
      <div class="auto-result-head">
        <span class="auto-result-label">${icon("spark")}数据库自动计算</span>
        <span class="auto-result-label">每 100g ${fmt(food.calories)} kcal</span>
      </div>
      <strong>${fmt(nutrition.calories)}<small> kcal</small></strong>
      <div class="auto-macros">
        <span><strong>${nutrition.protein}g</strong>蛋白质</span>
        <span><strong>${nutrition.carbs}g</strong>碳水</span>
        <span><strong>${nutrition.fat}g</strong>脂肪</span>
      </div>
      <div class="field-help">${escapeHTML(food.name)} · ${number(grams)}g · ${escapeHTML(food.serving || "")}</div>
    </div>
  `;
}

function renderCustomFoodResult(values = {}) {
  const protein = number(values.protein);
  const carbs = number(values.carbs);
  const fat = number(values.fat);
  const grams = number(values.amount, 100);
  if (!protein && !carbs && !fat) {
    return `<p class="auto-empty">填写每 100g 的碳蛋脂后，这里会自动换算本次摄入。</p>`;
  }
  const per100Calories = Math.round(protein * 4 + carbs * 4 + fat * 9);
  const ratio = grams / 100;
  return `
    <div class="auto-result">
      <div class="auto-result-head">
        <span class="auto-result-label">${icon("spark")}按 4 / 4 / 9 公式换算</span>
        <span class="auto-result-label">每 100g ${fmt(per100Calories)} kcal</span>
      </div>
      <strong>${fmt(Math.round(per100Calories * ratio))}<small> kcal</small></strong>
      <div class="auto-macros">
        <span><strong>${oneDecimal(protein * ratio)}g</strong>蛋白质</span>
        <span><strong>${oneDecimal(carbs * ratio)}g</strong>碳水</span>
        <span><strong>${oneDecimal(fat * ratio)}g</strong>脂肪</span>
      </div>
      <div class="field-help">${escapeHTML(values.name || "自定义食物")} · ${number(grams)}g</div>
    </div>
  `;
}

function renderFoodForm() {
  const recentIds = Object.keys(db.days)
    .sort()
    .reverse()
    .flatMap((key) => db.days[key]?.foods || [])
    .map((food) => food.sourceFoodId)
    .filter(Boolean);
  const quickIds = [...new Set([...recentIds, "raw-rice", "yeast-protein", "chicken-breast", "chicken-thigh", "cooking-oil", "cashews"])].slice(0, 7);
  const foods = allFoods();
  const quickFoods = quickIds.map((foodId) => foods.find((food) => food.id === foodId)).filter(Boolean);
  return `
    <form data-form="food" data-food-mode="library">
      <div class="mode-switch" role="tablist" aria-label="饮食录入方式">
        <button class="mode-button is-active" type="button" data-food-mode="library">从食物库选择</button>
        <button class="mode-button" type="button" data-food-mode="custom">自定义 / 100g</button>
      </div>
      <div data-food-panel="library">
        <div class="database-picker">
          <div class="form-field">
            <label for="food-query">食物名称</label>
            <input class="form-input" id="food-query" name="foodQuery" list="food-options"
              placeholder="例如：生大米 100克" autocomplete="off" data-food-input />
            <input type="hidden" name="foodId" data-food-id />
          </div>
          <datalist id="food-options">
            ${foods.map((food) => `<option value="${escapeHTML(food.name)}" label="${fmt(food.calories)} kcal / 100g"></option>`).join("")}
          </datalist>
          <div class="database-suggestions" data-food-suggestions hidden></div>
          <div class="database-tags" aria-label="常用食物">
            ${quickFoods.map((food) => `<button class="database-tag" type="button" data-food-quick="${food.id}">${escapeHTML(food.name)}</button>`).join("")}
          </div>
        </div>
        <div data-food-result>${renderFoodPickResult(null, 100)}</div>
      </div>
      <div data-food-panel="custom" hidden>
        <div class="form-field full">
          <label for="custom-food-name">食物名称</label>
          <input class="form-input" id="custom-food-name" name="customName" placeholder="例如：自制鸡肉饭" autocomplete="off" data-custom-food-field />
        </div>
        <p class="field-help" style="margin:10px 2px 7px">填写包装或食物秤上的每 100g 含量</p>
        <div class="form-grid three-columns">
          <div class="form-field">
            <label for="custom-protein">蛋白质 /100g</label>
            <div class="input-suffix"><input class="form-input" id="custom-protein" name="customProtein" data-custom-food-field type="number" inputmode="decimal" min="0" max="100" step="0.1" placeholder="0" /><span>g</span></div>
          </div>
          <div class="form-field">
            <label for="custom-carbs">碳水 /100g</label>
            <div class="input-suffix"><input class="form-input" id="custom-carbs" name="customCarbs" data-custom-food-field type="number" inputmode="decimal" min="0" max="100" step="0.1" placeholder="0" /><span>g</span></div>
          </div>
          <div class="form-field">
            <label for="custom-fat">脂肪 /100g</label>
            <div class="input-suffix"><input class="form-input" id="custom-fat" name="customFat" data-custom-food-field type="number" inputmode="decimal" min="0" max="100" step="0.1" placeholder="0" /><span>g</span></div>
          </div>
        </div>
        <div data-custom-food-result>${renderCustomFoodResult()}</div>
        <label class="check-row">
          <input type="checkbox" name="saveCustom" checked />
          <span>保存到「我的食物」，下次可直接搜索</span>
        </label>
      </div>
      <div class="form-grid" style="margin-top:13px">
        <div class="form-field">
          <label for="food-amount">重量</label>
          <div class="input-suffix">
            <input class="form-input" id="food-amount" name="amount" type="number" inputmode="decimal"
              min="1" max="5000" value="100" data-food-amount required />
            <span>克</span>
          </div>
        </div>
        <div class="form-field">
          <label for="meal-type">餐次</label>
          <select class="form-select" id="meal-type" name="mealType">
            ${["早餐", "午餐", "晚餐", "加餐"].map((meal) => `<option ${meal === suggestedMealType() ? "selected" : ""}>${meal}</option>`).join("")}
          </select>
        </div>
      </div>
      <button class="primary-button" type="submit" data-record-submit disabled>${icon("plus")}加入今日饮食</button>
      <p class="field-help" style="margin-top:9px">生大米按生重记录。自定义食物按每 100g 碳蛋脂换算，热量按 4/4/9 公式估算。</p>
    </form>
  `;
}

function activityEstimateHTML(activity, minutes, intensity = 1) {
  if (!activity) return "";
  return `
    <div class="auto-result dark">
      <div class="auto-result-head">
        <span class="auto-result-label">${icon("flame")}按 MET 自动估算</span>
        <span class="auto-result-label">MET ${activity.met}</span>
      </div>
      <strong data-activity-calories>${fmt(estimateActivityCalories(activity, minutes, intensity))}<small> kcal</small></strong>
      <p class="field-help" style="color:rgba(247,250,239,.48);margin-top:5px">
        体重 ${oneDecimal(db.profile.weight)}kg · ${number(minutes)} 分钟 · 实际消耗会随强度和休息变化
      </p>
    </div>
  `;
}

function renderActivityFields(activity) {
  if (!activity) {
    return `<p class="auto-empty">输入动作名称，力量训练和有氧会显示对应的记录项。</p>`;
  }
  if (activity.category === "strength") {
    const minutes = activity.defaultMinutes || 45;
    return `
      <div class="activity-heading" style="margin:14px 0 10px">
        <span class="activity-badge">无氧</span>
        <span class="field-help">${escapeHTML(activity.group)}部训练 · 按训练部位记录</span>
      </div>
      <div class="form-grid">
        <div class="form-field">
          <label for="activity-duration">训练时长</label>
          <div class="input-suffix"><input class="form-input" id="activity-duration" name="duration" data-activity-duration type="number" inputmode="numeric" min="1" max="300" value="${minutes}" /><span>分钟</span></div>
        </div>
        <div class="form-field">
          <label for="activity-intensity">训练强度</label>
          <select class="form-select" id="activity-intensity" name="intensity" data-activity-intensity>
            <option value="0.85">轻 · 留有余力</option>
            <option value="1" selected>中 · 正常训练</option>
            <option value="1.2">高 · 接近力竭</option>
          </select>
        </div>
      </div>
      <div data-activity-result>${activityEstimateHTML(activity, minutes, 1)}</div>
    `;
  }
  const minutes = activity.defaultMinutes || 30;
  return `
    <div class="activity-heading" style="margin:14px 0 10px">
      <span class="activity-badge cardio">有氧</span>
      <span class="field-help">${escapeHTML(activity.group)} · 填时长即可估算</span>
    </div>
    <div class="form-grid">
      <div class="form-field">
        <label for="activity-duration">时长</label>
        <div class="input-suffix"><input class="form-input" id="activity-duration" name="duration" data-activity-duration type="number" inputmode="numeric" min="1" max="600" value="${minutes}" /><span>分钟</span></div>
      </div>
      <div class="form-field">
        <label for="activity-distance">距离（可选）</label>
        <div class="input-suffix"><input class="form-input" id="activity-distance" name="distance" type="number" inputmode="decimal" min="0" step="0.1" placeholder="3.0" /><span>km</span></div>
      </div>
    </div>
    <div data-activity-result>${activityEstimateHTML(activity, minutes)}</div>
  `;
}

function renderTrainingForm() {
  const recentIds = Object.keys(db.days)
    .sort()
    .reverse()
    .flatMap((key) => [...(db.days[key]?.workouts || []), ...(db.days[key]?.cardio || [])])
    .map((activity) => activity.sourceActivityId)
    .filter(Boolean);
  const quickIds = [...new Set([...recentIds, "chest-training", "back-training", "shoulder-training", "leg-training", "incline-walk", "stair-climber"])].slice(0, 7);
  const quickActivities = quickIds.map((activityId) => EXERCISE_DATABASE.find((activity) => activity.id === activityId)).filter(Boolean);
  return `
    <form data-form="training">
      <div class="database-picker">
        <div class="form-field">
          <label for="activity-query">选择训练部位或有氧</label>
          <input class="form-input" id="activity-query" name="activityQuery" list="activity-options"
            placeholder="例如：胸、背、肩、腿、坡度走" autocomplete="off" data-activity-input required />
          <input type="hidden" name="activityId" data-activity-id />
        </div>
        <datalist id="activity-options">
          ${EXERCISE_DATABASE.map((activity) => `<option value="${escapeHTML(activity.name)}" label="${activity.category === "strength" ? "力量" : "有氧"} · ${escapeHTML(activity.group)}"></option>`).join("")}
        </datalist>
        <div class="database-suggestions" data-activity-suggestions hidden></div>
        <div class="database-tags" aria-label="常用动作">
          ${quickActivities.map((activity) => `<button class="database-tag" type="button" data-activity-quick="${activity.id}">${escapeHTML(activity.name)}</button>`).join("")}
        </div>
      </div>
      <div data-activity-fields>${renderActivityFields(null)}</div>
      <button class="primary-button" type="submit" data-record-submit disabled>${icon("plus")}完成训练记录</button>
      <p class="field-help" style="margin-top:9px">力量和有氧使用同一动作库。热量为 MET 公式估算，不作为医疗或精密能量测量依据。</p>
    </form>
  `;
}

function renderRecordForm(type) {
  if (type === "food") return renderFoodForm();
  if (type === "training") return renderTrainingForm();
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
  let items = [];
  if (type === "food") items = day.foods;
  if (type === "training") {
    items = [
      ...day.workouts.map((item) => ({ ...item, recordKind: "training" })),
      ...day.cardio.map((item) => ({ ...item, recordKind: "cardio" }))
    ].sort((a, b) => String(a.time || "").localeCompare(String(b.time || "")));
  }
  if (type === "weight" && day.weight) {
    items = [{ id: "weight-today", name: `${oneDecimal(day.weight)} kg`, calories: day.bodyFat ? `${oneDecimal(day.bodyFat)}% 体脂` : "", weight: day.weight }];
  }
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
      ? `${item.amount ? `${oneDecimal(item.amount)}g · ` : ""}碳水 ${oneDecimal(item.carbs || 0)}g · 蛋白 ${oneDecimal(item.protein || 0)}g`
      : type === "training"
        ? item.recordKind === "cardio"
          ? `有氧 · ${item.duration || 0} 分钟${item.distance ? ` · ${item.distance} km` : ""}`
          : item.trainingGroup
            ? `无氧 · ${item.trainingGroup}部 · ${item.duration || 0} 分钟`
            : `力量 · ${item.duration || 0} 分钟 · ${item.exercises?.[0]?.sets || 0} 组`
        : `${item.duration || 0} 分钟${item.distance ? ` · ${item.distance} km` : ""}`;
    const deleteType = item.recordKind || type;
    return `
      <div class="recent-item">
        <div class="recent-item-main">
          <strong>${escapeHTML(item.name)}</strong>
          <span>${escapeHTML(detail)}</span>
        </div>
        <span class="recent-item-value">${fmt(item.calories)} kcal</span>
        <button class="delete-button" data-delete="${deleteType}" data-id="${escapeHTML(item.id)}" aria-label="删除">${icon("trash")}</button>
      </div>
    `;
  }).join("");
}

function renderRecord() {
  if (!["food", "training", "weight"].includes(recordType)) recordType = "food";
  const meta = recordMeta[recordType];

  $("#screen").innerHTML = `
    <div class="page-enter">
      ${pageHeader({
        eyebrow: meta.eyebrow,
        title: meta.title,
        note: "所有数据只保存在你的手机里。"
      })}
      <div class="segment-control" style="--segment-count:3" role="tablist" aria-label="记录类型">
        ${["food", "training", "weight"].map((type) => `
          <button class="segment-button ${recordType === type ? "is-active" : ""}" data-record-tab="${type}" role="tab" aria-selected="${recordType === type}">
            ${{ food: "饮食", training: "训练 / 有氧", weight: "身体" }[type]}
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
          <span>${recordType === "weight" ? "建议每天固定时间" : recordType === "food" ? "填克数自动换算" : "选部位或类型"}</span>
        </div>
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
  let sessions = 0;
  days.forEach(({ day }) => {
    day.workouts.forEach((workout) => {
      sessions += 1;
      workoutMinutes += number(workout.duration);
    });
    day.cardio.forEach((cardio) => {
      cardioMinutes += number(cardio.duration);
    });
  });
  return { sessions, workoutMinutes, cardioMinutes };
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
          <div class="metric-card"><span>无氧次数</span><strong>${metrics.sessions}<small> 次</small></strong><p>按胸背肩腿记录</p></div>
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
          ${settingsButton("food", "食物与动作数据库", `${allFoods().length} 种食物 · ${EXERCISE_DATABASE.length} 个训练类型`, "database-info")}
          ${settingsButton("download", "导出本地备份", "生成 JSON 数据文件", "export-data")}
          ${settingsButton("upload", "导入备份", "从 JSON 文件恢复全部数据", "import-data")}
          ${settingsButton("trash", "清空并重新开始", "移除示例数据，从空白开始", "reset-data", "danger")}
        </div>
      </section>

      <section class="formula-card">
        <strong>基础代谢怎么算？</strong>
        <p>采用 Mifflin–St Jeor 公式计算，再结合你的日常活动系数与当天运动消耗，估算总消耗。它是起点，不是绝对答案；持续观察 2–3 周体重趋势再调整。</p>
      </section>
      <p class="app-meta">燃刻 RANKE · v1.3<br>离线优先 · 数据不会离开你的设备${db.isDemo ? " · 当前含示例数据" : ""}</p>
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
  if (type === "cardio") type = "training";
  const backdrop = $("#sheetBackdrop");
  const sheet = $("#bottomSheet");
  let title = "";
  let kicker = "";
  let body = "";

  if (["food", "training", "weight"].includes(type)) {
    const meta = recordMeta[type];
    title = meta.heading;
    kicker = type === "food" ? "记一顿" : type === "training" ? "训练 / 有氧" : "记身体";
    body = renderRecordForm(type);
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
  } else if (type === "database-info") {
    title = "本地数据库";
    kicker = "FOOD & ACTIVITY DATA";
    body = `
      <div class="formula-card" style="margin-top:0">
        <strong>食物营养库 · ${allFoods().length} 种</strong>
        <p>包含生大米、鸡胸鸡腿、酵母蛋白粉、食用油、腰果、核桃等常见食物，另有 ${db.customFoods?.length || 0} 种你保存的自定义食物。基础食材参考《中国食物成分表》与 USDA FoodData Central。</p>
      </div>
      <div class="formula-card">
        <strong>训练类型库 · ${EXERCISE_DATABASE.length} 个</strong>
        <p>无氧按胸、背、肩、腿四个部位记录，不再拆分具体动作；有氧优先提供坡度走和爬楼机。热量按 MET、体重、时长和训练强度估算。</p>
      </div>
      <div class="formula-card">
        <strong>为什么是估算值？</strong>
        <p>食物品牌、烹调油量、含水量，以及训练中的休息和真实强度都会影响结果。建议优先看一周趋势；如果发现长期偏差，可调整每日热量目标。</p>
      </div>
      <button class="primary-button" data-action="close-sheet">${icon("close")}我知道了</button>
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
  syncVisualViewport();
  if (type === "food" || type === "training") {
    requestAnimationFrame(() => $("[data-food-input], [data-activity-input]", sheet)?.focus({ preventScroll: true }));
  }
}

function closeSheet() {
  if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  document.body.classList.remove("keyboard-open");
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

function selectFood(form, food, grams = food?.defaultGrams || 100) {
  if (!form || !food) return;
  form.dataset.foodId = food.id;
  const idField = $("[data-food-id]", form);
  const queryField = $("[data-food-input]", form);
  const amountField = $("[data-food-amount]", form);
  if (idField) idField.value = food.id;
  if (queryField) queryField.value = food.name;
  if (amountField) amountField.value = number(grams, food.defaultGrams || 100);
  const result = $("[data-food-result]", form);
  if (result) result.innerHTML = renderFoodPickResult(food, number(amountField?.value, food.defaultGrams || 100));
  const submit = $("[data-record-submit]", form);
  if (submit) submit.disabled = false;
  const suggestions = $("[data-food-suggestions]", form);
  if (suggestions) suggestions.hidden = true;
  $$("[data-food-quick]", form).forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.foodQuick === food.id);
  });
}

function showFoodSuggestions(form, rawValue) {
  const container = $("[data-food-suggestions]", form);
  if (!container) return;
  const query = normalizeSearch(rawValue);
  if (!query || form.dataset.foodId) {
    container.hidden = true;
    return;
  }
  const matches = allFoods()
    .map((food) => {
      const name = normalizeSearch(food.name);
      const aliases = (food.aliases || []).map(normalizeSearch);
      const score = name === query ? 0 : name.startsWith(query) ? 1 : name.includes(query) ? 2 : aliases.some((alias) => alias.startsWith(query)) ? 3 : aliases.some((alias) => alias.includes(query)) ? 4 : 99;
      return { food, score };
    })
    .filter((item) => item.score < 99)
    .sort((a, b) => a.score - b.score)
    .slice(0, 7);
  if (!matches.length) {
    container.innerHTML = `<div class="suggestion-empty">食物库里暂时没有匹配项，可以换个常见名称试试。</div>`;
  } else {
    container.innerHTML = matches.map(({ food }) => `
      <button class="suggestion-button" type="button" data-food-suggestion="${food.id}">
        <span><strong>${escapeHTML(food.name)}</strong><small>${escapeHTML(food.category)} · ${escapeHTML(food.serving || "按克数记录")}</small></span>
        <span>${fmt(food.calories)} kcal</span>
      </button>
    `).join("");
  }
  container.hidden = false;
}

function updateFoodForm(form, rawValue) {
  if (!form) return;
  const parsed = parseFoodInput(rawValue);
  if (!parsed.food) {
    delete form.dataset.foodId;
    const idField = $("[data-food-id]", form);
    const result = $("[data-food-result]", form);
    const submit = $("[data-record-submit]", form);
    if (idField) idField.value = "";
    if (result) result.innerHTML = renderFoodPickResult(null, 100);
    if (submit) submit.disabled = true;
    $$("[data-food-quick]", form).forEach((button) => button.classList.remove("is-selected"));
    return;
  }
  selectFood(form, parsed.food, parsed.grams || parsed.food.defaultGrams || 100);
  if (parsed.mealType) {
    const mealField = form.elements.namedItem("mealType");
    if (mealField) mealField.value = parsed.mealType;
  }
}

function refreshFoodAmount(form) {
  const food = allFoods().find((item) => item.id === form?.dataset.foodId);
  if (!food) return;
  const grams = number($("[data-food-amount]", form)?.value, 100);
  const result = $("[data-food-result]", form);
  if (result) result.innerHTML = renderFoodPickResult(food, grams);
}

function customFoodValues(form) {
  return {
    name: String(form.elements.namedItem("customName")?.value || "").trim(),
    protein: number(form.elements.namedItem("customProtein")?.value),
    carbs: number(form.elements.namedItem("customCarbs")?.value),
    fat: number(form.elements.namedItem("customFat")?.value),
    amount: number(form.elements.namedItem("amount")?.value, 100)
  };
}

function refreshCustomFood(form) {
  const values = customFoodValues(form);
  const result = $("[data-custom-food-result]", form);
  if (result) result.innerHTML = renderCustomFoodResult(values);
  const submit = $("[data-record-submit]", form);
  if (submit) {
    submit.disabled = !(values.name && values.amount > 0 && values.protein + values.carbs + values.fat > 0);
  }
}

function switchFoodMode(form, mode) {
  if (!form || !["library", "custom"].includes(mode)) return;
  form.dataset.foodMode = mode;
  $$("[data-food-mode]", form).forEach((button) => {
    button.classList.toggle("is-active", button.dataset.foodMode === mode);
  });
  $$("[data-food-panel]", form).forEach((panel) => {
    panel.hidden = panel.dataset.foodPanel !== mode;
  });
  const submit = $("[data-record-submit]", form);
  if (mode === "custom") {
    refreshCustomFood(form);
  } else if (submit) {
    submit.disabled = !form.dataset.foodId;
  }
}

function selectActivity(form, activity) {
  if (!form || !activity) return;
  form.dataset.activityId = activity.id;
  const idField = $("[data-activity-id]", form);
  const queryField = $("[data-activity-input]", form);
  const fields = $("[data-activity-fields]", form);
  if (idField) idField.value = activity.id;
  if (queryField) queryField.value = activity.name;
  if (fields) fields.innerHTML = renderActivityFields(activity);
  const submit = $("[data-record-submit]", form);
  if (submit) submit.disabled = false;
  const suggestions = $("[data-activity-suggestions]", form);
  if (suggestions) suggestions.hidden = true;
  $$("[data-activity-quick]", form).forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.activityQuick === activity.id);
  });
}

function showActivitySuggestions(form, rawValue) {
  const container = $("[data-activity-suggestions]", form);
  if (!container) return;
  const query = normalizeSearch(rawValue);
  if (!query || form.dataset.activityId) {
    container.hidden = true;
    return;
  }
  const matches = EXERCISE_DATABASE
    .map((activity) => {
      const name = normalizeSearch(activity.name);
      const aliases = (activity.aliases || []).map(normalizeSearch);
      const score = name === query ? 0 : name.startsWith(query) ? 1 : name.includes(query) ? 2 : aliases.some((alias) => alias.startsWith(query)) ? 3 : aliases.some((alias) => alias.includes(query)) ? 4 : 99;
      return { activity, score };
    })
    .filter((item) => item.score < 99)
    .sort((a, b) => a.score - b.score)
    .slice(0, 7);
  if (!matches.length) {
    container.innerHTML = `<div class="suggestion-empty">没有匹配项，试试“胸”“背”“肩”“腿”“坡度走”或“爬楼机”。</div>`;
  } else {
    container.innerHTML = matches.map(({ activity }) => `
      <button class="suggestion-button" type="button" data-activity-suggestion="${activity.id}">
        <span><strong>${escapeHTML(activity.name)}</strong><small>${activity.category === "strength" ? "力量" : "有氧"} · ${escapeHTML(activity.group)}</small></span>
        <span>MET ${activity.met}</span>
      </button>
    `).join("");
  }
  container.hidden = false;
}

function updateActivityForm(form, rawValue) {
  if (!form) return;
  const activity = findExactActivity(rawValue);
  if (!activity) {
    delete form.dataset.activityId;
    const idField = $("[data-activity-id]", form);
    const fields = $("[data-activity-fields]", form);
    const submit = $("[data-record-submit]", form);
    if (idField) idField.value = "";
    if (fields) fields.innerHTML = renderActivityFields(null);
    if (submit) submit.disabled = true;
    $$("[data-activity-quick]", form).forEach((button) => button.classList.remove("is-selected"));
    return;
  }
  if (form.dataset.activityId === activity.id) return;
  selectActivity(form, activity);
}

function refreshActivityEstimate(form) {
  const activity = EXERCISE_DATABASE.find((item) => item.id === form?.dataset.activityId);
  if (!activity) return;
  const duration = number($("[data-activity-duration]", form)?.value, activity.defaultMinutes || 30);
  const intensity = number($("[data-activity-intensity]", form)?.value, 1);
  const result = $("[data-activity-result]", form);
  if (result) result.innerHTML = activityEstimateHTML(activity, duration, intensity);
}

function syncVisualViewport() {
  const viewport = window.visualViewport;
  const visualHeight = Math.max(260, viewport?.height || window.innerHeight);
  const offsetTop = viewport?.offsetTop || 0;
  const keyboardInset = Math.max(0, window.innerHeight - visualHeight - offsetTop);
  document.documentElement.style.setProperty("--vvh", `${visualHeight}px`);
  document.documentElement.style.setProperty("--keyboard-inset", `${keyboardInset}px`);
  document.body.classList.toggle("keyboard-open", keyboardInset > 100);
  if (!$("#bottomSheet").hidden && document.activeElement instanceof HTMLElement) {
    window.setTimeout(() => {
      document.activeElement?.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 80);
  }
}

function submitRecord(type, form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const day = getDay(dateKey(), true);
  if (type === "food") {
    const grams = number(data.amount);
    let food = allFoods().find((item) => item.id === data.foodId);
    if (form.dataset.foodMode === "custom") {
      const custom = customFoodValues(form);
      if (!custom.name || custom.amount <= 0 || custom.protein + custom.carbs + custom.fat <= 0) {
        showToast("请填写食物名称和每 100g 的碳蛋脂含量");
        return;
      }
      const calories100 = Math.round(custom.protein * 4 + custom.carbs * 4 + custom.fat * 9);
      if (data.saveCustom) {
        db.customFoods = Array.isArray(db.customFoods) ? db.customFoods : [];
        const existing = db.customFoods.find((item) => normalizeSearch(item.name) === normalizeSearch(custom.name));
        food = {
          ...(existing || {}),
          id: existing?.id || id("custom-food"),
          name: custom.name,
          category: "我的食物",
          aliases: [],
          calories: calories100,
          protein: custom.protein,
          carbs: custom.carbs,
          fat: custom.fat,
          defaultGrams: 100,
          serving: "自定义 · 每 100g",
          isCustom: true
        };
        if (existing) {
          Object.assign(existing, food);
        } else {
          db.customFoods.unshift(food);
        }
      } else {
        food = {
          id: "custom-temporary",
          name: custom.name,
          calories: calories100,
          protein: custom.protein,
          carbs: custom.carbs,
          fat: custom.fat,
          serving: "本次自定义"
        };
      }
    }
    if (!food || grams <= 0) {
      showToast("请先选择食物并填写重量");
      return;
    }
    const nutrition = calculateFoodNutrition(food, grams);
    day.foods.push({
      id: id("food"),
      sourceFoodId: food.id,
      name: food.name,
      portion: `${grams}g`,
      amount: grams,
      calories: nutrition.calories,
      protein: nutrition.protein,
      carbs: nutrition.carbs,
      fat: nutrition.fat,
      mealType: data.mealType,
      time: timeNow()
    });
  } else if (type === "training") {
    const activity = EXERCISE_DATABASE.find((item) => item.id === data.activityId);
    const duration = number(data.duration);
    const intensity = number(data.intensity, 1);
    if (!activity || duration <= 0) {
      showToast("请先选择动作并填写时长");
      return;
    }
    const calories = estimateActivityCalories(activity, duration, intensity);
    if (activity.category === "strength") {
      day.workouts.push({
        id: id("workout"),
        sourceActivityId: activity.id,
        name: activity.name,
        duration,
        calories,
        met: activity.met,
        trainingGroup: activity.group,
        intensity,
        exercises: [],
        time: timeNow()
      });
    } else {
      day.cardio.push({
        id: id("cardio"),
        sourceActivityId: activity.id,
        name: activity.name,
        duration,
        calories,
        met: activity.met,
        distance: number(data.distance),
        time: timeNow()
      });
    }
  } else if (type === "weight") {
    day.weight = number(data.weight);
    day.bodyFat = data.bodyFat ? number(data.bodyFat) : null;
    db.profile.weight = day.weight;
    db.profile.bodyFat = day.bodyFat || db.profile.bodyFat;
  }
  saveData();
  closeSheet();
  render();
  showToast(type === "weight" ? "身体数据已记录" : "已自动计算并保存");
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
      parsed.customFoods = Array.isArray(parsed.customFoods) ? parsed.customFoods : [];
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

  const foodMode = event.target.closest("button[data-food-mode]");
  if (foodMode) {
    switchFoodMode(foodMode.closest("form"), foodMode.dataset.foodMode);
    return;
  }

  const foodQuick = event.target.closest("[data-food-quick]");
  if (foodQuick) {
    const food = allFoods().find((item) => item.id === foodQuick.dataset.foodQuick);
    selectFood(foodQuick.closest("form"), food);
    return;
  }

  const foodSuggestion = event.target.closest("[data-food-suggestion]");
  if (foodSuggestion) {
    const food = allFoods().find((item) => item.id === foodSuggestion.dataset.foodSuggestion);
    selectFood(foodSuggestion.closest("form"), food);
    return;
  }

  const activityQuick = event.target.closest("[data-activity-quick]");
  if (activityQuick) {
    const activity = EXERCISE_DATABASE.find((item) => item.id === activityQuick.dataset.activityQuick);
    selectActivity(activityQuick.closest("form"), activity);
    return;
  }

  const activitySuggestion = event.target.closest("[data-activity-suggestion]");
  if (activitySuggestion) {
    const activity = EXERCISE_DATABASE.find((item) => item.id === activitySuggestion.dataset.activitySuggestion);
    selectActivity(activitySuggestion.closest("form"), activity);
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
    const sheetType = action === "record-cardio" ? "training" : action.replace("record-", "");
    openSheet(sheetType);
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
  } else if (action === "database-info") {
    openSheet("database-info");
  } else if (action === "export-data") {
    exportData();
  } else if (action === "import-data") {
    $("#importFile").click();
  } else if (action === "reset-data") {
    resetData();
  }
});

document.addEventListener("input", (event) => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  if (event.target.matches("[data-food-input]")) {
    updateFoodForm(form, event.target.value);
    showFoodSuggestions(form, event.target.value);
  } else if (event.target.matches("[data-custom-food-field]")) {
    refreshCustomFood(form);
  } else if (event.target.matches("[data-food-amount]")) {
    if (form.dataset.foodMode === "custom") refreshCustomFood(form);
    else refreshFoodAmount(form);
  } else if (event.target.matches("[data-activity-input]")) {
    updateActivityForm(form, event.target.value);
    showActivitySuggestions(form, event.target.value);
  } else if (event.target.matches("[data-activity-duration], [data-activity-intensity]")) {
    refreshActivityEstimate(form);
  }
});

document.addEventListener("change", (event) => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  if (event.target.matches("[data-activity-intensity]")) refreshActivityEstimate(form);
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form[data-form]");
  if (!form) return;
  event.preventDefault();
  const type = form.dataset.form;
  if (["food", "training", "weight"].includes(type)) submitRecord(type, form);
  else if (type === "profile") updateProfile(form);
  else if (type === "goals") updateGoals(form);
});

$("#sheetBackdrop").addEventListener("click", closeSheet);
$("#importFile").addEventListener("change", (event) => importData(event.target.files?.[0]));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !$("#bottomSheet").hidden) closeSheet();
});

document.addEventListener("focusin", (event) => {
  if (event.target.matches("input, select, textarea")) {
    document.body.classList.add("keyboard-open");
  }
  if (event.target.matches("[data-food-input]")) {
    const form = event.target.closest("form");
    if (form && !form.dataset.foodId) showFoodSuggestions(form, event.target.value);
  } else if (event.target.matches("[data-activity-input]")) {
    const form = event.target.closest("form");
    if (form && !form.dataset.activityId) showActivitySuggestions(form, event.target.value);
  }
  if (event.target.matches("input, select, textarea") && event.target.closest("#bottomSheet")) {
    window.setTimeout(() => event.target.scrollIntoView({ block: "center", behavior: "smooth" }), 120);
  }
});

document.addEventListener("focusout", (event) => {
  if (!event.target.matches("input, select, textarea")) return;
  window.setTimeout(() => {
    if (!document.activeElement?.matches("input, select, textarea")) {
      document.body.classList.remove("keyboard-open");
    }
  }, 120);
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
syncVisualViewport();

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
