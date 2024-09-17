const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

const MOD = 15746;

const dp = new Array(N + 1).fill(0);

dp[1] = 1;  // 길이가 1일 때는 1 하나
dp[2] = 2;  // 길이가 2일 때는 00, 11 두 가지

// 길이 3부터 N까지의 경우의 수
for (let i = 3; i <= N; i++) {
    // dp[i] = dp[i-1] + dp[i-2]
    // 길이 i-1의 수열 뒤에 1을 붙이는 경우 + 길이 i-2의 수열 뒤에 00을 붙이는 경우
    dp[i] = (dp[i-1] + dp[i-2]) % MOD;
}

console.log(dp[N]);

/* 

1. 초기 상태:
   N = 4
   dp = [0, 1, 2, 0, 0]

2. DP 테이블 채우기:
   - dp[3] 계산:
     dp[3] = (dp[2] + dp[1]) % MOD
           = (2 + 1) % 15746
           = 3
     dp = [0, 1, 2, 3, 0]

   - dp[4] 계산:
     dp[4] = (dp[3] + dp[2]) % MOD
           = (3 + 2) % 15746
           = 5
     dp = [0, 1, 2, 3, 5]

3. 최종 결과:
   dp[4] = 5
   
*/
