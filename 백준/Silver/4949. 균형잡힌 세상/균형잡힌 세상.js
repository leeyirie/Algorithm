const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

// 결과를 저장할 배열
const results = [];

input.forEach((line) => {
  if (line === ".") return;
  const stack = [];
  let balanced = true;

  for (const char of line) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.pop() !== "(") {
        balanced = false;
        break;
      }
    } else if (char === "]") {
      if (stack.pop() !== "[") {
        balanced = false;
        break;
      }
    }
  }

  if (balanced && stack.length === 0) {
    results.push("yes");
  } else {
    results.push("no");
  }
});

console.log(results.join("\n"));
