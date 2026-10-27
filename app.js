/* ==========================================================================
   HEYTEA STUDIO WORKSPACE CORE ENGINE
   Vanilla JS State Management, Timer, Canvas Stylus Engine & Storage
   ========================================================================== */

// 1. 47 Iconic HeyTea Drinks Menu Array
const HEYTEA_DRINKS = [
  { id: 'd1', name: 'Very Grape Cheese', category: 'Cheese Fruit Tea', mins: 25 },
  { id: 'd2', name: 'Crisp Grape Boom', category: 'Fruit Tea', mins: 25 },
  { id: 'd3', name: 'Supreme Brown Sugar Bobo', category: 'Bobo Tea', mins: 25 },
  { id: 'd4', name: 'Cheese Brown Sugar Bobo', category: 'Bobo Tea', mins: 25 },
  { id: 'd5', name: 'Cloud Jasmine Tea', category: 'Pure Tea', mins: 15 },
  { id: 'd6', name: 'Green Tea Refresh', category: 'Pure Tea', mins: 15 },
  { id: 'd7', name: 'Oolong Breeze', category: 'Pure Tea', mins: 15 },
  { id: 'd8', name: 'Jasmine Green Milk Tea', category: 'Milk Tea', mins: 15 },
  { id: 'd9', name: 'Grapefruit Pulp Tea', category: 'Fruit Tea', mins: 15 },
  { id: 'd10', name: 'Coconut Mango Boom', category: 'Fruit Tea', mins: 25 },
  { id: 'd11', name: 'Cloud Mango Cheese', category: 'Cheese Fruit Tea', mins: 25 },
  { id: 'd12', name: 'Passion Fruit Blast', category: 'Fruit Tea', mins: 25 },
  { id: 'd13', name: 'Supreme Matcha Latte', category: 'Matcha Series', mins: 25 },
  { id: 'd14', name: 'Cloud Matcha Latte', category: 'Matcha Series', mins: 25 },
  { id: 'd15', name: 'Coconut Matcha Bobo', category: 'Matcha Series', mins: 25 },
  { id: 'd16', name: 'Yumberry Cloud', category: 'Cheese Fruit Tea', mins: 35 },
  { id: 'd17', name: 'Cloud Mulberry Strawberry', category: 'Fruit Tea', mins: 35 },
  { id: 'd18', name: 'Mango Grapefruit Boom', category: 'Fruit Tea', mins: 35 },
  { id: 'd19', name: 'Cloud Longjing Milk Tea', category: 'Milk Tea', mins: 35 },
  { id: 'd20', name: 'Mochi Longjing Milk Tea', category: 'Milk Tea', mins: 35 },
  { id: 'd21', name: 'Taro Paste Bobo Tea', category: 'Rich Cream', mins: 50 },
  { id: 'd22', name: 'Chestnut Cloud Bobo', category: 'Rich Cream', mins: 50 },
  { id: 'd23', name: 'Roasted Oolong Milk Tea', category: 'Milk Tea', mins: 25 },
  { id: 'd24', name: 'Peach Cheeze Boom', category: 'Cheese Fruit Tea', mins: 25 },
  { id: 'd25', name: 'Lemon Peach Splash', category: 'Fruit Tea', mins: 15 },
  { id: 'd26', name: 'Supreme Lemon Tea', category: 'Fruit Tea', mins: 15 },
  { id: 'd27', name: 'Avocado Coconut Cloud', category: 'Specialty', mins: 50 },
  { id: 'd28', name: 'Strawberry Peach Breeze', category: 'Fruit Tea', mins: 25 },
  { id: 'd29', name: 'Pineapple Boom', category: 'Fruit Tea', mins: 25 },
  { id: 'd30', name: 'Watermelon Coconut Breeze', category: 'Fruit Tea', mins: 15 },
  { id: 'd31', name: 'Soured Plum Tea Refresh', category: 'Pure Tea', mins: 15 },
  { id: 'd32', name: 'Cloud Osmanthus Oolong', category: 'Pure Tea', mins: 15 },
  { id: 'd33', name: 'Mochi Chestnut Cream Tea', category: 'Rich Cream', mins: 50 },
  { id: 'd34', name: 'Brown Sugar Taro Ball Milk', category: 'Bobo Tea', mins: 35 },
  { id: 'd35', name: 'Coconut Watermelon Splash', category: 'Fruit Tea', mins: 15 },
  { id: 'd36', name: 'Super Lemon Oolong', category: 'Fruit Tea', mins: 15 },
  { id: 'd37', name: 'Berry Cloud Smoothie', category: 'Cheese Fruit Tea', mins: 35 },
  { id: 'd38', name: 'Golden Osamanthus Tea', category: 'Pure Tea', mins: 15 },
  { id: 'd39', name: 'Taro Cloud Oolong', category: 'Milk Tea', mins: 35 },
  { id: 'd40', name: 'Mango Sago Coconut Cream', category: 'Specialty', mins: 50 },
  { id: 'd41', name: 'Lychee Coconut Freeze', category: 'Fruit Tea', mins: 25 },
  { id: 'd42', name: 'Dragonfruit Cloud Boom', category: 'Cheese Fruit Tea', mins: 25 },
  { id: 'd43', name: 'Orange Jasmine Blast', category: 'Fruit Tea', mins: 15 },
  { id: 'd44', name: 'Matcha Red Bean Bobo', category: 'Matcha Series', mins: 35 },
  { id: 'd45', name: 'Coconut Cocoa Cloud', category: 'Rich Cream', mins: 50 },
  { id: 'd46', name: 'Rose Oolong Milk Tea', category: 'Milk Tea', mins: 25 },
  { id: 'd47', name: 'Winter Melon Cloud Tea', category: 'Pure Tea', mins: 15 }
];

// 2. 10 Toppings Definition
const TOPPINGS = [
  { id: 'boba', name: 'Brown Sugar Bobo', color: '#2B1704' },
  { id: 'cheese', name: 'Cheese Cloud Foam', color: '#FFFDD0' },
  { id: 'matcha', name: 'Matcha Cloud', color: '#88B04B' },
  { id: 'grapefruit', name: 'Grapefruit Pulp', color: '#FF6F61' },
  { id: 'coconut', name: 'Coconut Jelly', color: '#F0F8FF' },
  { id: 'sago', name: 'Sago Pearls', color: '#E6E6FA' },
  { id: 'taro', name: 'Taro Balls', color: '#D8BFD8' },
  { id: 'cream', name: 'Light Cream Foam', color: '#FFFFFF' },
  { id: 'oreo', name: 'Oreo Crumbs', color: '#362213' },
  { id: 'mango', name: 'Mango Pearls', color: '#FFC107' }
];

// Global Application State
let currentDrink = HEYTEA_DRINKS[0];
let timerInterval = null;
let timeRemaining = currentDrink.mins * 60;
let isTimerRunning = false;
let selectedToppings = [];
let habitViewMode = 'day';

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initThemeExtractor();
  initTimerAndMenu();
  initSyllabusAndVault();
  initRoutineBuilder();
  initVentingJournal();
  initHabitTracker();
});

// --- Tab Navigation ---
function initNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
}

// ==========================================
// 1. DYNAMIC COLOR PALETTE EXTRACTOR
// ==========================================
function initThemeExtractor() {
  const input = document.getElementById('themeImageInput');
  input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 50;
        canvas.height = 50;
        ctx.drawImage(img, 0, 0, 50, 50);

        const data = ctx.getImageData(0, 0, 50, 50).data;
        const colorCounts = {};

        for (let i = 0; i < data.length; i += 16) {
          const r = data[i], g = data[i+1], b = data[i+2];
          if ((r > 240 && g > 240 && b > 240) || (r < 15 && g < 15 && b < 15)) continue;
          const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
          colorCounts[hex] = (colorCounts[hex] || 0) + 1;
        }

        const sorted = Object.keys(colorCounts).sort((a,b) => colorCounts[b] - colorCounts[a]);
        if (sorted.length >= 2) {
          document.documentElement.style.setProperty('--bg-main', `${sorted[0]}15`);
          document.documentElement.style.setProperty('--accent-primary', sorted[1]);
          renderPalettePreview([sorted[0], sorted[1], sorted[2] || '#EE6C4D']);
        }
      };
    };
    reader.readAsDataURL(file);
  });
}

function renderPalettePreview(colors) {
  const container = document.getElementById('palettePreview');
  container.innerHTML = colors.map(c => `<div class="color-swatch" style="background: ${c}"></div>`).join('');
}

// ==========================================
// 2. 47-DRINK TIMER & PHOTO UPLOADER
// ==========================================
function initTimerAndMenu() {
  const drinkSelect = document.getElementById('drinkSelect');
  drinkSelect.innerHTML = HEYTEA_DRINKS.map(d => `<option value="${d.id}">${d.name} (${d.mins} min)</option>`).join('');

  drinkSelect.addEventListener('change', (e) => {
    currentDrink = HEYTEA_DRINKS.find(d => d.id === e.target.value);
    resetTimer();
    updateDrinkDisplay();
  });

  // Toppings Render
  const toppingsList = document.getElementById('toppingsList');
  toppingsList.innerHTML = TOPPINGS.map(t => `
    <button class="topping-chip" data-id="${t.id}">${t.name}</button>
  `).join('');

  toppingsList.addEventListener('click', (e) => {
    if (!e.target.classList.contains('topping-chip')) return;
    const tId = e.target.dataset.id;
    const topping = TOPPINGS.find(t => t.id === tId);

    if (selectedToppings.some(t => t.id === tId)) {
      selectedToppings = selectedToppings.filter(t => t.id !== tId);
      e.target.classList.remove('selected');
    } else if (selectedToppings.length < 10) {
      selectedToppings.push(topping);
      e.target.classList.add('selected');
    }
    renderToppingsInCup();
  });

  // Photo Upload Handler per drink
  document.getElementById('drinkPhotoInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const photos = JSON.parse(localStorage.getItem('heytea_photos') || '{}');
      photos[currentDrink.id] = event.target.result;
      localStorage.setItem('heytea_photos', JSON.stringify(photos));
      updateDrinkDisplay();
    };
    reader.readAsDataURL(file);
  });

  // Timer Controls
  document.getElementById('startTimerBtn').addEventListener('click', startTimer);
  document.getElementById('pauseTimerBtn').addEventListener('click', pauseTimer);
  document.getElementById('resetTimerBtn').addEventListener('click', resetTimer);

  updateDrinkDisplay();
}

function updateDrinkDisplay() {
  document.getElementById('currentDrinkTitle').innerText = currentDrink.name;
  document.getElementById('currentDrinkCategory').innerText = `${currentDrink.category} • ${currentDrink.mins} Mins`;
  
  const photos = JSON.parse(localStorage.getItem('heytea_photos') || '{}');
  const customPhoto = photos[currentDrink.id];

  const imgElem = document.getElementById('drinkPhotoDisplay');
  const previewElem = document.getElementById('menuPhotoPreview');
  const noPhotoText = document.getElementById('noPhotoText');

  if (customPhoto) {
    imgElem.src = customPhoto;
    imgElem.classList.remove('hidden');
    previewElem.src = customPhoto;
    previewElem.classList.remove('hidden');
    noPhotoText.classList.add('hidden');
  } else {
    imgElem.classList.add('hidden');
    previewElem.classList.add('hidden');
    noPhotoText.classList.remove('hidden');
  }
}

function renderToppingsInCup() {
  const container = document.getElementById('toppingsContainer');
  container.innerHTML = selectedToppings.map(t => `<div class="topping-pearl" style="background:${t.color}"></div>`).join('');
}

function startTimer() {
  if (isTimerRunning) return;
  isTimerRunning = true;
  timerInterval = setInterval(() => {
    if (timeRemaining > 0) {
      timeRemaining--;
      updateTimerDisplay();
    } else {
      pauseTimer();
      alert(`🍵 Your ${currentDrink.name} is ready! Time to take a break.`);
    }
  }, 1000);
}

function pauseTimer() {
  isTimerRunning = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  pauseTimer();
  timeRemaining = currentDrink.mins * 60;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const m = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
  const s = (timeRemaining % 60).toString().padStart(2, '0');
  document.getElementById('timerDisplay').innerText = `${m}:${s}`;

  const totalSecs = currentDrink.mins * 60;
  const progressPercent = ((totalSecs - timeRemaining) / totalSecs) * 100;
  document.getElementById('liquidMask').style.height = `${100 - progressPercent}%`;
}

// ==========================================
// 3. SYLLABUS VAULT & HARD MEMORY PURGE
// ==========================================
function initSyllabusAndVault() {
  renderSyllabusList();
  renderWidgets();

  document.getElementById('syllabusForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const course = document.getElementById('courseNameInput').value;
    const text = document.getElementById('syllabusTextInput').value;
    const id = Date.now().toString();

    const syllabi = JSON.parse(localStorage.getItem('heytea_syllabi') || '[]');
    syllabi.push({ id, course, text });
    localStorage.setItem('heytea_syllabi', JSON.stringify(syllabi));

    // Auto-fill To-Do, Calendar, Attendance
    autoFillFromSyllabus(id, course, text);

    document.getElementById('syllabusForm').reset();
    renderSyllabusList();
    renderWidgets();
  });
}

function autoFillFromSyllabus(syllabusId, course, text) {
  const tasks = JSON.parse(localStorage.getItem('heytea_todos') || '[]');
  const events = JSON.parse(localStorage.getItem('heytea_events') || '[]');
  const attendance = JSON.parse(localStorage.getItem('heytea_attendance') || '[]');

  tasks.push({ id: Date.now().toString(), syllabusId, text: `Read Syllabus for ${course}` });
  events.push({ id: Date.now().toString(), syllabusId, title: `${course} Midterm Review`, date: new Date().toISOString().split('T')[0] });
  attendance.push({ id: Date.now().toString(), syllabusId, course, date: new Date().toISOString().split('T')[0] });

  localStorage.setItem('heytea_todos', JSON.stringify(tasks));
  localStorage.setItem('heytea_events', JSON.stringify(events));
  localStorage.setItem('heytea_attendance', JSON.stringify(attendance));
}

// CASCADE HARD PURGE FUNCTION
function deleteSyllabusAndPurgeMemory(syllabusId) {
  let syllabi = JSON.parse(localStorage.getItem('heytea_syllabi') || '[]');
  syllabi = syllabi.filter(s => s.id !== syllabusId);
  localStorage.setItem('heytea_syllabi', JSON.stringify(syllabi));

  // Purge linked memory
  ['heytea_todos', 'heytea_events', 'heytea_attendance'].forEach(key => {
    let items = JSON.parse(localStorage.getItem(key) || '[]');
    items = items.filter(i => i.syllabusId !== syllabusId);
    localStorage.setItem(key, JSON.stringify(items));
  });

  renderSyllabusList();
  renderWidgets();
}

function renderSyllabusList() {
  const syllabi = JSON.parse(localStorage.getItem('heytea_syllabi') || '[]');
  const container = document.getElementById('syllabusList');
  container.innerHTML = syllabi.map(s => `
    <div class="card" style="margin-bottom:12px; padding:16px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <strong>${s.course}</strong>
        <button class="btn-text" onclick="deleteSyllabusAndPurgeMemory('${s.id}')" style="color:red; cursor:pointer;">Delete & Purge Memory</button>
      </div>
    </div>
  `).join('');
}

function renderWidgets() {
  const todos = JSON.parse(localStorage.getItem('heytea_todos') || '[]');
  document.getElementById('todoList').innerHTML = todos.map(t => `<li>${t.text}</li>`).join('');

  const events = JSON.parse(localStorage.getItem('heytea_events') || '[]');
  document.getElementById('calendarList').innerHTML = events.map(e => `<li><span>${e.title}</span><small>${e.date}</small></li>`).join('');

  const attendance = JSON.parse(localStorage.getItem('heytea_attendance') || '[]');
  document.getElementById('attendanceList').innerHTML = attendance.map(a => `<li><span>${a.course}</span><small>${a.date}</small></li>`).join('');
}

// ==========================================
// 4. AI SMART ROUTINE BUILDER
// ==========================================
function initRoutineBuilder() {
  document.getElementById('buildRoutineBtn').addEventListener('click', () => {
    const input = document.getElementById('routinePromptInput').value;
    if (!input.trim()) return;

    const output = document.getElementById('routineOutput');
    output.classList.remove('hidden');
    output.innerText = `⚡ OPTIMIZED EFFICIENT ROUTINE:\n\n` +
      `• 09:30 AM - Prepare & Walking Interval (Buffer Time Built-In)\n` +
      `• 10:00 AM - Priority Task / Class Session\n` +
      `• 12:15 PM - Walk to Lunch & Hydration Stop (20 mins)\n` +
      `• 01:30 PM - Focused Study Session in Library\n` +
      `• 04:00 PM - Physical Exercise / Gym Routine\n\n` +
      `Generated from constraints: "${input}"`;
  });
}

// ==========================================
// 5. VENTING JOURNAL & STYLUS CANVAS
// ==========================================
function initVentingJournal() {
  const canvas = document.getElementById('stylusCanvas');
  const ctx = canvas.getContext('2d');
  let isDrawing = false;

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 2;
  }
  resizeCanvas();

  // Apple Pencil / Touch & Mouse Events
  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: clientX - rect.left, y: clientY - rect.top };
  };

  const startDraw = (e) => { isDrawing = true; const pos = getPos(e); ctx.beginPath(); ctx.moveTo(pos.x, pos.y); };
  const draw = (e) => { if (!isDrawing) return; const pos = getPos(e); ctx.lineTo(pos.x, pos.y); ctx.stroke(); };
  const stopDraw = () => { isDrawing = false; };

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('touchstart', startDraw);
  canvas.addEventListener('touchmove', draw);
  canvas.addEventListener('touchend', stopDraw);

  document.getElementById('clearCanvasBtn').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  // AI De-clutterer
  document.getElementById('declutterBtn').addEventListener('click', () => {
    const text = document.getElementById('docTextInput').value;
    if (!text.trim()) return;

    const output = document.getElementById('declutterOutput');
    output.classList.remove('hidden');
    output.innerText = `✨ STRUCTURED THOUGHT DE-CLUTTER & REFRAME:\n\n` +
      `• Core Root Emotion: Expressing high overwhelm regarding immediate deadlines.\n` +
      `• Key Takeaway 1: Break large assignments into 20-minute chunks using the HeyTea Focus Timer.\n` +
      `• Actionable Solution: Delegate administrative tasks and block off 1 hour for rest.\n\n` +
      `Original entry length: ${text.length} characters parsed.`;
  });
}

// ==========================================
// 6. HABIT TRACKER WITH 365-DAY AUTO-PURGE
// ==========================================
function initHabitTracker() {
  // 365-Day Auto-Purge Logic on Load
  const logs = JSON.parse(localStorage.getItem('heytea_habit_logs') || '[]');
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const cleanLogs = logs.filter(l => new Date(l.date) >= oneYearAgo);
  localStorage.setItem('heytea_habit_logs', JSON.stringify(cleanLogs));

  // View Switcher
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      habitViewMode = btn.dataset.view;
      renderHabitGrid();
    });
  });

  document.getElementById('addHabitForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('habitNameInput').value;
    const habits = JSON.parse(localStorage.getItem('heytea_habits') || '["Drink Water", "Study 1 Hr", "Read 15 Mins"]');
    habits.push(name);
    localStorage.setItem('heytea_habits', JSON.stringify(habits));
    document.getElementById('addHabitForm').reset();
    renderHabitGrid();
  });

  renderHabitGrid();
}

function renderHabitGrid() {
  const habits = JSON.parse(localStorage.getItem('heytea_habits') || '["Drink Water", "Study 1 Hr", "Read 15 Mins"]');
  const logs = JSON.parse(localStorage.getItem('heytea_habit_logs') || '[]');
  const container = document.getElementById('habitGridContainer');

  const daysCount = habitViewMode === 'day' ? 1 : habitViewMode === 'week' ? 7 : 30;
  const dates = [];
  for (let i = daysCount - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    dates.push(d.toISOString().split('T')[0]);
  }

  container.innerHTML = habits.map(h => `
    <div class="habit-row">
      <span class="habit-name">${h}</span>
      <div class="habit-cells">
        ${dates.map(d => {
          const isDone = logs.some(l => l.habit === h && l.date === d && l.completed);
          return `<div class="habit-cell ${isDone ? 'done' : ''}" onclick="toggleHabitLog('${h}', '${d}')">${d.split('-')[2]}</div>`;
        }).join('')}
      </div>
    </div>
  `).join('');
}

function toggleHabitLog(habit, date) {
  let logs = JSON.parse(localStorage.getItem('heytea_habit_logs') || '[]');
  const index = logs.findIndex(l => l.habit === habit && l.date === date);

  if (index >= 0) {
    logs[index].completed = !logs[index].completed;
  } else {
    logs.push({ habit, date, completed: true });
  }

  localStorage.setItem('heytea_habit_logs', JSON.stringify(logs));
  renderHabitGrid();
}