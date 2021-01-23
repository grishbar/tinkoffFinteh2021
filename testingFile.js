const readline = require('readline');
const process = require('process');

function findNewPlace(studentsPresentArray) {
  const uniqePresentsArray = [];
  for (let i = 0; i < studentsPresentArray.length; i += 1) {
    uniqePresentsArray.push(i + 1);
  }
  for (let i = 0; i < uniqePresentsArray.length; i += 1) {
    if (studentsPresentArray.indexOf(uniqePresentsArray[i]) === -1) {
      return uniqePresentsArray[i];
    }
  }
  return undefined;
}

/**
 * @param {Number[]} studentsPresentArray Массив принадлежности подарков студентов
 */
function getStudentChange(studentsPresentArray) {
  let changedPresentPlace = '';
  const wrongPlaces = [];
  const UnicPlaces = new Set();
  for (let i = 0; i < studentsPresentArray.length; i += 1) {
    if (studentsPresentArray[i] === (i + 1)) {
      const newPlace = findNewPlace(studentsPresentArray);
      if (newPlace) {
        changedPresentPlace = `${i + 1} ${newPlace}`;
      } else {
        return '-1 -1';
      }
    }
    if (UnicPlaces.has(studentsPresentArray[i])) {
      wrongPlaces.push(i + 1);
    }
    UnicPlaces.add(studentsPresentArray[i]);
  }
  if (wrongPlaces.length === 0 && changedPresentPlace) {
    return changedPresentPlace;
  }
  if (wrongPlaces.length === 2) {
    const newPlace = findNewPlace(studentsPresentArray);
    if (newPlace) {
      if (newPlace !== wrongPlaces[0]) {
        return `${wrongPlaces[0]} ${newPlace}`;
      }
      if (newPlace !== wrongPlaces[1]) {
        return `${wrongPlaces[1]} ${newPlace}`;
      }
      return '-1 -1';
    }
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

getStudentChange([1,3,1]);