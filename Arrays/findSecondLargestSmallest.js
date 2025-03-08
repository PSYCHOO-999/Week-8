function getRandomNumber() {
    return Math.floor(100 + Math.random() * 900);
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

let numbers = Array.from({ length: 10 }, getRandomNumber);
console.log("Generated Numbers:", numbers);

let { secondLargest, secondSmallest } = findSecondLargestSmallest(numbers);
console.log("Second Largest:", secondLargest);
console.log("Second Smallest:", secondSmallest);
