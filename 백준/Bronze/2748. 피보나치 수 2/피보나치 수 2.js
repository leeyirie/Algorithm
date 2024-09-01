const fs = require('fs');
// 입력 파일에서 데이터 읽어오기. 줄바꿈이나 공백 있으면 지워버리고.
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

function fibonacci(n) {
    // n이 1 이하면 그냥 n 그대로 반환. 왜냐면 F(0) = 0, F(1) = 1 이니까.
    if (n <= 1) return BigInt(n);
    
    // 피보나치 수열을 저장할 배열 만들기. 
    // BigInt 쓰는 이유 =>  숫자가 엄청 커질 수 있어서.
    let fib = [BigInt(0), BigInt(1)];
    
    // 2부터 n까지 피보나치 수 계산하기
    for (let i = 2; i <= n; i++) {
        // 새로운 피보나치 수는 바로 앞의 두 수의 합.
        fib[i] = fib[i-1] + fib[i-2];
    }
    
    // n번째 피보나치 수 반환
    return fib[n];
}

console.log(fibonacci(n).toString());  
// BigInt는 그냥 출력하면 BigInt 타입이라는 걸 나타내는 'n'이 뒤에 붙기 때문에, toString() 써줘야 함.