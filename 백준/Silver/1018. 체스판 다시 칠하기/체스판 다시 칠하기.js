const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const board = input.slice(1).map(line => line.split(''));

let minRepaint = Infinity;

for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) { // 8x8만들기 위한 시작점

        let rePaintW = 0;
        let rePaintB = 0;

        for (let k = i; k < i + 8; k++) {
            for (let l = j; l < j + 8; l++) { // 8x8내부의 판 하나씩 탐색

                if (((k + l) % 2 === 0 && board[k][l] !== 'W') || ((k + l) % 2 !== 0 && board[k][l] !== 'B')) {
                    rePaintW++;
                }
                if (((k + l) % 2 === 0 && board[k][l] !== 'B') || ((k + l) % 2 !== 0 && board[k][l] !== 'W')) {
                    rePaintB++;
                }
            }
        }

        minRepaint = Math.min(minRepaint, rePaintW, rePaintB);
    }
}

console.log(minRepaint);
