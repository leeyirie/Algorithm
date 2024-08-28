const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const dp = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[i] < A[j]) { 
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

const result = Math.max(...dp);
console.log(result);