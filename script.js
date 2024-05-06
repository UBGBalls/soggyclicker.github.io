let points = 0;
let spinSpeed = 0;
const clickerButton = document.getElementById('clicker');
const pointsDisplay = document.getElementById('points');

clickerButton.addEventListener('click', function() {
  points++; // Increase points
  pointsDisplay.textContent = points; // Update points display
  
  // Increase spin speed and apply spinning effect
  spinSpeed += 0.1; // Increase the speed with each click
  clickerButton.style.transform = `rotate(${spinSpeed * 360}deg)`;
  
  // Add spinning class if not already present
  if (!clickerButton.classList.contains('spinning')) {
    clickerButton.classList.add('spinning');
  }
  
  // Reset the animation to allow for a continuous spin effect
  clickerButton.style.animationDuration = `${Math.max(0.2 - spinSpeed, 0.05)}s`;
});

// Optioal: Reset spin on animation iteration
clickerButton.addEventListener('animationiteration', function() {
  if (spinSpeed > 0.2) {
    clickerButton.style.animationDuration = `${Math.max(0.2 - spinSpeed, 0.05)}s`;
  } else {
    clickerButton.classList.remove('spinning');
  }
});
