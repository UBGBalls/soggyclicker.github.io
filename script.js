const scoreElement = document.getElementById("score");
const catImage = document.getElementById("cat-image");
const upgradeButton = document.getElementById("upgrade-button");

let score = 0;
let autoClicker = false;

function clickCat() {
  score++;
  scoreElement.textContent = `Score: ${score}`;
}

function autoClick() {
  if (autoClicker) {
    clickCat();
    setTimeout(autoClick, 1000); // Click every second
  }
}

catImage.addEventListener("click", clickCat);

upgradeButton.addEventListener("click", () => {
  if (score >= 10) {
    score -= 10;
    scoreElement.textContent = `Score: ${score}`;
    autoClicker = true;
    upgradeButton.textContent = "Autoclicker (Active)";
    upgradeButton.disabled = true;
    autoClick();
  }
});
