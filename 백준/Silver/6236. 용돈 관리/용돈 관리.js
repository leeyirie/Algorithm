const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const spendings = input.slice(1).map(Number);

function findMinTime(N, M, spendings) {
    let start = Math.max(...spendings); // 최소 K는 하루 최대 지출액입니다.
    let end = spendings.reduce((a, b) => a + b, 0); // 최대 K는 모든 지출액의 합입니다.
  
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let count = 1; // 인출 횟수
        let sum = 0; // 현재까지의 인출액

        for (let i = 0; i < N; i++) {
            if (sum + spendings[i] > mid) { // 현재 인출액으로 커버할 수 없는 경우
                count++; // 추가 인출
                sum = 0;
            }
            sum += spendings[i];
        }

        if (count > M) { // 인출 횟수가 더 많은 경우, K를 증가
            start = mid + 1;
        } else { // 인출 횟수가 M 이하인 경우, K를 감소
            end = mid - 1;
        }
    }
    return start; // start가 최소 K입니다.
}

console.log(findMinTime(N, M, spendings));
