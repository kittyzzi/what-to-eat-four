// 《今天到底吃什么》食物数据库

// ==================== AI 吐槽文案库 ====================
const TAUNT_POOL = [
  "你不是不知道吃什么，你是在等一道菜自己发光。",
  "别选了，这顿饭已经通过面试了。",
  "再纠结下去，饿的是你，不是菜单。",
  "老板的需求永远改不完，但饭可以先解决。",
  "别的事情可以等等，胃已经开始催单了。",
  "今天先照顾胃，别逞强。",
  "热乎乎的东西，有时候比安慰更有用。",
  "偶尔吃点喜欢的，不算放纵。",
  "认真生活的人，配得上一顿好饭。",
  "吃饱了，下午的思路才不会被胃打断。",
  "挑饭的时间已经够吃完一轮了，这次就它吧。",
  "胃不是用来装纠结的，是用来装食物的。",
  "好好吃一顿，比什么都重要。",
  "你犹豫的样子，像一个在菜单前沉思的哲学家。",
  "吃饭这件事，想太多反而吃不好。",
  "今天这顿饭，是你上午认真工作的奖励。",
  "你的胃比你的大脑更清楚你需要什么。",
  "别拿吃饭惩罚自己，你已经够努力了。",
  "吃好这顿，下午的烦恼会小一点。",
  "人生苦短，先吃饭再说。",
  "你在选饭这件事上花的精力，足够写一份周报了。",
  "世界上最稳定的关系，是你和你的饭碗。",
  "点了就别想了，吃完就是胜利。",
  "你的胃是个老实人，饿了就说，别让它等太久。",
  "一顿饭解决不了所有问题，但能解决饿这个问题。",
  "你对待吃饭的认真，值得一个点赞。",
  "把选择交给我，把胃口留给自己。",
  "今天先把胃安顿好。",
  "同事已经吃上了，你还在犹豫——这画面有点可爱。",
  "吃饭是一天中为数不多完全由你做主的事。",
  "空腹等灵感，不如吃饱再想。",
  "你的身体在喊'快吃饭'，大脑终于同意了。",
  "选来选去，能让你吃下去的就是好饭。",
  "每次纠结吃啥，都是对胃的一次考验。",
  "这顿饭不一定完美，但能让你继续战斗。",
  "你已经考虑了所有选项，现在是行动时间。",
  "胃不会说话，但会抗议。喂它。",
  "吃饭这件事，完成比完美重要。",
  "今天先吃好，其他的晚点再说。",
  "你的胃已经给大脑发了五条消息，全是'饿'。",
  "吃饭不需要理由，饿就是最好的理由。",
  "纠结这顿饭的时间，够你喝一杯热水了。",
  "放下手机，拿起筷子，事情就简单了。",
  "你需要的不是完美的一顿饭，是一顿能吃的饭。",
  "给胃一个交代，给下一段一个开始。",
  "别想了，再想外卖小哥都下班了。",
  "每一顿认真吃的饭，都是在对自己说'我重视你'。",
  "今天好好吃饭，是你能给自己最简单的善意。",
  "吃饭不需要意义，好吃就够了。",
  "有人等你回家吃饭，但这顿得你自己搞定。",
];

// ==================== 记录成功文案库 ====================
const CONFIRM_POOL = [
  "今天已经好好吃饭了。",
  "这顿搞定，任务完成。",
  "今天也没有亏待自己。",
  "记录成功，希望这顿饭合胃口。",
  "照顾自己这件事，今天打卡成功。",
  "又一顿，距离好好生活又近了一步。",
  "今天的胃，收到了你的善意。",
];

function getTaunt() {
  return TAUNT_POOL[Math.floor(Math.random() * TAUNT_POOL.length)];
}

function getConfirm() {
  return CONFIRM_POOL[Math.floor(Math.random() * CONFIRM_POOL.length)];
}

const FOOD_DATABASE = [
  // ===== 清淡养胃类 =====
  {
    id: 1,
    name: "白粥配小咸菜",
    shortName: "白粥",
    priceRange: [5, 12],
    tag: "胃部关怀",
    suitableBodyStatus: ["身体不舒服"],
    suitableMood: ["有点想吐", "没胃口", "胃不舒服", "熬夜后难受", "感冒中"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "生病的时候，一碗热粥比什么都实在。",
    reason: "白粥温和好消化，小咸菜开胃，胃部不适时的最佳拍档。",
    category: "粥",
    avoid: "别看不起白粥。胃不舒服的时候它是你唯一的依靠。"
  },
  {
    id: 2,
    name: "番茄鸡蛋面",
    shortName: "番茄面",
    priceRange: [10, 18],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "没胃口", "胃不舒服", "熬夜后难受"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "番茄鸡蛋面，简单但从来不会辜负你。",
    reason: "番茄酸甜开胃，鸡蛋补充蛋白质，面条好消化，营养均衡还暖胃。",
    category: "粉面",
    avoid: "别往里面加辣椒。番茄和蛋才是一家人。"
  },
  {
    id: 3,
    name: "蒸蛋羹",
    shortName: "蒸蛋羹",
    priceRange: [8, 15],
    tag: "胃部关怀",
    suitableBodyStatus: ["身体不舒服"],
    suitableMood: ["有点想吐", "没胃口", "胃不舒服"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "嫩嫩的蒸蛋，胃不舒服的时候它最懂你。",
    reason: "口感嫩滑，几乎不需要咀嚼，蛋白质丰富，肠胃友好度极高。",
    avoid: "趁热吃。蛋羹凉了就像塌了的房子。"
  },
  {
    id: 4,
    name: "皮蛋瘦肉粥",
    shortName: "皮蛋粥",
    priceRange: [10, 18],
    tag: "胃部关怀",
    suitableBodyStatus: ["身体不舒服", "身体正常"],
    suitableMood: ["有点想吐", "没胃口", "胃不舒服", "熬夜后难受", "今天想吃清淡"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "皮蛋粥是人类对抗难受胃的终极答案，没有之一。",
    reason: "软烂易消化，皮蛋提鲜，瘦肉补蛋白，一碗下去整个人暖洋洋的。",
    category: "粥",
    avoid: "别配碳酸饮料。粥和汽水的组合，胃看了都摇头。"
  },
  {
    id: 5,
    name: "银耳莲子汤",
    shortName: "银耳汤",
    priceRange: [8, 15],
    tag: "胃部关怀",
    suitableBodyStatus: ["身体不舒服"],
    suitableMood: ["有点想吐", "没胃口", "胃不舒服"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "喝汤喝汤，你的胃在感谢你。",
    reason: "润肺养胃，清热去火，口感清甜，身体不适时非常适合补充水分。",
    avoid: "别当水喝。它是汤不是饮料。"
  },

  // ===== 正常饱腹类 =====
  {
    id: 6,
    name: "黄焖鸡米饭",
    shortName: "黄焖鸡",
    priceRange: [15, 25],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["日常省心", "精打细算"],
    taunt: "中国大学城三大神器：黄焖鸡、沙县、兰州拉面，你已经选择了其一。",
    reason: "鸡肉软烂入味，汤汁拌饭一绝，分量足，吃完不饿，下午课还能精神抖擞。",
    category: "米饭",
    avoid: "汤汁别全浇饭里。留几口干饭吃，各是各的香。"
  },
  {
    id: 7,
    name: "兰州牛肉拉面",
    shortName: "兰州面",
    priceRange: [12, 22],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "一清二白三红四绿五黄，光记住这个你就已经比很多人懂吃了。",
    reason: "牛肉汤底鲜美，面条劲道，配上香菜萝卜，一碗下去整个人都通透了。",
    category: "粉面",
    avoid: "别对着碗拼命吹气。烫才是牛肉面的灵魂。"
  },
  {
    id: 8,
    name: "蛋炒饭",
    shortName: "蛋炒饭",
    priceRange: [10, 20],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "世界上最伟大的发明之一：把昨晚的剩饭变成今天的美食。",
    reason: "米饭有饱腹感，鸡蛋补蛋白，火候到了就是人间美味，简单可靠。",
    category: "米饭",
    avoid: "别在减肥的时候点。蛋炒饭不会替你背锅。"
  },
  {
    id: 9,
    name: "猪脚饭",
    shortName: "猪脚饭",
    priceRange: [15, 25],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["日常省心"],
    taunt: "胶原蛋白拉满，每一口都是对自己的宠爱。",
    reason: "猪脚软糯，胶原蛋白丰富，配菜香，饭量足，吃一顿精神一整天。",
    category: "米饭",
    avoid: "别数卡路里。猪脚饭的存在就是为了让你忘掉这些。"
  },
  {
    id: 10,
    name: "牛肉盖饭",
    shortName: "牛肉饭",
    priceRange: [18, 30],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    taunt: "铁质补充时间到！你的血红蛋白在列队欢迎。",
    reason: "牛肉补铁补锌，蛋白质丰富，吃完有力气，下午不犯困。",
    category: "米饭",
    avoid: "别配碳酸饮料。牛肉会伤心的。"
  },
  {
    id: 11,
    name: "沙县小吃拼盘",
    shortName: "沙县拼盘",
    priceRange: [12, 20],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "中国人在外漂泊的精神港湾。沙县永远记得你。",
    reason: "品种多样，蒸饺、拌面、炖汤任意搭配，营养均衡，经济实惠。",
    avoid: "蒸饺皮不够薄的店，别勉强。你的舌头值得更好的。"
  },
  {
    id: 12,
    name: "鸡腿饭",
    shortName: "鸡腿饭",
    priceRange: [13, 22],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "一只鸡腿的重量，足以承载一个大学生午后的快乐。",
    reason: "鸡腿肉嫩，蛋白质高，卡路里适中，配饭刚刚好，简单满足。",
    category: "米饭",
    avoid: "炸的和卤的是两种人生。今天你选哪一个？"
  },

  // ===== 重口高油类 =====
  {
    id: 13,
    name: "麻辣烫",
    shortName: "麻辣烫",
    priceRange: [15, 28],
    tag: "重口高油",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "需要被安慰", "今天懒得思考"],
    suitableWallet: ["日常省心"],
    taunt: "麻辣烫的魅力在于，就算昨天刚吃过，今天还是想再来一碗。",
    reason: "食材自由选配，麻辣鲜香，满足感极强，心情不好时吃一次有奇效。",
    avoid: "胃不好的时候别逞强。明天还要上班。"
  },
  {
    id: 14,
    name: "麻辣香锅",
    shortName: "麻辣香锅",
    priceRange: [20, 35],
    tag: "重口高油",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    taunt: "麻辣香锅，是那种吃完会出汗、但心情会变好的饭。",
    reason: "重口味，食材丰富，麻辣鲜香，吃完满足感爆棚，适合发泄情绪。",
    avoid: "别用辣度证明自己。微辣也很好吃。"
  },
  {
    id: 15,
    name: "炸鸡汉堡套餐",
    shortName: "炸鸡堡",
    priceRange: [18, 35],
    tag: "重口高油",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    taunt: "偶尔来一顿炸鸡，是对自己努力工作的小小奖励。",
    reason: "鸡肉外酥里嫩，加上薯条，整个人心情都好了，偶尔放纵一下有益心理健康。",
    category: "汉堡",
    avoid: "别天天吃。体检报告会记住每一个炸鸡。"
  },
  {
    id: 16,
    name: "水煮肉片",
    shortName: "水煮肉",
    priceRange: [18, 30],
    tag: "重口高油",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽"],
    suitableWallet: ["日常省心", "小小犒劳"],
    taunt: "叫'水煮'但一点不水，红油里藏着让人上瘾的味道。",
    reason: "肉片嫩滑，红油麻辣，下饭极强，吃完一身汗，减压效果显著。",
    avoid: "嘴爽了胃不一定爽。自己把握那个度。"
  },
  {
    id: 17,
    name: "辣椒炒肉饭",
    shortName: "辣椒炒肉",
    priceRange: [13, 22],
    tag: "重口高油",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天想吃饱"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "辣椒的香味裹着肉片，这碗饭能让你忘记所有烦恼。",
    reason: "猪肉嫩滑，辣椒香辣，配饭无敌下饭，湘菜里的真·家常美味。",
    category: "米饭",
    avoid: "口腔溃疡的时候别硬撑。肉可以明天再吃。"
  },

  // ===== 暴击放纵类 =====
  {
    id: 18,
    name: "重庆火锅外卖",
    shortName: "重庆火锅",
    priceRange: [28, 50],
    tag: "暴击放纵",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "需要被安慰"],
    suitableWallet: ["小小犒劳"],
    taunt: "火锅，人类最伟大的发明。你今天决定犒劳自己，合情合理。",
    reason: "麻辣鲜香，食材丰富，蘸料香浓，吃一顿等于一次完整的情绪释放。",
    avoid: "感冒了别吃火锅。火锅不会跑，但你会更难受。"
  },
  {
    id: 19,
    name: "烤肉拼盘",
    shortName: "烤肉拼盘",
    priceRange: [30, 55],
    tag: "暴击放纵",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽"],
    suitableWallet: ["小小犒劳"],
    taunt: "烤肉的香气，是最直接的幸福感。今天值得。",
    reason: "各种肉类，烤制香气扑鼻，蘸酱丰富，吃完心满意足，值得偶尔一次。",
    category: "烧烤",
    avoid: "别一个人吃一整盘。烤肉的快乐要分享，油脂也分担一下。"
  },
  {
    id: 20,
    name: "炸串大礼包",
    shortName: "炸串",
    priceRange: [20, 40],
    tag: "暴击放纵",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    taunt: "炸串，宵夜界的王者，现在出现在你面前。没什么问题，继续。",
    reason: "外酥里嫩，撒上孜然辣椒，配上酸辣粉，这是大学生特有的快乐。",
    category: "烧烤",
    avoid: "别在深夜下单。炸串和早睡你总得选一个。"
  },
  {
    id: 21,
    name: "糖醋排骨套餐",
    shortName: "糖醋排骨",
    priceRange: [25, 40],
    tag: "暴击放纵",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "需要被安慰"],
    suitableWallet: ["小小犒劳"],
    taunt: "酸甜咸鲜，这四个字凑在一起就叫做幸福。",
    reason: "排骨酥香，糖醋汁酸甜，下饭极好，吃完有种被宠爱的满足感。",
    avoid: "别舔盘子。虽然我也知道酱汁真的很香。"
  },

  // ===== 清淡养胃类（更多） =====
  {
    id: 22,
    name: "清炒时蔬配米饭",
    shortName: "清炒时蔬",
    priceRange: [10, 18],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "没胃口", "胃不舒服"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "清清淡淡的，吃完身体会觉得很舒服。",
    reason: "少油少盐，富含膳食纤维，清爽不腻，身体调整期的完美选择。",
    category: "米饭",
    avoid: "别觉得吃素是苦行。偶尔也挺好吃的对吧。"
  },
  {
    id: 23,
    name: "豆腐脑",
    shortName: "豆腐脑",
    priceRange: [5, 12],
    tag: "胃部关怀",
    suitableBodyStatus: ["身体不舒服"],
    suitableMood: ["有点想吐", "没胃口", "胃不舒服"],
    suitableWallet: ["精打细算"],
    taunt: "软到没有边界感，但这就是它的优点。你的胃谢谢你。",
    reason: "豆腐脑温热软嫩，易消化，蛋白质丰富，肠胃虚弱时的温柔之选。",
    avoid: "甜党咸党别吵架。豆腐脑本人表示很无辜。"
  },
  {
    id: 24,
    name: "鸡蛋汤面",
    shortName: "鸡蛋汤面",
    priceRange: [8, 15],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "没胃口", "感冒中", "熬夜后难受"],
    suitableWallet: ["精打细算"],
    taunt: "一碗热汤面下肚，比什么药都让人舒服。",
    reason: "汤底清淡鲜美，鸡蛋好消化，面条暖胃，特别适合感冒发烧或熬夜后食用。",
    category: "粉面",
    avoid: "别放太多辣。汤面的温柔就是不加戏。"
  },
  {
    id: 25,
    name: "冬瓜排骨汤",
    shortName: "冬瓜汤",
    priceRange: [15, 25],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "胃不舒服"],
    suitableWallet: ["日常省心"],
    taunt: "冬瓜清热，排骨鲜甜，你今天是在养生，这很好。",
    reason: "汤清鲜甜，利水消肿，清热不上火，配一碗白饭刚刚好。",
    avoid: "别急着喝。烫嘴这件事不需要我提醒吧。"
  },

  // ===== 需要被安慰类 =====
  {
    id: 26,
    name: "红烧肉米饭",
    shortName: "红烧肉",
    priceRange: [18, 30],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["需要被安慰", "今天想吃爽", "今天想吃饱"],
    suitableWallet: ["日常省心", "小小犒劳"],
    taunt: "妈妈的味道在这里平替了。吃完这碗饭，什么烦恼都先放一放。",
    reason: "肥瘦相间，入口即化，咸甜适中，是最能给人安慰感的家常菜之一。",
    category: "米饭",
    avoid: "别一块接一块。三块是享受，七八块是后悔。"
  },
  {
    id: 27,
    name: "奶茶配小蛋糕",
    shortName: "奶茶套餐",
    priceRange: [20, 35],
    tag: "暴击放纵",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    taunt: "偶尔用甜的犒劳自己，不需要理由。",
    reason: "奶茶甜蜜，蛋糕松软，糖分快速补充幸福感，心情不好时偶尔放纵完全合理。",
    avoid: "喝吧。但明天别来翻这条记录。"
  },
  {
    id: 28,
    name: "煲仔饭",
    shortName: "煲仔饭",
    priceRange: [18, 30],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["需要被安慰", "今天想吃饱", "今天懒得思考"],
    suitableWallet: ["日常省心"],
    taunt: "锅巴的声音，是人间最好听的ASMR。",
    reason: "饭香扑鼻，配料丰富，锅巴香脆，一份煲仔饭能让人感受到生活的温度。",
    category: "米饭",
    avoid: "锅巴别全刮完。留一点让锅也有尊严。"
  },

  // ===== 精打细算特供 =====
  {
    id: 29,
    name: "酱香饼",
    shortName: "酱香饼",
    priceRange: [5, 12],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天懒得思考", "今天想吃饱"],
    suitableWallet: ["精打细算"],
    taunt: "几块钱的快乐，有时候比什么都实在。",
    reason: "外脆内软，酱香浓郁，价格亲民，性价比极高，大学城必备美食。",
    avoid: "别边走边吃。酱香饼值得你坐下来慢慢咬。"
  },
  {
    id: 30,
    name: "鸡蛋灌饼",
    shortName: "鸡蛋灌饼",
    priceRange: [5, 10],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    taunt: "吃就对了，鸡蛋灌饼什么时候都不会错。",
    reason: "鸡蛋、饼皮、蔬菜，一个灌饼搞定碳水+蛋白质，实惠又快捷。",
    avoid: "别催老板快点。灌进去的那一下急不来。"
  },
  {
    id: 31,
    name: "米线",
    shortName: "米线",
    priceRange: [10, 18],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "今天懒得思考", "熬夜后难受"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "过桥米线，云南的骄傲，宿舍附近的救星。",
    reason: "米线滑嫩，汤底清鲜，配料丰富，轻盈不腻，身体调整期也能接受。",
    category: "粉面",
    avoid: "辣味的别在感冒时点。米线的温柔你感受不到。"
  },
  {
    id: 32,
    name: "馄饨汤",
    shortName: "馄饨汤",
    priceRange: [10, 18],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "需要被安慰", "没胃口"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "薄皮大馅，汤清味鲜，这是外婆的味道在外卖界的近似值。",
    reason: "馄饨皮薄易消化，肉馅鲜美，汤底清淡，非常适合胃口不好时食用。",
    category: "云吞饺子",
    avoid: "别用吸管。馄饨汤要用勺子一口一口来。"
  },

  // ===== 小奖励类 =====
  {
    id: 33,
    name: "日式拉面",
    shortName: "日式拉面",
    priceRange: [25, 45],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "需要被安慰", "今天懒得思考"],
    suitableWallet: ["小小犒劳"],
    taunt: "叉烧+溏心蛋+海苔，你今天活得很有仪式感。",
    reason: "汤底浓郁，叉烧软嫩，溏心蛋细腻，一碗下去整个人都被治愈了。",
    category: "粉面",
    avoid: "别喝光汤底。那是用来泡面的，不是续命的。"
  },
  {
    id: 34,
    name: "烤鸭套餐",
    shortName: "烤鸭套餐",
    priceRange: [25, 40],
    tag: "暴击放纵",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "需要被安慰"],
    suitableWallet: ["小小犒劳"],
    taunt: "卷上鸭肉、黄瓜、甜面酱，一口下去什么烦恼都忘了。",
    reason: "鸭皮酥脆，搭配荷叶饼和甜面酱，这是一种需要动手的仪式感美食。",
    category: "烧烤",
    avoid: "别一个人吃一整只。烤鸭的分量不会骗人。"
  },
  {
    id: 35,
    name: "越南牛肉河粉",
    shortName: "越南河粉",
    priceRange: [22, 38],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃清淡", "今天想吃爽", "今天懒得思考"],
    suitableWallet: ["日常省心", "小小犒劳"],
    taunt: "汤头清澈、牛肉嫩滑，一碗河粉让人从内到外舒坦。",
    reason: "汤底清鲜，牛肉嫩滑，河粉爽滑，清淡不油腻，兼顾美味与健康。",
    category: "粉面",
    avoid: "别不爱还硬吃。八角不是每个人都懂。"
  },
  {
    id: 36,
    name: "寿司拼盘",
    shortName: "寿司拼盘",
    priceRange: [25, 45],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃清淡", "今天懒得思考"],
    suitableWallet: ["小小犒劳"],
    taunt: "一口一个，清爽不腻，吃完不会有负担。",
    reason: "品种多样，口感丰富，醋饭开胃，热量相对较低，颜值高适合发朋友圈。",
    avoid: "肠胃脆弱的时候别碰生食。勇气用错地方了。"
  },

  // ===== 感冒/熬夜特供 =====
  {
    id: 37,
    name: "姜丝肉末粥",
    shortName: "姜丝粥",
    priceRange: [10, 18],
    tag: "胃部关怀",
    suitableBodyStatus: ["身体不舒服"],
    suitableMood: ["感冒中", "熬夜后难受", "胃不舒服"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "姜丝驱寒，一碗热粥下去整个人都暖了。",
    reason: "生姜驱寒暖身，肉末补充蛋白质，粥底暖胃，感冒初期食用有助于恢复。",
    category: "粥",
    avoid: "发高烧别喝滚烫的。身体已经很辛苦了。"
  },
  {
    id: 38,
    name: "蜂蜜柚子茶配全麦面包",
    shortName: "柚子茶套餐",
    priceRange: [12, 20],
    tag: "胃部关怀",
    suitableBodyStatus: ["身体不舒服"],
    suitableMood: ["感冒中", "没胃口"],
    suitableWallet: ["日常省心"],
    taunt: "暖暖的柚子茶配面包，简单但舒服。",
    reason: "柚子富含维C，蜂蜜润喉抗菌，全麦提供能量，感冒期间的理想搭配。",
    category: "粉面",
    avoid: "别指望它管饱。这是下午茶不是正餐。"
  },
  {
    id: 39,
    name: "小米南瓜粥",
    shortName: "小米粥",
    priceRange: [8, 15],
    tag: "胃部关怀",
    suitableBodyStatus: ["身体不舒服"],
    suitableMood: ["有点想吐", "没胃口", "胃不舒服", "熬夜后难受"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "小米南瓜粥，温柔地照顾你的胃。",
    reason: "小米养胃健脾，南瓜助消化，颜色金黄暖心，胃不舒服时首选。",
    category: "粥",
    avoid: "别加太多糖。南瓜本身已经很甜了。"
  },

  // ===== 更多常见外卖 =====
  {
    id: 40,
    name: "酸菜鱼",
    shortName: "酸菜鱼",
    priceRange: [22, 38],
    tag: "重口高油",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    taunt: "酸菜和鱼肉的组合，永远不会让人失望。",
    reason: "酸菜开胃，鱼肉嫩滑，高蛋白低脂肪，汤汁鲜辣，下饭无敌。",
    avoid: "别怕刺。酸菜鱼的刺比人生的刺好挑多了。"
  },
  {
    id: 41,
    name: "砂锅冒菜",
    shortName: "砂锅冒菜",
    priceRange: [15, 28],
    tag: "重口高油",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天懒得思考"],
    suitableWallet: ["日常省心"],
    taunt: "冒菜，麻辣烫的精致版，你今天升级了。",
    reason: "砂锅保温，食材多样，汤汁麻辣鲜香，一锅解决主食和菜肴。",
    avoid: "别点太多。冒菜的分量从来不会让你失望。"
  },
  {
    id: 42,
    name: "糖水甜汤",
    shortName: "糖水甜汤",
    priceRange: [10, 20],
    tag: "胃部关怀",
    suitableBodyStatus: ["身体不舒服", "身体正常"],
    suitableMood: ["需要被安慰", "没胃口", "熬夜后难受"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "广东人的精神支柱，一碗糖水定乾坤。",
    reason: "甜蜜润燥，根据选择不同可以补气养血，熬夜后来一碗恢复精气神。",
    avoid: "别当饭喝。糖水是甜品不是主食。"
  },
  {
    id: 43,
    name: "肉夹馍",
    shortName: "肉夹馍",
    priceRange: [8, 15],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    taunt: "饼脆肉香，拿在手里就觉得很踏实。",
    reason: "面饼酥脆，腊汁肉软烂香浓，饱腹感强，陕西人的自豪之一。",
    avoid: "别单点。配碗凉皮才是完整的体验。"
  },
  {
    id: 44,
    name: "凉皮",
    shortName: "凉皮",
    priceRange: [8, 15],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃清淡", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    taunt: "夏天来一碗凉皮，整个人都清爽了。",
    reason: "爽滑弹牙，酸辣开胃，配黄瓜豆芽清爽不腻，天热时尤其满足。",
    category: "粉面",
    avoid: "别在大冬天吃。凉皮的冷是物理攻击。"
  },
  {
    id: 45,
    name: "炸酱面",
    shortName: "炸酱面",
    priceRange: [12, 20],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "北京人的乡愁，外地人的好奇，全体人的满足。",
    reason: "面条劲道，炸酱香浓，配上各种菜码，拌匀一吃，简单踏实的幸福。",
    category: "粉面",
    avoid: "别省酱。但放多了也会齁，自己把握。"
  },
  {
    id: 46,
    name: "板栗烧鸡",
    shortName: "板栗烧鸡",
    priceRange: [20, 32],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["需要被安慰", "今天想吃饱"],
    suitableWallet: ["日常省心"],
    taunt: "板栗的甜+鸡肉的鲜，这是秋天专属的怀抱，但你现在就可以享受。",
    reason: "板栗软糯香甜，鸡肉鲜嫩入味，营养丰富，有一种秋天炖菜的家常幸福感。",
    avoid: "别吃太快。板栗会告诉你什么叫慢慢来。"
  },
  {
    id: 47,
    name: "土豆炖牛肉",
    shortName: "土豆牛肉",
    priceRange: [18, 30],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["需要被安慰", "今天想吃饱", "今天懒得思考"],
    suitableWallet: ["日常省心"],
    taunt: "妈妈总是说土豆牛肉最补钙，事实上是最补心。",
    reason: "土豆绵软，牛肉浓郁，汤汁鲜美，配饭是家常菜里的顶流，治愈感拉满。",
    avoid: "别抢土豆。牛肉才是今天的主角。"
  },
  {
    id: 48,
    name: "酸辣粉",
    shortName: "酸辣粉",
    priceRange: [10, 18],
    tag: "重口高油",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "酸辣粉，排队三小时、吃完三分钟的快乐。",
    reason: "粉条弹滑，汤底酸辣鲜香，配料丰富，强烈的味觉刺激让人欲罢不能。",
    category: "粉面",
    avoid: "吃的时候很爽。后面别来问我。"
  },
  {
    id: 49,
    name: "烤冷面",
    shortName: "烤冷面",
    priceRange: [8, 15],
    tag: "重口高油",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    taunt: "东北的灵魂小食，加鸡蛋加香肠加孜然，人生还有什么遗憾呢？",
    reason: "外脆内嫩，酱汁香甜辣，价格实惠，是夜市小食的经典，随时都能来一份。",
    category: "粉面",
    avoid: "别天天吃。但它确实有让人上瘾的本事。"
  },
  {
    id: 50,
    name: "三鲜饺子",
    shortName: "三鲜饺子",
    priceRange: [12, 22],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃饱", "需要被安慰", "没胃口"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "饺子，中国人流浪在外的精神补给。吃饺子，万事足。",
    reason: "饺子皮软馅鲜，蒸煮皆宜，营养全面，有种北方过节的温暖感。",
    category: "云吞饺子",
    avoid: "别蘸太多醋。饺子本身的味道值得尝一尝。"
  },
  {
    id: 51,
    name: "卤肉饭",
    shortName: "卤肉饭",
    priceRange: [12, 22],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["需要被安慰", "今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "台式卤肉饭，五花肉慢火卤制，这是一种叫做'踏实'的感觉。",
    reason: "卤肉香浓入味，肥瘦搭配，汤汁渗入米饭，一口一个满足感。",
    category: "米饭",
    avoid: "别把卤汁全拌了。留一口白饭感受米香。"
  },
  {
    id: 52,
    name: "素食盖浇饭",
    shortName: "素食盖饭",
    priceRange: [10, 18],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "没胃口"],
    suitableWallet: ["精打细算", "日常省心"],
    taunt: "清清爽爽的一顿，身体会感谢你的。",
    reason: "蔬菜多样，少油少盐，膳食纤维丰富，清肠轻身，偶尔吃素对身体很友好。",
    category: "米饭",
    avoid: "别以为吃素就低卡。盖浇饭的油不会说谎。"
  },
  {
    id: 53,
    name: "海鲜炒饭",
    shortName: "海鲜炒饭",
    priceRange: [18, 30],
    tag: "正常饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天想吃饱", "今天懒得思考"],
    suitableWallet: ["日常省心", "小小犒劳"],
    taunt: "鲜味满满的海鲜炒饭，每一口都有惊喜。",
    reason: "海鲜蛋白质丰富，炒饭粒粒分明，鲜味十足，吃完精力充沛。",
    category: "米饭",
    avoid: "别在不熟的店点。海鲜翻脸比翻书快。"
  },

  // ===== 早餐类 =====
  {
    id: 54,
    name: "茶叶蛋",
    shortName: "茶叶蛋",
    priceRange: [2, 5],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "没胃口", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["breakfast"],
    taunt: "一颗茶叶蛋，朴实但有滋味，像极了认真生活的你。",
    reason: "蛋白补充方便快捷，茶香入味不腻，配碗粥就是完美早餐。",
    avoid: "别小看我。今天的蛋白质KPI靠我完成。"
  },
  {
    id: 55,
    name: "水晶饺",
    shortName: "水晶饺",
    priceRange: [8, 15],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "今天想吃饱", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["breakfast"],
    taunt: "皮薄透亮，一口一个，早晨的精致从这笼水晶饺开始。",
    reason: "馅料清爽不油腻，蒸制做法健康，蛋白质和碳水搭配合理。",
    avoid: "趁热吃。凉了那层皮就不叫水晶了。"
  },
  {
    id: 56,
    name: "豆浆",
    shortName: "豆浆",
    priceRange: [3, 8],
    tag: "胃部关怀",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "没胃口", "胃不舒服", "熬夜后难受"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["breakfast"],
    taunt: "一杯热豆浆，暖手也暖胃，早晨的第一口温柔。",
    reason: "植物蛋白丰富，温和不刺激肠胃，热的喝下去整个人都舒坦了。",
    avoid: "今天早餐有豆浆。已经赢过昨天的你了。"
  },
  {
    id: 57,
    name: "莲蓉包",
    shortName: "莲蓉包",
    priceRange: [3, 8],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃清淡", "今天懒得思考", "需要被安慰"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["breakfast"],
    taunt: "白胖胖的莲蓉包，咬一口甜丝丝的，今天的心情不会太差。",
    reason: "面皮松软，莲蓉细腻微甜，碳水补充快，适合赶时间的早晨。",
    avoid: "甜的别配冷饮。胃会困惑你在干嘛。"
  },
  {
    id: 58,
    name: "南瓜馒头",
    shortName: "南瓜馒头",
    priceRange: [3, 8],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "没胃口", "胃不舒服"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["breakfast"],
    taunt: "南瓜馒头，淡淡的甜，像早晨阳光一样不张扬但很温暖。",
    reason: "南瓜富含膳食纤维和维生素A，馒头好消化，养胃又饱腹。",
    avoid: "别小看馒头。它不花哨但每天都在陪你。"
  },
  {
    id: 59,
    name: "红糖馒头",
    shortName: "红糖馒头",
    priceRange: [3, 8],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "需要被安慰", "熬夜后难受"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["breakfast"],
    taunt: "红糖的甜很克制，刚好够让早晨多一点温度。",
    reason: "红糖暖身补气血，馒头扎实管饱，熬夜加班后的元气早餐。",
    avoid: "趁热撕开吃。冷掉的馒头是对自己的亏待。"
  },
  {
    id: 60,
    name: "紫薯包",
    shortName: "紫薯包",
    priceRange: [3, 8],
    tag: "清淡养胃",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃清淡", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["breakfast"],
    taunt: "紫色的包子，看起来就让人心情好。今天也要像紫薯一样有自己的颜色。",
    reason: "紫薯富含花青素，抗氧化养颜，包子松软，好看又好吃。",
    avoid: "趁热吃。冷了会变硬，不值得。"
  },


  // ===== 晚餐类·沙县系列 =====,

  {
    id: 61,
    name: "沙县系列-一品蒸饺",
    shortName: "一品蒸饺",
    priceRange: [5, 5],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["dinner"],
    taunt: "一屉热气腾腾的蒸饺，蘸点醋，沙县小吃的灵魂就在这一口。",
    reason: "皮薄馅嫩，蒸制不油不腻，蘸醋提鲜，几块钱就能吃得踏实。",
    category: "云吞饺子",
    avoid: "趁热蘸醋。凉了就对不起这一笼热气了。"
  },

  {
    id: 62,
    name: "沙县系列-酸辣面/粉",
    shortName: "酸辣粉",
    priceRange: [6, 6],
    tag: "重口",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["dinner"],
    taunt: "酸辣交织一口下去，整个人都醒过来了，沙县的酸辣粉永远不让人失望。",
    reason: "粉条滑弹，酸辣开胃，花生碎和榨菜增加口感层次，六块钱的快乐。",
    category: "粉面",
    avoid: "吃的时候很爽。后面别来问我。"
  },

  {
    id: 63,
    name: "沙县系列-榨菜肉丝拌面",
    shortName: "肉丝拌面",
    priceRange: [10, 10],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "榨菜脆、肉丝嫩、面条筋道，拌匀了就是一碗踏实的满足。",
    reason: "榨菜提鲜解腻，肉丝增加蛋白质，拌面干香入味，沙县经典干拌系列。",
    category: "粉面",
    avoid: "别放太多醋。榨菜已经够有味道了。"
  },

  {
    id: 64,
    name: "沙县系列-牛腩拌面",
    shortName: "牛腩拌面",
    priceRange: [12, 12],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "牛腩炖得软烂，酱汁裹着面条，沙县的牛腩拌面是隐藏宝藏。",
    reason: "牛腩软嫩入味，酱汁浓郁，拌面吸饱汤汁，一碗下肚心满意足。",
    category: "粉面",
    avoid: "别加辣。牛腩的酱香已经够足了。"
  },

  {
    id: 65,
    name: "沙县系列-酸菜面/粉",
    shortName: "酸菜粉",
    priceRange: [6, 6],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "没胃口"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["dinner"],
    taunt: "酸菜的发酵香气飘出来，简简单单一碗面，却特别开胃。",
    reason: "酸菜提味解腻，汤底清爽，适合没什么胃口但又需要吃点东西的晚上。",
    category: "粉面",
    avoid: "别加醋。酸菜自己就是酸界代表。"
  },

  {
    id: 66,
    name: "沙县系列-青菜面/粉",
    shortName: "青菜面",
    priceRange: [6, 6],
    tag: "面食",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "没胃口", "需要被安慰"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["dinner"],
    taunt: "几根青菜一把面，最简单的搭配往往最舒服，清清淡淡刚好。",
    reason: "青菜清爽脆嫩，面条软糯，汤底清淡不油，是最温柔的晚餐选择。",
    category: "粉面",
    avoid: "别嫌清淡。有些日子就需要一碗安安静静的面。"
  },

  {
    id: 67,
    name: "沙县系列-螺狮粉",
    shortName: "螺狮粉",
    priceRange: [8, 8],
    tag: "重口",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天想吃饱"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "酸笋的独特香气霸道地飘出厨房，爱它的人秒懂，这是今晚的快乐密码。",
    reason: "螺蛳粉的灵魂在酸笋和辣油，粉条滑弹，配料丰富，一碗下肚爽到飞起。",
    category: "粉面",
    avoid: "关好门窗。邻居不一定理解你的快乐。"
  },

  {
    id: 68,
    name: "沙县系列-鲜肉云吞",
    shortName: "鲜肉云吞",
    priceRange: [8, 10],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "需要被安慰", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "薄皮大馅一碗热汤，晚上就该这样安安静静吃一顿。",
    reason: "云吞皮薄馅嫩，汤底清鲜，暖胃不腻，晚餐吃刚好不负担。",
    category: "云吞饺子",
    avoid: "别加辣椒油。云吞的清鲜值得被尊重。"
  },

  {
    id: 69,
    name: "沙县系列-香拌云吞",
    shortName: "香拌云吞",
    priceRange: [10, 10],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "不喝汤的云吞也一样精彩，花生酱一拌，香得让人停不下筷子。",
    reason: "云吞拌上花生酱和葱花，干拌做法更香浓，配一碗清汤刚好。",
    category: "云吞饺子",
    avoid: "别一口气吃完。花生酱的香需要慢慢感受。"
  },

  {
    id: 70,
    name: "沙县系列-热干面",
    shortName: "热干面",
    priceRange: [8, 8],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["dinner"],
    taunt: "芝麻酱裹着面条，拌上萝卜丁葱花，沙县版热干面有自己的江湖地位。",
    reason: "面条劲道，芝麻酱香浓，每一根都裹满酱香，简单直接的美味。",
    category: "粉面",
    avoid: "拌匀再吃。芝麻酱没化开的面是对自己的敷衍。"
  },

  {
    id: 71,
    name: "沙县系列-炸云吞",
    shortName: "炸云吞",
    priceRange: [10, 10],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天想吃饱"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "金黄酥脆的外壳咬开是鲜嫩的肉馅，炸云吞就是今晚的小确幸。",
    reason: "外酥里嫩，蘸上甜辣酱口感升级，比普通云吞多一层酥脆满足感。",
    category: "云吞饺子",
    avoid: "别在意热量。偶尔的油炸是对生活的妥协。"
  },

  {
    id: 72,
    name: "沙县系列-炸酱面",
    shortName: "炸酱面",
    priceRange: [10, 10],
    tag: "重口",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "肉酱浓郁，面条筋道，拌匀之后每一口都是满满的酱香。",
    reason: "炸酱肉末煸炒出香，酱汁浓厚裹面，配上黄瓜丝清爽解腻，完美搭配。",
    category: "粉面",
    avoid: "别放盐。炸酱已经替你考虑过了。"
  },

  {
    id: 73,
    name: "沙县系列-炸酱桂林米粉",
    shortName: "桂林米粉",
    priceRange: [10, 10],
    tag: "重口",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "桂林米粉配炸酱，南北结合的奇妙搭配，意外地好吃。",
    reason: "米粉比面条更滑更弹，裹上炸酱别有风味，口感层次丰富。",
    category: "粉面",
    avoid: "别放盐。炸酱已经帮你把味道定好了。"
  },

  {
    id: 74,
    name: "沙县系列-煎蛋云吞",
    shortName: "煎蛋云吞",
    priceRange: [10, 10],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "云吞汤里卧一个煎蛋，蛋香融入汤中，幸福就是这么简单。",
    reason: "煎蛋的焦香和云吞的鲜嫩搭配，蛋白质加倍，暖胃又营养。",
    category: "云吞饺子",
    avoid: "别急着喝汤。煎蛋的焦香先闻一下。"
  },

  {
    id: 75,
    name: "沙县系列-西红柿鸡蛋面",
    shortName: "鸡蛋面",
    priceRange: [10, 10],
    tag: "面食",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "需要被安慰", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "西红柿的酸甜融化在汤里，鸡蛋花漂着，这一碗是永远不会出错的温柔。",
    reason: "西红柿酸甜开胃，鸡蛋软嫩补充蛋白质，汤面合一，老少皆宜。",
    category: "粉面",
    avoid: "别加辣。番茄的酸甜不需要配角。"
  },

  {
    id: 76,
    name: "沙县系列-榨菜肉丝面/粉",
    shortName: "肉丝面",
    priceRange: [10, 10],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "榨菜的脆配上肉丝的嫩，汤面版本比拌面更暖心。",
    reason: "榨菜提鲜不腻，肉丝增香，汤底清爽，面或粉任选，自由度满分。",
    category: "粉面",
    avoid: "别加酱油。榨菜的咸香已经够了。"
  },

  {
    id: 77,
    name: "沙县系列-螺狮云吞",
    shortName: "螺狮云吞",
    priceRange: [10, 10],
    tag: "重口",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天想吃饱"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "云吞遇见螺蛳汤，鲜上加鲜，重口味云吞爱好者的终极选择。",
    reason: "云吞的鲜嫩加上螺蛳汤的酸辣浓郁，两种经典碰撞出新的满足感。",
    category: "云吞饺子",
    avoid: "关好门窗。云吞和螺蛳的双重快乐邻居不一定懂。"
  },

  {
    id: 78,
    name: "沙县系列-鲜水饺",
    shortName: "鲜水饺",
    priceRange: [10, 10],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃饱", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "水饺的治愈力不用多说，咬开的那一下，像拆开一份给自己的小礼物。",
    reason: "皮薄馅大，蘸醋配蒜，简简单单却有家的味道，北方人的晚餐信仰。",
    category: "云吞饺子",
    avoid: "别蘸太多蘸料。水饺的原味值得试一口。"
  },

  {
    id: 79,
    name: "沙县系列-牛腩粉/面",
    shortName: "牛腩面",
    priceRange: [12, 12],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "牛腩炖得刚刚好，汤头浓郁，这一碗能从胃暖到心。",
    reason: "牛腩软烂入味，汤底鲜浓，面条吸饱汤汁，肉量足吃得过瘾。",
    category: "粉面",
    avoid: "别加辣。牛腩汤的鲜已经足够了。"
  },

  {
    id: 80,
    name: "沙县系列-玉竹水鸭汤",
    shortName: "水鸭汤",
    priceRange: [8, 8],
    tag: "汤类",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "没胃口", "需要被安慰", "熬夜后难受"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["dinner"],
    taunt: "一碗清润的水鸭汤，晚上喝刚刚好，不油不腻很舒服。",
    reason: "玉竹滋阴润燥，水鸭清补不燥，汤清味鲜，晚餐喝汤养胃安神。",
    avoid: "别配冰饮。汤是热的，心也是。"
  },

  {
    id: 81,
    name: "沙县系列-茶树排骨汤",
    shortName: "排骨汤",
    priceRange: [8, 8],
    tag: "汤类",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "需要被安慰", "熬夜后难受"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["dinner"],
    taunt: "茶树菇的清香和排骨的肉香慢慢炖出来，喝一口整个人都松下来了。",
    reason: "茶树菇增强免疫力，排骨补钙养骨，汤清味醇，适合需要补充元气的夜晚。",
    avoid: "别着急喝。烫和香之间有一条线。"
  },

  {
    id: 82,
    name: "沙县系列-虫草乌鸡汤",
    shortName: "乌鸡汤",
    priceRange: [8, 8],
    tag: "汤类",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "需要被安慰", "熬夜后难受", "没胃口"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["dinner"],
    taunt: "乌鸡和虫草花一起炖，汤色金黄，这是沙县给熬夜人的温柔关怀。",
    reason: "乌鸡补气血，虫草花润肺，汤味鲜甜，特别适合加班熬夜后补充元气。",
    avoid: "别嫌贵。乌鸡把自己炖成了汤，值这个价。"
  },

  {
    id: 83,
    name: "沙县系列-莲子猪肚汤",
    shortName: "猪肚汤",
    priceRange: [9, 9],
    tag: "汤类",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "胃不舒服", "没胃口", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "莲子绵软猪肚韧，这碗汤是老广养胃的智慧，喝下去胃都在说谢谢。",
    reason: "莲子健脾安神，猪肚暖胃养胃，汤白味浓，胃不舒服时的首选滋补汤。",
    avoid: "别配冷饮。养胃的东西就别用冰来抵消。"
  },

  {
    id: 84,
    name: "沙县系列-天麻猪脑汤",
    shortName: "猪脑汤",
    priceRange: [9, 9],
    tag: "汤类",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["熬夜后难受", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "天麻猪脑汤，沙县汤品的硬核担当，喝完感觉脑袋都清醒了几分。",
    reason: "天麻有助于缓解头痛头晕，猪脑细腻嫩滑，汤味醇厚，脑力劳动者的补给站。",
    avoid: "别怕。猪脑比你想象的温柔多了。"
  },

  {
    id: 85,
    name: "沙县系列-杜仲猪尾汤",
    shortName: "猪尾汤",
    priceRange: [10, 10],
    tag: "汤类",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["需要被安慰", "熬夜后难受"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "杜仲的淡淡药香融入猪尾的胶质，喝完感觉整个人都被补了一遍。",
    reason: "杜仲强筋骨，猪尾富含胶原蛋白，汤浓滋补，适合腰酸背痛的打工人。",
    avoid: "别嫌弃猪尾。它比鸡脚更有诚意。"
  },

  {
    id: 86,
    name: "沙县系列-花旗参鸽子汤",
    shortName: "鸽子汤",
    priceRange: [10, 10],
    tag: "汤类",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "需要被安慰", "熬夜后难受"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "花旗参的回甘和鸽子的鲜甜融在一起，一碗下去元气满满。",
    reason: "花旗参补气养阴，鸽子肉细嫩高蛋白低脂肪，汤清味甘，温和滋补不燥。",
    avoid: "别一口闷。汤是用来品的，不是用来干的。"
  },

  {
    id: 87,
    name: "沙县系列-猪心面/粉",
    shortName: "猪心面",
    priceRange: [12, 12],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃饱", "需要被安慰", "熬夜后难受"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "猪心片在汤里浮沉，一口面一口汤，这是沙县给晚归人的温暖拥抱。",
    reason: "猪心口感脆嫩，汤底鲜浓，面或粉可选，一碗面把心和胃都照顾到了。",
    category: "粉面",
    avoid: "别配冰啤。热汤面配冰是对胃的不尊重。"
  },

  {
    id: 88,
    name: "沙县系列-排骨面/粉",
    shortName: "排骨面",
    priceRange: [12, 12],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "排骨炖得软烂，汤头浓郁，这一碗能治愈一整天的倦意。",
    reason: "排骨肉质酥软，汤底鲜甜，面条吸饱汤汁，吃面喝汤两不误。",
    category: "粉面",
    avoid: "别急着喝汤。烫到了这碗面就不香了。"
  },

  {
    id: 89,
    name: "沙县系列-乌鸡面/粉",
    shortName: "乌鸡面",
    priceRange: [12, 12],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["需要被安慰", "熬夜后难受", "今天想吃饱"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "乌鸡炖出的汤底鲜甜，一口面一口汤，感觉疲惫都被慢慢化开了。",
    reason: "乌鸡补气血，汤底营养丰富，面和粉自由搭配，滋补而不油腻。",
    category: "粉面",
    avoid: "别浪费汤。乌鸡炖出来的每一口都算数。"
  },

  {
    id: 90,
    name: "沙县系列-猪肚面/粉",
    shortName: "猪肚面",
    priceRange: [13, 13],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["胃不舒服", "需要被安慰", "没胃口"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "猪肚的韧和汤的鲜，沙县的猪肚面是养胃人的深夜食堂首选。",
    reason: "猪肚暖胃养胃，汤底浓郁，面条软糯，胃不舒服时最踏实的安慰。",
    category: "粉面",
    avoid: "别加辣椒。猪肚的温润不需要刺激。"
  },

  {
    id: 91,
    name: "沙县系列-猪脑面/粉",
    shortName: "猪脑面",
    priceRange: [14, 14],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["熬夜后难受", "需要被安慰"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "猪脑入口即化，天麻汤底清而不寡，这是沙县面食里的高手款。",
    reason: "猪脑细腻滑嫩，天麻汤底提神醒脑，深夜加班后的豪华治愈面。",
    category: "粉面",
    avoid: "别怕。闭眼吃第一口，后面就顺了。"
  },

  {
    id: 92,
    name: "沙县系列-鸽子面/粉",
    shortName: "鸽子面",
    priceRange: [14, 14],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["需要被安慰", "熬夜后难受", "今天想吃清淡"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "鸽子肉的鲜甜全炖进了汤里，这一碗面的汤底，值得慢慢喝完。",
    reason: "鸽子肉细嫩低脂高蛋白，汤底清甜不腻，面条吸满汤汁，营养密度极高。",
    category: "粉面",
    avoid: "别急着加醋。鸽子汤的鲜是招牌。"
  },

  {
    id: 93,
    name: "沙县系列-猪心云吞",
    shortName: "猪心云吞",
    priceRange: [13, 13],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃饱", "需要被安慰"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "猪心云吞，把心和胃一起关照了，沙县的走心之作。",
    reason: "猪心脆嫩配云吞的软滑，汤底鲜浓，双重口感双重满足。",
    category: "云吞饺子",
    avoid: "别配冷饮。心和胃都热着才好。"
  },

  {
    id: 94,
    name: "沙县系列-水鸭云吞",
    shortName: "水鸭云吞",
    priceRange: [13, 13],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "需要被安慰", "熬夜后难受"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "水鸭汤的清甜裹着云吞，喝一口汤吃一个云吞，节奏刚刚好。",
    reason: "水鸭清补不燥，云吞鲜嫩，汤清味醇，清润养生不油腻。",
    category: "云吞饺子",
    avoid: "别放辣椒。水鸭的清甜不需要喧宾夺主。"
  },

  {
    id: 95,
    name: "沙县系列-排骨云吞",
    shortName: "排骨云吞",
    priceRange: [13, 13],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "需要被安慰"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "排骨和云吞的鲜味融在汤里，一口面一口云吞，沙县的豪华配置。",
    reason: "排骨酥软，云吞鲜嫩，汤底浓郁，一碗两种口感，满足感翻倍。",
    category: "云吞饺子",
    avoid: "别配冰饮。汤热云吞暖，冰来了就散了。"
  },

  {
    id: 96,
    name: "沙县系列-乌鸡云吞",
    shortName: "乌鸡云吞",
    priceRange: [13, 13],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["需要被安慰", "熬夜后难受", "今天想吃清淡"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "乌鸡炖汤配云吞，滋补和美味同时在线，沙县的养生智慧全在一碗里。",
    reason: "乌鸡补气血，云吞软嫩，汤底鲜甜，熬夜后的最佳滋补组合。",
    category: "云吞饺子",
    avoid: "别急着吃完。乌鸡炖的汤值得慢慢喝。"
  },

  {
    id: 97,
    name: "沙县系列-猪肚云吞",
    shortName: "猪肚云吞",
    priceRange: [14, 14],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["胃不舒服", "需要被安慰", "没胃口"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "猪肚暖胃云吞暖心，胃不舒服的时候这一碗就是最好的药。",
    reason: "猪肚养胃护胃，云吞易消化，汤底浓郁温和，肠胃脆弱时的温柔守护。",
    category: "云吞饺子",
    avoid: "别喝冰的。猪肚花了一整锅汤在养你的胃。"
  },

  {
    id: 98,
    name: "沙县系列-猪脑云吞",
    shortName: "猪脑云吞",
    priceRange: [14, 14],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["熬夜后难受", "需要被安慰"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "猪脑入口即化云吞鲜嫩弹牙，这一碗是沙县献给深夜人的颅内高潮。",
    reason: "猪脑嫩滑配云吞Q弹，天麻汤底提神，口感层次极丰富的高端沙县味。",
    category: "云吞饺子",
    avoid: "别怕。第一口之后你会发现新世界。"
  },

  {
    id: 99,
    name: "沙县系列-鸽子云吞",
    shortName: "鸽子云吞",
    priceRange: [15, 15],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["需要被安慰", "熬夜后难受", "今天想吃清淡"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["dinner"],
    taunt: "鸽子汤配云吞，鲜到眉毛掉下来，这是沙县的隐藏奢华。",
    reason: "鸽子肉细嫩鲜甜，云吞软滑，汤清味醇，高蛋白低脂肪的精致晚餐。",
    category: "云吞饺子",
    avoid: "别加醋。鸽子汤的鲜是天生的。"
  },

  {
    id: 100,
    name: "沙县系列-牛腩云吞",
    shortName: "牛腩云吞",
    priceRange: [15, 15],
    tag: "暖胃",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["dinner"],
    taunt: "牛腩配云吞，沙县把两种最受欢迎的单品合二为一，懂你。",
    reason: "牛腩软烂入味，云吞鲜嫩多汁，一碗双倍快乐，肉食爱好者的天堂。",
    category: "云吞饺子",
    avoid: "别吃太快。牛腩和云吞的双重满足要慢慢来。"
  },

  {
    id: 101,
    name: "沙县系列-酸辣土豆丝饭",
    shortName: "土豆丝饭",
    priceRange: [11, 11],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "土豆丝脆爽酸辣，浇在白饭上，沙县最朴实无华的下饭神器。",
    reason: "土豆丝酸辣开胃，配白饭粒粒分明，素菜也能吃得超满足。",
    category: "米饭",
    avoid: "别加饭。土豆丝已经够下饭了，别撑着自己。"
  },

  {
    id: 102,
    name: "沙县系列-西红柿炒蛋饭",
    shortName: "炒蛋饭",
    priceRange: [13, 13],
    tag: "米饭",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃清淡", "今天懒得思考", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "西红柿炒蛋盖在饭上，红黄相间，这是每个人记忆里最安心的味道。",
    reason: "番茄酸甜鸡蛋嫩滑，拌饭一绝，营养均衡好消化，永远不会吃腻。",
    category: "米饭",
    avoid: "别加酱油。红和黄的颜色已经很完美了。"
  },

  {
    id: 103,
    name: "沙县系列-青椒炒蛋饭",
    shortName: "青椒蛋饭",
    priceRange: [13, 13],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "青椒的微辣和炒蛋的香嫩，简简单单的组合就是最好的下饭菜。",
    reason: "青椒富含维C，鸡蛋优质蛋白，微辣开胃，配饭吃得干干净净。",
    category: "米饭",
    avoid: "别嫌青椒。它今天也很努力了。"
  },

  {
    id: 104,
    name: "沙县系列-苦瓜炒蛋饭",
    shortName: "苦瓜蛋饭",
    priceRange: [13, 13],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃清淡", "没胃口"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "苦瓜虽苦但回甘，配炒蛋刚好中和，吃完感觉身体都清爽了。",
    reason: "苦瓜清热降火，鸡蛋增加口感，先苦后甜，适合躁热的夜晚。",
    category: "米饭",
    avoid: "别怕苦。咽下去之后的回甘才是重点。"
  },

  {
    id: 105,
    name: "沙县系列-青瓜炒蛋（火腿）饭",
    shortName: "青瓜蛋饭",
    priceRange: [13, 13],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "青瓜清爽火腿咸香，和炒蛋一起铺在饭上，清爽不油腻。",
    reason: "青瓜清脆解腻，火腿提鲜，搭配均衡，是炒饭类里最清爽的选择。",
    category: "米饭",
    avoid: "别放辣。青瓜的清爽不需要刺激。"
  },

  {
    id: 106,
    name: "沙县系列-芹菜香干肉丝饭",
    shortName: "芹菜肉丝饭",
    priceRange: [14, 14],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "芹菜的脆和香干的韧，肉丝的嫩交织在一起，这盘盖饭层次丰富。",
    reason: "芹菜降血压，香干植物蛋白，肉丝增香，三样食材配米饭绝了。",
    category: "米饭",
    avoid: "别挑芹菜。它脆是有道理的。"
  },

  {
    id: 107,
    name: "沙县系列-香菇肉丝饭",
    shortName: "香菇肉丝饭",
    priceRange: [14, 14],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "香菇的鲜味融入肉丝里，浇在饭上，一口接一口停不下来。",
    reason: "香菇提鲜，肉丝嫩滑，荤素搭配，一碗饭轻轻松松就光盘。",
    category: "米饭",
    avoid: "别放太多酱油。香菇的鲜不需要重口味。"
  },

  {
    id: 108,
    name: "沙县系列-青椒回锅肉饭",
    shortName: "回锅肉饭",
    priceRange: [15, 15],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天想吃饱"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "回锅肉的豆瓣酱香和青椒的微辣，川味灵魂被沙县完美演绎。",
    reason: "五花肉煸出油脂焦香，青椒提味，豆瓣酱浓郁，下饭程度拉满。",
    category: "米饭",
    avoid: "别在意油。回锅肉的香就是油给的。"
  },

  {
    id: 109,
    name: "沙县系列-青椒炒鸭肉饭",
    shortName: "鸭肉饭",
    priceRange: [15, 15],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天想吃饱"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "鸭肉紧实入味，青椒提鲜，这一盘饭的香味能从厨房飘到巷子口。",
    reason: "鸭肉低脂高蛋白，青椒炒制去腥提香，比猪肉更清爽，比鸡肉更有嚼劲。",
    category: "米饭",
    avoid: "别急着咽。鸭肉有嚼劲是它最后的倔强。"
  },

  {
    id: 110,
    name: "沙县系列-鸡翅饭（青菜+豆干+卤蛋+热狗）",
    shortName: "鸡翅饭",
    priceRange: [13, 13],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "鸡翅配四件套：青菜豆干卤蛋热狗，沙县盖饭的豪华阵容。",
    reason: "鸡翅嫩滑多汁，配菜丰富营养均衡，一份搞定所有需求，性价比之王。",
    category: "米饭",
    avoid: "别只吃鸡翅。豆干卤蛋热狗也在等你的筷子。"
  },

  {
    id: 111,
    name: "沙县系列-鸭腿饭（青菜+豆干+卤蛋+热狗）",
    shortName: "鸭腿饭",
    priceRange: [15, 15],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "一整只鸭腿霸气地躺在饭上，配上四件套，这是今晚的大餐。",
    reason: "鸭腿肉质紧实，卤得入味，配菜齐全，大口吃肉的满足感。",
    category: "米饭",
    avoid: "别只吃鸭腿。青菜豆干也有自己的功劳。"
  },

  {
    id: 112,
    name: "沙县系列-猪心汤饭（青菜+豆干+卤蛋+热狗）",
    shortName: "猪心汤饭",
    priceRange: [13, 13],
    tag: "米饭",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃饱", "需要被安慰", "熬夜后难受"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "猪心汤配饭，沙县把心和胃都照顾到了，暖心暖胃的套餐。",
    reason: "猪心脆嫩，汤底鲜浓配上白饭，四件套加持，吃了感觉血脉通畅。",
    category: "米饭",
    avoid: "别配冰饮。汤饭温热才有灵魂。"
  },

  {
    id: 113,
    name: "沙县系列-乌鸡汤饭（青菜+豆干+卤蛋+热狗）",
    shortName: "乌鸡汤饭",
    priceRange: [14, 14],
    tag: "米饭",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["需要被安慰", "熬夜后难受", "今天想吃饱"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "乌鸡汤配饭，滋补和满足同时在线，沙县的养生套餐。",
    reason: "乌鸡补气血，汤鲜味浓，配白饭和四件套，熬夜补元气的全套方案。",
    category: "米饭",
    avoid: "别急着翻手机。乌鸡需要你专心对待。"
  },

  {
    id: 114,
    name: "沙县系列-排骨汤饭（青菜+豆干+卤蛋+热狗）",
    shortName: "排骨汤饭",
    priceRange: [14, 14],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "需要被安慰"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "排骨炖得酥软，汤饭合一，沙县最经典的汤饭组合。",
    reason: "排骨酥香入味，汤底鲜浓浇在饭上，配四件套，吃完满足到不想动。",
    category: "米饭",
    avoid: "别吹气。等它凉一点的过程也是享受。"
  },

  {
    id: 115,
    name: "沙县系列-猪肚汤饭（青菜+豆干+卤蛋+热狗）",
    shortName: "猪肚汤饭",
    priceRange: [15, 15],
    tag: "米饭",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["胃不舒服", "需要被安慰", "没胃口"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "猪肚汤饭是胃不舒服时的最佳选择，沙县的养胃担当。",
    reason: "猪肚暖胃养胃，汤底浓郁，配白饭和四件套，肠胃脆弱时的全套呵护。",
    category: "米饭",
    avoid: "别配冷饮。猪肚汤的暖是今晚的主题。"
  },

  {
    id: 116,
    name: "沙县系列-鸽子汤饭（青菜+豆干+卤蛋+热狗）",
    shortName: "鸽子汤饭",
    priceRange: [16, 16],
    tag: "米饭",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["需要被安慰", "熬夜后难受", "今天想吃清淡"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["dinner"],
    taunt: "鸽子汤的清甜配上白饭，连汤带饭，这是沙县的隐藏高级款。",
    reason: "鸽子肉鲜甜细嫩，汤清味醇，高蛋白低脂肪，配四件套营养满分。",
    category: "米饭",
    avoid: "别一口干完汤。留一点，饭还没吃完呢。"
  },

  {
    id: 117,
    name: "沙县系列-牛腩饭（青菜+豆干+卤蛋+热狗）",
    shortName: "牛腩饭",
    priceRange: [16, 16],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["dinner"],
    taunt: "牛腩炖得酥烂汤汁浓郁，浇在饭上，这是沙县晚餐里的重头戏。",
    reason: "牛腩软烂入味，酱汁浓郁配白饭绝佳，蛋白质丰富，吃完有力气。",
    category: "米饭",
    avoid: "别矜持。牛腩本身就希望你大口吃。"
  },

  {
    id: 118,
    name: "沙县系列-猪脑汤饭（青菜+豆干+卤蛋+热狗）",
    shortName: "猪脑汤饭",
    priceRange: [16, 16],
    tag: "米饭",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["熬夜后难受", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["dinner"],
    taunt: "猪脑入口即化汤底清鲜，配饭和四件套，沙县最硬核的脑力补给。",
    reason: "猪脑细腻嫩滑，天麻汤底提神，配饭和四件套，深夜加班后的豪华补给。",
    category: "米饭",
    avoid: "别怕。第一口闭眼，后面就香了。"
  },

  {
    id: 119,
    name: "沙县系列-蛋炒粉/面",
    shortName: "蛋炒粉",
    priceRange: [8, 8],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["dinner"],
    taunt: "鸡蛋炒粉/面，灶火气十足，简简单单却香到隔壁桌都馋。",
    reason: "锅气十足，鸡蛋焦香裹着粉/面，油而不腻，八块钱的夜市灵魂。",
    category: "粉面",
    avoid: "别在减肥的时候点。但点了就别后悔。"
  },

  {
    id: 120,
    name: "沙县系列-蛋炒河粉",
    shortName: "蛋炒河粉",
    priceRange: [8, 8],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["dinner"],
    taunt: "河粉在铁锅里翻飞，蛋香四溢，这是沙县炒粉里的经典款。",
    reason: "河粉宽厚软滑，比普通炒粉更有口感，蛋香融入每一片，锅气浓郁。",
    category: "粉面",
    avoid: "别催师傅。锅气需要时间。"
  },

  {
    id: 121,
    name: "沙县系列-酸菜炒饭",
    shortName: "酸菜炒饭",
    priceRange: [9, 9],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃爽", "今天懒得思考", "没胃口"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "酸菜的微酸和炒饭的焦香在一起，开胃程度拉满，一碗不够。",
    reason: "酸菜提味解腻，米饭炒得粒粒分明，微酸开胃，没胃口时也能光盘。",
    category: "米饭",
    avoid: "别加盐。酸菜已经替你放了。"
  },

  {
    id: 122,
    name: "沙县系列-扬州炒饭",
    shortName: "扬州炒饭",
    priceRange: [10, 10],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "粒粒分明的炒饭，鸡蛋虾仁火腿青豆，沙县的扬州炒饭从不让人失望。",
    reason: "配料丰富，米饭炒得干香，蛋花均匀裹着每一粒米，一盘搞定一餐。",
    category: "米饭",
    avoid: "别加酱油。扬州炒饭的白是它的骄傲。"
  },

  {
    id: 123,
    name: "沙县系列-肉丝炒粉/面",
    shortName: "肉丝炒粉",
    priceRange: [10, 10],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "肉丝的焦香和粉/面的软滑，炒在一起就是最朴实的满足。",
    reason: "肉丝增香，粉/面锅气足，炒得干香入味，比汤面更多一层烟火气。",
    category: "粉面",
    avoid: "别嫌油。锅气就是靠油烘出来的。"
  },

  {
    id: 124,
    name: "沙县系列-卤水鸡腿炒粉/面",
    shortName: "鸡腿炒粉",
    priceRange: [11, 11],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["dinner"],
    taunt: "一整只卤水鸡腿卧在炒粉上，霸气十足，沙县的豪华炒粉。",
    reason: "鸡腿卤得入味，炒粉干香，一只整鸡腿的满足感，性价比炸裂。",
    category: "粉面",
    avoid: "别只吃鸡腿。炒粉才是隐藏的主角。"
  },

  {
    id: 125,
    name: "沙县系列-卤水鸭腿炒粉/面",
    shortName: "鸭腿炒粉",
    priceRange: [13, 13],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["日常省心"],
    suitableMealType: ["dinner"],
    taunt: "鸭腿比鸡腿更香更有嚼劲，配炒粉是沙县炒粉界的天花板。",
    reason: "鸭腿卤得紧实入味，肉质更有嚼劲，配炒粉/面，分量足味道正。",
    category: "粉面",
    avoid: "别急着啃。鸭腿和炒粉要交叉着来。"
  },

  {
    id: 126,
    name: "沙县系列-牛腩炒粉/面",
    shortName: "牛腩炒粉",
    priceRange: [15, 15],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["dinner"],
    taunt: "牛腩和炒粉的终极合体，沙县炒粉界的王者，吃一次就忘不了。",
    reason: "牛腩软烂酱香浓郁，炒粉干香入味，二者结合就是沙县最顶级的晚餐。",
    category: "粉面",
    avoid: "别心疼钱。牛腩炒粉是今晚给自己的奖励。"
  },

  // ===== 午餐·老上海系列 =====,

  {
    id: 127,
    name: "老上海系列-蟹籽小馄饨",
    shortName: "蟹籽馄饨",
    priceRange: [15, 25],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽", "今天懒得思考"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["lunch"],
    taunt: "蟹籽在嘴里一颗颗爆开，这是小馄饨界的轻奢款，午餐值得。",
    reason: "蟹籽鲜甜弹牙，馄饨皮薄馅嫩，汤清味鲜，一碗下肚精致又满足。",
    category: "云吞饺子",
    avoid: "蟹籽爆开那一瞬间，值得多花几块钱。"
  },

  {
    id: 128,
    name: "老上海系列-鲜虾小馄饨",
    shortName: "鲜虾馄饨",
    priceRange: [12, 20],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽", "今天懒得思考"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "每只馄饨里都藏着一颗完整的虾仁，咬到的瞬间是午间的小惊喜。",
    reason: "虾仁Q弹鲜甜，馄饨皮滑馅嫩，汤头清爽，蛋白质满满不油腻。",
    category: "云吞饺子",
    avoid: "虾仁弹牙是底线。不弹的不配叫鲜虾。"
  },

  {
    id: 129,
    name: "老上海系列-全家福小馄饨",
    shortName: "全家福馄饨",
    priceRange: [12, 20],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "多种馅料混搭，一口一个口味，像在拆盲盒，全家福就是全都要。",
    reason: "鲜肉、虾仁、荠菜等多馅混搭，口感丰富不单调，一次满足所有好奇心。",
    category: "云吞饺子",
    avoid: "馅料开会，每个口味都来一口，不偏不倚。"
  },

  {
    id: 130,
    name: "老上海系列-香菜小馄饨",
    shortName: "香菜馄饨",
    priceRange: [12, 20],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "今天想吃清淡"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "香菜和鲜肉在薄皮里紧紧相拥，爱香菜的人一口就懂。",
    reason: "香菜提鲜解腻，肉馅清爽不腥，汤清皮薄，香菜党的午间信仰。",
    category: "云吞饺子",
    avoid: "香菜党狂喜，不吃香菜的人请绕道。"
  },

  {
    id: 131,
    name: "老上海系列-金牌芥菜小馄饨",
    shortName: "芥菜馄饨",
    priceRange: [9, 15],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "今天想吃清淡"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["lunch"],
    taunt: "芥菜微微的苦和回甘，让这碗馄饨多了点老上海的味道。",
    reason: "芥菜清热降火，肉馅调味适中，先微苦后回甘，越吃越有滋味。",
    category: "云吞饺子",
    avoid: "芥菜的回甘在咽下去之后才来，别急。"
  },

  {
    id: 132,
    name: "老上海系列-香菇小馄饨",
    shortName: "香菇馄饨",
    priceRange: [9, 15],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "今天想吃清淡"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["lunch"],
    taunt: "香菇的鲜味钻进肉馅里，普普通通的一碗馄饨突然就有了灵魂。",
    reason: "香菇提鲜增香，肉馅紧实多汁，皮薄易消化，简单却有滋味。",
    category: "云吞饺子",
    avoid: "香菇的鲜不会骗人。骗人的是那些假香菇。"
  },

  {
    id: 133,
    name: "老上海系列-韭菜小馄饨",
    shortName: "韭菜馄饨",
    priceRange: [9, 15],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["lunch"],
    taunt: "韭菜的霸道香气裹着肉馅，咬开的瞬间整个办公室都知道你在吃什么。",
    reason: "韭菜提香解腻，肉馅调味鲜香，一碗下肚精神抖擞，性价比极高。",
    category: "云吞饺子",
    avoid: "吃完了别对着同事说话。韭菜会替你回答。"
  },

  {
    id: 134,
    name: "老上海系列-玉米小馄饨",
    shortName: "玉米馄饨",
    priceRange: [9, 15],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "今天想吃清淡"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["lunch"],
    taunt: "玉米粒在馄饨里甜甜的，像给这碗平淡的馄饨加了几颗小太阳。",
    reason: "玉米清甜解腻，肉馅鲜嫩，营养搭配均衡，小朋友口味的大人也爱。",
    category: "云吞饺子",
    avoid: "玉米粒咬开甜甜的，在一堆肉馅里很出挑。"
  },

  {
    id: 135,
    name: "老上海系列-小馄饨面",
    shortName: "馄饨面",
    priceRange: [9, 15],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["lunch"],
    taunt: "馄饨+面，老上海人的经典午餐搭配，一碗解决两个愿望。",
    reason: "馄饨鲜嫩，面条劲道，碳水加蛋白质一碗搞定，简单踏实不花哨。",
    category: "云吞饺子",
    avoid: "馄饨和面同时在线，选择困难症的终极解法。"
  },

  {
    id: 136,
    name: "老上海系列-拌小馄饨",
    shortName: "拌馄饨",
    priceRange: [9, 15],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "今天想吃爽"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["lunch"],
    taunt: "不喝汤的馄饨也有自己的态度，花生酱一拌，香得让人意外。",
    reason: "干拌做法更香浓，花生酱和葱花裹着馄饨，每一颗都入味，与汤馄饨完全不同的满足。",
    category: "云吞饺子",
    avoid: "干拌的馄饨有汤馄饨没有的倔强，试试。"
  },

  {
    id: 137,
    name: "老上海系列-鲜肉小馄饨",
    shortName: "鲜肉馄饨",
    priceRange: [9, 15],
    tag: "饱腹",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "今天想吃清淡"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["lunch"],
    taunt: "最纯粹的鲜肉馅，不加任何花哨，馄饨就该是这样的本味。",
    reason: "鲜肉馅调味精准，皮薄汤清，最朴素的搭配往往最耐吃，老上海早餐摊的味道。",
    category: "云吞饺子",
    avoid: "最朴素的鲜肉馅，馄饨界的原教旨主义。"
  },

  {
    id: 138,
    name: "老上海系列-红烧牛腩饭",
    shortName: "牛腩饭",
    priceRange: [15, 25],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["lunch"],
    taunt: "牛腩炖得软烂入味，浇在饭上，这碗饭能让你下午的工作效率翻倍。",
    reason: "牛腩酥软酱香浓郁，汤汁渗入米饭，蛋白质丰富，午间的硬核能量补给。",
    category: "米饭",
    avoid: "牛腩炖到筷子一戳就散，才算及格。"
  },

  {
    id: 139,
    name: "老上海系列-红烧牛肉饭",
    shortName: "牛肉饭",
    priceRange: [15, 25],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["lunch"],
    taunt: "大块牛肉烧得酥烂，连筋带肉，每一口都是实打实的满足。",
    reason: "牛肉块大入味，红烧酱汁咸甜适中，配白饭绝佳，吃饱了下午不犯困。",
    category: "米饭",
    avoid: "牛肉块得有诚意。太小块的都是敷衍。"
  },

  {
    id: 140,
    name: "老上海系列-牛肉丸汤饭",
    shortName: "牛肉丸汤饭",
    priceRange: [15, 25],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["lunch"],
    taunt: "牛肉丸弹牙爆汁，汤鲜饭香，一口汤一口饭，节奏刚刚好。",
    reason: "牛肉丸紧实弹嫩，汤底鲜浓不腻，配白饭暖心暖胃，冬天午间首选。",
    category: "米饭",
    avoid: "牛肉丸弹不弹，咬第一口就知道这家店行不行。"
  },

  {
    id: 141,
    name: "老上海系列-三鲜汤饭",
    shortName: "三鲜汤饭",
    priceRange: [12, 20],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "三鲜的鲜味融进汤里，浇在饭上粒粒分明，吃完从胃暖到心。",
    reason: "多种鲜料熬汤，汤底鲜甜不腥，配饭温润养胃，适合想吃得舒服的午间。",
    category: "米饭",
    avoid: "三鲜到底哪三鲜？别纠结，好吃就行。"
  },

  {
    id: 142,
    name: "老上海系列-瘦肉汤饭",
    shortName: "瘦肉汤饭",
    priceRange: [12, 20],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "今天想吃清淡"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "瘦肉的鲜甜全煮进了汤里，简简单单一碗汤饭，吃得很踏实。",
    reason: "瘦肉嫩滑不柴，汤底清淡鲜美，配饭好消化，低调但管饱的午餐选择。",
    category: "米饭",
    avoid: "瘦肉不柴是基本功。搞砸了就别去了。"
  },

  {
    id: 143,
    name: "老上海系列-鲜肉丸汤饭",
    shortName: "鲜肉丸汤饭",
    priceRange: [12, 20],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "手工鲜肉丸一颗颗浮在汤里，咬开会爆汁，这才是汤饭的灵魂。",
    reason: "鲜肉丸弹嫩多汁，汤底鲜甜，配白饭暖心暖胃，吃完整个人都精神了。",
    category: "米饭",
    avoid: "肉丸是手工的还是机器的，舌头分得出来。"
  },

  {
    id: 144,
    name: "老上海系列-猪肝瘦肉汤饭",
    shortName: "猪肝瘦肉汤饭",
    priceRange: [12, 20],
    tag: "米饭",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "需要被安慰", "熬夜后难受"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "猪肝嫩滑瘦肉的鲜甜，这碗汤饭是老上海人补元气的秘密武器。",
    reason: "猪肝补铁养血，瘦肉优质蛋白，汤浓饭香，适合熬夜后需要补一补的午间。",
    category: "米饭",
    avoid: "猪肝嫩不嫩，火候说了算。过一秒都不行。"
  },

  {
    id: 145,
    name: "老上海系列-西红柿鸡蛋汤饭",
    shortName: "番茄蛋汤饭",
    priceRange: [12, 20],
    tag: "米饭",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃饱", "今天想吃清淡", "没胃口", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "红黄相间的西红柿鸡蛋铺在饭上，酸酸甜甜，永远不会吃腻的味道。",
    reason: "西红柿炒出汁酸甜开胃，鸡蛋软嫩，拌饭一绝，老少皆宜的午间温柔。",
    category: "米饭",
    avoid: "西红柿要炒出汁才叫到位，不然就是番茄水泡饭。"
  },

  {
    id: 146,
    name: "老上海系列-红烧牛腩粉/面",
    shortName: "牛腩粉面",
    priceRange: [15, 25],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["lunch"],
    taunt: "牛腩酥烂、汤头浓郁，粉或面任选，这一碗是午餐里的硬通货。",
    reason: "牛腩软烂入味，汤底鲜浓，面条吸饱汤汁，粉更滑弹，双重选择自由度高。",
    category: "粉面",
    avoid: "汤底才是灵魂。面可以换，汤不能将就。"
  },

  {
    id: 147,
    name: "老上海系列-红烧牛肉粉/面",
    shortName: "牛肉粉面",
    priceRange: [15, 25],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["lunch"],
    taunt: "大块牛肉炖得酥烂，连汤带面，吃完感觉整个世界都温柔了。",
    reason: "牛肉块大入味，红烧汤底浓郁，面条劲道或粉滑弹，吃饱喝足精神好。",
    category: "粉面",
    avoid: "牛肉的量决定了你今天下午的心情。"
  },

  {
    id: 148,
    name: "老上海系列-牛肉丸烫粉/面",
    shortName: "牛肉丸粉面",
    priceRange: [15, 25],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天想吃爽", "需要被安慰"],
    suitableWallet: ["日常省心", "小小犒劳"],
    suitableMealType: ["lunch"],
    taunt: "牛肉丸弹到能在碗里跳起来，配上滑溜的粉或筋道的面，完美。",
    reason: "牛肉丸Q弹爆汁，汤底鲜浓，粉面任选，一口丸子一口面，节奏满分。",
    category: "粉面",
    avoid: "牛肉丸在汤里浮沉，像在跟你打招呼。"
  },

  {
    id: 149,
    name: "老上海系列-三鲜汤粉/面",
    shortName: "三鲜粉面",
    priceRange: [12, 20],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "三鲜汤头清澈鲜甜，粉滑面劲，一碗下肚整个人都舒坦了。",
    reason: "多种鲜料熬出清甜汤底，粉滑或面劲任选，清淡不腻，午间温补之选。",
    category: "粉面",
    avoid: "汤粉的汤要先喝一口，面的仪式感从汤开始。"
  },

  {
    id: 150,
    name: "老上海系列-瘦肉汤粉/面",
    shortName: "瘦肉粉面",
    priceRange: [12, 20],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "今天想吃清淡"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "瘦肉嫩滑不柴，汤清粉滑，简简单单的一碗却让人很安心。",
    reason: "瘦肉补充优质蛋白，汤底清淡鲜美，面条或粉自由选择，负担最小的午餐。",
    category: "粉面",
    avoid: "瘦肉切得薄不薄，看刀工也看诚意。"
  },

  {
    id: 151,
    name: "老上海系列-鲜肉丸汤粉/面",
    shortName: "鲜肉丸粉面",
    priceRange: [12, 20],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "鲜肉丸一颗颗饱满弹嫩，泡在热汤里，咬开的瞬间鲜汁四溢。",
    reason: "手工鲜肉丸鲜嫩多汁，汤底清鲜，配粉滑面筋，蛋白质和碳水完美搭配。",
    category: "粉面",
    avoid: "肉丸是这碗粉的主角，别让它被汤抢了风头。"
  },

  {
    id: 152,
    name: "老上海系列-猪肝瘦肉汤粉/面",
    shortName: "猪肝瘦肉粉面",
    priceRange: [12, 20],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "需要被安慰", "熬夜后难受"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "猪肝嫩滑瘦肉鲜甜，汤头浓郁，这一碗是老上海人暖身子的心头好。",
    reason: "猪肝补铁补血，瘦肉优质蛋白，汤浓粉滑，熬夜加班后的午间滋补良方。",
    category: "粉面",
    avoid: "猪肝的火候是门玄学，好的店一秒不差。"
  },

  {
    id: 153,
    name: "老上海系列-西红柿鸡蛋汤粉/面",
    shortName: "番茄蛋粉面",
    priceRange: [12, 20],
    tag: "面食",
    suitableBodyStatus: ["身体正常", "身体不舒服"],
    suitableMood: ["今天想吃饱", "今天想吃清淡", "没胃口", "需要被安慰"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "西红柿的酸甜融在汤里，鸡蛋花漂在上面，这一碗永远不会辜负你。",
    reason: "西红柿酸甜开胃，鸡蛋软嫩补充蛋白，汤粉或面任选，暖胃好消化。",
    category: "粉面",
    avoid: "酸甜的汤底配滑溜的粉，吃完胃里很舒服。"
  },

  {
    id: 154,
    name: "老上海系列-肉酱拌粉/面",
    shortName: "肉酱拌面",
    priceRange: [10, 15],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "今天想吃爽"],
    suitableWallet: ["精打细算", "日常省心"],
    suitableMealType: ["lunch"],
    taunt: "肉酱浓郁裹着每一根面，拌匀之后香气直接往鼻子里钻。",
    reason: "肉酱煸炒出香，酱汁浓厚裹面或粉，配点葱花解腻，简单粗暴的好吃。",
    category: "粉面",
    avoid: "拌匀是基本尊重。没拌匀就吃的都是狠人。"
  },

  {
    id: 155,
    name: "老上海系列-葱油拌粉/面",
    shortName: "葱油拌面",
    priceRange: [8, 12],
    tag: "面食",
    suitableBodyStatus: ["身体正常"],
    suitableMood: ["今天想吃饱", "今天懒得思考", "今天想吃清淡"],
    suitableWallet: ["精打细算"],
    suitableMealType: ["lunch"],
    taunt: "葱油的焦香裹着面条，上海人最朴素的午餐，几块钱的精致。",
    reason: "葱油熬出焦香，拌面干香油润，价格实惠到令人感动，最简奢的午餐。",
    category: "粉面",
    avoid: "葱油香是这碗面的全部。闻不到香就别吃了。"
  }
];

// ==================== 想吃分类器 ====================
// 根据菜品 category 字段归类（category 已在数据中显式声明）
function getCravingTags(food) {
  return food.category ? [food.category] : [];
}

// 推荐逻辑：根据用户状态过滤和评分
function getRecommendations(bodyStatus, mood, walletStatus, mealType, excludeIds = [], craving = '') {
  let candidates = FOOD_DATABASE.filter(food => {
    // 排除已推荐过的
    if (excludeIds.includes(food.id)) return false;
    // 餐次匹配：未声明的旧菜品仅兼容午餐；早餐/晚餐需显式声明
    if (mealType === 'breakfast' || mealType === 'dinner') {
      if (!food.suitableMealType || !food.suitableMealType.includes(mealType)) return false;
    } else {
      if (food.suitableMealType && !food.suitableMealType.includes(mealType)) return false;
    }
    // 价格匹配
    const priceOk = isPriceMatch(food.priceRange, walletStatus);
    // 状态匹配
    const statusOk = food.suitableBodyStatus.includes(bodyStatus);
    // 心情/症状匹配（软匹配）
    const moodOk = food.suitableMood.includes(mood);
    return priceOk && statusOk && moodOk;
  });

  // 应用想吃分类过滤：使用 category 字段严格匹配
  if (craving) {
    candidates = candidates.filter(f => f.category === craving);
  }

  // 如果精确匹配结果太少（且未选分类），放宽条件
  if (candidates.length < 3 && !craving) {
    candidates = FOOD_DATABASE.filter(food => {
      if (excludeIds.includes(food.id)) return false;
      if (mealType === 'breakfast' || mealType === 'dinner') {
        if (!food.suitableMealType || !food.suitableMealType.includes(mealType)) return false;
      } else {
        if (food.suitableMealType && !food.suitableMealType.includes(mealType)) return false;
      }
      const priceOk = isPriceMatch(food.priceRange, walletStatus);
      const statusOk = food.suitableBodyStatus.includes(bodyStatus);
      return priceOk && statusOk;
    });
    // 再次应用分类过滤
    if (craving) {
      candidates = candidates.filter(f => f.category === craving);
    }
  }

  // 用户选了想吃分类但没有匹配结果 → 返回 null 让 UI 显示提示
  if (craving && candidates.length === 0) {
    return null;
  }

  // 随机排序后返回第一个
  const shuffled = candidates.sort(() => Math.random() - 0.5);
  if (shuffled[0]) return shuffled[0];

  // 兜底：确保餐次匹配（仅在未选分类时）
  if (craving) return null;
  let fallbackPool = (mealType === 'breakfast' || mealType === 'dinner')
    ? FOOD_DATABASE.filter(f => f.suitableMealType && f.suitableMealType.includes(mealType))
    : FOOD_DATABASE;
  return fallbackPool[Math.floor(Math.random() * fallbackPool.length)];
}

function isPriceMatch(priceRange, walletStatus) {
  const [min, max] = priceRange;
  if (walletStatus === "精打细算") return min <= 15;
  if (walletStatus === "日常省心") return min <= 25 && max >= 10;
  if (walletStatus === "小小犒劳") return max >= 20;
  return true;
}

// 检查某个想吃分类在指定餐次下是否有可用菜品
function hasCravingMatch(craving, mealType) {
  return FOOD_DATABASE.some(f => {
    if (f.category !== craving) return false;
    if (mealType === 'breakfast' || mealType === 'dinner') {
      return f.suitableMealType && f.suitableMealType.includes(mealType);
    } else {
      return !f.suitableMealType || f.suitableMealType.includes(mealType);
    }
  });
}

// ==================== 早餐数据库 ====================
// 主食库
const BREAKFAST_MAINS = [
  { id: 'bm_01', name: '水晶饺', emoji: '🥟', desc: '趁热吃。凉了那层皮就不叫水晶了。', priceRange: [5, 10] },
  { id: 'bm_02', name: '煎饺', emoji: '🥟', desc: '底是焦的，心是软的。比你坚强。', priceRange: [5, 10] },
  { id: 'bm_03', name: '莲蓉包', emoji: '🫘', desc: '甜甜的，软软的。咬之前吹一吹，烫。', priceRange: [3, 6] },
  { id: 'bm_04', name: '南瓜馒头', emoji: '🎃', desc: '南瓜在哪？你慢慢嚼，它就会出来。', priceRange: [3, 6] },
  { id: 'bm_05', name: '红糖馒头', emoji: '🍬', desc: '比白馒头贵五毛。但今天值得。', priceRange: [3, 6] },
  { id: 'bm_06', name: '紫薯包', emoji: '🫐', desc: '紫薯馅。说不上多健康，但就是好吃。', priceRange: [3, 6] },
  { id: 'bm_07', name: '奥尔良肉包', emoji: '🥩', desc: '你没去过奥尔良。但你吃过这个包子。', priceRange: [3, 7] },
];

// 配菜库
const BREAKFAST_SIDES = [
  { id: 'bs_01', name: '茶叶蛋', emoji: '🥚', desc: '别小看我。今天的蛋白质KPI靠我完成。', priceRange: [2, 3] },
];

// 饮品库
const BREAKFAST_DRINKS = [
  { id: 'bd_01', name: '豆浆', emoji: '🥛', desc: '今天早餐有豆浆。已经赢过昨天的你了。', priceRange: [3, 5] },
];

/**
 * 随机获取一组早餐搭配
 * 三种组合模式随机：主食+饮品 | 主食+配菜 | 主食+配菜+饮品
 * @param {string[]} excludeMainIds  上一次排除的主食 id
 * @returns {{ main: object, side: object|null, drink: object|null }}
 */
function getBreakfastCombo(excludeMainIds) {
  excludeMainIds = excludeMainIds || [];
  // 优先从未出现的主食中随机，如果全被排除了则全量随机
  let mainPool = BREAKFAST_MAINS.filter(m => !excludeMainIds.includes(m.id));
  if (mainPool.length === 0) mainPool = BREAKFAST_MAINS;
  const main = mainPool[Math.floor(Math.random() * mainPool.length)];

  // 随机选择组合模式：0=主食+饮品, 1=主食+配菜, 2=主食+配菜+饮品
  const pattern = Math.floor(Math.random() * 3);

  let side = null;
  let drink = null;

  if (pattern === 0) {
    // 主食 + 饮品
    drink = BREAKFAST_DRINKS[Math.floor(Math.random() * BREAKFAST_DRINKS.length)];
  } else if (pattern === 1) {
    // 主食 + 配菜
    side = BREAKFAST_SIDES[Math.floor(Math.random() * BREAKFAST_SIDES.length)];
  } else {
    // 主食 + 配菜 + 饮品
    side = BREAKFAST_SIDES[Math.floor(Math.random() * BREAKFAST_SIDES.length)];
    drink = BREAKFAST_DRINKS[Math.floor(Math.random() * BREAKFAST_DRINKS.length)];
  }

  return { main, side, drink };
}

// 导出
if (typeof module !== 'undefined') {
  module.exports = { FOOD_DATABASE, BREAKFAST_MAINS, BREAKFAST_SIDES, BREAKFAST_DRINKS, TAUNT_POOL, CONFIRM_POOL, getTaunt, getConfirm, getRecommendations, isPriceMatch, getCravingTags, hasCravingMatch, getBreakfastCombo };
}

