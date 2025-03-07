function printPowersOf2(n) {
    let num = parseInt(n, 10); // Convert the argument to an integer

    if (isNaN(num) || num < 0) {
        console.log("Please enter a valid positive integer for n.");
    } else {
        let power = 1; // Start with 2^0 which is 1
        while (power <= 256 && power <= Math.pow(2, num)) {
            console.log(`2^${Math.log2(power)} = ${power}`);
            power *= 2; // Multiply by 2 to get the next power of 2
        }
    }
}

// Function call
let n = process.argv[2]; // Get the argument passed to the script
printPowersOf2(n);
