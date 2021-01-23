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
// в задаче сказано - "Если ответов несколько — разрешается вывести любой." 
// не смог придумать подобного кейса, так, что вомзожно решил задачу неправильно из за того,
// что не правильно понял условия
function getStudentsRotation(studentsQueue) {
    let noRotation = '-1 -1';

    let wrongPlaces = [];
    for (let i = 0; i < studentsQueue.length; i++) {
        if ((i + 1) % 2 !== studentsQueue[i] % 2) {
            wrongPlaces.push(i + 1);
        }
    }

    return wrongPlaces.length === 2 ? wrongPlaces.join(' ') : noRotation;
}

main();