// 训练记录只保留训练部位和有氧类型。
const EXERCISE_DATABASE = [
  {
    id: "chest",
    name: "胸部训练",
    kind: "strength",
    group: "胸",
    aliases: ["胸", "练胸", "推类"],
    defaultDuration: 50
  },
  {
    id: "back",
    name: "背部训练",
    kind: "strength",
    group: "背",
    aliases: ["背", "练背", "拉类"],
    defaultDuration: 50
  },
  {
    id: "shoulders",
    name: "肩部训练",
    kind: "strength",
    group: "肩",
    aliases: ["肩", "练肩", "三角肌"],
    defaultDuration: 45
  },
  {
    id: "legs",
    name: "腿部训练",
    kind: "strength",
    group: "腿",
    aliases: ["腿", "练腿", "下肢"],
    defaultDuration: 55
  },
  {
    id: "incline-walk",
    name: "坡度走",
    kind: "cardio",
    group: "有氧",
    aliases: ["爬坡", "跑步机", "坡度跑"],
    defaultDuration: 30
  },
  {
    id: "stair-climber",
    name: "爬楼机",
    kind: "cardio",
    group: "有氧",
    aliases: ["楼梯机", "登山机", "爬楼"],
    defaultDuration: 20
  },
  {
    id: "running",
    name: "跑步",
    kind: "cardio",
    group: "有氧",
    aliases: ["慢跑", "跑步机"],
    defaultDuration: 30
  },
  {
    id: "cycling",
    name: "骑车",
    kind: "cardio",
    group: "有氧",
    aliases: ["自行车", "单车"],
    defaultDuration: 40
  }
];
