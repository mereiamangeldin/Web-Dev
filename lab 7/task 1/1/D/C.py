n = int(input())
temp = input()
arr = temp.split(' ')
arr = [int(i) for i in arr]

cnt = 0
for i in arr:
    if i > 0:
        cnt += 1
print(cnt)