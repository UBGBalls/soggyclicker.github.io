let clicks = 0;
let clickPerClick = 1;
let lastClickTime = 0;

const clickButton = document.getElementById("click-button");
const clickDisplay = document.getElementById("clicks");
const upgradeButton = document.getElementById("upgrade-button");

upgradeButton.addEventListener("click", buyUpgrade);

clickButton.addEventListener("click", () => {
  const currentTime = Date.now();
  const clickSpeed = 1000 / (currentTime - lastClickTime); // Milliseconds between clicks
  lastClickTime = currentTime;

  clicks += clickPerClick;
  clickDisplay.textContent = clicks;
  checkUpgradeAvailability();

  // Update button rotation based on click speed (capped at 3 rotations/second)
  clickButton.style.transform = `rotate(${Math.min(clickSpeed * 3, 360)}deg)`;
});

function buyUpgrade() {
  // ... (same logic as before)
}

function checkUpgradeAvailability() {
  // ... (same logic as before)
}
