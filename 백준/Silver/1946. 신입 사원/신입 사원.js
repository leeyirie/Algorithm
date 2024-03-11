const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);

let index = 1;
const passList = []; // 각 테스트 케이스의 결과를 저장할 배열

for (let t = 0; t < T; t++) {
    const n = parseInt(input[index]); 
    const list = [];

    for (let i = 1; i <= n; i++) { 
        list.push(input[index + i].split(' ').map(Number));
    }

    list.sort((a, b) => a[0] - b[0]); // 서류 성적대로 정렬

    let pass = 1; 
    let firstInterview = list[0][1]; 

    for (let i = 1; i < n; i++) {
        if  (list[i][1] < firstInterview) {
            pass++;
            firstInterview = list[i][1]; 
        }
    }
    passList.push(pass);
    index += n + 1; // 다음 테스트 케이스로 인덱스 이동
}

console.log(passList.join('\n')); // 결과 배열을 줄바꿈 문자로 구분하여 출력
