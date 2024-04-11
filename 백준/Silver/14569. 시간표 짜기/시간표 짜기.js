const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]);
const classes = new Map();

for (let i = 1; i <= N; i++) {
    let classEl = input[i].split(' ').map(Number).slice(1);
    classes.set(i, classEl);
}

let students = input.slice(N + 1);
const studentsNum = parseInt(students[0]);
let offTimeList = [];

for (let i = 1; i <= studentsNum; i++) {
    let list = students[i].split(' ').map(Number).slice(1);
    offTimeList.push(list);
}

const result = new Array(studentsNum).fill(0);

offTimeList.forEach((arr, i) => {
    classes.forEach((classEl) => {
        if (classEl.every(time => arr.includes(time))) {
            result[i]++;
        }
    });
});

console.log(result.join('\n'));
