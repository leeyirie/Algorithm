const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const battle = input.slice(1, M+1);



const directions = [
    [1, 0], // 아래
    [-1, 0], // 위
    [0, 1], // 오른쪽
    [0, -1] // 왼쪽
];

const visited = Array.from({ length: M }, () => Array(N).fill(false));


function bfs(startX, startY, team) {
    const queue = [[startX, startY]];
    let power = 0;
    visited[startX][startY] = true;

    while (queue.length > 0) {
        const [x, y] = queue.shift();
        power++;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < M && ny >= 0 && ny < N && !visited[nx][ny] && battle[nx][ny] === team) {
                visited[nx][ny] = true;
                queue.push([nx, ny]);
            }
        }
    }

    return power;
}

let whiteTeam = 0, blueTeam = 0;

for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
            const team = battle[i][j];
            const power = bfs(i, j, team);
            if (team === 'W') {
                whiteTeam += power * power;
            } else {
                blueTeam += power * power;
            }
        }
    }
}

console.log(whiteTeam, blueTeam);
