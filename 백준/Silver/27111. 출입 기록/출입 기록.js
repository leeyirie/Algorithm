const fs = require('fs');

// 'input.txt' 파일에서 입력 데이터를 읽어옴
const input = fs.readFileSync('dev/stdin', 'utf8').trim().split('\n');

// 첫 번째 줄에서 N을 파싱
const N = parseInt(input[0], 10);

// 두 번째 줄부터 끝까지 각 사람의 입장 및 퇴장 기록을 파싱
const records = input.slice(1).map(line => line.split(' ').map(Number));

// 각 사람의 마지막 출입 상태를 추적하기 위한 Map 객체
const status = new Map();
let missingRecords = 0; // 누락된 기록의 수

records.forEach(([person, entered]) => {
    if (entered === 1) { // 사람이 들어옴
        if (status.get(person) === 1) { // 이미 안에 있는 경우, 입장 기록이 누락됨
            missingRecords += 1; // 누락된 기록 증가
        }
        status.set(person, 1); // 현재 상태를 '입장'으로 업데이트
    } else { // 사람이 나감
        if (!status.has(person) || status.get(person) === 0) { // 안에 없는데 나가는 경우, 입장 기록이 누락됨
            missingRecords += 1; // 누락된 기록 증가
        }
        status.set(person, 0); // 현재 상태를 '퇴장'으로 업데이트
    }
});

// 모든 기록을 처리한 후, 안에 남아있는 사람들(즉, 상태가 '입장'인 사람들)의 퇴장 기록이 누락됨
status.forEach((value, person) => {
    if (value === 1) {
        missingRecords += 1; // 각각의 남은 사람들에 대해 누락된 '퇴장' 기록 추가
    }
});

console.log(missingRecords);
