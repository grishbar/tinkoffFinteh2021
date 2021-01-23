const readline = require('readline');
const process = require('process');

/**
 * @param {Number} minNumber Минимальное число
 * @param {Number} maxNumber Максимальное число
 */
function getNumbers(minNumber, maxNumber) {
  let result = 0;
  for (let i = minNumber; i <= maxNumber; i += 1) {
    if (i < 10) {
      result += 1;
    }
    if (i % 11 === 0) {
      result += 1;
    }
  }
  return result;
}

// предпологаем, что данные введены корректно
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];
  rl.on('line', (inputData) => {
    input = (inputData.split(' ').map((a) => Number(a)));
  });

  process.stdin.on('end', () => {
    console.log(getNumbers(input[0], input[1]));
    process.exit(0);
  });
}

module.exports = getNumbers;

main();
