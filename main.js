const clickCount = 0;
const spinSpeed = 0;
let spinning = false;
const upgradeLevel = 0;
let upgradeCost = 10;
const clickMultiplier = 1; // new variable to keep track of the click multiplier

// Event listeners
document.getElementById('clicker-image').addEventListener('click', handleClick);
document.getElementById('upgrade-button').addEventListener('click', handleUpgrade);

// Functions
function handleClick() {
    clickCount += clickMultiplier; // increase click count by the click multiplier
    document.getElementById('click-count').innerText = 'Click count: ' + clickCount;

    // increase spin speed
    spinSpeed -= 5; // increase the decrement value to make the spin faster
    this.style.transform = `rotate(${spinSpeed}deg)`;
    spinning = true;
    spin();
}

function handleUpgrade() {
    if (clickCount >= upgradeCost) {
        clickCount -= upgradeCost;
        document.getElementById('click-count').innerText = 'Click count: ' + clickCount;
        upgradeLevel++;
        document.getElementById('upgrade-count').innerText = 'Upgrades: ' + upgradeLevel;
        upgradeCost *= 2; // increase the cost of the next upgrade
        document.getElementById('upgrade-button').innerText = `Upgrade (Cost: ${upgradeCost} clicks)`;
        // apply upgrade effects
        clickMultiplier += Math.pow(2, upgradeLevel); // increase click multiplier exponentially
        // you can adjust the exponent to change the rate of increase
    }
}

function spin() {
    if (spinning) {
        let currentRotation = parseInt(document.getElementById('clicker-image').style.transform.split('(')[1].split('deg')[0]);
        document.getElementById('clicker-image').style.transform = `rotate(${currentRotation + spinSpeed}deg)`;
        requestAnimationFrame(spin);
    } else {
        setTimeout(() => {
            let currentRotation = parseInt(document.getElementById('clicker-image').style.transform.split('(')[1].split('deg')[0]);
            spinSpeed += 2; // increase the increment value
            if (spinSpeed > 0) {
                spinning = true;
                spin();
            }
