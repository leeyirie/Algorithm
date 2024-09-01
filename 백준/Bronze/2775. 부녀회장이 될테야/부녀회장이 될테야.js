const fs = require('fs');
// 입력 파일에서 데이터 읽어와서 줄별로 나누기
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 줄은 테스트 케이스 개수
const T = Number(input[0]);


function populationCounting(k, n) {
    // 2차원 배열 만들기. 0으로 다 채워놓고 시작
    const dp = Array.from({length: k + 1}, () => new Array(n + 1).fill(0));
    
    // 0층은 i호에 i명씩 산다고 문제에서 줬으니까 그대로 넣어주기
    for (let i = 1; i <= n; i++) {
        dp[0][i] = i;
    }
    
    // 1층부터 k층까지 계산
    for (let floor = 1; floor <= k; floor++) {
        // 각 층의 1호부터 n호까지 돌면서
        for (let room = 1; room <= n; room++) {
            // 이 방의 사람 수 = 같은 층 옆방 사람 수 + 아래층 같은 호수 사람 수
            dp[floor][room] = dp[floor][room - 1] + dp[floor - 1][room];
        }
    }
    
    // 다 계산했으면 k층 n호 사람 수 돌려주기
    return dp[k][n];
}

// 결과들 다 모아서 한 번에 출력
let result = '';

// 테스트 케이스 개수만큼 반복
for (let i = 1; i <= T * 2; i += 2) {
    // i번째 줄은 층 수(k)
    const k = Number(input[i]);
    // 그 다음 줄은 호수(n)
    const n = Number(input[i+1]);
    
    // 계산해서 결과에 추가. + 줄바꿈 
    result += populationCounting(k, n) + '\n';
}


console.log(result.trim());