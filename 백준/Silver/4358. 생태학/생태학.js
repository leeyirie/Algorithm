const fs = require("fs");
const trees = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


let treeMap = new Map();


trees.forEach(tree => {
  if (treeMap.has(tree)) {
    treeMap.set(tree, treeMap.get(tree) + 1);
  } else {
    treeMap.set(tree, 1);
  }
});

const totalTrees = trees.length; 
let results = [];

treeMap.forEach((count, tree) => {
  const percentage = (count / totalTrees * 100).toFixed(4);
  results.push(`${tree} ${percentage}`);
});

results.sort();

results.forEach(result => console.log(result));