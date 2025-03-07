// Function to calculate the results of the arithmetic operations
function calculateOperations(a, b, c) {
    let result1 = a + (b * c);         // a + b * c
    let result2 = (a % b) + c;         // a % b + c
    let result3 = c + (a / b);         // c + a / b
    let result4 = (a * b) + c;         // a * b + c
  
    // Find the maximum and minimum results
    let results = [result1, result2, result3, result4];
    let maxResult = Math.max(...results);
    let minResult = Math.min(...results);
  
    // Display results
    console.log(`Results of operations:`);
    console.log(`1. a + b * c = ${result1}`);
    console.log(`2. a % b + c = ${result2}`);
    console.log(`3. c + a / b = ${result3}`);
    console.log(`4. a * b + c = ${result4}`);
  
    console.log(`\nMaximum result: ${maxResult}`);
    console.log(`Minimum result: ${minResult}`);
  }
  
  // Read the input from command line arguments
  if (process.argv.length < 5) {
    console.log("Please provide 3 numbers as arguments.");
  } else {
    let a = parseInt(process.argv[2]);
    let b = parseInt(process.argv[3]);
    let c = parseInt(process.argv[4]);
  
    // Call the function with the input numbers
    calculateOperations(a, b, c);
  }
  