function getPrimeFactors(n) {
    let factors = [];
    
    for (let i = 2; i * i <= n; i++) {
        while (n % i === 0) {
            factors.push(i);
            n /= i;
        }
    }
    
    if (n > 1) {
        factors.push(n);
    }
    
    return factors;
}

let number = 84;  // Change this number to test with different inputs
let primeFactors = getPrimeFactors(number);

console.log(`Prime Factors of ${number}:`, primeFactors);
