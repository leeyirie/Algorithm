const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function sugarDelivery(N) {
    // 5킬로그램 봉지의 최대 개수부터 시작
    let fiveKgBags = Math.floor(N / 5);
    
    while (fiveKgBags >= 0) {
        // 5킬로그램 봉지를 사용하고 남은 무게
        let remaining = N - (5 * fiveKgBags);
        
        // 남은 무게가 3의 배수인 경우
        if (remaining % 3 === 0) {
            let threeKgBags = remaining / 3;
            return fiveKgBags + threeKgBags;
        }
        
        // 5킬로그램 봉지 개수를 하나 줄임
        fiveKgBags--;
    }
    
    // 정확하게 N킬로그램을 만들 수 없는 경우
    return -1;
}

console.log(sugarDelivery(N));

/* 

1. 초기 상태:
   N = 18
   fiveKgBags = Math.floor(18 / 5) = 3

2. 첫 번째 반복:
   fiveKgBags = 3
   remaining = 18 - (5 * 3) = 3
   3 % 3 === 0 이므로 조건 만족
   threeKgBags = 3 / 3 = 1
   return 3 + 1 = 4

3. 최종 결과: 4

다른 예시 (N = 11인 경우):

1. 초기 상태:
   N = 11
   fiveKgBags = Math.floor(11 / 5) = 2

2. 첫 번째 반복:
   fiveKgBags = 2
   remaining = 11 - (5 * 2) = 1
   1 % 3 !== 0 이므로 조건 불만족

3. 두 번째 반복:
   fiveKgBags = 1
   remaining = 11 - (5 * 1) = 6
   6 % 3 === 0 이므로 조건 만족
   threeKgBags = 6 / 3 = 2
   return 1 + 2 = 3

4. 최종 결과: 3

*/