// Function to calculate and print the nth harmonic number
function harmonicNumber(n) {
    let harmonicSum = 0;
    let harmonicSeries = [];  // To store the individual terms of the harmonic series
  
    // Loop to calculate the harmonic sum and store each term in the series
    for (let i = 1; i <= n; i++) {
      harmonicSum += 1 / i;
      harmonicSeries.push(`1/${i}`);  // Store each term in the form 1/i
    }
  
    // Print the harmonic series as a sum
    let seriesString = harmonicSeries.join(' + ');  // Join the terms with ' + ' separator
    console.log(`H_${n} = ${seriesString}`);
  
    // Return the sum
    return harmonicSum;
  }
  
  // Read the input from command-line arguments
  if (process.argv.length < 3) {
    console.log("Please provide a number n to calculate the nth harmonic number.");
  } else {
    let n = parseInt(process.argv[2]);
    
    // Check if the input is valid (greater than 0)
    if (n <= 0 || isNaN(n)) {
      console.log("Please enter a positive integer for n.");
    } else {
      let result = harmonicNumber(n);
      console.log(`The ${n}th Harmonic Number is: ${result}`);
    }
  }
  