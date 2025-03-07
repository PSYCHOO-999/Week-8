// Function to convert a number to a word
function numberToWord(num) {
    if (num === 0) {
      console.log("Zero");
    } else if (num === 1) {
      console.log("One");
    } else if (num === 2) {
      console.log("Two");
    } else if (num === 3) {
      console.log("Three");
    } else if (num === 4) {
      console.log("Four");
    } else if (num === 5) {
      console.log("Five");
    } else if (num === 6) {
      console.log("Six");
    } else if (num === 7) {
      console.log("Seven");
    } else if (num === 8) {
      console.log("Eight");
    } else if (num === 9) {
      console.log("Nine");
    } else {
      console.log("Invalid input! Please enter a single digit number.");
    }
  }
  
  // Check if an argument was passed
  if (process.argv.length < 3) {
    console.log("Please provide a single digit number as an argument.");
  } else {
    // Get the argument from process.argv
    let num = parseInt(process.argv[2]);
  
    // Call the function with the user input
    numberToWord(num);
  }
  