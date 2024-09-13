const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M, V] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

// 정점 번호가 작은 것을 먼저 방문하기 위해 정렬
graph.forEach(adj => adj.sort((a, b) => a - b));

function dfs(start) {
    const visited = new Array(N + 1).fill(false);
    const result = [];

    function dfsRecursive(v) {
        visited[v] = true;
        result.push(v);

        for (const next of graph[v]) {
            if (!visited[next]) {
                dfsRecursive(next);
            }
        }
    }

    dfsRecursive(start);
    return result;
}

function bfs(start) {
    const visited = new Array(N + 1).fill(false);
    const result = [];
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
        const v = queue.shift();
        result.push(v);

        for (const next of graph[v]) {
            if (!visited[next]) {
                visited[next] = true;
                queue.push(next);
            }
        }
    }

    return result;
}

console.log(dfs(V).join(' '));
console.log(bfs(V).join(' '));