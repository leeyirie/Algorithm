var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let result = '';
let maxLength = Math.max(...input.map(s => s.length));

for (let i = 0; i < maxLength; i++) {
    for (let j = 0; j < input.length; j++) {
        if (i < input[j].length) {
            result += input[j][i];
        }
    }
}

console.log(result);