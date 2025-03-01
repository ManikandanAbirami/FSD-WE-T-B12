let count = 0; // Initialize the counter

function updateCounter() {
  count++; // Increment the counter
  console.log(count); // Update the display with the new count
}

// Set up the interval to update the counter every 1000 milliseconds (1 second)
setInterval(updateCounter, 1000);
