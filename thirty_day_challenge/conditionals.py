"""
Task
Given an integer, , perform the following conditional actions:

If  is odd, print Weird
If  is even and in the inclusive range of  to , print Not Weird
If  is even and in the inclusive range of  to , print Weird
If  is even and greater than , print Not Weird
"""

N = int(input().strip())

if N % 2 == 1 or N % 2 == 0 and N in range(6, 21):
    print('Weird')
elif (N % 2 == 0 and N in range(2, 6)) or (N % 2 == 0 and N > 20):
    print('Not Weird')
