const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const E = input[1].split(' ').map(Number);

let maxE = 0;

function energyCheck(el, total) {
  if (el.length === 2) {
    maxE = Math.max(maxE, total);
    return;
  }

  for (let i = 1; i < el.length - 1; i++) {
    const mpEnergy = el[i - 1] * el[i + 1];
    const nextEnergy = el.slice(0, i).concat(el.slice(i + 1));
    energyCheck(nextEnergy, total + mpEnergy);
  }
}
energyCheck(E, 0);

console.log(maxE);