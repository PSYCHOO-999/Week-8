// Read the year from the command line
const year = parseInt(process.argv[2]);

// Function to check if the year is a leap year
function isLeapYear(year) {
    if (isNaN(year)) {
        return "Please enter a valid year.";
    }

    // Check if the year is a 4-digit number
    if (year < 1000 || year > 9999) {
        return "Please enter a 4-digit year.";
    }

    // Check the leap year conditions
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "The year " + year + " is a Leap Year.";
    } else {
        return "The year " + year + " is not a Leap Year.";
    }
}

// Output the result
console.log(isLeapYear(year));
