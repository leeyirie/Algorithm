const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const field = input.slice(1).map(row => row.trim().split('')); //인풋의 각 줄을 2차원 배열로 변환(row)
//공백이 제거된 각 줄을 개별 문자로 분리하여 배열로 만들어준다.


// 상, 하, 좌, 우 방향을 나타내는 배열
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y) {
    if (x < 0 || x >= R || y < 0 || y >= C || field[x][y] !== '#') {
        return;
    }

    // 현재 위치의 풀을 방문했다고 표시
    field[x][y] = '.';

    // 상하좌우 네 방향을 검사
    for (let i = 0; i < 4; i++) {
        dfs(x + dx[i], y + dy[i]);
    }
}

let clumpCount = 0;

// 필드의 모든 위치를 순회
for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
        if (field[i][j] === '#') {
            dfs(i, j);
            clumpCount++;
        }
    }
}

console.log(clumpCount);

/* 

입력:
5 6
.#....
..#...
..#..#
...##.
.#....

1. 초기 상태:
   R = 5, C = 6
   field = [
     ['.', '#', '.', '.', '.', '.'],
     ['.', '.', '#', '.', '.', '.'],
     ['.', '.', '#', '.', '.', '#'],
     ['.', '.', '.', '#', '#', '.'],
     ['.', '#', '.', '.', '.', '.']
   ]

2. DFS 실행 과정:
   1) (0,1)에서 시작: 첫 번째 클럼프 발견
      - DFS로 (0,1) 방문 및 '.'로 변경
      - clumpCount = 1

   2) (1,2)에서 시작: 두 번째 클럼프 발견
      - DFS로 (1,2), (2,2) 방문 및 '.'로 변경
      - clumpCount = 2

   3) (2,5)에서 시작: 세 번째 클럼프 발견
      - DFS로 (2,5) 방문 및 '.'로 변경
      - clumpCount = 3

   4) (3,3)에서 시작: 네 번째 클럼프 발견
      - DFS로 (3,3), (3,4) 방문 및 '.'로 변경
      - clumpCount = 4

   5) (4,1)에서 시작: 다섯 번째 클럼프 발견
      - DFS로 (4,1) 방문 및 '.'로 변경
      - clumpCount = 5

3. 최종 결과:
   clumpCount = 5

각 DFS 호출은 연결된 '#' 기호들을 모두 찾아 '.'로 변경하므로,
서로 다른 뭉치를 별도로 계산할 수 있다.
*/