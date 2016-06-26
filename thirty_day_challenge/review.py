T = int(input())
while T > 0:
    evens = ''
    odds = ''
    S = input()
    for char in range(0, len(S)):
        if char % 2 == 0:
            evens += S[char]
        else:
            odds += S[char]
    print(evens + ' ' + odds)
    T -= 1
