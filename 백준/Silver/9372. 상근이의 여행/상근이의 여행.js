const fs = require('fs');

const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const caseCount = parseInt(input[0], 10);
let index = 1;
const testCases = [];

for (let i = 0; i < caseCount; i++) {
    const [N, M] = input[index].split(' ').map(Number);
    const edges = [];
    for (let j = 0; j < M; j++) {
        const [a, b] = input[index + 1 + j].split(' ').map(Number);
        edges.push([a, b]);
    }
    testCases.push([N, M, edges]);
    index += M + 1;
}

class UnionFind {
    constructor(n) {
        this.parent = Array.from({ length: n }, (_, index) => index);
        this.rank = Array(n).fill(0);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX] += 1;
            }
        }
    }
}

function minimumFlights(testCases) {
    const results = [];

    for (const [n, m, edges] of testCases) {
        const uf = new UnionFind(n);
        let edgeCount = 0;

        for (const [a, b] of edges) {
            if (uf.find(a - 1) !== uf.find(b - 1)) {
                uf.union(a - 1, b - 1);
                edgeCount += 1;
            }
        }

        results.push(edgeCount);
    }

    return results;
}

const results = minimumFlights(testCases);
for (const result of results) {
    console.log(result);
}
