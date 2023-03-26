def mn(a, b, c, d):
    return min(min(a, b), min(c, d))

a, b, c, d = input().split()
print(mn(int(a), int(b), int(c), int(d)))