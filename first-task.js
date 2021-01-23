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

/**
 * @param {Number} iterationsAmount description
 * @param {Number[]} numbersArr description
 */
function getMaxDiff(iterationsAmount, numbersArr) {

}

main();
