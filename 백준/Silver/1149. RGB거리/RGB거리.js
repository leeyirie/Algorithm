const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const N = input[0].split(' ').map(Number);
const list = input.slice(1);

const rgbList = list.map( el => {
    const [R, G, B] =  el.split(' ').map(Number);
    return {R, G, B}
})

let dp = Array.from({length: N}, () => ({R: 0, G:0, B:0}));
dp[0] =  rgbList[0];

for (let i = 1; i < N; i++) {
    dp[i].R = Math.min(dp[i-1].G, dp[i-1].B) + rgbList[i].R;
    dp[i].G = Math.min(dp[i-1].R, dp[i-1].B) + rgbList[i].G;
    dp[i].B = Math.min(dp[i-1].R, dp[i-1].G) + rgbList[i].B;
  }
  
const minCost = Math.min(dp[N-1].R, dp[N-1].G, dp[N-1].B);
console.log(minCost);