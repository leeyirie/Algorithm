const fs = require('fs');
const [firstLine, ...mazeInput] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = firstLine.split(' ').map(Number);
const maze = mazeInput.map(line => line.split('').map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(x, y) {
    const queue = [[x, y]];

    while (queue.length > 0) {
        const [x, y] = queue.shift();
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];
            
            if (nx >= 0 && nx < N && ny >= 0 && ny < M && maze[nx][ny] === 1) {
                maze[nx][ny] = maze[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    return maze[N - 1][M - 1];
}

console.log(bfs(0, 0));
