def check(a, b):
    if (a > 0 and b > 0) or (a < 0 and b < 0):
        return True
    return False

n = int(input())
temp = input()
arr = temp.split(' ')
arr = [int(i) for i in arr]

ok = False
for i in range(1, len(arr)):
    if check(arr[i], arr[i-1]):
        ok = True
        break
if ok:
    print('YES')
else:
    print('NO')
