const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, P] = input[0].split(" ").map(Number);

const stacks = Array.from(Array(7), () => []); // 1번부터 6번 줄까지 사용
let moves = 0;

for (let i = 1; i <= N; i++) {
    const [string, fret] = input[i].split(" ").map(Number);
    while (stacks[string].length > 0 && stacks[string][stacks[string].length - 1] > fret) {
        stacks[string].pop();
        moves++;
    }
    if (stacks[string][stacks[string].length - 1] !== fret) {
        stacks[string].push(fret);
        moves++;
    }
}

console.log(moves);
