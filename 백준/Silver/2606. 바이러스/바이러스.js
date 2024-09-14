const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 컴퓨터의 수
const n = parseInt(input[0]);
// 네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수
const m = parseInt(input[1]);

// 그래프 초기화
const graph = Array.from({ length: n + 1 }, () => []);

// 그래프 구성
for (let i = 2; i < m + 2; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

// 방문 여부를 저장할 배열
const visited = new Array(n + 1).fill(false);

// DFS 함수 정의
function dfs(node) {
    // 현재 노드를 방문 처리
    visited[node] = true;
    
    // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
    for (let nextNode of graph[node]) {
        if (!visited[nextNode]) {
            dfs(nextNode);
        }
    }
}

// 1번 컴퓨터부터 DFS 시작
dfs(1);

// 감염된 컴퓨터 수 계산 (1번 컴퓨터 제외)
const infectedCount = visited.filter(v => v).length - 1;

console.log(infectedCount);

/* 입력 예시에 따른 코드 실행 과정 설명

입력:
7
6
1 2
2 3
1 5
5 2
5 6
4 7

1. 초기 상태:
   n = 7 (컴퓨터 수)
   m = 6 (연결 쌍의 수)
   graph = [[], [], [], [], [], [], [], []]
   visited = [false, false, false, false, false, false, false, false]

2. 그래프 구성 후:
   graph = [
     [],
     [2, 5],    // 1번 컴퓨터
     [1, 3, 5], // 2번 컴퓨터
     [2],       // 3번 컴퓨터
     [7],       // 4번 컴퓨터
     [1, 2, 6], // 5번 컴퓨터
     [5],       // 6번 컴퓨터
     [4]        // 7번 컴퓨터
   ]

3. DFS 실행 과정:
   1) dfs(1) 호출
      - visited[1] = true
      - 1과 연결된 2, 5 방문
   
   2) dfs(2) 호출
      - visited[2] = true
      - 2와 연결된 1(이미 방문), 3, 5 중 3 방문
   
   3) dfs(3) 호출
      - visited[3] = true
      - 3과 연결된 2(이미 방문)
   
   4) dfs(5) 호출 (2에서 돌아온 후)
      - visited[5] = true
      - 5와 연결된 1(이미 방문), 2(이미 방문), 6 중 6 방문
   
   5) dfs(6) 호출
      - visited[6] = true
      - 6과 연결된 5(이미 방문)

4. DFS 종료 후 visited 배열:
   [false, true, true, true, false, true, true, false]

5. 감염된 컴퓨터 수 계산:
   visited.filter(v => v).length - 1 = 5 - 1 = 4

6. 출력: 4
*/