// основной смысл решения, получить все сочетания с повторениями
// и посчитать те сочетания, которые меньше заданной суммы

/**
 * @param {Number} maxValue Максимальная сумма кошелька
 * @param {Number[]} possibleNumbers Возможные цены монет
 */
function getMaxSumm(maxValue, possibleNumbers) {
    let possibleVariants = [];
    let possibleVariantsAmount = Math.ceil(maxValue / [...possibleNumbers].sort((a, b) => a - b)[0]);
    let result = 0;

    for (let i = 1; i < possibleVariantsAmount; i++) {
        possibleVariants.push(...getAllCombinations(possibleNumbers, i));
    }

    for (let i = 0; i < possibleVariants.length; i++) {
        if ((possibleVariants[i].reduce((acc, value) => acc + value)) <= maxValue - 1) {
            result += 1;
        }
    }

    // добавляем 1 вариант с 1 изначальной монеткой
    return result + 1;
}

/**
 * @param {Number[]} combinationNumbers Массив цифер из которых составляем сочетания
 * @param {Number} combinationLength Длинна составляемого сочетания
 */
function getAllCombinations(combinationNumbers, combinationLength) {
    let data = [];
    let results = [];

    (function getCombination(pos, start) {
        if (pos === combinationLength) {
            results.push(data.slice());
            return;
        }
        for (let i = start; i < combinationNumbers.length; ++i) {
            data[pos] = combinationNumbers[i];
            getCombination(pos + 1, i);
        }
    })(0, 0);
    
    return results;   
}

console.log(getMaxSumm(15, [4,7,9]));
console.log(getAllCombinations([3,4,5],3));
