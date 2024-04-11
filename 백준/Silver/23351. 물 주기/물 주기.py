# 화분 수, 초기 수분, 물 줄 화분의 수, 수분의 양
n, k, a, b = map(int, input().split())
# 각 화분의 초기 수분을 k로 초기화
pot = [k]*n
# 날짜 카운트
day = 0

# 모든 화분의 수분이 0이 아닐 동안 반복
while 0 not in pot:
		# 연속된 a개의 화분에 b만큼 물을 준다
    for i in range(a):
        pot[i] += b
    # 매일 모든 화분의 수분이 1씩 감소한다.
    for i in range(len(pot)):
        pot[i] -= 1
        
    # 다음 날 제일 수분이 적은 a개의 화분에 물을 주기 위해
    # 화분의 수분이 적은 순으로 정렬한다.
    pot.sort()
    
    day += 1 # 하루 경과했으므로 날짜 1 증가

print(day) # 첫 캣닢이 죽는 날짜 출력