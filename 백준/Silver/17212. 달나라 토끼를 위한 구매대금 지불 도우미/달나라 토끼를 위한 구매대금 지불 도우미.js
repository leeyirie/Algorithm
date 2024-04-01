const fs = require("fs");
let N = parseInt(fs.readFileSync('/dev/stdin').toString(), 10);

function pay(N) {
  let dp = new Array(N + 1).fill(Infinity);
  dp[0] = 0;
  const coins = [1, 2, 5, 7];

  for (let i = 1; i <= N; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[N];
}

console.log(pay(N));