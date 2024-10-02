const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) {
    graph[i][i] = 0;
}

// 친구 관계 입력
for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a][b] = 1;
    graph[b][a] = 1;
}

// 플로이드-워셜 알고리즘
for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
        }
    }
}

let minKevinBacon = Infinity;
let result = 0;

// 케빈 베이컨 수 계산 및 최소값 찾기
for (let i = 1; i <= N; i++) {
    let sum = 0;
    for (let j = 1; j <= N; j++) {
        sum += graph[i][j];
    }
    if (sum < minKevinBacon) {
        minKevinBacon = sum;
        result = i;
    }
}

console.log(result);

/* 

1. 입력 처리:
   N = 5, M = 5
   친구 관계: (1,3), (1,4), (4,5), (4,3), (3,2)

2. 그래프 초기화:
   [
     [Inf, Inf, Inf, Inf, Inf, Inf],
     [Inf,   0,   1,   1,   1, Inf],
     [Inf,   1,   0,   1,   2, Inf],
     [Inf,   1,   1,   0,   1,   2],
     [Inf,   1,   2,   1,   0,   1],
     [Inf, Inf, Inf,   2,   1,   0]
   ]

3. 플로이드-워셜 알고리즘 적용 후:
   [
     [Inf, Inf, Inf, Inf, Inf, Inf],
     [Inf,   0,   2,   1,   1,   2],
     [Inf,   2,   0,   1,   2,   3],
     [Inf,   1,   1,   0,   1,   2],
     [Inf,   1,   2,   1,   0,   1],
     [Inf,   2,   3,   2,   1,   0]
   ]

4. 케빈 베이컨 수 계산:
   1번: 0 + 2 + 1 + 1 + 2 = 6
   2번: 2 + 0 + 1 + 2 + 3 = 8
   3번: 1 + 1 + 0 + 1 + 2 = 5
   4번: 1 + 2 + 1 + 0 + 1 = 5
   5번: 2 + 3 + 2 + 1 + 0 = 8

5. 결과:
   케빈 베이컨 수가 가장 작은 사람은 3번과 4번 (5)
   번호가 작은 3을 출력

*/