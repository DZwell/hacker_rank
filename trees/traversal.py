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



'''
class Node:
      def __init__(self,info): 
          self.info = info  
          self.left = None  
          self.right = None 
           

       // this is a node of the tree , which contains info as data, left , right
'''
def height(root):
    if root:
        stack = [root]
        depth = 1
        max_depth = 0

        while stack:
            if root.left:
                stack.append(root.left)
                depth += 1
            elif root.right:
                stack.append(root.right)
            print(stack.pop())


    

