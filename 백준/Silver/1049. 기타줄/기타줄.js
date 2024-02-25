const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
let [n, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = n.split(' ').map(Number);
input = input.map((v) => v.split(' ').map(Number)).sort((a, b) => a[0] - b[0]);
const minPackagePrice = input[0][0];
input.sort((a, b) => a[1] - b[1]);
const minUnitPrice = input[0][1];

const onlyPackage = Math.ceil(N / 6) * minPackagePrice;
const onlyUnit = minUnitPrice * N;
const mix = Math.floor(N / 6) * minPackagePrice + (N % 6) * minUnitPrice;

console.log(Math.min(onlyPackage, onlyUnit, mix));