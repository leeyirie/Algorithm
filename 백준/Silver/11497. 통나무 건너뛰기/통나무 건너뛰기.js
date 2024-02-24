const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]); // 테스트 케이스의 수
let lineIndex = 1;
for (let t = 0; t < T; t++) {
    const N = parseInt(input[lineIndex++]);
    const treeHeights = input[lineIndex++]
        .split(" ")
        .map(Number)
        .sort((a, b) => a - b); // 각 테스트 케이스마다 통나무 높이를 정렬한다.

    const nArr = new Array(N).fill(0);
    let left = 0;
    let right = N - 1;

    for (let i = 0; i < N; i++) {
        if (i % 2 === 0) {
            nArr[left++] = treeHeights[i];
        } else {
            nArr[right--] = treeHeights[i];
        } // 순차적으로 최소 차이의 배열로 담김.
    }

    let maxDiff = 0;
    for (let i = 0; i < N - 1; i++) {
        maxDiff = Math.max(maxDiff, Math.abs(nArr[i] - nArr[i + 1]));
    }
    // 원형 배열의 특성을 고려하여 첫 번째와 마지막 통나무 간의 높이 차도 비교
    maxDiff = Math.max(maxDiff, Math.abs(nArr[0] - nArr[N - 1]));

    console.log(maxDiff);
}
