const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0], 10); 

let results = [];

for (let i = 0; i < T; i++) {
    let startIndex = i * 3 + 1;
    const [N, M] = input[startIndex].split(' ').map(Number);
    const A = input[startIndex + 1].split(' ').map(Number).sort((a, b) => a - b);
    const B = input[startIndex + 2].split(' ').map(Number).sort((a, b) => a - b);

    let total = 0;
    let j = 0;
    
    for (let a of A) {
        while (j < M && B[j] < a) {
            j++;
        }
        total += j;
    }
    results.push(total);
}

console.log(results.join('\n'));
