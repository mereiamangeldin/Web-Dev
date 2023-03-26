if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))
    mx1 = arr[0]
    mx2 = -101
    for i in arr:
        if i > mx1:
            mx2 = mx1
            mx1 = i
        if mx2 < i < mx1:
            mx2 = i

    print(mx2)
