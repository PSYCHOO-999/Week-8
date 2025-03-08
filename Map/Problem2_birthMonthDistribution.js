function generateBirthMonths(count) {
    let birthMonths = {};

    for (let i = 1; i <= 12; i++) {
        birthMonths[i] = [];
    }

    for (let i = 1; i <= count; i++) {
        let month = Math.floor(Math.random() * 12) + 1;
        birthMonths[month].push(i);
    }

    return birthMonths;
}

let birthMonthData = generateBirthMonths(50);

console.log("Individuals grouped by birth month:");
for (let month in birthMonthData) {
    if (birthMonthData[month].length > 0) {
        console.log(`Month ${month}: Individuals ${birthMonthData[month].join(", ")}`);
    }
}
