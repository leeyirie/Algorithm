const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]); // 첫 번째 줄의 값을 숫자로 변환하여 N에 저장 (N은 주식 가격이 주어진 날의 수)
const A = input[1].split(' ').map(Number); // 두 번째 줄을 공백으로 구분하여 숫자 배열로 변환 (A는 각 날의 주식 가격 배열)

// 변수 초기화
let minPrice = A[0];  // 첫날 주식 가격을 최소 가격으로 우선 설정한다. (최초에는 첫날 가격을 최저가로 설정)
let maxProfit = 0;    // 초기 이익은 우선 0으로 설정해둔다. (아직 아무것도 사고팔지 않았으므로 이익은 0)

// 주식 가격을 순회하며 최대 이익을 갱신한다.
for (let i = 1; i < N; i++) {  // 두 번째 날부터 (index 1부터) 마지막 날까지 (index N-1) 순회한다.
    if (A[i] < minPrice) {  // 현재 가격 A[i]가 현재까지의 최소 가격(minPrice)보다 작다면,
        minPrice = A[i];    // 새로운 최소 가격을 갱신한다. (이 가격이 새로운 최저가가 된다)
    } else {  // 현재 가격이 최소 가격보다 크거나 같다면,
        // 현재 주식을 판다면 얻을 수 있는 이익 (현재 가격 - 최소 가격)과 기존 최대 이익을 비교해 더 큰 값을 저장
        maxProfit = Math.max(maxProfit, A[i] - minPrice); // 현재까지의 최대 이익을 갱신한다.
    }
}

// 최종적으로 얻을 수 있는 최대 이익을 출력한다.
console.log(maxProfit);
