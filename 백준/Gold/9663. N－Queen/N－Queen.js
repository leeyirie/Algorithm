const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N = Number(input[0]);

function solution(N) {
    let count = 0;
  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
      if (
        board[i] === col ||
        board[i] - i === col - row ||
        board[i] + i === col + row
      ) {
        return false;
      }
    }
    return true;
  }

  function solveNQueens(board, row, n) {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row] = col;
        solveNQueens(board, row + 1, n);
        board[row] = -1;
      }
    }
  }
  const board = Array(N).fill(-1);
  solveNQueens(board, 0, N);
  return count;
}
console.log(solution(N));
