const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = parseInt(input[0]);
const tower = input
  .slice(1)
  .map((line) => line.split(" ").map(Number))
  .flat();

  let result = [];
  let stack = [];

  for (let i = 0; i < N; i++) {
    let height = tower[i];
    while (stack.length > 0 && stack[stack.length - 1].height < height) {
      stack.pop();
    }
  
    if (stack.length === 0) {
      result[i] = 0;
    } else {
      result[i] = stack[stack.length - 1].index + 1; 
    }
  
    stack.push({ index: i, height: height });
  }

  //console.log(stack);
  //   [
  //   { index: 1, height: 9 },
  //   { index: 3, height: 7 },
  //   { index: 4, height: 4 }
  // ]

  console.log(result.join(" "));

