import math

def check(n):
    a = math.sqrt(n)
    b = a - int(a)
    return b == 0.0

n = int(input())
i = 1
while i <= n:
    if check(i):
        print(i)
    i+=1