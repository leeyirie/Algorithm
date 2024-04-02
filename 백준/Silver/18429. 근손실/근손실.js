const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, K] = input[0].split(" ").map(Number);
const list = input
  .slice(1)
  .map((el) => el.split(" ").map(Number))
  .flat();


function findResult(N, K, list) {
  let count = 0;

  function findOptions(arr, option = []) {
    if (option.length === N) { 
      if (isValid(option)) { //isValid 함수가 true이면 카운트
        count++; 
      }
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      const nextOption = [...arr.slice(0, i), ...arr.slice(i + 1)];
      findOptions(nextOption, option.concat(arr[i])); 
    }
  }

  function isValid(opt) {
    let currWeight = 500;
    for (let i = 0; i < N; i++) {
      currWeight -= K;
      currWeight += opt[i];
      if (currWeight < 500) {
        return false;
      }
    }
    return true;
  }

  findOptions(list); 
  return count;
}

console.log(findResult(N, K, list));
