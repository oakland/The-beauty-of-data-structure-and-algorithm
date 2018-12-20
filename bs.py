def binary_search(list, item):
  low = 0;
  high = len(list) - 1

  white low <= high:
    mid = (low + high) / 2
    guess = list[mid]
    if guess == item:
      return mid
    if guess > item:
      high = mid - 1
    else:
      low = high + 1
  return None

