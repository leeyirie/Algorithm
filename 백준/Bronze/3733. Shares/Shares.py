import sys

for line in sys.stdin:
    N, S = map(int, line.split())
    
    x = S // (N + 1)
    
    print(x)
