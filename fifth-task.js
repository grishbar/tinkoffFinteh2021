const readline = require('readline');
const process = require('process');

/**
 * @param {Number[]} cordinats Массив кординат
 */
function getPolygon(cordinats) {
  const wrongPlaces = [];
  for (let i = 0; i < cordinats.length; i += 1) {
    if ((i + 1) % 2 !== cordinats[i] % 2) {
      wrongPlaces.push(i + 1);
    }
  }
  if (wrongPlaces.length === 2
    && (cordinats[wrongPlaces[0]] % 2 !== cordinats[wrongPlaces[1]] % 2)) {
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
    input.push(inputData.split(' ').map((a) => Number(a)));
  });

  process.stdin.on('end', () => {
    console.log(getPolygon(input.slice(1)));
    process.exit(0);
  });
}

module.exports = getPolygon;

main();
