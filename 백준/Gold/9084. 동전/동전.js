const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const T = parseInt(input[0]); // 테스트 케이스 수
let index = 1; // 입력 배열에서 현재 처리중인 줄의 인덱스

for (let t = 0; t < T; t++) {
    const N = parseInt(input[index]); // 동전의 종류 수
    const coins = input[index + 1].split(' ').map(Number); // 각 동전의 금액
    const M = parseInt(input[index + 2]); // 목표 금액

    // dp 배열 초기화
    const dp = new Array(M + 1).fill(0);
    dp[0] = 1; // 0원을 만드는 방법은 아무 동전도 사용하지 않는 것 뿐이므로 1

    // 동전별로 가능한 조합 계산
    coins.forEach(coin => {
        for (let j = coin; j <= M; j++) {
            dp[j] += dp[j - coin];
        }
    });

    console.log(dp[M]); // 목표 금액 M을 만드는 방법의 수 출력

    index += 3; // 다음 테스트 케이스로 인덱스 이동
}
