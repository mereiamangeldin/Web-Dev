def degree(a, n):
    ans = 1
    for i in range(n):
        ans *= a
    return ans

a, b = input().split()
a = int(a)
b = int(b)

print(degree(a, b))

