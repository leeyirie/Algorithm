const fs = require('fs');
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function bfs(start, target) {
    const queue = [[start, 0]];  // [position, time]
    const visited = new Array(100001).fill(false);
    visited[start] = true;

    while (queue.length > 0) {
        const [position, time] = queue.shift();

        if (position === target) {
            return time;
        }

        for (const nextPosition of [position - 1, position + 1, position * 2]) {
            if (nextPosition >= 0 && nextPosition <= 100000 && !visited[nextPosition]) {
                visited[nextPosition] = true;
                queue.push([nextPosition, time + 1]);
            }
        }
    }
}

console.log(bfs(N, K));

/* 

1. 초기 상태:
   N = 5, K = 17
   queue = [[5, 0]]
   visited[5] = true

2. BFS 실행 :
   1) 현재 위치: 5, 시간: 0
      다음 가능한 위치: 4, 6, 10
      queue = [[4, 1], [6, 1], [10, 1]]

   2) 현재 위치: 4, 시간: 1
      다음 가능한 위치: 3, 5(이미 방문), 8
      queue = [[6, 1], [10, 1], [3, 2], [8, 2]]

   3) 현재 위치: 6, 시간: 1
      다음 가능한 위치: 5(이미 방문), 7, 12
      queue = [[10, 1], [3, 2], [8, 2], [7, 2], [12, 2]]

   4) 현재 위치: 10, 시간: 1
      다음 가능한 위치: 9, 11, 20
      queue = [[3, 2], [8, 2], [7, 2], [12, 2], [9, 2], [11, 2], [20, 2]]

   n) 현재 위치: 17, 시간: 4
      목표 위치에 도달했으므로 BFS 종료

3. 최종 결과: 4

5 -> 10 -> 9 -> 18 -> 17

*/