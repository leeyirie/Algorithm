const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = parseInt(input[0]);

let index = 1;
const resultArr = [];

for (let i = 0; i < T; i++) {
    const N = parseInt(input[index++]);
    const numList1 = new Set(input[index++].split(' ').map(Number));

    const M = parseInt(input[index++]);
    const numList2 = input[index++].split(' ').map(Number);

    const result = numList2.map(v => numList1.has(v) ? 1 : 0 );
    resultArr.push(...result);
}


console.log(resultArr.join("\n"));