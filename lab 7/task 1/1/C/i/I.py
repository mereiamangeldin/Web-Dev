n = int(input())
limit = n//2+1
d = 1
ans = []

while n != 1 and d < limit:
    d+= 1
    if n % d != 0:
        continue
    cnt = 0
    while n % d == 0:
        cnt+=1
        n = n // d
    if cnt != 0:
        ans.append(cnt+1)

num = 1
for i in ans:
    num = num*i

print(num)

