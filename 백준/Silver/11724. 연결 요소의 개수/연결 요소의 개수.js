const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

// 간선 정보 
for (let i = 1; i <= M; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

// 방문 여부 확인
const visited = Array(N + 1).fill(false);

function dfs(v) {
    visited[v] = true;
    for (let neighbor of graph[v]) {
        if (!visited[neighbor]) {
            dfs(neighbor);
        }
    }
}

let connectedComponents = 0;

for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
        dfs(i);
        connectedComponents++;
    }
}

console.log(connectedComponents);
