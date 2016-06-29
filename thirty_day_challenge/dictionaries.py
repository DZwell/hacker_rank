N = input()

phone_book = {}

for k, v in phone_book.items():
    if k in phone_book:
        print('{}={}'.format(k, v))
    else:
        print('Not found')


