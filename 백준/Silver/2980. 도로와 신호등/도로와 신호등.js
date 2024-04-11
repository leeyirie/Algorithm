const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, L] = input[0].split(' ').map(Number);
let arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(' ').map(Number));
}

function solution(arr, L){
    let time = 0;
    let cur = 0;
    for(let i=0; i<arr.length; i++){
        time += arr[i][0] - cur;
        cur = arr[i][0]
        if(time % (arr[i][1] + arr[i][2]) < arr[i][1]){
            time += arr[i][1] - time % (arr[i][1] + arr[i][2])
        }
    }
    time += L - cur
    return time
}

console.log(solution(arr,L))