function flipCoin() {
    let headsCount = 0;
    let tailsCount = 0;

    // Continue flipping until either heads or tails wins 11 times
    while (headsCount < 11 && tailsCount < 11) {
        // Simulate a coin flip (randomly choose 0 or 1)
        let flip = Math.random() < 0.5 ? "Heads" : "Tails";

        if (flip === "Heads") {
            headsCount++;
        } else {
            tailsCount++;
        }

        // Print the current counts (optional, for visual feedback)
        console.log(`Heads: ${headsCount} - Tails: ${tailsCount}`);
    }

    // Declare the winner
    if (headsCount === 11) {
        console.log("Heads wins 11 times!");
    } else {
        console.log("Tails wins 11 times!");
    }
}

// Start the game
flipCoin();
