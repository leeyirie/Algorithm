const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

// a=1, b=2A, c=B로 설정
const a = 1;
const b = 2 * A;
const c = B;

// 이차방정식의 근의 공식을 사용하여 근을 계산
const root1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);
const root2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a);

// 근을 오름차순으로 정렬
const roots = [root1, root2].sort((a, b) => a - b);

// 중복된 근을 제거하고 출력
console.log([...new Set(roots)].join(' '));
