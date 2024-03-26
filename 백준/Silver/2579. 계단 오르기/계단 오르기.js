const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

(function() {
    const N = input[0]; // 계단의 개수
    const stairs = input.slice(1); // 각 계단의 점수
    const dp = new Array(N).fill(0); // dp[i]는 i번째 계단까지 왔을 때 얻을 수 있는 최대 점수

    // 초기 조건 설정
    dp[0] = stairs[0];
    dp[1] = Math.max(stairs[0] + stairs[1], stairs[1]);
    dp[2] = Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]);

    // 점화식을 이용한 dp 배열 채우기
    for (let i = 3; i < N; i++) {
        dp[i] = Math.max(dp[i - 2] + stairs[i], dp[i - 3] + stairs[i - 1] + stairs[i]);
    }

    // 결과 출력
    console.log(dp[N - 1]);
})();
