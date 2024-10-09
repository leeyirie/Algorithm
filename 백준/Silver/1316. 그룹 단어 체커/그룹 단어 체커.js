const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const wordList = input.slice(1);

function isGroup(word) {
    const map = new Map();
    for (let i = 0; i < word.length; i++) {
        if (map.has(word[i])) {
            if (word[i] !== word[i - 1]) {
                return false;
            }
        }
        map.set(word[i], true);
    }
    return true; 
}

const groupWordCount = wordList.filter(isGroup).length;
console.log(groupWordCount);

/*

단어를 알파벳별로 나누고, 맵에 넣으면서 순회한다.
만약 이미 맵 안에 있으면서, 직전의 알파벳이 같은 알파벳이 아니면 그룹단어가 아니므로 false.

1. 입력 처리:
   N = 단어의 개수 (parseInt로 변환)
   wordList = 입력받은 단어들의 배열

2. isGroup 함수:
   - 각 단어에 대해 문자별로 순회
   - Map을 사용하여 각 문자의 등장 여부를 기록
   { 'h' => true, 'a' => true, 'p' => true, 'y' => true }
   - 현재 문자가 이미 Map에 있고, 직전 문자와 다르다면 false 반환
   - 모든 문자를 검사한 후 true 반환 (이 부분이 추가됨)

3. 그룹 단어 개수 계산:
   - filter 메소드를 사용하여 isGroup 함수를 통과하는 단어만 선택
   - 선택된 단어들의 개수를 groupWordCount에 저장

4. 결과 출력:
   - groupWordCount 출력

예시:
입력이 ["3", "happy", "new", "year"]인 경우
- "happy": 그룹 단어 (true)
- "new": 그룹 단어 (true)
- "year": 그룹 단어 아님 (false, 'e'가 떨어져서 나타남)


결과: 2 (그룹 단어의 개수)
*/
