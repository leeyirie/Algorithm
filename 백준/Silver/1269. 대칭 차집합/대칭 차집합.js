const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const aElements = new Set(input[1].split(" ").map(Number));
const bElements = new Set(input[2].split(" ").map(Number));

const symmetricDifference = new Set([...aElements].filter(x => !bElements.has(x)).concat([...bElements].filter(x => !aElements.has(x))));

console.log(symmetricDifference.size);
