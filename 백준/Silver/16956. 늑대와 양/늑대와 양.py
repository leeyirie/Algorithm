import sys
input = sys.stdin.readline

def main():
    r, c = map(int, input().split()) # 목장의 크기 입력받기
    farm = [input().strip() for _ in range(r)] # 목장 상태 입력받기
		
		#목장을 탐색하며 늑대를 찾고 그 위치 상하좌우에 양이 있는지 확인
    for i in range(r):
        for j in range(c):
            if farm[i][j] == "W": # 늑대일 경우
                if check_surroundings(farm, r, c, i, j):
                    print(0) # 늑대와 양이 인접한 경우 0 출력 후 프로그램 종료
                    return
		# 프로그램 종료가 안되면 늑대가 양이랑 인접한 경우가 없는 것
		# 1 출력 후 빈 곳을 울타리로 채워 출력한다.
    print(1)
    for row in farm:
        print(row.replace(".", "D"))

# 늑대 위치 상하좌우를 확인하여 양과 인접한지 여부를 반환하는 함수
def check_surroundings(farm, r, c, i, j):
    for x, y in [(i-1, j), (i+1, j), (i, j-1), (i, j+1)]: # 현재 위치의 상하좌우
        # 목장의 범위 내에 있는지 확인하고 해당 위치에 양이 있는지 확인
        if 0 <= x < r and 0 <= y < c and farm[x][y] == "S":
            return True # 양이 인접한 경우 True 반환
    return False # 양이 인접하지 않은 경우 False 반환

if __name__ == "__main__":
    main()