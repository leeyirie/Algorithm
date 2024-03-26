const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const list = input.slice(1);

let count = 0; 
let chat = new Map(); 


for (let id of list) {
  if (id === "ENTER") {
    chat.clear();
  } else {
    if (!chat.has(id)) {
      count++;
      chat.set(id); 
    }
  }
}



console.log(count);
