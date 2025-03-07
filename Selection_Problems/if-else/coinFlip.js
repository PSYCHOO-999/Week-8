// Function to simulate a coin flip
function coinFlip() {
    // Generate a random number (0 or 1)
    const flip = Math.floor(Math.random() * 2);  // 0 for Heads, 1 for Tails

    // Print the result based on the random number
    if (flip === 0) {
        console.log("Heads");
    } else {
        console.log("Tails");
    }
}

// Call the coin flip function
coinFlip();
