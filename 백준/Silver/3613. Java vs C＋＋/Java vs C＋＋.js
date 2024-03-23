const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

function change(code) {
    if (/^[a-z]+(_[a-z]+)*$/.test(code)) {
        return code.split('_').map((word, index) => 
            index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        ).join('');
    }
    else if (/^[a-z][a-zA-Z]*$/.test(code)) {
        return code.replace(/[A-Z]/g, match => `_${match.toLowerCase()}`);
    }
    // 그 외의 경우
    else {
        return "Error!";
    }
}


console.log(change(input)); 
