const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]); // 테스트 케이스의 수

function populationCounting(k, n) {
    // 2D 배열 초기화
    const dp = Array.from({length: k + 1}, () => new Array(n + 1).fill(0));
    
    // 0층 초기화
    for (let i = 1; i <= n; i++) {
        dp[0][i] = i;
    }
    
    // 1층부터 k층까지 계산
    for (let floor = 1; floor <= k; floor++) {
        for (let room = 1; room <= n; room++) {
            dp[floor][room] = dp[floor][room - 1] + dp[floor - 1][room];
        }
    }
    
    return dp[k][n];
}

let result = '';
for (let i = 1; i <= T * 2; i += 2) {
    const k = Number(input[i]);
    const n = Number(input[i+1]);
    result += populationCounting(k, n) + '\n';
}

console.log(result.trim());