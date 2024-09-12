const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let text = input[0];
const M = parseInt(input[1]);
const commands = input.slice(2, 2 + M);

let cursor = text.length;
let leftStack = text.split('');
let rightStack = [];

for (let command of commands) {
    switch(command[0]) {
        case 'L':
            if (leftStack.length > 0) {
                rightStack.push(leftStack.pop());
            }
            break;
        case 'D':
            if (rightStack.length > 0) {
                leftStack.push(rightStack.pop());
            }
            break;
        case 'B':
            if (leftStack.length > 0) {
                leftStack.pop();
            }
            break;
        case 'P':
            leftStack.push(command[2]);
            break;
    }
}

console.log(leftStack.join('') + rightStack.reverse().join(''));