const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const n = parseInt(input[0], 10);
const items = input.slice(1);

let pattern = items[0].split('');

for (let i = 1; i < n; i++) {
    const currentItem = items[i].split('');

    for (let j = 0; j < pattern.length; j++) {
        if (pattern[j] !== currentItem[j]) {
            pattern[j] = '?';
        }
    }
}

console.log(pattern.join(''));
