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
    let noRotation = '-1 -1';

    let wrongPlaces = [];
    let currentPlaces = new Set();
    let changedPlace = '';
    let missingPlaces = foundMissingPlaces([...studentsQueue]);

    if (missingPlaces.length !== 1) {
        return noRotation;
    }
    for (let i = 0; i < studentsQueue.length; i++) {
        if ((i + 1) === studentsQueue[i]) {
            if (changedPlace) {
                return noRotation;
            }

            studentsQueue[i] = missingPlaces[0];
            changedPlace = `${i + 1} ${missingPlaces[0]}`;
        }

        if (currentPlaces.has(studentsQueue[i])) {
            wrongPlaces.push(studentsQueue[i]);
        }

        currentPlaces.add(studentsQueue[i]);
    }

    if (wrongPlaces.length === 1 && !changedPlace) {
        return `${getNeededToChangeWrongPlace(studentsQueue, wrongPlaces[0], missingPlaces[0])} ${missingPlaces[0]}`;
    } else if (wrongPlaces.length === 0 && changedPlace) {
        return changedPlace;
    } else {
        return noRotation;
    }
}

function foundMissingPlaces(studentsQueue) {
    let sortedStudentsQueue = studentsQueue.sort((a, b) => a - b);
    let missingPlaceNumbers = [];
    let allPlaceNumbers = [];
    for (let i = 1; i <= sortedStudentsQueue.length; i++) {
        allPlaceNumbers.push(i);
    }
    for (let i = 0; i < sortedStudentsQueue.length; i++) {
        if (allPlaceNumbers[i] !== sortedStudentsQueue[i]) {
            missingPlaceNumbers.push(allPlaceNumbers[i]);
        }
    }

    return missingPlaceNumbers;
}

function getNeededToChangeWrongPlace(studentsQueue, wrongPlace, missingPlace) {
    let wrongPlacesIndecies = [];
    let idx = studentsQueue.indexOf(wrongPlace);
    while (idx != -1) {
        wrongPlacesIndecies.push(idx);
        idx = studentsQueue.indexOf(wrongPlace, idx + 1);
    }

    for (let i = 0; i < wrongPlacesIndecies.length; i++) {
        if ((wrongPlacesIndecies[i] + 1) !== missingPlace) {
            return wrongPlacesIndecies[i] + 1;
        }
    }
}

main();