n = int(input())
temp = input()
arr = temp.split(' ')
arr = [int(i) for i in arr]
cnt = 0
for i in range(1, len(arr)-1):
    if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
        cnt += 1

print(cnt)

