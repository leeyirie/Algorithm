const fs = require("fs");
let N = parseInt(fs.readFileSync('/dev/stdin').toString(), 10);

function pay(N) {
  let dp = new Array(N + 1).fill(Infinity);
  dp[0] = 0;
  const coins = [2, 5];

  for (let i = 2; i <= N; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

    return dp[N] !== Infinity ? dp[N] : -1;
}

console.log(pay(N));


