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
        console.log(getCakeXMiddle(input.slice(1)));
        process.exit(0);
    });
}

// предпологаем, что данные введены корректно
function getCakeXMiddle(cakeDots) {

}

main();