const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]);
const schedule = input.slice(1).map(line => line.split(' ').map(Number));

// console.log(schedule);
// [
//     '5 50', '4 40',
//     '3 30', '2 20',
//     '1 10', '1 10',
//     '2 20', '3 30',
//     '4 40', '5 50'
//   ]
// 공백으로 스플릿해주고 배열에 넣어줌. => split() 메소드는 문자열을 특정 구분자를 기준으로 나누어 배열을 생성하는 함수
// => [ 
//     [ 5, 50 ], [ 4, 40 ],
//     [ 3, 30 ], [ 2, 20 ],
//     [ 1, 10 ], [ 1, 10 ],
//     [ 2, 20 ], [ 3, 30 ],
//     [ 4, 40 ], [ 5, 50 ]
//   ]

// DP 배열 초기화. 우선 0을 다 넣어준다
let dp = new Array(N + 1).fill(0);

// 상담을 N일 동안 할 수 있는 최대 이익을 계산
for (let i = 0; i < N; i++) {
    const [T, P] = schedule[i]; 

    // 현재 상담을 진행하지 않은 경우
    dp[i + 1] = Math.max(dp[i + 1], dp[i]);

    // 현재 상담을 진행할 수 있는 경우
    if (i + T <= N) {
        dp[i + T] = Math.max(dp[i + T], dp[i] + P);
    }
}

// 최대 이익 출력
console.log(Math.max(...dp));
