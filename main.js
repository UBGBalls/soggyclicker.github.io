let clickCount = 0;
let clickMultiplier = 1;
let upgradeCost = 10;

const clicker = document.getElementById('clicker');
const clickCountEl = document.getElementById('click-count');
const upgrade = document.getElementById('upgrade');
const upgradeCostEl = document.getElementById('upgrade-cost');

clicker.addEventListener('click', () => {
    clickCount += clickMultiplier;
    clickCountEl.textContent = clickCount;
});

upgrade.addEventListener('click', () => {
    if (clickCount >= upgradeCost) {
        clickMultiplier++;
        clickCount -= upgradeCost;
        upgradeCost *= 2;
        clickCountEl.textContent = clickCount;
        upgradeCostEl.textContent = upgradeCost;
    }
});

setInterval(() => {
    clickCount += clickMultiplier;
    clickCountEl.textContent = clickCount;
}, 1000);

clickCountEl.textContent = clickCount;
upgradeCostEl.textContent = upgradeCost;
