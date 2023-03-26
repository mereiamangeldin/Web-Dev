def xyz_there(s):
    for i in range(len(s)):
        if i == 0 or s[i-1] != '.':
            if s[i:i+3] == 'xyz':
                return True
    return False
