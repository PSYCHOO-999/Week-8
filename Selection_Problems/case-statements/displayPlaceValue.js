// Function to display the place value for numbers like 1, 10, 100, 1000, etc.
function displayPlaceValue(number) {
    switch(number) {
      case 1:
        console.log("Unit");
        break;
      case 10:
        console.log("Ten");
        break;
      case 100:
        console.log("Hundred");
        break;
      case 1000:
        console.log("Thousand");
        break;
      case 10000:
        console.log("Ten Thousand");
        break;
      case 100000:
        console.log("Hundred Thousand");
        break;
      case 1000000:
        console.log("Million");
        break;
      default:
        console.log("Invalid input! Please enter a valid power of 10 (1, 10, 100, 1000, ...).");
    }
  }
  
  // Read the number from command-line arguments
  if (process.argv.length < 3) {
    console.log("Please provide a valid number (1, 10, 100, 1000, ...).");
  } else {
    let number = parseInt(process.argv[2]);
  
    // Call the function with the user input
    displayPlaceValue(number);
  }
  