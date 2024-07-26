const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const testCasesCount = parseInt(input[0], 10);
const testCases = input.slice(1).map(line => line.split(' ').map(Number));

function combination(n, k) {
    if (k === 0 || k === n) return 1;  

    // DP 
    const dp = Array(n + 1).fill(0).map(() => Array(k + 1).fill(0));
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= Math.min(i, k); j++) {
            if (j === 0 || j === i) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            }
        }
    }

    return dp[n][k];
}

const results = testCases.map(([N, M]) => combination(M, N));
results.forEach(result => console.log(result));
