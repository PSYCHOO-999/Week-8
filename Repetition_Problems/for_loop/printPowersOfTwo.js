// Function to print powers of 2 less than or equal to 2^n
function printPowersOfTwo(n) {
    // Loop from 0 to n and print 2^i for each i
    for (let i = 0; i <= n; i++) {
      let powerOfTwo = Math.pow(2, i);  // Calculate 2^i
      console.log(`2^${i} = ${powerOfTwo}`);
    }
  }
  
  // Read the input from command-line arguments
  if (process.argv.length < 3) {
    console.log("Please provide a number n to print powers of 2 up to 2^n.");
  } else {
    let n = parseInt(process.argv[2]);
  
    // Call the function with the user input
    printPowersOfTwo(n);
  }
  