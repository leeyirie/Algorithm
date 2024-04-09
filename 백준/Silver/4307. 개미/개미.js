const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let T = parseInt(input[0])

let index = 1;

for(let i=0; i<T; i++){
    let [L, n] = input[index++].split(' ').map(Number)
    let arr = []
    for(let j=0; j<n; j++){
        arr.push(parseInt(input[index++]))
    }
    console.log(solution(L,arr))
}

function solution(L, arr) {
   let min = []
   let max = []
   for(pos of arr){
        let left = pos
        let right = L - pos
        min.push(Math.min(left, right))
        max.push(Math.max(left, right))
   }
   return [Math.max(...min), Math.max(...max)].join(' ')
}