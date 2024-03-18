def calculate_width(number):
    width = 0
    for digit in number:
        if digit == '1':
            width += 2
        elif digit == '0':
            width += 4
        else:
            width += 3
    # 각 숫자 사이에는 1cm의 여백이 들어가야하므로, 숫자의 개수 - 1 만큼의 여백 추가
    width += len(number) - 1
    # 호수판의 경계에는 1cm의 여백이 들어가야하므로, 왼쪽과 오른쪽 경계에 각각 1cm의 여백 추가
    width += 2
    return width

# 입력을 받고, 0이 입력될 때까지 처리를 반복
while True:
    number = input()
    if number == '0':
        break
    print(calculate_width(number))
