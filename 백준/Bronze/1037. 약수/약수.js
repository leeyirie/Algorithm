const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const list = input[1].split(' ').map(Number);

list.sort((a, b) => a - b);

const result = list[0] * list[list.length - 1];
console.log(result);
