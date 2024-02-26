const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let grid = input.slice(1).map(line => line.split(''));

let total = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (grid[i][j] === '-' && (j === 0 || grid[i][j - 1] !== '-')) {
      total++;
    }

      if (grid[i][j] === '|' && (i === 0 || grid[i - 1][j] !== '|')) {
      total++;
    }
  }
}

console.log(total);
