const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input[0];
let types = input[1].split(' ').map(Number);

let total = types.reduce((a, c) => a + c, 0);
types = types.sort((a, b) => b - a);

const happyOrUnhappy = (N, types) => {
    if (N === 1 && types[0] === 1) {
        return 'Happy';
    }
    
    let half = Math.ceil(total / 2);
    let others = types.slice(1).reduce((a, c) => a + c, 0);

    if (half <= others) return 'Happy';
    else return 'Unhappy';
}

console.log(happyOrUnhappy(N, types));
