const readline = require('readline');
const process = require('process');

// предпологаем, что данные введены корректно
function getCakeXMiddle(cakeDots) {
  // eslint-disable-next-line max-len
  // в условиях сказано  - "Гарантируется, что координаты — целые числа, не превосходящие по модулю 10 в 3"
  let minY = 1000;
  let maxY = -1000;
  for (let i = 0; i < cakeDots.length; i += 1) {
    const currentDotY = cakeDots[i][1];
    if (currentDotY < minY) {
      minY = currentDotY;
    }
    if (currentDotY > maxY) {
      maxY = currentDotY;
    }
  }
  return (maxY - minY) / 2;
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const input = [];
  rl.on('line', (inputData) => {
    input.push(inputData.split(' ').map((a) => Number(a)));
  });

  process.stdin.on('end', () => {
    console.log(getCakeXMiddle(input.slice(1)));
    process.exit(0);
  });
}

main();
