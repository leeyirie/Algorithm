const input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");
input.shift();
const answer = input
        .map((v) => {
                let [x, y] = v.split(" ").map(Number);
                while (x != y) {
                        if (x > y) {
                                x = Math.floor(x / 2);
                        } else {
                                y = Math.floor(y / 2);
                        }
                }

                return 10 * x;
        })
        .join("\n");
console.log(answer);