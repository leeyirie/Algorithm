const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const board = input.slice(1).map((line) => line.split(" ").map(Number));


const visited = Array.from({ length: N }, () => Array(N).fill(false));


function dfs(x, y) { 

  if(x < 0 || y < 0 || x >= N || y >= N || visited[x][y]) return false;
  if(board[x][y] === -1) return true;

  visited[x][y] = true; 

  const nextX = x + board[x][y]; // 오른쪽으로 점프
  const nextY = y + board[x][y]; // 아래로 점프

  // 오른쪽 또는 아래로의 이동 시도
  return dfs(x, nextY) || dfs(nextX, y);
}


console.log(dfs(0, 0) ? "HaruHaru" : "Hing");


