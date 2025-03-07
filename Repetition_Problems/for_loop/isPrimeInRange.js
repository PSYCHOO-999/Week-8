// Function to check if a number is prime
function isPrime(number) {
    // If the number is less than 2, it is not prime
    if (number <= 1) {
      return false;
    }
  
    // Check divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;  // If divisible by any number, it's not prime
      }
    }
  
    return true;  // If no divisors found, the number is prime
  }
  
  // Function to find and print primes in the range [start, end]
  function printPrimesInRange(start, end) {
    let primes = [];
    
    // Loop through the range and check if each number is prime
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);  // Add prime numbers to the primes array
      }
    }
    
    // If no primes were found, print a message
    if (primes.length === 0) {
      console.log(`No prime numbers found in the range ${start} to ${end}.`);
    } else {
      console.log(`Prime numbers in the range ${start} to ${end}:`);
      console.log(primes.join(", "));
    }
  }
  
  // Read the input from command-line arguments
  if (process.argv.length < 4) {
    console.log("Please provide two numbers to define the range.");
  } else {
    let start = parseInt(process.argv[2]);
    let end = parseInt(process.argv[3]);
  
    // Check if the inputs are valid numbers
    if (isNaN(start) || isNaN(end) || start > end) {
      console.log("Please enter valid numbers for the range (start <= end).");
    } else {
      // Call the function to print primes in the range
      printPrimesInRange(start, end);
    }
  }
  