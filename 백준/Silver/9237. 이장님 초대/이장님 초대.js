const fs = require('fs');
const [N, treesTimes] = fs.readFileSync('dev/stdin', 'utf8').trim().split('\n');
const trees = treesTimes.split(' ').map(Number);

function inviteDay(N, trees) {
  trees.sort((a, b) => b - a); 

  let maxDay = 0;
  for (let i = 0; i < N; i++) {
    let currentDay = i + 1 + trees[i]; 
    if (currentDay > maxDay) {
      maxDay = currentDay;
    }
  }

  return maxDay + 1; 
}

console.log(inviteDay(Number(N), trees));
