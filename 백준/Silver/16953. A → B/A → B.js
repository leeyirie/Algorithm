const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function convertAtoB(A, B) {
    let count = 0;
    let current = B;

    while (current > A) {
        count++;
        if (current % 2 === 0) {
            current /= 2;
        } else if (current % 10 === 1) {
            current = Math.floor(current / 10);
        } else {
            return -1; // 변환 불가능
        }
    }

    if (current === A) {
        return count + 1; // 초기 상태도 카운트에 포함
    } else {
        return -1; // A로 정확히 도달하지 못한 경우
    }
}

console.log(convertAtoB(A, B));

/* 

예제 입력 1: 2 162

1. 초기 상태:
   A = 2, B = 162, count = 0, current = 162

2. 연산 과정:
   1) current = 162 (짝수): 162 / 2 = 81, count = 1
   2) current = 81 (끝자리 1): 81 / 10 = 8, count = 2
   3) current = 8 (짝수): 8 / 2 = 4, count = 3
   4) current = 4 (짝수): 4 / 2 = 2, count = 4

3. 최종 상태:
   current = 2 (A와 같음)
   
4. 결과: count + 1 = 5


162 → 81 → 8 → 4 → 2

예제 입력 2: 4 42

1. 초기 상태:
   A = 4, B = 42, count = 0, current = 42

2. 연산 과정:
   1) current = 42 (짝수): 42 / 2 = 21, count = 1
   2) current = 21 (끝자리 1이 아님): 변환 불가능

3. 결과: -1 (변환 불가능)

예제 입력 3: 100 40021

1. 초기 상태:
   A = 100, B = 40021, count = 0, current = 40021

2. 연산 과정:
   1) current = 40021 (끝자리 1): 40021 / 10 = 4002, count = 1
   2) current = 4002 (짝수): 4002 / 2 = 2001, count = 2
   3) current = 2001 (끝자리 1): 2001 / 10 = 200, count = 3
   4) current = 200 (짝수): 200 / 2 = 100, count = 4

3. 최종 상태:
   current = 100 (A와 같음)

4. 결과: count + 1 = 5

B에서 시작하여 A로 거꾸로 가는 방식으로 동작.
단계별로 가능한 연산(2로 나누기 또는 끝자리 1 제거)을 수행하며,
A에 도달할 때까지 또는 더 이상 연산이 불가능할 때까지 반복한다.

*/