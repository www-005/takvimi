const prayerData = {
  "imsaku": "04:55",
  "sabahu": "05:10",
  "dreka": "12:20",
  "ikindia": "15:45",
  "akshami": "18:10",
  "jacia": "19:30"
};

const prayerOrder = ["imsaku", "sabahu", "dreka", "ikindia", "akshami", "jacia"];
const prayerNames = {
  imsaku: "Imsaku",
  sabahu: "Sabahu",
  dreka: "Dreka",
  ikindia: "Ikindia",
  akshami: "Akshami",
  jacia: "Jacia"
};

const prayerList = document.getElementById('prayer-list');
prayerOrder.forEach(key => {
  const li = document.createElement('li');
  li.textContent = `${prayerNames[key]}: ${prayerData[key]}`;
  prayerList.appendChild(li);
});

// Sidebar toggle
const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('close-sidebar');

burger.addEventListener('click', () => sidebar.style.left = '0px');
closeSidebar.addEventListener('click', () => sidebar.style.left = '-320px');

// Menu items me imazhe
document.getElementById('monthly-times').addEventListener('click', () => showImage('images/monthly_prayer.png'));
document.getElementById('special-days').addEventListener('click', () => showImage('images/special_days.png'));
document.getElementById('imsakije').addEventListener('click', () => showImage('imsaku.png'));

function showImage(src) {
  const display = document.getElementById('display-image');
  const img = document.getElementById('menu-image');
  img.src = src;
  display.style.display = 'block';
  display.style.opacity = 0;
  setTimeout(() => display.style.opacity = 1, 50);
}

// Llogarit data dhe ditën automatikisht
function updateDate() {
  const now = new Date();
  const days = ["E Diel", "E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"];
  const dayName = days[now.getDay()];
  const gregorian = now.toLocaleDateString('sq-AL');
  
  const hijriYear = 1447;
  const hijriMonth = "Ramazan";
  const hijriDay = 16;

  document.getElementById('date-info').textContent = 
    `Data: ${gregorian}`;
  document.getElementById('date-info').textContent = 
    `Hijr: ${hijriDay} ${hijriMonth} ${hijriYear}`;
    document.getElementById('date-info').textContent = 
`${dayName}`;
}

updateDate();
