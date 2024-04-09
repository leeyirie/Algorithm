const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n = 0;
const records = [];
let lineCount = 0;

rl.on('line', (line) => {
  if (lineCount === 0) {
    n = parseInt(line);
  } else {
    const [a, b] = line.split(' ').map(Number);
    records.push([a, b]);
    if (records.length === n) {
      rl.close();
    }
  }
  lineCount++;
}).on('close', () => {
  const status = {};
  let missingRecords = 0;

  records.forEach(([person, entered]) => {
    if (entered === 1) {
      if (person in status && status[person] === 1) {
        missingRecords += 1;
      }
      status[person] = 1;
    } else {
      if (!(person in status) || status[person] === 0) {
        missingRecords += 1;
      }
      status[person] = 0;
    }
  });

  Object.keys(status).forEach(person => {
    if (status[person] === 1) {
      missingRecords += 1;
    }
  });

  console.log(missingRecords);
});
