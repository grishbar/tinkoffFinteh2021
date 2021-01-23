const readline = require('readline');
const process = require('process');

/**
 * @param {Number} iterationsAmount Ограничение на число операций.
 * @param {Number[]} numbersArr Массив чисел.
 */
function getMaxDiff(iterationsAmount, numbersArr) {
  const possibleNumbersChanges = new Map();

  for (let i = 0; i < numbersArr.length; i += 1) {
    let currentNumber = Number(numbersArr[i]);
    let numberPower = 0;

    while (currentNumber !== 0) {
      const remainder = currentNumber % 10;
      if (possibleNumbersChanges.has(numberPower)) {
        possibleNumbersChanges.get(numberPower).push(remainder);
      } else {
        possibleNumbersChanges.set(numberPower, [remainder]);
      }
      currentNumber = parseInt(currentNumber / 10, 10);
      numberPower += 1;
    }
  }

  const sortedPossibleNumbersChangesArr = [...possibleNumbersChanges].sort((a, b) => b[0] - a[0]);

  sortedPossibleNumbersChangesArr.map((numbersArrItem) => numbersArrItem[1].sort((a, b) => a - b));

  let k = 0;
  let resultDiffSumm = 0;
  for (let i = 0; i < iterationsAmount; i += 1) {
    let changedDigits = 0;
    const sortedNumbersArrLength = sortedPossibleNumbersChangesArr[k][1].length;
    for (let j = 0; j < sortedNumbersArrLength && i + changedDigits < iterationsAmount; j += 1) {
      const currentDigitToChange = sortedPossibleNumbersChangesArr[k][1][j];
      if (currentDigitToChange < 9) {
        resultDiffSumm += (10 ** sortedPossibleNumbersChangesArr[k][0])
        * (9 - currentDigitToChange);
        changedDigits += 1;
      }
    }

    k += 1;
    if (!sortedPossibleNumbersChangesArr[k]) {
      break;
    }
    i += changedDigits > 0 ? changedDigits - 1 : 0;
  }

  return resultDiffSumm;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = [];
  rl.on('line', (inputData) => {
    input.push(inputData.split(' '));
  });

  process.stdin.on('end', () => {
    console.log(getMaxDiff(input[0][1], input[1]));
    process.exit(0);
  });
}

module.exports = getMaxDiff;

main();
