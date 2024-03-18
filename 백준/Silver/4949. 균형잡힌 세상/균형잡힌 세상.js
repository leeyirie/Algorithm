const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const results = [];

for (let line of input) {
  if (line === ".") break;

  const stack = [];
  let isPair = true;

  for (const char of line) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        isPair = false;
        break;
      }
    } else if (char === "]") {
      if (stack.length === 0 || stack.pop() !== "[") {
        isPair = false;
        break;
      }
    }
  }

  // 괄호 짝이 맞고, 스택이 비어 있어야 "yes"를 결과에 추가
  results.push(isPair && stack.length === 0 ? "yes" : "no");
}

console.log(results.join("\n"));
