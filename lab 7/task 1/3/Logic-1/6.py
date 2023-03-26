def alarm_clock(day, vacation):
  if vacation:
      if day >= 1 and day <= 5:  # Weekdays
          return '10:00'
      else:  # Weekends
          return 'off'
  else:
      if day >= 1 and day <= 5:  # Weekdays
          return '7:00'
      else:  # Weekends
          return '10:00'
