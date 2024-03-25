const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = input.slice(1).map((el) => el.split(" "));

let dancers = new Set();
dancers.add("ChongChong");

arr.forEach(([person1, person2]) => {
    if (dancers.has(person1) || dancers.has(person2)) {
        dancers.add(person1);
        dancers.add(person2);
    }
});

console.log(dancers.size);