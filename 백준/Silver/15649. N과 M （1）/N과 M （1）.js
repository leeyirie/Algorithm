const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const [N, M] = line.split(' ').map(Number);

  const result = [];

  function generateSequence(currentSequence = []) {
    if (currentSequence.length === M) {
      result.push(currentSequence.join(' '));
      return;
    }

    for (let i = 1; i <= N; i++) {
      if (!currentSequence.includes(i)) {
        generateSequence([...currentSequence, i]);
      }
    }
  }

  generateSequence();
  console.log(result.join('\n'));

  rl.close();
}).on('close', function () {
  process.exit();
});
