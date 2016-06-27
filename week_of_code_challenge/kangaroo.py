#!/bin/python3

import sys


x1,v1,x2,v2 = input().strip().split(' ')
x1,v1,x2,v2 = [int(x1),int(v1),int(x2),int(v2)]

while x1 <= x2:
    if x1 == x2:
        print('YES')
    elif x1 >= 10000 or x2 >= 10000:
        print('NO')
        break
    x1 = x1 + v1
    x2 = x2 + v2
