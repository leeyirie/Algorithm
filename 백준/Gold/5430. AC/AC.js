const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let t = parseInt(input[0]);
let index = 1;

function AC(p, arr) {
    let isReverse = false;
    let front = 0;
    let back = arr.length;

    for (let op of p) {
        if (op === 'R') {
            isReverse = !isReverse;
        } else if (op === 'D') {
            if (front === back) {
                return 'error';
            }
            if (isReverse) {
                back--;
            } else {
                front++;
            }
        }
    }

    let result = arr.slice(front, back);
    if (isReverse) {
        result.reverse();
    }

    return '[' + result.join(',') + ']';
}

let output = [];

while (t--) {
    let p = input[index++];
    let n = parseInt(input[index++]);
    let arr = JSON.parse(input[index++]);

    output.push(AC(p, arr));
}

console.log(output.join('\n'));