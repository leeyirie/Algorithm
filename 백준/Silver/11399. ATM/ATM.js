const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const times = input[1].split(' ').map(Number);

// 인출 시간을 오름차순으로 정렬
times.sort((a, b) => a - b);

let totalTime = 0;
let cumulativeSum = 0;

// 각 사람의 대기 시간 + 인출 시간의 합 계산
for (let i = 0; i < N; i++) {
    cumulativeSum += times[i];
    totalTime += cumulativeSum;
}

console.log(totalTime);

/* 

입력:
5
3 1 4 3 2

1. 초기 상태:
   N = 5
   times = [3, 1, 4, 3, 2]

2. 정렬 후:
   times = [1, 2, 3, 3, 4]

3. 누적 합 및 총 시간 계산:
   i = 0: cumulativeSum = 1, totalTime = 1
   i = 1: cumulativeSum = 1 + 2 = 3, totalTime = 1 + 3 = 4
   i = 2: cumulativeSum = 3 + 3 = 6, totalTime = 4 + 6 = 10
   i = 3: cumulativeSum = 6 + 3 = 9, totalTime = 10 + 9 = 19
   i = 4: cumulativeSum = 9 + 4 = 13, totalTime = 19 + 13 = 32

4. 최종 결과:
   totalTime = 32


1. 먼저 인출 시간이 가장 짧은 사람(1분)이 인출. 대기 시간은 0분, 총 소요 시간은 1분.
2. 두 번째로 짧은 사람(2분)이 인출. 대기 시간은 1분이고, 인출 시간 2분을 더해 총 3분이 소요.
3. 세 번째 사람(3분)은 3분을 대기하고 3분 동안 인출하여 총 6분이 소요.
4. 네 번째 사람(3분)은 6분을 대기하고 3분 동안 인출하여 총 9분이 소요.
5. 마지막 사람(4분)은 9분을 대기하고 4분 동안 인출하여 총 13분이 소요.

이렇게 계산된 각 사람의 총 소요 시간(1, 3, 6, 9, 13)을 모두 더하면 32가 됨.
인출 시간이 짧은 사람이 먼저 인출할수록 뒤에 오는 사람들의 대기 시간이 최소화되기 때문에.

*/