function convertTemperature() {
    const conversionType = prompt("Enter conversion type (1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius):");
    const temperature = parseFloat(prompt("Enter the temperature value:"));

    // Validate if the input is within the freezing and boiling point range
    if (temperature < 0 || temperature > 100) {
        console.log("Please enter a temperature within the range of 0°C/32°F to 100°C/212°F.");
        return;
    }

    let result;
    switch (conversionType) {
        case '1': // Celsius to Fahrenheit
            result = (temperature * 9/5) + 32;
            console.log(`${temperature}°C is equal to ${result}°F`);
            break;

        case '2': // Fahrenheit to Celsius
            result = (temperature - 32) * 5/9;
            console.log(`${temperature}°F is equal to ${result}°C`);
            break;

        default:
            console.log("Invalid conversion type. Please choose 1 for Celsius to Fahrenheit or 2 for Fahrenheit to Celsius.");
            break;
    }
}

// Call the function to start the conversion process
convertTemperature();
