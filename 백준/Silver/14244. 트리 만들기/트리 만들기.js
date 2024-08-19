const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
const [n, m] = input.split(' ').map(Number);

let nowNode = 0;
let count = m - 1;

for (let i = 1; i < n; i++) {
    console.log(nowNode, i);
    nowNode++;

    if (m !== 2 && count > 0) {
        nowNode--;  
        count--;
    }
}
