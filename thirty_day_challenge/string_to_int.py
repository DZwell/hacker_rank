#!/bin/python3

import sys


S = input().strip()

try:
    int(s)
except ValueError:
    print('Bad String.')
