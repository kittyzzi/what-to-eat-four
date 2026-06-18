// 《今天到底吃什么》主应用逻辑

// ==================== 全局状态 ====================
const AppState = {
  step: 1,         // 当前步骤 1-5 | 'candidates' | 'breakfast'
  mealType: '',    // 餐次: breakfast | lunch | dinner
  bodyStatus: '',  // 身体状态
  mood: '',        // 心情/症状
  wallet: '',      // 钱包状态
  craving: '',         // 想吃标签（可选）: 粉面|米饭|云吞饺子|粥|汉堡|烧烤
  cravingExpanded: false, // 第三张卡片是否展开
  cravingCandidates: [],  // "今天有点想吃"模式下的候选菜品
  cameFromCraving: false, // 当前推荐是否来自"今天有点想吃"快捷通道
  currentFood: null,  // 当前推荐食物
  rejectedIds: [],    // 本次已拒绝的推荐ID
  view: 'home',       // home | calendar | diagnosis
  // 早餐专用
  breakfastCombo: null,       // { main, side?, drink? }  三种随机组合
  breakfastRejectedMainIds: [], // 早餐已拒绝的主食 id
  // 午餐简化流程专用
  lunchCandidates: [],        // 当前4个午餐候选
  lunchRejectedIds: [],       // 本次午餐已拒绝的ID
  lunchCategoryFilter: '',    // 午餐分类筛选条件（空=不想思考）
  cameFromLunchCandidate: false, // 是否来自午餐候选流程
  // 晚餐简化流程专用
  dinnerCandidates: [],       // 当前4个晚餐候选
  dinnerRejectedIds: [],      // 本次晚餐已拒绝的ID
  dinnerCategoryFilter: '',   // 晚餐分类筛选条件（空=今晚吃这个）
  cameFromDinnerCandidate: false, // 是否来自晚餐候选流程
};

// ==================== localStorage操作 ====================
const STORAGE_KEY = 'lunch_records_v1';

function getAllRecords() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  } catch { return {}; }
}

function getRecordKey(dateStr, mealType) {
  if (mealType === 'lunch') return dateStr;
  return `${dateStr}_${mealType}`;
}

function saveRecord(record) {
  const all = getAllRecords();
  all[getRecordKey(record.date, record.mealType)] = record;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

function getRecordByDate(dateStr, mealType) {
  const all = getAllRecords();
  const key = getRecordKey(dateStr, mealType || 'lunch');
  return all[key] || null;
}

function getTodayRecords(dateStr) {
  const all = getAllRecords();
  const meals = ['breakfast', 'lunch', 'dinner'];
  return meals
    .map(m => all[getRecordKey(dateStr, m)])
    .filter(Boolean);
}

function getTodayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function getMonthStr(date) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}`;
}

// ==================== UI渲染 ====================
function render() {
  if (AppState.view === 'home') {
    renderHome();
  } else if (AppState.view === 'calendar') {
    renderCalendar();
  } else if (AppState.view === 'diagnosis') {
    renderDiagnosis();
  }
}

function renderHome() {
  document.getElementById('page-home').style.display = 'block';
  document.getElementById('page-calendar').style.display = 'none';
  document.getElementById('page-diagnosis').style.display = 'none';
  renderStep();
}

function renderCalendarPage() {
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-calendar').style.display = 'block';
  document.getElementById('page-diagnosis').style.display = 'none';
  renderCalendar();
}

function renderDiagnosisPage() {
  document.getElementById('page-home').style.display = 'none';
  document.getElementById('page-calendar').style.display = 'none';
  document.getElementById('page-diagnosis').style.display = 'block';
  renderDiagnosis();
}

// ==================== 步骤渲染 ====================
function renderStep() {
  const container = document.getElementById('step-container');
  container.innerHTML = '';

  if (AppState.step === 1) renderStep1(container);
  else if (AppState.step === 2) renderStep2(container);
  else if (AppState.step === 3) renderStep3(container);
  else if (AppState.step === 4) renderStep4(container);
  else if (AppState.step === 5) renderStep5(container);
  else if (AppState.step === 'candidates') renderCandidatesPage(container);
  else if (AppState.step === 'breakfast') renderBreakfastPage(container);
  else if (AppState.step === 'lunch_entry') renderLunchEntry(container);
  else if (AppState.step === 'lunch_category') renderLunchCategory(container);
  else if (AppState.step === 'lunch_candidates') renderLunchCandidates(container);
  else if (AppState.step === 'dinner_entry') renderDinnerEntry(container);
  else if (AppState.step === 'dinner_category') renderDinnerCategory(container);
  else if (AppState.step === 'dinner_candidates') renderDinnerCandidates(container);
}

function renderStep1(container) {
  container.innerHTML = `
    <div class="home-hero">
      <div class="home-hero-title">今天想解决哪一顿？</div>
      <div class="home-hero-sub">先选一餐，剩下的交给我</div>
    </div>
    <div class="choice-grid cols-1">
      <button class="choice-btn big" onclick="selectMealType('breakfast')">
        <div class="choice-text">
          <div class="choice-main">🍳 早餐</div>
          <div class="choice-sub">新的一天，从好好吃早餐开始。</div>
        </div>
      </button>
      <button class="choice-btn big" onclick="selectMealType('lunch')">
        <div class="choice-text">
          <div class="choice-main">🍱 午餐</div>
          <div class="choice-sub">忙了一上午，午饭不能再凑合。</div>
        </div>
      </button>
      <button class="choice-btn big" onclick="selectMealType('dinner')">
        <div class="choice-text">
          <div class="choice-main">🍲 晚餐</div>
          <div class="choice-sub">一天结束前，用一顿好饭犒劳自己。</div>
        </div>
      </button>
    </div>
    <div class="today-hint" id="today-hint"></div>
    <div class="home-footer-text">别的事情可以等等，先把胃安顿好。</div>
  `;

  // 检查今日各餐次是否已记录
  const today = getTodayStr();
  const meals = [
    { type: 'breakfast', label: '早餐', emoji: '🍳' },
    { type: 'lunch', label: '午餐', emoji: '🍱' },
    { type: 'dinner', label: '晚餐', emoji: '🍲' },
  ];
  const recorded = meals.filter(m => getRecordByDate(today, m.type));
  if (recorded.length > 0) {
    document.getElementById('today-hint').innerHTML = `
      <div class="already-recorded">
        ✅ 今天已记录：${recorded.map(r => `${r.emoji} ${r.label}`).join('、')}
        <button class="link-btn" onclick="switchView('calendar')">查看日历</button>
      </div>
    `;
  }
}

function selectMealType(type) {
  AppState.mealType = type;
  if (type === 'breakfast') {
    // 早餐直通：不经过状态选择，直接生成搭配
    AppState.breakfastRejectedMainIds = [];
    AppState.breakfastCombo = getBreakfastCombo([]);
    AppState.step = 'breakfast';
  } else if (type === 'lunch') {
    // 午餐简化：双入口模式
    AppState.lunchRejectedIds = [];
    AppState.lunchCategoryFilter = '';
    AppState.step = 'lunch_entry';
  } else if (type === 'dinner') {
    // 晚餐简化：双入口模式
    AppState.dinnerRejectedIds = [];
    AppState.dinnerCategoryFilter = '';
    AppState.step = 'dinner_entry';
  } else {
    AppState.step = 2;
  }
  renderStep();
}

// === "今天有点想吃"候选结果页 ===
function renderCandidatesPage(container) {
  const candidates = AppState.cravingCandidates;
  const emojiMap = { '粉面':'🍜','米饭':'🍚','云吞饺子':'🥟','粥':'🥣','汉堡':'🍔','烧烤':'🍢' };
  const cravingEmoji = emojiMap[AppState.craving] || '';
  const title = `${cravingEmoji} ${AppState.craving}组，今天轮到谁上场了？`;

  if (!candidates || candidates.length === 0) {
    container.innerHTML = `
      <div class="candidates-page">
        <h2 class="candidates-page-title">${title}</h2>
        <div class="candidates-empty">这个分类暂时还没有菜，换个方向试试。</div>
        <button class="back-btn" onclick="goBackFromCandidates()">← 返回</button>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="candidates-page">
      <h2 class="candidates-page-title">${title}</h2>
      <div class="candidates-cards">
        ${candidates.map(f => `
          <div class="candidate-card-new" onclick="selectCandidateFromCraving(${f.id})">
            <div class="candidate-card-body">
              <div class="candidate-card-name">${f.name}</div>
              <div class="candidate-card-desc">${getCardRecommendation(f)}</div>
              <div class="candidate-card-meta">
                <span class="candidate-card-price">💰 约${f.priceRange[0]}-${f.priceRange[1]}元</span>
                <span class="candidate-card-tag">${f.tag}</span>
              </div>
            </div>
            <button class="candidate-card-btn" onclick="event.stopPropagation(); selectCandidateFromCraving(${f.id})">选这个</button>
          </div>
        `).join('')}
      </div>
      <div class="candidates-page-actions">
        <button class="btn-reshuffle" onclick="reshuffleCandidates()">🎲 再来一桌</button>
        <button class="back-btn" onclick="goBackFromCandidates()">← 返回</button>
      </div>
    </div>
  `;
}

function getCardRecommendation(food) {
  const map = {
    '清淡养胃': '温和不刺激，慢慢吃，胃会感谢你。',
    '正常饱腹': '扎实管饱，简简单单就很满足。',
    '重口高油': '够味才过瘾，解馋就是今天的目标。',
    '暴击放纵': '不纠结了，开心最重要！',
  };
  return map[food.tag] || '今天就来这一口吧。';
}

function goBackFromCandidates() {
  AppState.step = 2;
  // 保留 craving 状态以便回到 step2 后可见已选
  renderStep();
}

// ==================== 早餐推荐页 ====================
function renderBreakfastPage(container) {
  const combo = AppState.breakfastCombo;
  if (!combo) {
    container.innerHTML = `<div class="error-msg">获取早餐推荐失败，请重试</div>`;
    return;
  }
  const { main, side, drink } = combo;

  // 计算总价
  let minPrice = main.priceRange[0];
  let maxPrice = main.priceRange[1];
  if (side && side.priceRange) { minPrice += side.priceRange[0]; maxPrice += side.priceRange[1]; }
  if (drink && drink.priceRange) { minPrice += drink.priceRange[0]; maxPrice += drink.priceRange[1]; }

  // 构建套餐内容，每个单品右侧增加"只选这个"按钮
  let itemsHtml = `
    <div class="breakfast-set-item">
      <span class="breakfast-set-emoji">${main.emoji}</span>
      <div class="breakfast-set-body">
        <div class="breakfast-set-name">${main.name}</div>
        <div class="breakfast-set-desc">${main.desc}</div>
      </div>
      <button class="breakfast-pick-btn" onclick="confirmSingleBreakfast('main')">只选这个</button>
    </div>`;

  if (side) {
    itemsHtml += `
    <div class="breakfast-set-item">
      <span class="breakfast-set-emoji">${side.emoji}</span>
      <div class="breakfast-set-body">
        <div class="breakfast-set-name">${side.name}</div>
        <div class="breakfast-set-desc">${side.desc}</div>
      </div>
      <button class="breakfast-pick-btn" onclick="confirmSingleBreakfast('side')">只选这个</button>
    </div>`;
  }

  if (drink) {
    itemsHtml += `
    <div class="breakfast-set-item">
      <span class="breakfast-set-emoji">${drink.emoji}</span>
      <div class="breakfast-set-body">
        <div class="breakfast-set-name">${drink.name}</div>
        <div class="breakfast-set-desc">${drink.desc}</div>
      </div>
      <button class="breakfast-pick-btn" onclick="confirmSingleBreakfast('drink')">只选这个</button>
    </div>`;
  }

  container.innerHTML = `
    <div class="breakfast-page">
      <div class="breakfast-page-title">☀️ 今天早餐吃这个</div>
      <div class="breakfast-page-subtitle">别纠结了，帮你安排好了。</div>

      <div class="breakfast-set-card">
        ${itemsHtml}
        <div class="breakfast-set-price">💰 约 ${minPrice}-${maxPrice} 元</div>
      </div>

      <div class="breakfast-actions">
        <button class="btn-ok" onclick="confirmBreakfast()">✅ OK，就这个套餐</button>
        <button class="btn-retry" onclick="retryBreakfast()">🔄 换一个套餐</button>
      </div>
      <button class="back-btn" onclick="goBackFromBreakfast()">← 返回</button>
    </div>
  `;
}

function retryBreakfast() {
  if (AppState.breakfastCombo && AppState.breakfastCombo.main) {
    AppState.breakfastRejectedMainIds.push(AppState.breakfastCombo.main.id);
  }
  AppState.breakfastCombo = getBreakfastCombo(AppState.breakfastRejectedMainIds);
  const container = document.getElementById('step-container');
  renderBreakfastPage(container);
  // 滑入动画
  const card = container.querySelector('.breakfast-set-card');
  if (card) {
    card.classList.remove('slide-in');
    void card.offsetWidth;
    card.classList.add('slide-in');
  }
}

/**
 * 只选择套餐中的某一个单品作为早餐
 * @param {'main'|'side'|'drink'} itemKey
 */
function confirmSingleBreakfast(itemKey) {
  const combo = AppState.breakfastCombo;
  if (!combo || !combo[itemKey]) return;

  const item = combo[itemKey];
  const price = item.priceRange || [0, 0];

  const record = {
    date: getTodayStr(),
    mealType: 'breakfast',
    meal: '早餐',
    foodName: item.name,
    foodId: item.id,
    bodyStatus: '身体正常',
    mood: '早餐快速决策',
    wallet: '日常省心',
    tag: '正常饱腹',
    taunt: getTaunt(),
    reason: item.desc,
    avoid: item.desc,
    priceRange: [price[0], price[1]],
    recordedAt: new Date().toISOString(),
  };
  saveRecord(record);
  showConfirmToast(getConfirm());
  setTimeout(() => {
    AppState.step = 1;
    AppState.mealType = '';
    AppState.breakfastCombo = null;
    AppState.breakfastRejectedMainIds = [];
    renderStep();
  }, 1800);
}

function confirmBreakfast() {
  const combo = AppState.breakfastCombo;
  if (!combo) return;

  // 构建食物名称：主食 + 可选配菜 + 可选饮品
  const parts = [combo.main.name];
  if (combo.side) parts.push(combo.side.name);
  if (combo.drink) parts.push(combo.drink.name);

  // 计算总价范围
  let minPrice = combo.main.priceRange[0];
  let maxPrice = combo.main.priceRange[1];
  if (combo.side && combo.side.priceRange) {
    minPrice += combo.side.priceRange[0];
    maxPrice += combo.side.priceRange[1];
  }
  if (combo.drink && combo.drink.priceRange) {
    minPrice += combo.drink.priceRange[0];
    maxPrice += combo.drink.priceRange[1];
  }

  // 组合描述
  const descParts = [combo.main.desc];
  if (combo.side) descParts.push(combo.side.desc);
  if (combo.drink) descParts.push(combo.drink.desc);

  const record = {
    date: getTodayStr(),
    mealType: 'breakfast',
    meal: '早餐',
    foodName: parts.join(' + '),
    foodId: combo.main.id,
    bodyStatus: '身体正常',
    mood: '早餐快速决策',
    wallet: '日常省心',
    tag: '正常饱腹',
    taunt: getTaunt(),
    reason: combo.main.desc,
    avoid: descParts.join(' '),
    priceRange: [minPrice, maxPrice],
    recordedAt: new Date().toISOString(),
  };
  saveRecord(record);
  showConfirmToast(getConfirm());
  setTimeout(() => {
    AppState.step = 1;
    AppState.mealType = '';
    AppState.breakfastCombo = null;
    AppState.breakfastRejectedMainIds = [];
    renderStep();
  }, 1800);
}

function goBackFromBreakfast() {
  AppState.step = 1;
  AppState.mealType = '';
  AppState.breakfastCombo = null;
  AppState.breakfastRejectedMainIds = [];
  renderStep();
}

// ==================== 午餐简化流程 ====================

// 午餐入口：双选择
function renderLunchEntry(container) {
  container.innerHTML = `
    <div class="lunch-entry-page">
      <div class="lunch-entry-title">🍱 午餐时间</div>
      <div class="lunch-entry-sub">今天想怎么选？</div>

      <div class="lunch-entry-grid">
        <button class="lunch-entry-card no-think" onclick="selectLunchMode('no_think')">
          <div class="lunch-entry-emoji">😩</div>
          <div class="lunch-entry-card-title">不想思考</div>
          <div class="lunch-entry-card-sub">别问了，直接给我几个能吃的。</div>
        </button>
        <button class="lunch-entry-card with-idea" onclick="selectLunchMode('with_idea')">
          <div class="lunch-entry-emoji">😋</div>
          <div class="lunch-entry-card-title">有点想法</div>
          <div class="lunch-entry-card-sub">我大概知道想吃什么。</div>
        </button>
      </div>

      <button class="back-btn" onclick="goBack()">← 返回</button>
    </div>
  `;
}

function selectLunchMode(mode) {
  AppState.lunchRejectedIds = [];
  AppState.lunchCategoryFilter = '';

  if (mode === 'no_think') {
    // 不想思考：直接随机4个午餐候选
    AppState.lunchCandidates = getLunchCandidates(4, AppState.lunchRejectedIds, '');
    AppState.step = 'lunch_candidates';
  } else {
    // 有点想法：先选分类
    AppState.step = 'lunch_category';
  }
  renderStep();
}

// 午餐分类选择页
function renderLunchCategory(container) {
  const tags = [
    { key: '粉面', emoji: '🍜' },
    { key: '米饭', emoji: '🍚' },
    { key: '云吞饺子', emoji: '🥟' },
    { key: '粥', emoji: '🥣' },
    { key: '汉堡', emoji: '🍔' },
    { key: '烧烤', emoji: '🍢' },
    { key: '清淡', emoji: '🥗' },
    { key: '热乎', emoji: '🍲' },
    { key: '辣的', emoji: '🌶️' },
  ];

  // 统计各分类的午餐菜品数量
  const tagCounts = {};
  const pool = getLunchPool();
  tags.forEach(t => {
    const count = pool.filter(f => matchLunchCategory(f, t.key)).length;
    tagCounts[t.key] = count;
  });

  container.innerHTML = `
    <div class="lunch-category-page">
      <div class="lunch-category-title">😋 想吃哪一类？</div>
      <div class="lunch-category-sub">选一个方向，我来帮你缩小范围。</div>

      <div class="lunch-category-grid">
        ${tags.map(t => `
          <button class="lunch-category-tag ${tagCounts[t.key] === 0 ? 'disabled' : ''}"
                  ${tagCounts[t.key] === 0 ? 'disabled' : `onclick="selectLunchCategoryTag('${t.key}')"`}>
            <span class="lunch-category-emoji">${t.emoji}</span>
            <span class="lunch-category-name">${t.key}</span>
            <span class="lunch-category-count">${tagCounts[t.key]}</span>
          </button>
        `).join('')}
      </div>

      <button class="back-btn" onclick="goBack()">← 返回</button>
    </div>
  `;
}

function selectLunchCategoryTag(cat) {
  AppState.lunchCategoryFilter = cat;
  AppState.lunchRejectedIds = [];
  AppState.lunchCandidates = getLunchCandidates(4, AppState.lunchRejectedIds, cat);
  AppState.step = 'lunch_candidates';
  renderStep();
}

// 午餐候选结果页：4个卡片
function renderLunchCandidates(container) {
  const candidates = AppState.lunchCandidates;

  if (!candidates || candidates.length === 0) {
    container.innerHTML = `
      <div class="lunch-candidates-page">
        <div class="lunch-candidates-title">😅 这个分类暂时没有合适的菜</div>
        <div class="lunch-candidates-sub">换个方向试试～</div>
        <button class="back-btn" onclick="goBack()">← 返回</button>
      </div>
    `;
    return;
  }

  const title = AppState.lunchCategoryFilter
    ? `为你挑了4个${AppState.lunchCategoryFilter}`
    : '为你挑了4个，随便选';

  container.innerHTML = `
    <div class="lunch-candidates-page">
      <div class="lunch-candidates-title">${title}</div>
      <div class="lunch-candidates-sub">点进去看看，不喜欢还能换</div>

      <div class="lunch-candidates-grid">
        ${candidates.map(f => {
          // 提取系列名：取 name 中 "-" 前面的部分，没有则用 shortName
          const seriesName = f.name.includes('-') ? f.name.split('-')[0] : '';
          const dishName = f.name.includes('-') ? f.name.split('-').slice(1).join('-') : f.name;
          return `
          <div class="lunch-candidate-card" onclick="selectLunchCandidate(${f.id})">
            ${seriesName ? `<div class="lunch-candidate-series">${seriesName}</div>` : ''}
            <div class="lunch-candidate-name">${dishName}</div>
            <div class="lunch-candidate-price">💰 约 ${f.priceRange[0]}-${f.priceRange[1]} 元</div>
          </div>
        `}).join('')}
      </div>

      <div class="lunch-candidates-actions">
        <button class="btn-reshuffle" onclick="reshuffleLunchCandidates()">🎲 换一批</button>
        <button class="back-btn" onclick="goBack()">← 返回</button>
      </div>
    </div>
  `;
}

function selectLunchCandidate(foodId) {
  const food = AppState.lunchCandidates.find(f => f.id === foodId);
  if (!food) return;

  AppState.currentFood = food;
  AppState.cameFromLunchCandidate = true;
  // 设置默认值以保证详情页正常渲染
  AppState.bodyStatus = '身体正常';
  AppState.mood = '今天想吃饱';
  AppState.wallet = '日常省心';
  AppState.rejectedIds = [];
  AppState.step = 5;
  renderStep();
}

function reshuffleLunchCandidates() {
  AppState.lunchCandidates = getLunchCandidates(4, AppState.lunchRejectedIds, AppState.lunchCategoryFilter);
  renderStep();
  // 滑入动画
  const grid = document.querySelector('.lunch-candidates-grid');
  if (grid) {
    grid.classList.remove('slide-in');
    void grid.offsetWidth;
    grid.classList.add('slide-in');
  }
}

// ==================== 晚餐简化流程 ====================

// 晚餐入口：双选择
function renderDinnerEntry(container) {
  container.innerHTML = `
    <div class="dinner-entry-page">
      <div class="dinner-entry-title">🍲 晚餐时间</div>
      <div class="dinner-entry-sub">累了一天，少做点决定吧。</div>

      <div class="dinner-entry-grid">
        <button class="dinner-entry-card no-think" onclick="selectDinnerMode('no_think')">
          <div class="dinner-entry-emoji">🌙</div>
          <div class="dinner-entry-card-title">今晚吃这个</div>
          <div class="dinner-entry-card-sub">不用想，直接给你几个今晚能吃的。</div>
        </button>
        <button class="dinner-entry-card with-idea" onclick="selectDinnerMode('with_idea')">
          <div class="dinner-entry-emoji">🤤</div>
          <div class="dinner-entry-card-title">我有点想法</div>
          <div class="dinner-entry-card-sub">我大概知道想吃什么。</div>
        </button>
      </div>

      <button class="back-btn" onclick="goBack()">← 返回</button>
    </div>
  `;
}

function selectDinnerMode(mode) {
  AppState.dinnerRejectedIds = [];
  AppState.dinnerCategoryFilter = '';

  if (mode === 'no_think') {
    // 今晚吃这个：直接随机4个晚餐候选
    AppState.dinnerCandidates = getDinnerCandidates(4, AppState.dinnerRejectedIds, '');
    AppState.step = 'dinner_candidates';
  } else {
    // 我有点想法：先选分类
    AppState.step = 'dinner_category';
  }
  renderStep();
}

// 晚餐分类选择页
function renderDinnerCategory(container) {
  const tags = [
    { key: '粉面', emoji: '🍜' },
    { key: '米饭', emoji: '🍚' },
    { key: '云吞饺子', emoji: '🥟' },
    { key: '烧烤', emoji: '🔥' },
    { key: '重口味', emoji: '🌶️' },
    { key: '热汤', emoji: '🥣' },
  ];

  // 统计各分类的晚餐菜品数量
  const tagCounts = {};
  const pool = getDinnerPool();
  tags.forEach(t => {
    const count = pool.filter(f => matchDinnerCategory(f, t.key)).length;
    tagCounts[t.key] = count;
  });

  container.innerHTML = `
    <div class="dinner-category-page">
      <div class="dinner-category-title">🤤 想吃哪一类？</div>
      <div class="dinner-category-sub">选一个方向，我来帮你缩小范围。</div>

      <div class="dinner-category-grid">
        ${tags.map(t => `
          <button class="dinner-category-tag ${tagCounts[t.key] === 0 ? 'disabled' : ''}"
                  ${tagCounts[t.key] === 0 ? 'disabled' : `onclick="selectDinnerCategoryTag('${t.key}')"`}>
            <span class="dinner-category-emoji">${t.emoji}</span>
            <span class="dinner-category-name">${t.key}</span>
            <span class="dinner-category-count">${tagCounts[t.key]}</span>
          </button>
        `).join('')}
      </div>

      <button class="back-btn" onclick="goBack()">← 返回</button>
    </div>
  `;
}

function selectDinnerCategoryTag(cat) {
  AppState.dinnerCategoryFilter = cat;
  AppState.dinnerRejectedIds = [];
  AppState.dinnerCandidates = getDinnerCandidates(4, AppState.dinnerRejectedIds, cat);
  AppState.step = 'dinner_candidates';
  renderStep();
}

// 晚餐候选结果页：4个卡片
function renderDinnerCandidates(container) {
  const candidates = AppState.dinnerCandidates;

  if (!candidates || candidates.length === 0) {
    container.innerHTML = `
      <div class="dinner-candidates-page">
        <div class="dinner-candidates-title">😅 这个分类暂时没有合适的菜</div>
        <div class="dinner-candidates-sub">换个方向试试～</div>
        <button class="back-btn" onclick="goBack()">← 返回</button>
      </div>
    `;
    return;
  }

  const title = AppState.dinnerCategoryFilter
    ? `今晚的4个${AppState.dinnerCategoryFilter}选项`
    : '今晚的4个选项，随便挑';

  container.innerHTML = `
    <div class="dinner-candidates-page">
      <div class="dinner-candidates-title">${title}</div>
      <div class="dinner-candidates-sub">点进去看看，不喜欢还能换</div>

      <div class="dinner-candidates-grid">
        ${candidates.map(f => {
          const seriesName = f.name.includes('-') ? f.name.split('-')[0] : '';
          const dishName = f.name.includes('-') ? f.name.split('-').slice(1).join('-') : f.name;
          return `
          <div class="dinner-candidate-card" onclick="selectDinnerCandidate(${f.id})">
            ${seriesName ? `<div class="dinner-candidate-series">${seriesName}</div>` : ''}
            <div class="dinner-candidate-name">${dishName}</div>
            <div class="dinner-candidate-price">💰 约 ${f.priceRange[0]}-${f.priceRange[1]} 元</div>
          </div>
        `}).join('')}
      </div>

      <div class="dinner-candidates-actions">
        <button class="btn-reshuffle" onclick="reshuffleDinnerCandidates()">🎲 换一批</button>
        <button class="back-btn" onclick="goBack()">← 返回</button>
      </div>
    </div>
  `;
}

function selectDinnerCandidate(foodId) {
  const food = AppState.dinnerCandidates.find(f => f.id === foodId);
  if (!food) return;

  AppState.currentFood = food;
  AppState.cameFromDinnerCandidate = true;
  // 设置默认值以保证详情页正常渲染
  AppState.bodyStatus = '身体正常';
  AppState.mood = '晚上想吃点好的';
  AppState.wallet = '日常省心';
  AppState.rejectedIds = [];
  AppState.step = 5;
  renderStep();
}

function reshuffleDinnerCandidates() {
  AppState.dinnerCandidates = getDinnerCandidates(4, AppState.dinnerRejectedIds, AppState.dinnerCategoryFilter);
  renderStep();
  const grid = document.querySelector('.dinner-candidates-grid');
  if (grid) {
    grid.classList.remove('slide-in');
    void grid.offsetWidth;
    grid.classList.add('slide-in');
  }
}

function reshuffleCandidates() {
  AppState.cravingCandidates = generateCandidates(AppState.mealType, AppState.craving);
  renderStep();
}

function renderStep2(container) {
  const cravingTags = [
    { key: '粉面', emoji: '🍜' },
    { key: '米饭', emoji: '🍚' },
    { key: '云吞饺子', emoji: '🥟' },
    { key: '粥', emoji: '🥣' },
    { key: '汉堡', emoji: '🍔' },
    { key: '烧烤', emoji: '🍢' },
  ];

  const bodySelected = AppState.bodyStatus !== '';
  const cravingExpanded = AppState.cravingExpanded;
  const hasCraving = AppState.craving !== '';

  container.innerHTML = `
    <div class="step-header">
      <div class="step-badge">第二步</div>
      <h2 class="step-title">今天好好吃饭了吗？</h2>
      <p class="step-subtitle">你现在是什么状态</p>
    </div>
    <div class="choice-grid cols-1">
      <button class="choice-btn big ${AppState.bodyStatus === '身体正常' && !cravingExpanded ? 'selected' : ''}" onclick="selectBodyStatus('身体正常')">
        <div class="choice-text">
          <div class="choice-main">🤔 好烦，又不知道点什么</div>
          <div class="choice-sub">外卖翻了半天，还是不知道吃啥。</div>
        </div>
      </button>
      <button class="choice-btn big body-sick ${AppState.bodyStatus === '身体不舒服' && !cravingExpanded ? 'selected' : ''}" onclick="selectBodyStatus('身体不舒服')">
        <div class="choice-text">
          <div class="choice-main">🤒 身体不太舒服，不知道点啥</div>
          <div class="choice-sub">没胃口、胃难受、感冒中。</div>
        </div>
      </button>
      <button class="choice-btn big craving-card ${cravingExpanded ? 'selected' : ''}" onclick="toggleCravingCard()">
        <div class="choice-text">
          <div class="choice-main">😋 今天有点想吃...</div>
          <div class="choice-sub">${hasCraving ? '已选：' + AppState.craving : '大概知道想吃什么了。'}</div>
        </div>
      </button>
    </div>
    <div class="craving-tags-panel ${cravingExpanded ? 'expanded' : ''}">
      <div class="craving-tags-inner">
        ${cravingTags.map(c => `
          <button class="craving-tag ${AppState.craving === c.key ? 'active' : ''}"
                  onclick="selectCraving('${c.key}')">
            <span class="craving-emoji">${c.emoji}</span>
            <span class="craving-name">${c.key}</span>
          </button>
        `).join('')}
      </div>
    </div>
    ${hasCraving ? `<button class="btn-next" onclick="goStep3WithCraving()">下一步 →</button>` : ''}
    ${!hasCraving ? `<button class="btn-next" ${bodySelected ? '' : 'disabled'} onclick="goStep3()">
      下一步 ${bodySelected ? '→' : ''}
    </button>` : ''}
    <button class="back-btn" onclick="goBack()">← 返回</button>
  `;
}

// 食物掉落动画
function triggerFoodDrop() {
  const zone = document.getElementById('food-drop-zone');
  if (!zone) return;
  const foods = ['卤肉饭', '黄焖鸡', '馄饨', '麻辣烫', '沙县'];
  const colors = ['#e06030','#c07040','#d08050','#e0683a','#b06030'];
  const delays = [0, 0.15, 0.30, 0.45, 0.60];

  foods.forEach((name, i) => {
    const tag = document.createElement('span');
    tag.className = 'food-drop-tag';
    tag.textContent = name;
    tag.style.color = colors[i];
    tag.style.animationDelay = delays[i] + 's';
    tag.style.left = (10 + i * 17) + '%';
    zone.appendChild(tag);
  });
}

function renderStep3(container) {
  let choices = [];
  if (AppState.bodyStatus === '身体正常') {
    choices = [
      { key: '今天想吃饱', emoji: '🍚', sub: '量大管饱，吃撑才算' },
      { key: '今天想吃爽', emoji: '🌶️', sub: '要刺激，要过瘾' },
      { key: '今天想吃清淡', emoji: '🥗', sub: '清爽一点，吃点好消化的' },
      { key: '今天懒得思考', emoji: '😴', sub: '什么都行，给我来一份' },
      { key: '需要被安慰', emoji: '🫂', sub: '今天心情不太好' },
    ];
  } else {
    choices = [
      { key: '有点想吐', emoji: '🤢', sub: '闻到油烟就难受' },
      { key: '没胃口', emoji: '😶', sub: '看什么都不想吃' },
      { key: '胃不舒服', emoji: '🫸', sub: '胃痛/反酸/胃胀' },
      { key: '熬夜后难受', emoji: '😵', sub: '通宵之后的代价' },
      { key: '感冒中', emoji: '🤧', sub: '发烧/流鼻涕/喉咙痛' },
    ];
  }

  const title = AppState.bodyStatus === '身体正常' ? '今天想要什么感觉？' : '具体哪里不舒服？';
  const subtitle = AppState.bodyStatus === '身体正常' ? '诚实选择，我来帮你决定' : '告诉我，我推荐最适合的';

  container.innerHTML = `
    <div class="step-header">
      <div class="step-badge">第三步</div>
      <h2 class="step-title">${title}</h2>
      <p class="step-subtitle">${subtitle}</p>
    </div>
    <div class="choice-grid cols-1">
      ${choices.map(c => `
        <button class="choice-btn" onclick="selectMood('${c.key}')">
          <span class="choice-emoji">${c.emoji}</span>
          <div class="choice-text">
            <div class="choice-main">${c.key}</div>
            <div class="choice-sub">${c.sub}</div>
          </div>
        </button>
      `).join('')}
    </div>
    <button class="back-btn" onclick="goBack()">← 返回</button>
  `;
}

function renderStep4(container) {
  const wallets = [
    { key: '精打细算', emoji: '🌿', price: '15元以内', sub: '今天想吃得便宜但不委屈自己' },
    { key: '日常省心', emoji: '☀️', price: '15-25元', sub: '正常吃一顿，别太贵，也别太凑合' },
    { key: '小小犒劳', emoji: '🎀', price: '25-35元', sub: '今天有点累，允许自己吃好一点' },
  ];
  container.innerHTML = `
    <div class="step-header">
      <div class="step-badge">第四步</div>
      <h2 class="step-title">今天的餐费预算？</h2>
      <p class="step-subtitle">不管多少，都值得好好吃一顿</p>
    </div>
    <div class="choice-grid cols-1">
      ${wallets.map(w => `
        <button class="choice-btn" onclick="selectWallet('${w.key}')">
          <span class="choice-emoji">${w.emoji}</span>
          <div class="choice-text">
            <div class="choice-main">${w.key} <span class="price-tag">${w.price}</span></div>
            <div class="choice-sub">${w.sub}</div>
          </div>
        </button>
      `).join('')}
    </div>
    <button class="back-btn" onclick="goBack()">← 返回</button>
  `;
}

// ==================== 诊断卡生成 ====================
function buildDiagnosis(food) {
  // 患者映射
  const patientMap = {
    '今天想吃饱': '轻度选择困难症（饱腹型）',
    '今天想吃爽': '急性味觉饥渴症',
    '今天想吃清淡': '选择困难症（养生型）',
    '今天懒得思考': '重度选择困难症',
    '需要被安慰': '情绪性选择困难症',
    '有点想吐': '消化道轻度抗议',
    '没胃口': '食欲休眠综合征',
    '胃不舒服': '胃部 SOS 信号',
    '熬夜后难受': '通宵后遗症',
    '感冒中': '感冒模式·味觉离线',
  };

  // 钱包映射
  const walletMap = {
    '精打细算': '精打细算',
    '日常省心': '日常省心',
    '小小犒劳': '小小犒劳',
  };

  // 一句话金句池
  const quotePool = [
    '继续纠结的成本，已经超过这顿饭。',
    '吃饭不是问题，问题是你不吃。',
    '胃等得了，你的 deadline 等不了。',
    '吃好这顿，下午的代码 bug 就少一半。',
    '世界上最远的距离，是你和外卖配送的距离。',
    '没人能替你吃饭，但有人能替你决定。',
    '选饭五分钟，快乐一下午。',
    '空腹工作，是对自己最大的不尊重。',
  ];

  const patient = patientMap[AppState.mood] || '神秘选择困难症';
  const status = AppState.bodyStatus + ' · ' + (walletMap[AppState.wallet] || AppState.wallet);
  const suggestion = '立即点这份' + food.name;
  const quote = quotePool[Math.floor(Math.random() * quotePool.length)];

  return { patient, status, suggestion, quote };
}

function renderStep5(container) {
  const food = AppState.currentFood;
  if (!food) {
    container.innerHTML = `<div class="error-msg">推荐失败，请重试</div>`;
    return;
  }

  // 生成诊断卡数据
  const diag = buildDiagnosis(food);

  const tagColors = {
    '清淡养胃': '#4caf50',
    '正常饱腹': '#ff9800',
    '重口高油': '#ff5722',
    '暴击放纵': '#e53935',
    '胃部关怀': '#1976d2',
  };
  const tagColor = tagColors[food.tag] || '#888';

  container.innerHTML = `
    <!-- 今日诊断卡 -->
    <div class="diag-card">
      <div class="diag-card-header">
        <span class="diag-card-icon">📋</span>
        <div class="diag-card-title">今日用餐诊断</div>
        <div class="diag-card-subtitle">Meal Diagnosis Report</div>
      </div>

      <div class="diag-card-body">
        <div class="diag-row">
          <span class="diag-row-label">患者</span>
          <span class="diag-row-value">${diag.patient}</span>
        </div>
        <div class="diag-row">
          <span class="diag-row-label">状态</span>
          <span class="diag-row-value">${diag.status}</span>
        </div>
        <div class="diag-row">
          <span class="diag-row-label">建议</span>
          <span class="diag-row-value highlight">${diag.suggestion}</span>
        </div>
      </div>

      <hr class="diag-card-divider">

      <div class="diag-card-footer">
        <span class="diag-card-quote">${diag.quote}</span>
      </div>

      <div class="diag-card-watermark">《今天到底吃什么》</div>
    </div>

    <div class="result-card">
      <div class="result-header">
        <div class="result-emoji">🍽️</div>
        <h2 class="result-food-name">${food.name}</h2>
        <span class="result-tag" style="background:${tagColor}20;color:${tagColor};border:1.5px solid ${tagColor}40">${food.tag}</span>
        <div class="result-price">💰 约 ${food.priceRange[0]}-${food.priceRange[1]} 元</div>
      </div>

      <div class="result-body">
        <div class="result-section taunt-section">
          <div class="section-icon">🤖</div>
          <div class="section-content">
            <div class="section-label">AI吐槽</div>
            <div class="section-text taunt-text">"${getTaunt()}"</div>
          </div>
        </div>

        <div class="result-section">
          <div class="section-icon">✅</div>
          <div class="section-content">
            <div class="section-label">推荐理由</div>
            <div class="section-text">${food.reason}</div>
          </div>
        </div>

        <div class="result-section avoid-section">
          <div class="section-icon">⚠️</div>
          <div class="section-content">
            <div class="section-label">胃的小建议</div>
            <div class="section-text">${food.avoid}</div>
          </div>
        </div>

        <div class="result-meta">
          <span class="meta-chip">🍽️ ${ { breakfast: '早餐', lunch: '午餐', dinner: '晚餐' }[AppState.mealType] || '午餐' }</span>
          <span class="meta-chip">📋 ${AppState.bodyStatus}</span>
          <span class="meta-chip">💬 ${AppState.mood}</span>
          <span class="meta-chip">💵 ${AppState.wallet}</span>
        </div>
      </div>

      <div class="result-actions">
        <button class="btn-ok" onclick="confirmChoice()">✅ OK，就这个</button>
        <button class="btn-retry" onclick="retryRecommend()">🔄 换一个</button>
      </div>
    </div>
    <button class="back-btn" onclick="goBack()">← 重新选择</button>
  `;
}

// ==================== 交互逻辑 ====================

// === "今天有点想吃"候选菜品 ===
function generateCandidates(mealType, craving) {
  const pool = FOOD_DATABASE.filter(f => {
    if (f.category !== craving) return false;
    if (mealType === 'breakfast' || mealType === 'dinner') {
      return f.suitableMealType && f.suitableMealType.includes(mealType);
    }
    return !f.suitableMealType || f.suitableMealType.includes('lunch');
  });
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 4);
}

function selectCandidateFromCraving(foodId) {
  const food = AppState.cravingCandidates.find(f => f.id === foodId);
  if (!food) return;
  AppState.currentFood = food;
  // 跳过步骤3/4，填充默认值以保证详情页正常渲染
  AppState.mood = '今天想吃饱';
  AppState.wallet = '日常省心';
  AppState.rejectedIds = [];
  AppState.cameFromCraving = true;
  AppState.step = 5;
  renderStep();
}

function selectBodyStatus(status) {
  AppState.bodyStatus = status;
  // 选中前两个卡片时，关闭"今天有点想吃"面板并清空已选分类
  AppState.craving = '';
  AppState.cravingExpanded = false;
  renderStep();
}

function selectCraving(tag) {
  // 切换：点同一个取消选择，点另一个切换
  AppState.craving = AppState.craving === tag ? '' : tag;
  if (AppState.craving) {
    AppState.cravingExpanded = true;
    // 生成4个候选菜品，并跳转到候选结果页
    AppState.cravingCandidates = generateCandidates(AppState.mealType, AppState.craving);
    AppState.step = 'candidates';
  } else {
    AppState.cravingCandidates = [];
  }
  renderStep();
}

function toggleCravingCard() {
  AppState.cravingExpanded = !AppState.cravingExpanded;
  if (AppState.cravingExpanded) {
    // 展开时若未选身体状态，默认设为"身体正常"（有想吃的一般身体没大问题）
    if (!AppState.bodyStatus) {
      AppState.bodyStatus = '身体正常';
    }
  } else {
    // 收起时清除已选标签
    AppState.craving = '';
  }
  renderStep();
}

function goStep3() {
  if (!AppState.bodyStatus) return;
  // 如果选了分类但该分类在当前餐次下无菜品，提示后不清除选择
  if (AppState.craving && !hasCravingMatch(AppState.craving, AppState.mealType)) {
    showToast('这个分类暂时还没有菜，换个方向试试。', 'warn');
    return;
  }
  AppState.step = 3;
  renderStep();
}

function goStep3WithCraving() {
  // 从"今天有点想吃"通道走完整推荐流程（经过步骤3/4）
  if (!AppState.bodyStatus) return;
  if (AppState.craving && !hasCravingMatch(AppState.craving, AppState.mealType)) {
    showToast('这个分类暂时还没有菜，换个方向试试。', 'warn');
    return;
  }
  AppState.step = 3;
  renderStep();
}

function selectMood(mood) {
  AppState.mood = mood;
  AppState.step = 4;
  renderStep();
}

function selectWallet(wallet) {
  AppState.wallet = wallet;
  AppState.rejectedIds = [];
  generateRecommendation();
  AppState.step = 5;
  renderStep();
}

function generateRecommendation() {
  const food = getRecommendations(
    AppState.bodyStatus,
    AppState.mood,
    AppState.wallet,
    AppState.mealType,
    AppState.rejectedIds,
    AppState.craving
  );
  if (!food) {
    // 该分类在该餐次下无菜品，清除 craving 并重试
    AppState.craving = '';
    const fallback = getRecommendations(
      AppState.bodyStatus,
      AppState.mood,
      AppState.wallet,
      AppState.mealType,
      AppState.rejectedIds,
      ''
    );
    AppState.currentFood = fallback;
    return;
  }
  AppState.currentFood = food;
}

function retryRecommend() {
  if (AppState.currentFood) {
    AppState.rejectedIds.push(AppState.currentFood.id);
  }

  // 午餐候选流程：从午餐池中换一个
  if (AppState.cameFromLunchCandidate) {
    const pool = getLunchPool();
    const cat = AppState.lunchCategoryFilter;
    let filtered = cat ? pool.filter(f => matchLunchCategory(f, cat)) : pool;
    filtered = filtered.filter(f => !AppState.rejectedIds.includes(f.id));
    if (filtered.length === 0) {
      // 全部被排除了，放宽
      filtered = cat ? pool.filter(f => matchLunchCategory(f, cat)) : pool;
    }
    const picked = filtered[Math.floor(Math.random() * filtered.length)];
    AppState.currentFood = picked || pool[Math.floor(Math.random() * pool.length)];
  }
  // 晚餐候选流程：从晚餐池中换一个
  else if (AppState.cameFromDinnerCandidate) {
    const pool = getDinnerPool();
    const cat = AppState.dinnerCategoryFilter;
    let filtered = cat ? pool.filter(f => matchDinnerCategory(f, cat)) : pool;
    filtered = filtered.filter(f => !AppState.rejectedIds.includes(f.id));
    if (filtered.length === 0) {
      // 全部被排除了，放宽
      filtered = cat ? pool.filter(f => matchDinnerCategory(f, cat)) : pool;
    }
    const picked = filtered[Math.floor(Math.random() * filtered.length)];
    AppState.currentFood = picked || pool[Math.floor(Math.random() * pool.length)];
  }
  else {
    generateRecommendation();
  }
  renderStep5(document.getElementById('step-container'));
  // 添加动画
  const card = document.querySelector('.result-card');
  if (card) {
    card.classList.remove('slide-in');
    void card.offsetWidth;
    card.classList.add('slide-in');
  }
}

function confirmChoice() {
  const food = AppState.currentFood;
  if (!food) return;

  const record = {
    date: getTodayStr(),
    mealType: AppState.mealType,
    meal: { breakfast: '早餐', lunch: '午餐', dinner: '晚餐' }[AppState.mealType] || '午餐',
    foodName: food.name,
    foodId: food.id,
    bodyStatus: AppState.bodyStatus,
    mood: AppState.mood,
    wallet: AppState.wallet,
    tag: food.tag,
    taunt: getTaunt(),
    reason: food.reason,
    avoid: food.avoid,
    priceRange: food.priceRange,
    recordedAt: new Date().toISOString(),
  };
  saveRecord(record);
  showConfirmToast(getConfirm());
  // 重置状态
  setTimeout(() => {
    AppState.step = 1;
    AppState.mealType = '';
    AppState.bodyStatus = '';
    AppState.mood = '';
    AppState.wallet = '';
    AppState.craving = '';
    AppState.cravingExpanded = false;
    AppState.cravingCandidates = [];
    AppState.cameFromCraving = false;
    AppState.cameFromLunchCandidate = false;
    AppState.cameFromDinnerCandidate = false;
    AppState.currentFood = null;
    AppState.rejectedIds = [];
    AppState.lunchCandidates = [];
    AppState.lunchRejectedIds = [];
    AppState.lunchCategoryFilter = '';
    AppState.dinnerCandidates = [];
    AppState.dinnerRejectedIds = [];
    AppState.dinnerCategoryFilter = '';
    renderStep();
  }, 1800);
}

function goBack() {
  if (AppState.step === 'candidates') {
    AppState.step = 2;
    renderStep();
    return;
  }
  // 午餐候选流程：从详情页返回候选页
  if (AppState.step === 5 && AppState.cameFromLunchCandidate) {
    AppState.step = 'lunch_candidates';
    AppState.currentFood = null;
    AppState.cameFromLunchCandidate = false;
    renderStep();
    return;
  }
  // 晚餐候选流程：从详情页返回候选页
  if (AppState.step === 5 && AppState.cameFromDinnerCandidate) {
    AppState.step = 'dinner_candidates';
    AppState.currentFood = null;
    AppState.cameFromDinnerCandidate = false;
    renderStep();
    return;
  }
  // 午餐分类页 → 午餐入口
  if (AppState.step === 'lunch_category') {
    AppState.step = 'lunch_entry';
    AppState.lunchCategoryFilter = '';
    renderStep();
    return;
  }
  // 午餐候选页 → 午餐入口（不想思考）或分类页（有点想法）
  if (AppState.step === 'lunch_candidates') {
    AppState.step = AppState.lunchCategoryFilter ? 'lunch_category' : 'lunch_entry';
    AppState.lunchCandidates = [];
    renderStep();
    return;
  }
  // 午餐入口 → 首页
  if (AppState.step === 'lunch_entry') {
    AppState.step = 1;
    AppState.mealType = '';
    AppState.lunchCategoryFilter = '';
    renderStep();
    return;
  }
  // 晚餐分类页 → 晚餐入口
  if (AppState.step === 'dinner_category') {
    AppState.step = 'dinner_entry';
    AppState.dinnerCategoryFilter = '';
    renderStep();
    return;
  }
  // 晚餐候选页 → 晚餐入口（今晚吃这个）或分类页（有点想法）
  if (AppState.step === 'dinner_candidates') {
    AppState.step = AppState.dinnerCategoryFilter ? 'dinner_category' : 'dinner_entry';
    AppState.dinnerCandidates = [];
    renderStep();
    return;
  }
  // 晚餐入口 → 首页
  if (AppState.step === 'dinner_entry') {
    AppState.step = 1;
    AppState.mealType = '';
    AppState.dinnerCategoryFilter = '';
    renderStep();
    return;
  }
  if (AppState.step > 1) {
    // "今天有点想吃"快捷通道：返回时回到候选结果页
    if (AppState.step === 5 && AppState.cameFromCraving) {
      AppState.step = 'candidates';
      AppState.currentFood = null;
      AppState.cameFromCraving = false;
      renderStep();
      return;
    }
    AppState.step--;
    if (AppState.step === 4) AppState.mood = '';
    if (AppState.step === 3) AppState.bodyStatus = '';
    if (AppState.step === 2) AppState.mealType = '';
    if (AppState.step <= 2) { AppState.craving = ''; AppState.cravingExpanded = false; }
    renderStep();
  }
}

// ==================== Toast提示 ====================
function showToast(msg, type) {
  const toast = document.getElementById('toast');
  const prefix = type === 'warn' ? '🔍 ' : '✅ ';
  toast.textContent = prefix + msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function showConfirmToast(msg) {
  showToast(msg, 'ok');
}

// ==================== 日历渲染 ====================
const TAG_COLORS = {
  '清淡养胃': { bg: '#c8e6c9', text: '#2e7d32', dot: '#4caf50', border: '#a5d6a7', emoji: '🥗' },
  '正常饱腹': { bg: '#ffe082', text: '#e65100', dot: '#ff9800', border: '#ffcc02', emoji: '🍚' },
  '重口高油': { bg: '#ffab91', text: '#bf360c', dot: '#ff5722', border: '#ff8a65', emoji: '🍖' },
  '暴击放纵': { bg: '#ef9a9a', text: '#b71c1c', dot: '#e53935', border: '#ef9a9a', emoji: '🍔' },
  '胃部关怀': { bg: '#90caf9', text: '#0d47a1', dot: '#1976d2', border: '#64b5f6', emoji: '🥣' },
  'default': { bg: '#e8e6e3', text: '#8d8d8d', dot: '#bdbdbd', border: '#ddd8d3', emoji: '' },
};

let calendarYear = new Date().getFullYear();
let calendarMonth = new Date().getMonth();

function renderCalendar() {
  const records = getAllRecords();
  const year = calendarYear;
  const month = calendarMonth;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const todayStr = getTodayStr();

  const monthNames = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];

  let html = `
    <div class="calendar-headline">
      <div class="calendar-headline-icon">📅</div>
      <div class="calendar-headline-text">看看过去的自己都吃了什么。</div>
      <div class="calendar-headline-sub">每一顿饭，都是认真生活过的证据</div>
    </div>
    <div class="calendar-header">
      <button class="nav-btn" onclick="prevMonth()">‹</button>
      <div class="calendar-title">
        <span>${year}年 ${monthNames[month]}</span>
      </div>
      <button class="nav-btn" onclick="nextMonth()">›</button>
    </div>
    <div class="calendar-weekdays">
      ${['日','一','二','三','四','五','六'].map(d => `<div class="weekday">${d}</div>`).join('')}
    </div>
    <div class="calendar-grid">
  `;

  // 空白格
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-cell empty"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const dayRecs = getTodayRecords(dateStr);
    const isToday = dateStr === todayStr;
    const hasRecs = dayRecs.length > 0;

    // 颜色：多餐日用暖色中性底，单餐日按标签配色
    let cellBg = '#f0edea';
    let cellBorder = 'transparent';
    let cellTextColor = '#aaa';
    let cellDotColor = '#d5d0ca';
    if (dayRecs.length >= 2) {
      cellBg = 'rgba(255,247,241,0.92)';
      cellBorder = 'rgba(255,180,130,0.45)';
      cellTextColor = '#8d6a4e';
      cellDotColor = '#d08050';
    } else if (hasRecs) {
      const c = TAG_COLORS[dayRecs[0].tag] || TAG_COLORS['default'];
      cellBg = c.bg; cellBorder = c.border; cellTextColor = c.text; cellDotColor = c.dot;
    }

    const mealEmojis = dayRecs.map(r => ({ breakfast: '🍳', lunch: '🍱', dinner: '🍲' }[r.mealType] || '🍽️'));
    let cellContent = '';
    if (dayRecs.length >= 2) {
      cellContent = `<div class="cal-food" style="color:${cellTextColor}; background:rgba(255,180,130,0.2); border-radius:6px; padding:2px 4px; max-width:90%; margin-top:2px;">${mealEmojis.join('')} ${dayRecs.length}餐</div>
        <div class="cal-dot" style="background:${cellDotColor}"></div>`;
    } else if (hasRecs) {
      const sn = dayRecs[0].foodName.length > 3 ? dayRecs[0].foodName.slice(0,3)+'…' : dayRecs[0].foodName;
      cellContent = `<div class="cal-food" style="color:${cellTextColor}; background:${cellBorder}; border-radius:6px; padding:2px 4px; max-width:90%; margin-top:2px;">${mealEmojis.join('')} ${sn}</div>
        <div class="cal-dot" style="background:${cellDotColor}"></div>`;
    } else {
      cellContent = `<div class="cal-empty-dot"></div>`;
    }

    html += `
      <div class="cal-cell ${isToday ? 'today' : ''} ${hasRecs ? 'has-record' : ''}"
           style="background:${cellBg}; border-color:${cellBorder}"
           onclick="${hasRecs ? `showDayDetail('${dateStr}')` : ''}">
        <div class="cal-date" style="color:${isToday ? '#ff5722' : (hasRecs ? cellTextColor : '#aaa')}">${d}</div>
        ${cellContent}
      </div>
    `;
  }

  html += `</div>`;

  // 颜色图例
  html += `
    <div class="legend">
      ${Object.entries(TAG_COLORS).filter(([k]) => k !== 'default').map(([tag, c]) => `
        <div class="legend-item">
          <div class="legend-dot" style="background:${c.dot}"></div>
          <span>${tag}</span>
        </div>
      `).join('')}
      <div class="legend-item">
        <div class="legend-dot" style="background:#bdbdbd"></div>
        <span>未记录</span>
      </div>
    </div>
  `;

  document.getElementById('calendar-body').innerHTML = html;
}

function prevMonth() {
  calendarMonth--;
  if (calendarMonth < 0) { calendarMonth = 11; calendarYear--; }
  renderCalendar();
}

function nextMonth() {
  calendarMonth++;
  if (calendarMonth > 11) { calendarMonth = 0; calendarYear++; }
  renderCalendar();
}

// ==================== 日详情弹窗（聚合当天所有餐次） ====================
function getDailySummary(count, mealTypes) {
  const hasBreakfast = mealTypes.includes('breakfast');
  const hasLunch = mealTypes.includes('lunch');
  const hasDinner = mealTypes.includes('dinner');
  if (count === 3) return '今天记录了3餐。三餐齐全，今天有认真吃饭。';
  if (count === 2) {
    const missing = !hasBreakfast ? '早餐' : !hasLunch ? '午餐' : '晚餐';
    return `今天记录了2餐。少了${missing}，但两餐也已经很好了。`;
  }
  if (count === 1) return '今天记录了1餐。简单吃点也不错。';
  return '';
}

function showDayDetail(dateStr) {
  const dayRecs = getTodayRecords(dateStr);
  if (dayRecs.length === 0) return;

  const [year, month, day] = dateStr.split('-');
  const mealLabels = { breakfast: '早餐', lunch: '午餐', dinner: '晚餐' };
  const mealEmojis = { breakfast: '🍳', lunch: '🍱', dinner: '🍲' };

  const summaryText = getDailySummary(dayRecs.length, dayRecs.map(r => r.mealType));

  const mealsHtml = dayRecs.map(rec => {
    const colors = TAG_COLORS[rec.tag] || TAG_COLORS['default'];
    const emoji = mealEmojis[rec.mealType] || '🍽️';
    const label = mealLabels[rec.mealType] || '';

    return `
      <div class="modal-meal-card" style="border-left: 4px solid ${colors.dot}">
        <div class="modal-meal-top">
          <div class="modal-meal-head">
            <span class="modal-meal-emoji">${emoji}</span>
            <span class="modal-meal-label">${label}</span>
            <span class="modal-meal-tag" style="color:${colors.text}; background:${colors.bg}; border:1.5px solid ${colors.dot}60">${rec.tag}</span>
          </div>
          <div class="modal-meal-name">${rec.foodName}</div>
          <div class="modal-meal-info">
            <span>💰 约 ${rec.priceRange[0]}-${rec.priceRange[1]} 元</span>
            <span>·</span>
            <span>${rec.bodyStatus}</span>
          </div>
          <div class="modal-meal-taunt">"${rec.taunt}"</div>
        </div>
      </div>
    `;
  }).join('');

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header modal-header-multi">
      <div class="modal-date">${year}年${parseInt(month)}月${parseInt(day)}日</div>
      <div class="modal-day-summary">${summaryText}</div>
    </div>
    <div class="modal-body modal-body-multi">
      ${mealsHtml}
    </div>
    <div class="modal-actions">
      <button class="modal-close-btn" onclick="closeModal()">关闭</button>
    </div>
  `;

  document.getElementById('day-modal').classList.add('show');
}

function closeModal() {
  document.getElementById('day-modal').classList.remove('show');
}

// ==================== 月度诊断 ====================
function renderDiagnosis() {
  const records = getAllRecords();
  const now = new Date();
  const monthStr = getMonthStr(now);

  // 筛选本月记录
  const monthRecords = Object.values(records).filter(r => r.date.startsWith(monthStr));

  const total = monthRecords.length;

  if (total === 0) {
    document.getElementById('diagnosis-body').innerHTML = `
      <div class="empty-diagnosis">
        <div class="empty-emoji">📋</div>
        <div class="empty-title">本月还没有记录</div>
        <div class="empty-sub">先去吃点什么，回来再诊断～</div>
        <button class="btn-primary" onclick="switchView('home')">去记录</button>
      </div>
    `;
    return;
  }

  // 统计
  const foodCount = {};
  const categoryCount = {};

  monthRecords.forEach(r => {
    foodCount[r.foodName] = (foodCount[r.foodName] || 0) + 1;

    const food = FOOD_DATABASE.find(f => f.id === r.foodId);
    const cat = (food && food.category) ? food.category : '其他';
    categoryCount[cat] = (categoryCount[cat] || 0) + 1;
  });

  const top3Foods = Object.entries(foodCount).sort((a,b) => b[1]-a[1]).slice(0,3);
  const categoryList = Object.entries(categoryCount).sort((a,b) => b[1]-a[1]);

  // 顶部最爱食物
  const topFood = top3Foods[0];
  const topFoodName = topFood ? topFood[0] : '';
  const topFoodCount = topFood ? topFood[1] : 0;

  // 饮食人格 + AI一句话
  const personality = getFoodPersonality(categoryList, total);
  const aiLine = generateAILine(topFoodName, topFoodCount, categoryList, total);

  // 冠军 quip — 短句吐槽
  let champQuip;
  if (topFoodCount >= 5) {
    champQuip = `你总说换换口味。<br>结果还是回来了。<br>这已经不是喜欢了。<br>这是熟悉感。`;
  } else if (topFoodCount >= 3) {
    champQuip = `你说随便。<br>「${topFoodName}」可没信。`;
  } else if (topFoodCount >= 2) {
    champQuip = `这月见你最多的，<br>不是同事。<br>是「${topFoodName}」。`;
  } else {
    champQuip = `你的胃在备忘录里写了：<br>这周能不能有点新面孔？`;
  }

  document.getElementById('diagnosis-body').innerHTML = `
    <div class="monthly-hero">
      <div class="monthly-hero-badge">${now.getMonth()+1}月总结</div>
      <div class="monthly-hero-stat">
        <span class="monthly-hero-num">${total}</span>
        <span class="monthly-hero-unit">顿</span>
      </div>
      <div class="monthly-hero-line">每一顿都不是浑水摸鱼。</div>
      <div class="monthly-hero-line-sub">认认真真吃饭的人，运气不会太差。</div>
    </div>

    <div class="monthly-love-card">
      <div class="monthly-love-emoji">🏆</div>
      <div class="monthly-love-title">本月冠军</div>
      <div class="monthly-love-food">${topFoodName || '待发掘'}</div>
      <div class="monthly-love-meta">吃了 <strong>${topFoodCount}</strong> 次</div>
      <div class="monthly-love-quip">${champQuip}</div>
    </div>

    ${top3Foods.length > 1 ? `
    <div class="monthly-top3">
      <div class="monthly-top3-row">
        ${top3Foods.map(([name, count], i) => `
          <div class="monthly-top3-item ${i === 0 ? 'gold' : i === 1 ? 'silver' : 'bronze'}">
            <div class="monthly-top3-rank">${['🥇','🥈','🥉'][i]}</div>
            <div class="monthly-top3-name" title="${name}">${name.length > 6 ? name.slice(0,5)+'…' : name}</div>
            <div class="monthly-top3-count">${count}次</div>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}

    <div class="monthly-persona-card">
      <div class="monthly-persona-emoji">${personality.emoji}</div>
      <div class="monthly-persona-label">饮食人格</div>
      <div class="monthly-persona-title">${personality.title}</div>
      <div class="monthly-persona-explain">${personality.explain}</div>
    </div>

    <div class="monthly-line-card">
      <div class="monthly-line-avatar">🤖</div>
      <div class="monthly-line-text">${aiLine}</div>
    </div>

    <div class="monthly-outro">下个月也要好好吃饭 🤍</div>
  `;
}

/**
 * 饮食人格 — 根据分类占比判断
 */
function getFoodPersonality(categoryList, total) {
  if (categoryList.length === 0) {
    return { title: '神秘人', emoji: '🕶️', explain: '还没摸清你的路数。' };
  }

  const topCat = categoryList[0];
  const topCatPct = Math.round(topCat[1] / total * 100);

  const labels = {
    '粉面': { title: '粉面信徒', emoji: '🍜', explain: '汤汤水水下肚。<br>这一天才算开始。' },
    '米饭': { title: '米饭守护者', emoji: '🍚', explain: '世界变化再快。<br>饭还是要吃的。' },
    '云吞饺子': { title: '云吞饺子星人', emoji: '🥟', explain: '包起来的。<br>才算一顿。' },
    '粥': { title: '养生粥人', emoji: '🥣', explain: '你的胃。<br>过得比大多数人都体面。' },
    '汉堡': { title: '汉堡自由人', emoji: '🍔', explain: '碳水叠碳水。<br>快乐翻倍。' },
    '烧烤': { title: '烧烤猎人', emoji: '🔥', explain: '烟火气。<br>就是生活气。' },
  };

  if (topCatPct >= 45 && labels[topCat[0]]) {
    return labels[topCat[0]];
  }

  if (categoryList.length >= 4) {
    return { title: '杂食动物', emoji: '🦊', explain: '什么都吃。<br>什么都不拒绝。' };
  }

  return { title: '随缘派', emoji: '🎲', explain: '今天吃啥看心情。<br>明天吃啥再说。' };
}

/**
 * 生成 AI 一句话 — 不超过 20 字，两段式
 */
function generateAILine(topFood, topCount, categoryList, total) {
  // 冠军明显
  if (topFood && topCount >= 3) {
    return `你嘴上说随便。<br>身体可没随便。`;
  }

  // 类别倾向
  const topCat = categoryList[0];
  if (topCat && Math.round(topCat[1] / total * 100) >= 45) {
    return `我研究了半天。<br>发现你是真随缘。`;
  }

  // 多样化
  if (categoryList.length >= 4) {
    return `今天吃啥不知道。<br>但每个月都能吃饱。`;
  }

  // 记录少
  if (total <= 5) {
    return `记录不多。<br>但每一笔都是认真的。`;
  }

  // 默认
  return `你的胃不太爱说话。<br>但选吃的很诚实。`;
}

// ==================== 导航 ====================
function switchView(view) {
  AppState.view = view;
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  document.querySelector(`[data-view="${view}"]`).classList.add('active');

  if (view === 'home') renderHome();
  else if (view === 'calendar') renderCalendarPage();
  else if (view === 'diagnosis') renderDiagnosisPage();
}

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
  renderHome();

  // 底部导航点击
  document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', () => {
      switchView(el.dataset.view);
    });
  });

  // 弹窗背景点击关闭
  document.getElementById('day-modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
});
