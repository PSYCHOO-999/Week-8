// Function to convert the number to its place value
function displayPlaceValue(number) {
  if (number === 1) {
    console.log("Unit");
  } else if (number === 10) {
    console.log("Ten");
  } else if (number === 100) {
    console.log("Hundred");
  } else if (number === 1000) {
    console.log("Thousand");
  } else if (number === 10000) {
    console.log("Ten Thousand");
  } else if (number === 100000) {
    console.log("Hundred Thousand");
  } else if (number === 1000000) {
    console.log("Million");
  } else {
    console.log("Invalid input! Please enter a valid power of 10.");
  }
}

// Check if an argument was passed
if (process.argv.length < 3) {
  console.log("Please provide a valid number (1, 10, 100, 1000, ...).");
} else {
  // Get the argument from process.argv
  let number = parseInt(process.argv[2]);

  // Call the function with the user input
  displayPlaceValue(number);
}
