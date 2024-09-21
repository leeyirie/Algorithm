const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const seats = input[1].split(' ').map(Number);

function countPassengerMoves(n, start, seats) {
    if (seats[start - 1] === start) return 0;  // 이미 올바른 자리에 앉아있는 경우

    let count = 0;
    let current = start;

    do {
        current = seats[current - 1];
        count++;
    } while (current !== start);

    return count;
}

console.log(countPassengerMoves(n, m, seats));

/*

입력:
4 4
2 3 4 1

1. 초기 상태:
   n = 4, start = 4
   seats = [2, 3, 4, 1]
   count = 0, current = 4

2. 첫 번째 반복:
   current = seats[4-1] = seats[3] = 1
   count = 1

3. 두 번째 반복:
   current = seats[1-1] = seats[0] = 2
   count = 2

4. 세 번째 반복:
   current = seats[2-1] = seats[1] = 3
   count = 3

5. 네 번째 반복:
   current = seats[3-1] = seats[2] = 4
   count = 4

6. 종료:
   current === start (4 === 4), 루프 종료

7. 결과: count = 4


예제 입력 2의 경우:
4 4
2 1 4 3

1. 초기 상태: current = 4, count = 0
2. 첫 번째 반복: current = 3, count = 1
3. 두 번째 반복: current = 4, count = 2
4. 종료: current === start (4 === 4)

결과: count = 2
*/