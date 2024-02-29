import sys
n = int(sys.stdin.readline())

dp = [0, 1, 1, 1] + [0] * (n - 3)
for i in range(4, n + 1): 
    dp[i] = dp[i - 1] + dp[i - 3]
print(dp[n])

