const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = parseInt(input[0]);
const list = input.slice(1);

let map = new Map();

list.forEach((el) => {
  const [rank, score] = el.split(" ");

  if (!map.has(rank)) {
    map.set(rank, [parseInt(score)]);
  } else {
    map.get(rank).push(parseInt(score));
  }
});

map.forEach((value, key) => {
  value.sort((a, b) => a - b);
});

const sorted = Array.from(map).sort((a, b) => {
  return b[0] - a[0];
});

const sortedMap = new Map(sorted);

// Map(4) {
//     '7' => [ 620 ],
//     '5' => [ 300, 420 ],
//     '4' => [ 340, 500, 510 ],
//     '2' => [ 420 ]
//   }

// 2단계: 등수 결정 및 치킨 적용

const ranked = [];
const chicken = [];

sortedMap.forEach((value, key) => {
  value.forEach((v, i) => {
    if (ranked.length < 5) {
      ranked.push({ key, v });
    } else if(key === ranked[4].key){
        chicken.push(v);
    }
  });
});


console.log(chicken.length)