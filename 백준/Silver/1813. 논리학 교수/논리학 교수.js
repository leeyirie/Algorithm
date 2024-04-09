const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const counts = input[1].split(' ').map(Number);

let maxTrue = -1;

for (let i = 0; i <= n; i++) {
    const trueCount = counts.filter(count => count === i).length;
    
    if (trueCount === i) {
        maxTrue = Math.max(maxTrue, i);
    }
}

console.log(maxTrue);
