const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = Number(input[0]);
const list = input[1].split(' ').map(Number);

// dp 배열을 매우 큰 값으로 초기화
let dp = new Array(N).fill(Infinity);
dp[0] = 0;

// dp 배열을 이용해 최소 점프 횟수 계산
for (let i = 0; i < N; i++) {
  for (let j = 1; j <= list[i]; j++) {
    if (i + j < N) {
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }
}

// 결과 출력
console.log(dp[N - 1] === Infinity ? -1 : dp[N - 1]);
