var readline = require('readline');
var process = require('process')

function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var input = [];
    rl.on('line', function (inputData) {
        input.push(inputData.split(' '));
    });

    process.stdin.on('end', () => {
        console.log(getMaxDiff(input[0][1], input[1]));
        process.exit(0);
    });
}

// предпологаем, что данные введены корректно
function getMaxDiff(iterationsAmount, numbersArr) {
    let possibleNumbersChanges = new Map();

    for (let i = 0; i < numbersArr.length; i++) {
        let currentNumber = Number(numbersArr[i]);
        let numberPower = 0;

        while (currentNumber !== 0) {
            let remainder = currentNumber % 10
            if (possibleNumbersChanges.has(numberPower)) {
                possibleNumbersChanges.get(numberPower).push(remainder);
            } else {
                possibleNumbersChanges.set(numberPower, [remainder]);
            }
            currentNumber = parseInt(currentNumber / 10);
            numberPower += 1;
        }
    }

    // конверитруем мап в массив и отсортируем по убыванию
    let sortedPossibleNumbersChangesArr = [...possibleNumbersChanges].sort((a, b) => b[0] - a[0]);

    sortedPossibleNumbersChangesArr.map(numbersArr => 
        numbersArr[1] = numbersArr[1].sort((a, b) => a - b)
    );

    let k = 0;
    let resultDiffSumm = 0;
    for (let i = 0; i < iterationsAmount; i++) {

        let changedDigits = 0;
        for (let j = 0; j < sortedPossibleNumbersChangesArr[k][1].length && i + changedDigits < iterationsAmount; j++) {
            let currentDigitToChange = sortedPossibleNumbersChangesArr[k][1][j];
            if (currentDigitToChange < 9) {
                resultDiffSumm += Math.pow(10, sortedPossibleNumbersChangesArr[k][0]) * (9 - currentDigitToChange);
                changedDigits++;
            }
        }

        k++;
        if (!sortedPossibleNumbersChangesArr[k]) {
            break;
        }
        i += changedDigits > 0 ? changedDigits - 1 : 0;
    }

    return resultDiffSumm;
}

main();