const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = [];

for (let i = 1; i <= N; i++) {
    arr.push(input[i].split(' ').map(Number));
}

const K = parseInt(input[N + 1]);
let output = '';

for (let k = N + 2; k < N + 2 + K; k++) {
    const [i, j, x, y] = input[k].split(' ').map(Number);
    let sum = 0;
    for (let a = i - 1; a <= x - 1; a++) {
        for (let b = j - 1; b <= y - 1; b++) {
            sum += arr[a][b];
        }
    }
    output += sum + '\n';
}

console.log(output.trim());
