const readline = require('readline');
const process = require('process');

// предпологаем, что данные введены корректно
// основной смысл решения, получить все сочетания с повторениями
// и посчитать те сочетания, которые меньше заданной суммы
/**
 * @param {Number[]} combinationNumbers Массив цифер из которых составляем сочетания
 * @param {Number} combinationLength Длинна составляемого сочетания
 */
function getAllCombinations(combinationNumbers, combinationLength) {
  const data = [];
  const results = [];

  ((function getCombination(pos, start) {
    if (pos === combinationLength) {
      results.push(data.slice());
      return;
    }
    for (let i = start; i < combinationNumbers.length; i += 1) {
      data[pos] = combinationNumbers[i];
      getCombination(pos + 1, i);
    }
  })(0, 0));

  return results;
}

/**
 * @param {Number} maxValue Максимальная сумма кошелька
 * @param {Number[]} possibleNumbers Возможные цены монет
 */
function getMaxSumm(maxValue, possibleNumbers) {
  const possibleVariants = [];
  const possibleVariantsAmount = Math.ceil(
    maxValue / [...possibleNumbers].sort((a, b) => a - b)[0],
  );
  let result = 0;

  for (let i = 1; i < possibleVariantsAmount; i += 1) {
    possibleVariants.push(...getAllCombinations(possibleNumbers, i));
  }

  for (let i = 0; i < possibleVariants.length; i += 1) {
    if ((possibleVariants[i].reduce((acc, value) => acc + value)) <= maxValue - 1) {
      result += 1;
    }
  }

  // добавляем 1 вариант с 1 изначальной монеткой
  return result + 1;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = [];
  rl.on('line', (inputData) => {
    input.push(inputData.split(' ').map((a) => Number(a)));
  });

  process.stdin.on('end', () => {
    console.log(getMaxSumm(input[0], input[1]));
    process.exit(0);
  });
}

module.exports = getMaxSumm;

main();
