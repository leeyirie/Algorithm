import sys

n = int(sys.stdin.readline().strip())
records =[]

for _ in range(n):
    a, b = map(int, sys.stdin.readline().strip().split())
    records.append((a, b))

# 각 사람의 마지막 출입 상태를 추적하기 위한 딕셔너리
status = {}
missing_records = 0  # 누락된 기록의 수

for person, entered in records:
    if entered == 1:  # 사람이 들어옴
        if person in status and status[person] == 1:  # 이미 안에 있는 경우, 입장 기록이 누락됨
            missing_records += 1  # 누락된 기록 증가
        status[person] = 1  # 현재 상태를 '입장'으로 업데이트
    else:  # 사람이 나감
        if person not in status or status[person] == 0:  # 안에 없는데 나가는 경우, 입장 기록이 누락됨
            missing_records += 1  # 누락된 기록 증가
        status[person] = 0  # 현재 상태를 '퇴장'으로 업데이트

# 모든 기록을 처리한 후, 안에 남아있는 사람들(즉, 상태가 '입장'인 사람들)의 퇴장 기록이 누락됨
for person in status:
    if status[person] == 1:
        missing_records += 1  # 각각의 남은 사람들에 대해 누락된 '퇴장' 기록 추가

print(missing_records)
