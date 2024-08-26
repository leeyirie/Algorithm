const fs = require('fs');
// 입력값 읽기
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]); // 단어의 수
const words = input.slice(1); // 단어 목록

// 단어 목록을 순회
for (let i = 0; i < N; i++) {
  const word = words[i];
  const reversedWord = word.split('').reverse().join('');

  // 현재 단어의 뒤집은 단어가 목록에 있는지 확인
  if (words.includes(reversedWord)) {
    const length = word.length;
    const middleChar = word[Math.floor(length / 2)];
    console.log(`${length} ${middleChar}`);
    break;
  }
}
