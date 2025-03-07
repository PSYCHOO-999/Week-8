const day = parseInt(process.argv[2]);
const month = parseInt(process.argv[3]);

console.log("Day:", day);
console.log("Month:", month);

// Function to check if the given date is between March 20 and June 20
function isBetweenMarch20AndJune20(day, month) {
    if (isNaN(day) || isNaN(month)) {
        return false; // If day or month is NaN, return false
    }

    if (month < 3 || month > 6) {
        return false; // If month is outside of March to June
    }

    if (month === 3 && day >= 20) {
        return true; // March 20 or later
    }

    if (month === 6 && day <= 20) {
        return true; // June 20 or earlier
    }

    // For April and May (months 4 and 5), the day is always valid
    if (month > 3 && month < 6) {
        return true; // Any day in April or May
    }

    return false;
}

// Call the function and print the result
console.log(isBetweenMarch20AndJune20(day, month));
