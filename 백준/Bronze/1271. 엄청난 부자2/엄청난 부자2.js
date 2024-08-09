const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim(); 

const [n, m] = input.split(' ');

let bigN = BigInt(n);
let bigM = BigInt(m);

let quotient = bigN / bigM;
let remainder = bigN % bigM; //나머지

console.log(quotient.toString());
console.log(remainder.toString());
