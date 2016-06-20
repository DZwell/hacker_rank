"""
 Merge two linked list
 head could be None as well for empty list
 Node is defined as

 class Node(object):

   def __init__(self, data=None, next_node=None):
       self.data = data
       self.next = next_node

 return back the head of the linked list in the below method.
"""

def CompareLists(headA, headB):
    if not headA and not headB:
        return 1
    if (headA  and not headB) or (headB and not headA):
        return 0
    currentA = headA
    currentB = headB
    while currentA and currentB:
        if currentA.data != currentB.data:
            return 0
        currentA = currentA.next
        currentB = currentB.next
    if not currentA and not currentB:
        return 1
    return 0
