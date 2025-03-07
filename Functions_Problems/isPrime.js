// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) { // Check divisibility up to the square root of num
        if (num % i === 0) return false; // If divisible by any number other than 1 and itself, it's not prime
    }
    return true; // If no divisor found, it's prime
}

// Function to get the palindrome of a number
function getPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join(''); // Reverse the string representation of the number
    return parseInt(reversedStr); // Convert the reversed string back to an integer
}

// Main function to check if the number and its palindrome are prime
function checkPrimeAndPalindrome() {
    const num = parseInt(prompt("Enter a number:")); // Take input from the user

    // Check if the number is prime
    if (isPrime(num)) {
        console.log(`${num} is a prime number.`);

        // Get the palindrome of the number
        const palindrome = getPalindrome(num);
        console.log(`The palindrome of ${num} is ${palindrome}.`);

        // Check if the palindrome is prime
        if (isPrime(palindrome)) {
            console.log(`The palindrome ${palindrome} is also a prime number.`);
        } else {
            console.log(`The palindrome ${palindrome} is not a prime number.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

// Call the function to check the prime and palindrome status
checkPrimeAndPalindrome();
