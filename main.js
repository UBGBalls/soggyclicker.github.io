// Get the clicker image and point count element
const clickerImage = document.getElementById("clickimage");
const pointCountElement = document.getElementById("score");

// Initialize the point count to 0
let pointCount = 0;

// Initialize the upgrade levels
let upgrade1Level = 0;
let upgrade2Level = 0;
let upgrade3Level = 0;
let upgrade4Level = 0;
let upgrade5Level = 0;
let upgrade6Level = 0;
let upgrade7Level = 0;
let upgrade8Level = 0;

// Initialize the upgrade costs
const upgrade1Cost = 10;
const upgrade2Cost = 50;
const upgrade3Cost = 400;
const upgrade4Cost = 1000;
const upgrade5Cost = 2500;
const upgrade6Cost = 32000;
const upgrade7Cost = 640000;
const upgrade8Cost = 1000000;

// Initialize the upgrade point values
const upgrade1Points = 1;
const upgrade2Points = 2;
const upgrade3Points = 4;
const upgrade4Points = 8;
const upgrade5Points = 16;
const upgrade6Points = 32;
const upgrade7Points = 64;
const upgrade8Points = 128;

// Add a click event listener to the clicker image
clickerImage.addEventListener("click", () => {
  // Calculate the points earned based on the upgrade levels
  let pointsEarned = 0;
  if (upgrade1Level > 0) pointsEarned += upgrade1Points;
  if (upgrade2Level > 0) pointsEarned += upgrade2Points;
  if (upgrade3Level > 0) pointsEarned += upgrade3Points;
  if (upgrade4Level > 0) pointsEarned += upgrade4Points;
  if (upgrade5Level > 0) pointsEarned += upgrade5Points;
  if (upgrade6Level > 0) pointsEarned += upgrade6Points;
  if (upgrade7Level > 0) pointsEarned += upgrade7Points;
  if (upgrade8Level > 0) pointsEarned += upgrade8Points;

  // Increment the point count
  pointCount += pointsEarned;

  // Update the point count element text content
  pointCountElement.textContent = `SogCoins: ${pointCount}`;
});

// Add event listeners to the upgrade buttons
document.getElementById("upgrade1").addEventListener("click", () => {
  if (pointCount >= upgrade1Cost) {
    pointCount -= upgrade1Cost;
    upgrade1Level++;
    pointCountElement.textContent = `SogCoins: ${pointCount}`;
  }
});

document.getElementById("upgrade2").addEventListener("click", () => {
  if (pointCount >= upgrade2Cost) {
    pointCount -= upgrade2Cost;
    upgrade2Level++;
    pointCountElement.textContent = `SogCoins: ${pointCount}`;
  }
});

document.getElementById("upgrade3").addEventListener("click", () => {
  if (pointCount >= upgrade3Cost) {
    pointCount -= upgrade3Cost;
    upgrade3Level++;
    pointCountElement.textContent = `SogCoins: ${pointCount}`;
  }
});

document.getElementById("upgrade4").addEventListener("click", () => {
  if (pointCount >= upgrade4Cost) {
    pointCount -= upgrade4Cost;
    upgrade4Level++;
    pointCountElement.textContent = `SogCoins: ${pointCount}`;
  }
});

document.getElementById("upgrade5").addEventListener("click", () => {
  if (pointCount >= upgrade5Cost) {
    pointCount -= upgrade5Cost;
    upgrade5Level++;
    pointCountElement.textContent = `SogCoins: ${pointCount}`;
  }
});

document.getElementById("upgrade6").addEventListener("click", () => {
  if (pointCount >= upgrade6Cost) {
    pointCount -= upgrade6Cost;
    upgrade6Level++;
    pointCountElement.textContent = `SogCoins: ${pointCount}`;
  }
});
