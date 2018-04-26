"""
class BSTreeNode:
    def __init__(self, node_value):
        self.value = node_value
        self.left = self.right = None
"""
from collections import deque

def isPresent(root, val):
    if root:
        if root.value == val:
            return 1
        q = deque([root])
        
        while q:
            if root.left:
                if root.left.value == val:
                    return 1
                q.appendleft(root.left)
            if root.right:
                if root.right.value == val:
                    return 1
                q.appendleft(root.right)
            root = q.pop()
        return 0
    return 0

    
    # write your code here
    # return 1 or 0 depending on whether the element is present in the tree or not