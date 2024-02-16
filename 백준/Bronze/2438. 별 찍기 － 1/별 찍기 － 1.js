const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N;

rl.on('line', (line) => {
  N = parseInt(line);
  for (let i = 1; i <= N; i++) {
    console.log('*'.repeat(i));
  }
  rl.close();
});