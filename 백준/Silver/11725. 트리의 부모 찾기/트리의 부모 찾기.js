const fs = require('fs');
const input = fs.readFileSync('dev/stdin', 'utf8').trim().split('\n');

const N = Number(input[0]);
const edges = input.slice(1).map(line => line.split(' ').map(Number));

// 인접 리스트 생성
const graph = Array.from({ length: N + 1 }, () => []);
edges.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
});

const parents = Array(N + 1).fill(0); // 부모 정보를 저장할 배열
const queue = [1]; // BFS를 위한 큐
parents[1] = 1; // 루트 노드의 부모는 자기 자신으로 설정

// BFS 시작
while (queue.length > 0) {
    const current = queue.shift();
    
    graph[current].forEach(next => {
        if (parents[next] === 0) { // 아직 방문하지 않은 노드
            parents[next] = current; // 부모 설정
            queue.push(next); // 다음 탐색을 위해 큐에 추가
        }
    });
}

const result = parents.slice(2).join('\n');
console.log(result);
