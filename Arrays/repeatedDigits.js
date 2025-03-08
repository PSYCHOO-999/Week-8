function findRepeatedDigitNumbers(start, end) {
    let result = [];

    for (let i = start; i <= end; i++) {
        let strNum = i.toString();
        if (strNum.length === 2 && strNum[0] === strNum[1]) {
            result.push(i);
        }
    }

    return result;
}

let repeatedNumbers = findRepeatedDigitNumbers(0, 100);
console.log("Numbers with repeated digits:", repeatedNumbers);
