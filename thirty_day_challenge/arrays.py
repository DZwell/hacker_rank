#!/bin/python3

import sys


n = int(input().strip())
arr = [int(arr_temp) for arr_temp in input().strip().split(' ')]

i = -1
while i != abs(len(arr)):
    print(arr[i], end=' ')
    i -= 1
