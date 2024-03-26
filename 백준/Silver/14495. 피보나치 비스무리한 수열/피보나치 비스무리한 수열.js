const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const dp = Array(117).fill(0);

dp[1] = BigInt(1);
dp[2] = BigInt(1);
dp[3] = BigInt(1);

(function solution() {
  for (let i = 4; i <= N; ++i) {
    dp[i] = dp[i - 1] + dp[i - 3];
  }
  console.log(dp[N].toString());
})();