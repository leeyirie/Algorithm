const fs = require('fs');
const input = fs.readFileSync('dev/stdin', 'utf8').trim().split('\n');

const N = Number(input[0]);
const list = input.slice(1).map(Number);

const trees = Array.from({ length: N + 1 }, () => []);

let root;
for (let i = 0; i < N; i++) {
    const parent = list[i];
    const node = i + 1;
    if (parent === -1) {
        root = node;
    } else {
        trees[parent].push(node);
    }
}

const heights = Array(N + 1).fill(-1);
heights[root] = 0;

function dfs(node, height) {
    heights[node] = height;
    for (const child of trees[node]) {
        dfs(child, height + 1);
    }
}

// 루트 노드에서 DFS 시작
dfs(root, 0);

// 1번 노드부터 N번 노드까지의 높이를 출력
const result = heights.slice(1).join('\n');
console.log(result);
