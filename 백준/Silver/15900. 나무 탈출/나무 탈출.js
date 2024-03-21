const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const nodes = input.slice(1).map(v => v.split(" ").map(Number));

const graph = {};
for (let i = 0; i < N - 1; i++) {
  const [a, b] = nodes[i];
  if (!graph[a]) graph[a] = [];
  if (!graph[b]) graph[b] = [];
  graph[a].push(b);
  graph[b].push(a);
}

const visited = new Array(N + 1).fill(false);
let sum = 0;

function iterativeDFS(start) {
  const stack = [[start, 0]]; // 노드와 깊이를 함께 저장
  visited[start] = true;

  while (stack.length > 0) {
    const [node, depth] = stack.pop();

    // 리프 노드인 경우
    if (graph[node].length === 1 && visited[graph[node][0]]) {
      sum += depth;
      continue;
    }

    graph[node].forEach(next => {
      if (!visited[next]) {
        visited[next] = true;
        stack.push([next, depth + 1]);
      }
    });
  }
}

iterativeDFS(1);

console.log(sum % 2 === 0 ? "No" : "Yes");
