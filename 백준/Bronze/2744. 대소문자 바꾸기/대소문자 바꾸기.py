word = input()
converted_word = ''

for char in word:
    if char.islower(): #islower()은 소문자인지 확인하는 것
        converted_word += char.upper()  #.upper() 대문자로 만들어 줌
    else:
        converted_word += char.lower()

print(converted_word)
