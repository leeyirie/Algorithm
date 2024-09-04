const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const N = parseInt(input[0]);

function stoneGame(N) {
    // N이 홀수면 상근이(SK)가 이기고, 짝수면 창영이(CY)가 이김
    return N % 2 === 1 ? "SK" : "CY";
}

const result = stoneGame(N);
console.log(result.trim());