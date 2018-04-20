"""
class BSTreeNode:
    def __init__(self, node_value):
        self.value = node_value
        self.left = self.right = None
"""

def isPresent (root,val):
    
    if root.value == val:
        return 1

    if not root.right:
        return root
    
    root = root.right

    isPresent(root, val)

    
    # write your code here
    # return 1 or 0 depending on whether the element is present in the tree or not