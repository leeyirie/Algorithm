const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const wines = input.slice(1).map(Number);

function maxWine(wines) {
    const n = wines.length;

    // 예외 처리: 포도주 잔이 1개 또는 2개인 경우
    if (n === 1) return wines[0];
    if (n === 2) return wines[0] + wines[1];

    let dp = new Array(n).fill(0);

    dp[0] = wines[0];
    dp[1] = wines[0] + wines[1];
    dp[2] = Math.max(wines[0] + wines[1], wines[0] + wines[2], wines[1] + wines[2]);

    for (let i = 3; i < n; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + wines[i], dp[i-3] + wines[i-1] + wines[i]);
    }

    return dp[n-1];
}

console.log(maxWine(wines));
