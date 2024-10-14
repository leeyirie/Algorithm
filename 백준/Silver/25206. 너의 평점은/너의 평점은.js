const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

function getScore(subjects) {
    let totalScore = 0;
    let totalCredits = 0;

    const gradePoints = {
        'A+': 4.5,
        A0: 4.0,
        'B+': 3.5,
        B0: 3.0,
        'C+': 2.5,
        C0: 2.0,
        'D+': 1.5,
        D0: 1.0,
        F: 0.0,
    };

    for (let subject of subjects) {
        const [name, credit, grade] = subject.split(' ');

        if (grade !== 'P') {
            const creditNum = parseFloat(credit);
            totalCredits += creditNum;
            totalScore += creditNum * gradePoints[grade];
        }
    }

    return totalCredits > 0 ? totalScore / totalCredits : 0;
}

const averageScore = getScore(input);
console.log(averageScore.toFixed(6));
