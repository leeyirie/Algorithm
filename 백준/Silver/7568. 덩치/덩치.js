const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
    const N = parseInt(input[0]);
    let students = [];
    
    for(let i = 1; i <= N; i++) {
        students.push(input[i].split(' ').map(Number));
    }
    
    let ranks = new Array(N).fill(1); 
    
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < N; j++) {
            if (students[i][0] < students[j][0] && students[i][1] < students[j][1]) {
                ranks[i] += 1; 
            }
        }
    }
    
    console.log(ranks.join(' ')); 
});