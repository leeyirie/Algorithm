const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = parseInt(input[0]);
const numList = new Set(input[1].split(' ')); 
const M = parseInt(input[2]); 
const mList = input[3].split(' ');



const solution = (numList, mList) => {
    let answer = [];
    for (let i = 0; i < mList.length; i++) {
        if (numList.has(mList[i])) { // Set을 이용하므로 includes 대신 has를 사용
            answer.push(1);
        } else {
            answer.push(0);
        }
    }
    return answer.join(' ');
}

console.log(solution(numList, mList));