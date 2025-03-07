// Function to convert a number (1-7) to the corresponding day of the week
function getDayOfWeek(dayNumber) {
    switch(dayNumber) {
      case 1:
        console.log("Sunday");
        break;
      case 2:
        console.log("Monday");
        break;
      case 3:
        console.log("Tuesday");
        break;
      case 4:
        console.log("Wednesday");
        break;
      case 5:
        console.log("Thursday");
        break;
      case 6:
        console.log("Friday");
        break;
      case 7:
        console.log("Saturday");
        break;
      default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
    }
  }
  
  // Take user input from command-line arguments
  if (process.argv.length < 3) {
    console.log("Please provide a number between 1 and 7.");
  } else {
    let dayNumber = parseInt(process.argv[2]);
  
    // Call the function with the user input
    getDayOfWeek(dayNumber);
  }
  