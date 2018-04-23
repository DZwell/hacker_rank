from collections import deque

#
# Definition for binary tree:
# class Tree(object):
#   def __init__(self, x):
#     self.value = x
#     self.left = None
#     self.right = None
def breadth_first_search(t):
    if t:
        seen = [t.value]
        q = deque([t])
        
        while q:
            if t.left:
                seen.append(t.left.value)
                q.appendleft(t.left)
            if t.right:
                seen.append(t.right.value)
                q.appendleft(t.right)
            t = q.pop()
        return seen
    return []


