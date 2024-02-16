const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const n = BigInt(input[0]); 
const m = BigInt(input[1]); 

const eachShare = n / m; // 각 생명체에게 돌아가는 돈의 양
const remaining = n % m; // 남는 돈

console.log(eachShare.toString());
console.log(remaining.toString()); 