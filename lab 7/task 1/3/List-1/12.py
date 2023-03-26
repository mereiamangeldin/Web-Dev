def has23(nums):
  flag = False
  for i in nums:
    if i == 2 or i == 3:
      flag = True
  return flag
