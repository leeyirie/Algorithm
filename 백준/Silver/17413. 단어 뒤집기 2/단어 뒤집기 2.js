const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let result = '';
let tempWord = '';
let insideTag = false;

for (const char of input) {
  if (char === '<') {
    insideTag = true;
    result += tempWord.split('').reverse().join('') + char; // Reverse word before tag
    tempWord = '';
  } else if (char === '>') {
    insideTag = false;
    result += tempWord + char;
    tempWord = '';
  } else if (!insideTag && char === ' ') {
    result += tempWord.split('').reverse().join('') + char; // Reverse word and add space
    tempWord = '';
  } else {
    tempWord += char;
  }
}

result += tempWord.split('').reverse().join(''); // Add last word reversed
console.log(result);
