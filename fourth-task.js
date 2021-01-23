var readline = require('readline');
var process = require('process')

function main() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    var input = [];
    rl.on('line', function (inputData) {
        input.push(inputData);
    });

    process.stdin.on('end', () => {
        console.log(getStudentsRotation(input[1].split(' ').map(a => a = Number(a))));
        process.exit(0);
    });
}

// предпологаем, что данные введены корректно
function getStudentsRotation(studentsQueue) {

}

main();
