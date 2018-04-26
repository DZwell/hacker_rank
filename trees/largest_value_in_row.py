from collections import deque
#
# Definition for binary tree:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def largestValuesInTreeRows(t):
    if t:
        largest_val = t.left.value
        q = deque([t])
        largest_vals_list = []

        while q:
            if t.left:
                if t.left.value > largest_val:
                    largest_val = t.left.value
                q.appendleft(t.left)

            if t.right:
                if t.right.value > largest_val:
                    largest_val = t.right.value
                q.appendleft(t.right)

            t = q.pop()
            largest_vals_list.append(largest_val)
        return largest_vals_list
    return []
