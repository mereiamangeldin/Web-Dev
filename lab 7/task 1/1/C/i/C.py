import math

def check(n):
    a = math.sqrt(n)
    b = a - int(a)
    return b == 0.0

a, b = int(input()), int(input())
for i in range(a, b+1):
    if check(i):
        print(i, end = ' ')

