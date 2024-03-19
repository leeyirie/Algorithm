const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);

let list = input.slice(1).map((line) => {
  const [number, strike, ball] = line.split(" ").map(Number);
  return { number: number.toString(), strike, ball };
});


// console.log(list);
// [
//     { number: 123, strike: 1, ball: 1 },
//     { number: 356, strike: 1, ball: 0 },
//     { number: 327, strike: 2, ball: 0 },
//     { number: 489, strike: 0, ball: 1 }
//   ]

const check = (num, listElement) => {
  let strike = 0;
  let ball = 0;

  for (let i = 0; i < 3; i++) {
    if (num[i] === listElement.number[i]) {
      strike++;
    } else if (listElement.number.includes(num[i])) {
      ball++;
    }
  }

  return strike === listElement.strike && ball === listElement.ball;
};

let resultCount = 0;

for (let number = 123; number <= 987; number++) {
  let numStr = number.toString();
    
// 0이 포함된 경우나, 숫자가 중복된 경우 건너뜀
  if (numStr.includes('0') || new Set(numStr).size !== 3) continue;


  if(list.every(listElement => check(numStr, listElement))){
    resultCount++;
  }
}




console.log(resultCount);