// Get the clicker image and point count element
const clickerImage = document.getElementById("clickerImage");
const pointCountElement = document.getElementById("pointCount");

// Initialize the point count to 0
let pointCount = 0;

// Add a click event listener to the clicker image
clickerImage.addEventListener("click", () => {
  // Increment the point count
  pointCount++;

  // Update the point count element text content
  pointCountElement.textContent = `Points: ${pointCount}`;
});
