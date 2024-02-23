white_pieces = list(map(int, input().split()))

correct_pieces = [1, 1, 2, 2, 2, 8]

for i in range(6):
    print(correct_pieces[i] - white_pieces[i], end=" ")
