const fs = require('fs');
const [N, M] = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(Number);

function list(N, M) {
  const results = [];
  
  function backtrack(n = 1, arr = []) {
    if (arr.length === M) {
      results.push(arr.join(' '));
      return;
    }

    for (let i = n; i <= N; i++) {
      backtrack(i + 1, [...arr, i]);
    }
  }
  
  backtrack();
  return results.join('\n');
}
console.log(list(N, M));
