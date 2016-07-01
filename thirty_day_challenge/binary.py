#!/bin/python3

import sys


n = int(input().strip())
binary = []
ones = 0
total = 0

while n > 0:
    remainder = n % 2
    n = n // 2
    binary.append(remainder)

while binary:
    if binary[-1] == 1:
        ones += 1
    else:
        if total < ones:
            total = ones
        ones = 0
    binary.pop()
if ones > total:
    total = ones
print(total)



