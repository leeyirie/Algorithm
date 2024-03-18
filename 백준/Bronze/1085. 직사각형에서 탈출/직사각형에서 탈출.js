const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const [x, y, w, h] = input;

const dist_x = Math.min(x, w - x);
const dist_y = Math.min(y, h - y);

console.log(Math.min(dist_x, dist_y));
