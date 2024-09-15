const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 테스트 케이스 수
const T = parseInt(input[0]);
let lineIndex = 1;

// 방향 배열 (상, 하, 좌, 우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// DFS 함수 정의
function dfs(x, y, field, M, N) {
    // 배추밭 범위를 벗어나거나, 배추가 없는 경우 종료
    if (x < 0 || x >= M || y < 0 || y >= N || field[x][y] === 0) {
        return;
    }

    // 현재 위치의 배추 방문 처리
    field[x][y] = 0;

    // 상하좌우 탐색
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        dfs(nx, ny, field, M, N);
    }
}

// 각 테스트 케이스 처리
for (let t = 0; t < T; t++) {
    const [M, N, K] = input[lineIndex++].split(' ').map(Number);
    const field = Array.from({ length: M }, () => new Array(N).fill(0));

    // 배추 위치 표시
    for (let k = 0; k < K; k++) {
        const [X, Y] = input[lineIndex++].split(' ').map(Number);
        field[X][Y] = 1;
    }

    let wormCount = 0;

    // 전체 배추밭 탐색
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (field[i][j] === 1) {
                dfs(i, j, field, M, N);
                wormCount++;
            }
        }
    }

    console.log(wormCount);
}

/* 입력 예시에 따른 코드 실행 과정 설명 (첫 번째 테스트 케이스)

입력:
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6

1. 초기 상태:
   M = 10, N = 8, K = 17
   field = 10x8 크기의 2차원 배열, 모두 0으로 초기화

2. 배추 위치 표시 후 field 배열:
   1 0 0 0 0 0 0 0
   1 1 0 0 0 0 0 0
   0 0 0 0 1 0 0 0
   0 0 0 0 1 0 0 0
   0 0 1 1 0 1 0 0
   0 0 0 0 0 0 0 0
   0 0 0 0 0 0 0 0
   0 0 0 0 1 1 1 0
   0 0 0 0 1 1 1 0
   0 0 0 0 1 1 1 0

3. DFS 실행 과정:
   1) (0,0)에서 시작
      - 첫 번째 배추 군집 탐색
      - 방문: (0,0), (1,0), (1,1)
      - wormCount = 1

   2) (2,4)에서 시작
      - 두 번째 배추 군집 탐색
      - 방문: (2,4), (3,4)
      - wormCount = 2

   3) (4,2)에서 시작
      - 세 번째 배추 군집 탐색
      - 방문: (4,2), (4,3), (4,5)
      - wormCount = 3

   4) (7,4)에서 시작
      - 네 번째 배추 군집 탐색
      - 방문: (7,4), (8,4), (9,4), (7,5), (8,5), (9,5), (7,6), (8,6), (9,6)
      - wormCount = 4

   5) (0,0)에서 다시 시작
      - 이미 방문한 배추이므로 무시

4. 최종 결과:
   wormCount = 5 (마지막으로 (0,0)에서 시작한 DFS는 새로운 군집을 찾지 못함)

5. 출력: 5

각 연결된 배추 군집마다 한 마리의 지렁이가 필요하므로, 
DFS를 통해 연결된 배추 군집의 수를 세는 것 => 필요한 지렁이의 수를 구하는 것.
*/