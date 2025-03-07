function isPalindrome(num) {
    // Convert the number to a string
    const str = num.toString();

    // Reverse the string and compare it with the original string
    const reversedStr = str.split('').reverse().join('');
    
    // Return true if they are the same, false otherwise
    return str === reversedStr;
}

function checkTwoNumbersArePalindromes(num1, num2) {
    // Check if both numbers are palindromes
    const isNum1Palindrome = isPalindrome(num1);
    const isNum2Palindrome = isPalindrome(num2);

    if (isNum1Palindrome && isNum2Palindrome) {
        console.log(`${num1} and ${num2} are both palindromes.`);
    } else if (isNum1Palindrome) {
        console.log(`${num1} is a palindrome, but ${num2} is not.`);
    } else if (isNum2Palindrome) {
        console.log(`${num2} is a palindrome, but ${num1} is not.`);
    } else {
        console.log(`${num1} and ${num2} are not palindromes.`);
    }
}

// Example usage:
checkTwoNumbersArePalindromes(121, 12321); // Both numbers are palindromes
checkTwoNumbersArePalindromes(123, 121);   // 121 is a palindrome, but 123 is not
checkTwoNumbersArePalindromes(123, 456);   // Neither are palindromes
