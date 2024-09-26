const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const map = input.slice(1).map(line => line.split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function dfs(x, y, height, visited) {
    visited[x][y] = true;

    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny] && map[nx][ny] > height) {
            dfs(nx, ny, height, visited);
        }
    }
}

function countSafeAreas(height) {
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));
    let count = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!visited[i][j] && map[i][j] > height) {
                dfs(i, j, height, visited);
                count++;
            }
        }
    }

    return count;
}

let maxSafeAreas = 0;
let maxHeight = Math.max(...map.flat());

for (let height = 0; height <= maxHeight; height++) {
    maxSafeAreas = Math.max(maxSafeAreas, countSafeAreas(height));
}

console.log(maxSafeAreas);

/* 

1. 
   N = 5
   map = [
     [6, 8, 2, 6, 2],
     [3, 2, 3, 4, 6],
     [6, 7, 3, 3, 2],
     [7, 2, 5, 3, 6],
     [8, 9, 5, 2, 7]
   ]

2. 최대 높이 계산: maxHeight = 9

3. 각 높이(0부터 9까지)에 대해 안전 영역 개수 계산:
   height = 0: 안전 영역 1개 (전체가 하나의 안전 영역)
   height = 1: 안전 영역 1개
   height = 2: 안전 영역 5개
   height = 3: 안전 영역 5개
   height = 4: 안전 영역 5개
   height = 5: 안전 영역 4개
   height = 6: 안전 영역 3개
   height = 7: 안전 영역 2개
   height = 8: 안전 영역 1개
   height = 9: 안전 영역 0개

4. 최대 안전 영역 개수: 5

DFS 함수는 각 안전 영역을 탐색하는 데 사용.
countSafeAreas 함수는 주어진 높이에 대해 안전 영역의 개수를 세는 데 사용.
*/