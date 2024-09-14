const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const map = input.slice(1).map(line => line.split('').map(Number));

// 방향 배열 (상, 하, 좌, 우)
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// 방문 여부를 저장할 2차원 배열
const visited = Array.from({ length: N }, () => new Array(N).fill(false));

// DFS 함수 정의
function dfs(x, y) {
    // 지도 범위를 벗어나거나, 집이 없거나, 이미 방문한 경우 종료
    if (x < 0 || x >= N || y < 0 || y >= N || map[x][y] === 0 || visited[x][y]) {
        return 0;
    }

    // 현재 위치 방문 처리
    visited[x][y] = true;
    let count = 1;  // 현재 집 포함

    // 상하좌우 탐색
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        count += dfs(nx, ny);
    }

    return count;
}

const complexes = [];

// 모든 위치에 대해 DFS 수행
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (map[i][j] === 1 && !visited[i][j]) {
            complexes.push(dfs(i, j));
        }
    }
}

// 결과 출력
console.log(complexes.length);
complexes.sort((a, b) => a - b).forEach(count => console.log(count));

/* 입력 예시에 따른 코드 실행 과정 설명

입력:
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000

1. 초기 상태:
   N = 7
   map = [
     [0,1,1,0,1,0,0],
     [0,1,1,0,1,0,1],
     [1,1,1,0,1,0,1],
     [0,0,0,0,1,1,1],
     [0,1,0,0,0,0,0],
     [0,1,1,1,1,1,0],
     [0,1,1,1,0,0,0]
   ]
   visited = 7x7 false로 초기화된 2차원 배열

2. DFS 실행 과정:
   1) (0,1)에서 시작
      - 첫 번째 단지 탐색
      - 방문: (0,1), (0,2), (1,1), (1,2), (2,0), (2,1), (2,2)
      - 단지 크기: 7
   
   2) (0,4)에서 시작
      - 두 번째 단지 탐색
      - 방문: (0,4), (1,4), (2,4), (3,4), (3,5), (3,6), (1,6), (2,6)
      - 단지 크기: 8
   
   3) (4,1)에서 시작
      - 세 번째 단지 탐색
      - 방문: (4,1), (5,1), (5,2), (5,3), (5,4), (5,5), (6,1), (6,2), (6,3)
      - 단지 크기: 9

3. DFS 종료 후 complexes 배열:
   [7, 8, 9]

4. 결과 출력:
   3  (단지의 수)
   7  (첫 번째 단지의 집 수)
   8  (두 번째 단지의 집 수)
   9  (세 번째 단지의 집 수)

*/