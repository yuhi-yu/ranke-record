// MET 参考《体力活动纲要》(Compendium of Physical Activities) 的常见活动。
// 无氧训练按胸、背、肩、腿记录训练部位，不再要求逐动作录入。
const EXERCISE_DATABASE = [
  { id: "chest-training", name: "胸部训练", category: "strength", group: "胸", aliases: ["胸", "练胸", "推类训练"], met: 5.5, defaultMinutes: 50 },
  { id: "back-training", name: "背部训练", category: "strength", group: "背", aliases: ["背", "练背", "拉类训练"], met: 5.5, defaultMinutes: 50 },
  { id: "shoulder-training", name: "肩部训练", category: "strength", group: "肩", aliases: ["肩", "练肩"], met: 5, defaultMinutes: 45 },
  { id: "leg-training", name: "腿部训练", category: "strength", group: "腿", aliases: ["腿", "练腿", "下肢训练"], met: 6, defaultMinutes: 55 },
  { id: "incline-walk", name: "坡度走", category: "cardio", group: "爬坡有氧", aliases: ["跑步机坡度走", "爬坡走", "坡度跑"], met: 5.3, defaultMinutes: 30 },
  { id: "stair-climber", name: "爬楼机", category: "cardio", group: "爬楼有氧", aliases: ["楼梯机", "登山机", "爬楼"], met: 8.8, defaultMinutes: 20 },
  { id: "walking", name: "快走", category: "cardio", group: "低强度有氧", aliases: ["散步", "步行"], met: 4.3, defaultMinutes: 40 },
  { id: "easy-run", name: "慢跑", category: "cardio", group: "跑步", aliases: ["跑步", "轻松跑"], met: 8.3, defaultMinutes: 30 },
  { id: "cycling", name: "骑车", category: "cardio", group: "骑行", aliases: ["自行车", "动感单车"], met: 6.8, defaultMinutes: 40 },
  { id: "rower", name: "划船机", category: "cardio", group: "器械有氧", aliases: ["划船"], met: 7, defaultMinutes: 20 },
  { id: "elliptical", name: "椭圆机", category: "器械有氧", group: "器械有氧", aliases: ["椭圆仪"], met: 5, defaultMinutes: 30 },
  { id: "jump-rope", name: "跳绳", category: "cardio", group: "高强度有氧", aliases: [], met: 12.3, defaultMinutes: 15 },
  { id: "swimming", name: "游泳", category: "cardio", group: "低冲击有氧", aliases: ["自由泳", "蛙泳"], met: 5.8, defaultMinutes: 30 }
];
