const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const stack = [];
let result = '';

input.slice(1).forEach(command => {
  const [cmd, char] = command.split(' ');
  
  switch (cmd) {
    case '1': // 맨 뒤에 블록 추가
      result += char;
      stack.push(result.length);
      break;
    case '2': // 맨 앞에 블록 추가
      result = char + result;
      stack.push(-1); // 맨 앞에 추가된 것을 표시
      break;
    case '3': // 가장 나중에 추가된 블록 제거
      if (stack.pop() > 0) {
        result = result.slice(0, -1);
      } else {
        result = result.slice(1);
      }
      break;
  }
});

console.log(result || '0');
