def max_end3(nums):
  if nums[0] > nums[2]:
    a = [nums[0], nums[0], nums[0]]
  else:
    a = [nums[2], nums[2], nums[2]]
  return a
