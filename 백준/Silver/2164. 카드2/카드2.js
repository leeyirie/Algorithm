// 방법 1: 큐를 사용한 최적화
const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

class Queue {
    constructor() {
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }

    enqueue(item) {
        this.items[this.tailIndex] = item;
        this.tailIndex++;
    }

    dequeue() {
        const item = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return item;
    }

    peek() {
        return this.items[this.headIndex];
    }

    get length() {
        return this.tailIndex - this.headIndex;
    }
}

const queue = new Queue();

for (let i = 1; i <= N; i++) {
    queue.enqueue(i);
}

while (queue.length > 1) {
    queue.dequeue();  // 맨 앞의 카드를 버림
    queue.enqueue(queue.dequeue());  // 그 다음 카드를 맨 뒤로 보냄
}

console.log(queue.peek());

// 방법 2: 수학적 패턴을 이용한 O(1) 해결책
/*
const fs = require('fs');
const N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());

function findLastCard(n) {
    // 가장 가까운 2의 거듭제곱을 찾음
    let powerOfTwo = 1;
    while (powerOfTwo * 2 <= n) {
        powerOfTwo *= 2;
    }
    
    // 마지막 카드 계산
    return 2 * (n - powerOfTwo) + 1;
}

console.log(findLastCard(N));
*/


/* 

방법 1: 큐를 사용한 최적화
큐의 enqueue와 dequeue 연산이 O(1) 시간에 수행되므로, 
전체 알고리즘의 시간 복잡도가 O(N)으로 개선.

방법 2: 수학적 패턴을 이용한 해결책
1. N이 2의 거듭제곱일 때, 마지막 남는 카드는 항상 1.
2. 그 외의 경우, 마지막 카드는 2*(N-2^k) + 1 형태.
   여기서 2^k는 N보다 작은 가장 큰 2의 거듭제곱.
   
*/