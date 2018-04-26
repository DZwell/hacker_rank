# Complete the function below.
import math

def getMinimumUniqueSum(arr):
    if arr:
        ret = []
        ints = []

        for element in arr:
            counter = 0
            strings_list = element.split(' ')
            ints.append((int(strings_list[0]), int(strings_list[1])))

        print(ints)
        for i in range(ints[0], ints[1] + 1):
            if math.sqrt(i) % 1 == 0:
                counter += 1
        ret.append(counter)
        return ret
    return 0


print(getMinimumUniqueSum(['3 9', '17 24']))



def getMinimumUniqueSum(arr):
    if arr:
        ret = []
        for element in arr:
            counter = 0
            strings_list = element.split(' ')
            ints = [int(strings_list[0]), int(strings_list[1])]

            for i in range(ints[0], ints[1] + 1):
                if math.sqrt(i) % 1 == 0:
                    counter += 1
            ret.append(counter)
        return ret
    return 0