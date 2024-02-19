const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];

rl.on('line', (line) => {
  inputs.push(Number(line));
}).on('close', () => {
    const x = inputs[0];
    const y = inputs[1];

    if(x > 0 && y > 0) {
        console.log(1); 
    } else if(x < 0 && y > 0) {
        console.log(2); 
    } else if(x < 0 && y < 0) {
        console.log(3); 
    } else if(x > 0 && y < 0) {
        console.log(4); 
    }
});

