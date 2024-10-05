const fs = require('fs');
const [M, N] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function findPrimes(m, n) {
    // 에라토스테네스의 체 초기화
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    // 에라토스테네스의 체 알고리즘
    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // M 이상 N 이하의 소수 출력
    for (let i = m; i <= n; i++) {
        if (isPrime[i]) {
            console.log(i);
        }
    }
}

findPrimes(M, N);

/* 

1. isPrime 배열 초기화:
   [false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]

2. 에라토스테네스의 체 알고리즘:
   i = 2: 4, 6, 8, 10, 12, 14, 16을 false로 표시
   i = 3: 9, 15를 false로 표시
   i = 4: 이미 false이므로 무시
   i = 5: 범위 내에 5의 배수가 없으므로 무시

3. 최종 isPrime 배열:
   [false, false, true, true, false, true, false, true, false, false, false, true, false, true, false, false, false]

4. M(3)부터 N(16)까지 순회하며 소수 출력:
   3 (isPrime[3] = true)
   5 (isPrime[5] = true)
.
.
.
*/