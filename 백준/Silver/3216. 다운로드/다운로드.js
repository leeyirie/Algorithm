const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input[0]); 
const songList = input.slice(1).map(line => line.split(' ').map(Number)); 

function findMinTime(N, songList) {
  let total = songList[0][1]; //처음 다운로드 시간
  let accumulatedTime = songList[0][0]; //누적될 시간

  for (let i = 1; i < N; i++) {
      const [playTime, downloadTime] = songList[i];

      accumulatedTime -= downloadTime;

      if (accumulatedTime < 0) {
          total += -accumulatedTime;
          accumulatedTime = playTime;
      } else {
          accumulatedTime += playTime;
      }
  }

  return total;
}

console.log(findMinTime(N, songList)); 
