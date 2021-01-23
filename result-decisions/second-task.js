var readline = require('readline');
var process = require('process')

function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var input;
    rl.on('line', function (inputData) {
        input = inputData.split(' ');
    });

    process.stdin.on('end', () => {
        console.log(getMaxTestsAmount(input[0], input[1]));
        process.exit(0);
    });
}

// предпологаем, что данные введены корректно
function getMaxTestsAmount(minNumber, maxNumber) {
    let resultTestsAmount = 0;
    for (let i = minNumber; i <= maxNumber; i++) {
        let differentNumbers = new Set(String(i).split(''));
        if (differentNumbers.size === 1) {
            resultTestsAmount += 1;
        }
    }

    return resultTestsAmount;
}

module.exports = getMaxTestsAmount;

main();
