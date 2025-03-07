// Function to perform unit conversions
function unitConversion(value, conversionType) {
    let result;
  
    switch(conversionType) {
      case 'feet-to-inch':
        result = value * 12;  // 1 foot = 12 inches
        console.log(`${value} Feet = ${result} Inches`);
        break;
        
      case 'inch-to-feet':
        result = value / 12;  // 1 foot = 12 inches
        console.log(`${value} Inches = ${result} Feet`);
        break;
        
      case 'feet-to-meter':
        result = value * 0.3048;  // 1 foot = 0.3048 meters
        console.log(`${value} Feet = ${result} Meters`);
        break;
        
      case 'meter-to-feet':
        result = value * 3.28084;  // 1 meter = 3.28084 feet
        console.log(`${value} Meters = ${result} Feet`);
        break;
        
      default:
        console.log("Invalid conversion type. Please select a valid conversion.");
        break;
    }
  }
  
  // Read the inputs from command-line arguments
  if (process.argv.length < 4) {
    console.log("Usage: node unitConversion.js <value> <conversionType>");
    console.log("Example conversions: feet-to-inch, inch-to-feet, feet-to-meter, meter-to-feet");
  } else {
    let value = parseFloat(process.argv[2]);
    let conversionType = process.argv[3].toLowerCase();  // Convert conversionType to lowercase
  
    // Call the function with the user inputs
    unitConversion(value, conversionType);
  }
  