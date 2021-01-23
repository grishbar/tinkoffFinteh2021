var readline = require('readline');
var process = require('process')

function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var input = [];
    rl.on('line', function (inputData) {
        input.push(inputData.split(' ').map(a => a = Number(a)));
    });

    process.stdin.on('end', () => {
        console.log(getMaxSumm(input[0], input[1]));
        process.exit(0);
    });
}

/**
 * @param {Number} maxValue Максимальная сумма кошелька
 * @param {Number[]} possibleNumbers Возможные цены монет
 */
function getMaxSumm(maxValue, possibleNumbers) {

}

main();
