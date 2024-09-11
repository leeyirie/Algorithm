const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number);

let stack = [];
let result = new Array(N).fill(-1);

for (let i = 0; i < N; i++) {
    while (stack.length > 0 && A[stack[stack.length - 1]] < A[i]) {
        result[stack.pop()] = A[i];
    }
    stack.push(i);
}

console.log(result.join(' '));