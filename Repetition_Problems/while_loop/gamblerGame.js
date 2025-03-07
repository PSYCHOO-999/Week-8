function gamblerGame() {
    let balance = 100;  // Gambler starts with Rs 100
    let goal = 200;     // Gambler's goal is Rs 200
    let betAmount = 1;  // Each bet is Re 1
    let wins = 0;       // Track number of wins
    let betsMade = 0;   // Track number of bets made

    // Continue until the gambler either goes broke or reaches the goal
    while (balance > 0 && balance < goal) {
        // Simulate a coin flip for the bet (50% win chance)
        let outcome = Math.random() < 0.5 ? "win" : "lose";

        betsMade++;  // Increment the number of bets made

        if (outcome === "win") {
            balance += betAmount;  // Increase balance by Rs 1 on win
            wins++;                // Increment the number of wins
        } else {
            balance -= betAmount;  // Decrease balance by Rs 1 on loss
        }

        // Print current status after each bet
        console.log(`Bet ${betsMade}: Outcome - ${outcome}, Balance: Rs ${balance}`);
    }

    // Output the result after the game ends
    if (balance >= goal) {
        console.log(`Gambler reached the goal of Rs 200!`);
    } else {
        console.log(`Gambler went broke with Rs 0!`);
    }
    console.log(`Total Bets Made: ${betsMade}`);
    console.log(`Total Wins: ${wins}`);
}

// Start the gambling game
gamblerGame();
