const fs = require("fs");
const N = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

let output = 0; // 필요한 봉지의 수
let sugar = N; // 남은 설탕 양을 추적하기 위한 변수

// 5kg 봉지를 최대한 많이 사용
while (sugar >= 0) {
    if (sugar % 5 === 0) { // 5로 나누어 떨어지면, 최적의 해
        output += sugar / 5;
        console.log(output);
        process.exit(0); // 프로그램을 성공적으로 종료
    }
    sugar -= 3; // 5kg 봉지로 나누어 떨어지지 않으면, 3kg 봉지를 하나 추가
    output++;
}

// 위의 반복문에서 해를 찾지 못한 경우
console.log(-1);
