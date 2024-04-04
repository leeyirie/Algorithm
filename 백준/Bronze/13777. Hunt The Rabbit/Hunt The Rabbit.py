import sys

def findRabbit(hiddenNumber):
    low = 1
    high = 50
    attempts = []

    while low <= high:
        mid = (low + high) // 2
        attempts.append(mid)
        if mid == hiddenNumber:
            return attempts
        elif mid < hiddenNumber:
            low = mid + 1
        else:
            high = mid - 1

def main():
    inputs = []
    for line in sys.stdin:
        number = int(line.strip())
        if number == 0:
            break
        inputs.append(number)

    for hiddenNumber in inputs:
        attempts = findRabbit(hiddenNumber)
        print(' '.join(map(str, attempts)))

if __name__ == "__main__":
    main()
