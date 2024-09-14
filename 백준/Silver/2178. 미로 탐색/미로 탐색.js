const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
// 미로를 2차원 배열로 변환.
const maze = input.slice(1).map((line) => line.split('').map(Number));

// BFS .
function bfs(startX, startY) {
    // 상하좌우 이동을 위한 방향 배열.
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    // 방문 여부와 거리를 저장할 2차원 배열을 초기화.
    const visited = Array.from({ length: N }, () => new Array(M).fill(0));

    // BFS를 위한 큐를 초기화.
    const queue = [[startX, startY]];
    visited[startX][startY] = 1; // 시작 위치의 거리를 1로 설정

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        // 도착점에 도달했다면 거리를 반환.
        if (x === N - 1 && y === M - 1) {
            return visited[x][y];
        }

        // 상하좌우 네 방향을 확인.
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            // 미로 범위 내에 있고, 이동 가능한 칸이며, 아직 방문하지 않았다면
            if (
                nx >= 0 &&
                nx < N &&
                ny >= 0 &&
                ny < M &&
                maze[nx][ny] === 1 &&
                !visited[nx][ny]
            ) {
                queue.push([nx, ny]);
                visited[nx][ny] = visited[x][y] + 1; // 이전 칸의 거리 + 1
            }
        }
    }
}

// (0, 0)에서 시작.
console.log(bfs(0, 0));
