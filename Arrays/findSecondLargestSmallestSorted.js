function generateRandomNumbers(count, min, max) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

function findSecondLargestSmallest(arr) {
    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }
    return { secondLargest, secondSmallest };
}

function findSecondLargestSmallestSorted(arr) {
    let sortedArr = [...arr].sort((a, b) => a - b);
    return { secondLargest: sortedArr[sortedArr.length - 2], secondSmallest: sortedArr[1] };
}

let randomNumbers = generateRandomNumbers(10, 100, 999);
console.log("Generated Numbers:", randomNumbers);

let resultUnsorted = findSecondLargestSmallest(randomNumbers);
console.log("Without Sorting:", resultUnsorted);

let resultSorted = findSecondLargestSmallestSorted(randomNumbers);
console.log("With Sorting:", resultSorted);
