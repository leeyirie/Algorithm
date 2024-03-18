x, y, w, h = map(int, input().split())

# x에서 왼쪽 경계까지의 거리
dist_x = min(x, w-x)
# y에서 아래쪽 경계까지의 거리
dist_y = min(y, h-y)

# x와 y의 최소 거리를 구하여 출력
print(min(dist_x, dist_y))
