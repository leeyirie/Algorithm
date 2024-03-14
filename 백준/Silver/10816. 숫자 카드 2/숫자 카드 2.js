
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = parseInt(input[0]);
const numList = input[1].split(' '); 
const M = parseInt(input[2]); 
const mList = input[3].split(' ');


let obj = {};

for (let i = 0; i < numList.length; i++) {
    if (obj[numList[i]] === undefined) {
        obj[numList[i]] = 1;
    } else {
        obj[numList[i]]++;
    }
}

//{ '2': 1, '3': 2, '6': 1, '7': 1, '10': 3, '-10': 2 }


    let answer = [];

    for (let i = 0; i < mList.length; i++) {
       if(obj[mList[i]] === undefined){
        answer.push(0);
       } else if(obj[mList[i]] !== undefined){
        answer.push(obj[mList[i]] )
       }
    }


console.log(answer.join(' '));