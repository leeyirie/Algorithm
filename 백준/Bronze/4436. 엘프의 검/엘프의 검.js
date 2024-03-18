const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

inputs.forEach((n) => {
    const seen = new Set(); // 등장한 숫자를 추적하기 위한 집합
    let k = 1;
    while (true) {
        const result = (n * k).toString();
        for (let char of result) {
            seen.add(char);
        }
        // 모든 숫자(0~9)가 등장했는지 확인
        if (seen.size === 10) {
            console.log(k);
            break;
        }
        k++;
    }
});
