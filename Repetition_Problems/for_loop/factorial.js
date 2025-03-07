// Function to calculate the factorial of a number
function factorial(n) {
    if (n < 0) {
      console.log("Factorial is not defined for negative numbers.");
      return;
    }
  
    let result = 1;
  
    // Loop to calculate factorial
    for (let i = 1; i <= n; i++) {
      result *= i;  // Multiply the result by i for each iteration
    }
  
    return result;
  }
  
  // Read the input from command-line arguments
  if (process.argv.length < 3) {
    console.log("Please provide a number to calculate the factorial.");
  } else {
    let num = parseInt(process.argv[2]);
  
    // Check if the input is a valid number
    if (isNaN(num) || num < 0) {
      console.log("Please enter a valid positive number.");
    } else {
      let result = factorial(num);
      console.log(`${num}! = ${result}`);
    }
  }
  