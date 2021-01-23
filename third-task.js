const readline = require('readline');
const process = require('process');

/**
 * @param {Number[]} studentsLengthArray Массив роста студентов
 */
function getStudentChange(studentsLengthArray) {
  const wrongPlaces = [];
  for (let i = 0; i < studentsLengthArray.length; i += 1) {
    if ((i + 1) % 2 !== studentsLengthArray[i] % 2) {
      wrongPlaces.push(i + 1);
    }
  }
  if (wrongPlaces.length === 2
    && (studentsLengthArray[wrongPlaces[0]] % 2 !== studentsLengthArray[wrongPlaces[1]] % 2)) {
    return wrongPlaces.join(' ');
  }
  return '-1 -1';
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
    console.log(getStudentChange(input));
    process.exit(0);
  });
}

module.exports = getStudentChange;

main();
