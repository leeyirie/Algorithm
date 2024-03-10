

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const num = input.slice(1).map(Number);


function countVotes(num){
    let dasom = num[0];
    let others = num.slice(1);
    let counts = 0;
    
    while(dasom <= Math.max(...others)) {
      let maxNum = others.indexOf(Math.max(...others));
      others[maxNum] -= 1;
      dasom ++;
      counts ++;
    }
    return counts;

}
console.log(countVotes(num));