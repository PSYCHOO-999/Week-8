// Function to compute the prime factors of a number N
function primeFactors(N) {
    // First, handle the smallest prime factor (2)
    while (N % 2 === 0) {
      console.log(2); // Print the factor 2
      N /= 2;         // Divide N by 2 until it's no longer divisible by 2
    }
  
    // Now check for odd factors from 3 upwards
    for (let i = 3; i * i <= N; i += 2) {
      while (N % i === 0) {
        console.log(i); // Print the prime factor i
        N /= i;         // Divide N by i until it's no longer divisible by i
      }
    }
  
    // If N is still greater than 2, it means N is prime
    if (N > 2) {
      console.log(N); // N itself is prime
    }
  }
  
  // Read the input from command-line arguments
  if (process.argv.length < 3) {
    console.log("Please provide a number to find its prime factors.");
  } else {
    let num = parseInt(process.argv[2]);
  
    // Check if the input is a valid number
    if (isNaN(num) || num <= 1) {
      console.log("Please enter a valid positive integer greater than 1.");
    } else {
      console.log(`Prime factors of ${num} are:`);
      primeFactors(num);
    }
  }
  