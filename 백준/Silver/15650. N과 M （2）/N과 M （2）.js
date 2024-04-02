const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function generateSequences(N, M) {
  const results = [];
  
  function backtrack(start = 1, sequence = []) {
    if (sequence.length === M) {
      results.push(sequence.join(' '));
      return;
    }

    for (let i = start; i <= N; i++) {
      backtrack(i + 1, [...sequence, i]);
    }
  }
  
  backtrack();
  return results.join('\n');
}

const result = generateSequences(N, M);
console.log(result);
