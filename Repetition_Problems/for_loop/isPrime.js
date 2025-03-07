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
  
  // Read the input from command-line arguments
  if (process.argv.length < 3) {
    console.log("Please provide a number to check if it is prime.");
  } else {
    let num = parseInt(process.argv[2]);
  
    // Check if the input is a valid number
    if (isNaN(num)) {
      console.log("Please enter a valid number.");
    } else {
      // Call the function and print whether the number is prime
      if (isPrime(num)) {
        console.log(`${num} is a prime number.`);
      } else {
        console.log(`${num} is not a prime number.`);
      }
    }
  }
  