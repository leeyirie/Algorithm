const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const cptNum = parseInt(input[0]);
const setNum = parseInt(input[1]);
const connections = input.slice(2).map(line => line.split(' ').map(Number));

function spreadVirus(cptNum, connections) {
  const graph = Array.from({ length: cptNum + 1 }, () => []);
  const visited = Array(cptNum + 1).fill(false);

  // 그래프 구성
  for (let [a, b] of connections) {
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs(node) {
    visited[node] = true;
    for (let next of graph[node]) {
      if (!visited[next]) {
        dfs(next);
      }
    }
  }

  dfs(1); // 1번 컴퓨터부터 시작

  // 방문한 노드 수 세기
  let infectedCount = visited.filter(val => val).length - 1; // 1번 컴퓨터 제외
  return infectedCount;
}

console.log(spreadVirus(cptNum, connections));
