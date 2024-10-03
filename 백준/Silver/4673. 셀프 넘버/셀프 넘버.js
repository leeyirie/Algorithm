function d(n) {
    let sum = n;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

const MAX = 10000;
const isNotSelfNumber = new Array(MAX + 1).fill(false);

for (let i = 1; i <= MAX; i++) {
    let dn = d(i);
    if (dn <= MAX) {
        isNotSelfNumber[dn] = true;
    }
}

for (let i = 1; i <= MAX; i++) {
    if (!isNotSelfNumber[i]) {
        console.log(i);
    }
}

/* 

1. isNotSelfNumber 배열 초기화:
   크기가 10001인 배열을 false로 초기화.
   (0번 인덱스는 사용하지 않음)

3. 1부터 10000까지 반복:
   - 각 숫자 i에 대해 d(i)를 계.
   - d(i)가 10000 이하라면, 해당 인덱스의 isNotSelfNumber를 true로 설정합.

4. 1부터 10000까지 다시 반복:
   - isNotSelfNumber[i]가 false인 경우, i를 출력.
   이 과정을 통해 모든 셀프 넘버를 출력합.

예시:
- d(33) = 33 + 3 + 3 = 39, => isNotSelfNumber[39] = true
- d(39) = 39 + 3 + 9 = 51, => isNotSelfNumber[51] = true
- ...

isNotSelfNumber[i]가 false인 모든 i가 셀프 넘버이고 순서대로 출력.

*/