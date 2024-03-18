const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = parseInt(input[0]);
for (let i = 1; i <= T; i++) {
    const [n, m] = input[i].split(' ').map(Number);
    let count = 0; 

    // 가능한 모든 (a, b) 쌍에 대해 조건 검사
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            if ((a * a + b * b + m) % (a * b) === 0) {
                count++;
            }
        }
    }

    console.log(count);
}