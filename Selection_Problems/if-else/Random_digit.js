let randomNumbers = [];

for (let i = 0; i < 5; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100; 
    randomNumbers.push(randomNum);
}

let minValue = Math.min(...randomNumbers);
let maxValue = Math.max(...randomNumbers);

console.log("Random 3-digit values:", randomNumbers);
console.log("Minimum value:", minValue);
console.log("Maximum value:", maxValue);
