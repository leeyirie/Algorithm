const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input.shift(); // 테스트 케이스 수

for (let i = 0; i < T; i++) {
  const N = input.shift(); // 사람 수
  let teamNumbers = input.shift().split(" ").map(Number); // 팀 번호
  let team = {}; // 팀별 선수 몇 명인지 저장
  let del = new Set(); // 팀별 선수가 6명이 안 되는 팀 저장

  // 팀 별 주자 수 세기 및 제외되는 팀 구하기
  teamNumbers.forEach((num) => {
    if (!team[num]) team[num] = 1;
    else team[num]++;

    if (team[num] < 6) del.add(num);
    else del.delete(num);
  });

  // 점수 계산하기
  let ranking = 1; // 현재 등수
  let obj = {}; // 팀별 점수 현황 저장
  teamNumbers.forEach((num) => {
    // 제외되는 팀이 아니라면
    if (!del.has(num)) {
      // 한 번이라도 체크한 팀이 아니라면
      if (!obj[num])
        // 체크한 주자 수, 상위 4명 점수 합, 5번째 주자 점수
        obj[num] = [1, ranking, 0];
      // 한 번이라도 체크한 경우
      else {
        // 체크한 팀의 현재까지 인원이 4명 미만인 경우
        if (obj[num][0] < 4) {
          obj[num][0]++;
          obj[num][1] += ranking;
        }

        // 체크한 팀의 현재까지 인원이 4명인 경우 5번째 선수의 등수 체크
        else if (obj[num][0] === 4) {
          obj[num][0]++;
          obj[num][2] = ranking;
        }
      }
      ranking++;
    }
  });

  // 오름차순으로 정렬
  const sortedTeam = Object.entries(obj).sort((a, b) => {
    // 네 명의 주자의 점수 합이 같은 경우 다섯 번째 선수 고려
    if (a[1][1] === b[1][1]) return a[1][2] - b[1][2];
    else return a[1][1] - b[1][1];
  });

  console.log(sortedTeam[0][0]);
}