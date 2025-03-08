function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function simulateDieRolls() {
    let rollCount = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRolls = 10;
    let reachedMax = false;

    while (!reachedMax) {
        let roll = rollDie();
        rollCount[roll]++;

        if (rollCount[roll] === maxRolls) {
            reachedMax = true;
        }
    }

    let maxNum = Object.keys(rollCount).reduce((a, b) => (rollCount[a] > rollCount[b] ? a : b));
    let minNum = Object.keys(rollCount).reduce((a, b) => (rollCount[a] < rollCount[b] ? a : b));

    console.log("Final Roll Counts:", rollCount);
    console.log(`Number that appeared maximum times: ${maxNum} (${rollCount[maxNum]} times)`);
    console.log(`Number that appeared minimum times: ${minNum} (${rollCount[minNum]} times)`);
}

simulateDieRolls();
