const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = parseInt(input[0]);
const logs = input.slice(1);

const statusMap = new Map();

for(let i = 0; i < n; i++) {
    const [name, action] = logs[i].split(' ');
    statusMap.set(name, action);
}

const present = [];
for (let [name, action] of statusMap) {
    if (action === "enter") {
        present.push(name);
    }
}

present.sort().reverse();

console.log(present.join('\n'));
