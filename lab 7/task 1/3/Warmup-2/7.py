def array_front9(nums):
  flag = False
  for i in nums[:4]:
    if  i == 9:
      flag = True
  return flag