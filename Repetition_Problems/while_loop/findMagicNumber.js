function findMagicNumber(targetNumber) {
    if (isNaN(targetNumber) || targetNumber < 1 || targetNumber > 100) {
        console.log("Please provide a valid number between 1 and 100.");
        return;
    }

    let low = 1;
    let high = 100;
    let guess;
    let attempts = 0;

    console.log("I will guess the number you're thinking of between 1 and 100.");

    // Simulate binary search for the magic number
    while (low <= high) {
        guess = Math.floor((low + high) / 2);
        attempts++;

        if (guess === targetNumber) {
            console.log(`Yay! The magic number is ${guess}. It took me ${attempts} attempts.`);
            return;
        } else if (guess < targetNumber) {
            low = guess + 1;
        } else {
            high = guess - 1;
        }
    }

    console.log("The number is not within the range. Please enter a valid number.");
}

// Get the target number from command-line arguments
let targetNumber = parseInt(process.argv[2], 10);  // Command-line argument for the magic number

findMagicNumber(targetNumber);
