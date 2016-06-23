def find_cost():
    mealCost = float(input())
    tipPercent = int(input())
    taxPercent = int(input())
    tipPercent = mealCost * (tipPercent/100)
    taxPercent = mealCost * (taxPercent/100)
    totalCost = mealCost + tipPercent + taxPercent
    print('The total meal cost is {} dollars.'.format(round(totalCost)))
