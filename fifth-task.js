const readline = require('readline');
const process = require('process');

// предпологаем, что данные введены корректно
function getCakeXMiddle(cakeDots) {

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
