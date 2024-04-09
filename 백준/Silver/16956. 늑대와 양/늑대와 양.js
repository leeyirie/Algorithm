const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const main = () => {
    const [r, c] = input.shift().split(' ').map(Number); // 목장의 크기 입력받기
    const farm = input.slice(0, r); // 목장 상태 입력받기

    // 늑대 위치 상하좌우를 확인하여 양과 인접한지 여부를 반환하는 함수
    const checkSurroundings = (farm, r, c, i, j) => {
        for (const [x, y] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) { // 현재 위치의 상하좌우
            // 목장의 범위 내에 있는지 확인하고 해당 위치에 양이 있는지 확인
            if (0 <= x && x < r && 0 <= y && y < c && farm[x][y] === "S") {
                return true; // 양이 인접한 경우 True 반환
            }
        }
        return false; // 양이 인접하지 않은 경우 False 반환
    };

    // 목장을 탐색하며 늑대를 찾고 그 위치 상하좌우에 양이 있는지 확인
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (farm[i][j] === "W") { // 늑대일 경우
                if (checkSurroundings(farm, r, c, i, j)) {
                    console.log(0); // 늑대와 양이 인접한 경우 0 출력 후 프로그램 종료
                    return;
                }
            }
        }
    }

    // 프로그램 종료가 안되면 늑대가 양이랑 인접한 경우가 없는 것
    console.log(1);
    farm.forEach(row => {
        console.log(row.replace(/\./g, "D")); // 빈 곳을 울타리로 채워 출력
    });
};

main();
