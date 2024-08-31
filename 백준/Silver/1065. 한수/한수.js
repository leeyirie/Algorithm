const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input, 10);

function isHansu(num) {
    const digits = String(num).split('').map(Number);
    if (digits.length <= 2) return true;

    const diff = digits[1] - digits[0];
    for (let i = 1; i < digits.length - 1; i++) {
        if (digits[i + 1] - digits[i] !== diff) {
            return false;
        }
    }
    return true;
}

let count = 0;
for (let i = 1; i <= N; i++) {
    if (isHansu(i)) {
        count++;
    }
}

console.log(count);
