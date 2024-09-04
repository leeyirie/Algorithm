def stone_game(N):
    if N % 2 == 1:
        return "SK"
    else:
        return "CY"

# 입력 받기
N = int(input())

# 결과 출력
print(stone_game(N))