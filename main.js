let clicks = 0;

document.getElementById('cat').addEventListener('click', function() {
    clicks++;
    document.getElementById('clicks').innerText = clicks;
});



let score = 0;
let velocity = 0;
let velocityThreshold = 10;
let upgradeMultiplier = 1;
let rotationSpeed = 0;

const clickableImage = document.getElementById("clickableImage");
const upgradeButton = document.getElementById("upgradeButton");
const scoreElement = document.getElementById("score");
const velocityElement = document.getElementById("velocity");

clickableImage.onclick = function() {
  score += 1 * upgradeMultiplier;
  velocity += 1;
  scoreElement.textContent = score;
  velocityElement.textContent = velocity;

  rotationSpeed += 1;

  if (velocity >= velocityThreshold) {
    clickableImage.style.position = "absolute";
    clickableImage.style.top = "50%";
    clickableImage.style.left = "50%";
    clickableImage.style.transform = "translate(-50%, -50%) rotate(360deg)";
    velocityThreshold += 10;
  }

  for (let i = 0; i < 5; i++) {
    const smallImage = document.createElement("img");
    smallImage.src = "smallImage.png";
    smallImage.style.position = "absolute";
    smallImage.style.top = Math.random() * window.innerHeight + "px";
    smallImage.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(smallImage);
  }
};

upgradeButton.onclick = function() {
  upgradeMultiplier *= 2;
};

setInterval(function() {
  clickableImage.style.transform = "rotate(" + rotationSpeed + "deg)";
}, 100);
