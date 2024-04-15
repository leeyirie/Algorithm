const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const list = input.map(Number).slice(0, input.length - 1);
//console.log(list);


function calculNum(maxN) {
    const dp = new Array(maxN + 1).fill(0);
    dp[0] = 1;  

    for (let n = 1; n <= maxN; n++) {
        dp[n] = 0;
        for (let i = 0; i < n; i++) {
            dp[n] += dp[i] * dp[n - 1 - i];
        }
    }

    return dp;
}

const maxN = 30;
const dpNumbers = calculNum(maxN);


list.forEach(n => {
    if (n !== 0) {
        console.log(dpNumbers[n]);
    }
});