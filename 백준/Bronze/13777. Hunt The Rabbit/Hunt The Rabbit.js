const readline = require('readline');

function findRabbit(hiddenNumber) {
    let low = 1;
    let high = 50;
    let attempts = [];

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        attempts.push(mid);
        if (mid === hiddenNumber) {
            return attempts;
        } else if (mid < hiddenNumber) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

rl.on('line', (line) => {
    const number = parseInt(line);
    if (number === 0) {
        rl.close();
    } else {
        inputs.push(number);
    }
}).on('close', () => {
    inputs.forEach(hiddenNumber => {
        const attempts = findRabbit(hiddenNumber);
        console.log(attempts.join(' '));
    });
    process.exit(0);
});
