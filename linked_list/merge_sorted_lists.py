"""
 Merge two linked lists
 head could be None as well for empty list
 Node is defined as

 class Node(object):

   def __init__(self, data=None, next_node=None):
       self.data = data
       self.next = next_node

 return back the head of the linked list in the below method.
"""

def MergeLists(headA, headB):
    if not headA and not headB:
        return
    elif not headA:
        return headB
    elif not headB:
        return headA
    else:
        prevA = None
        prevB = None
        currentA = headA
        currentB = headB
        nextA = headA.next
        nextB = headB.next

        while currentA and currentB:
            if currentB.data > currentA.data and currentB.data > currentA.next.data:
                currentA.next = currentB
                if prevB:
                    prevB.next = currentA
            elif currentA.data > currentB.data:
                currentB.next = currentA
            prevA = currentA
            prevB = currentB
            currentA = nextA
            currentB = nextB
            if nextA:
                nextA = nextA.next
            if nextB:
                nextB = nextB.next
        return headA if headA.data < headB.data else headB.data


def MergeLists(headA, headB):
    if not headA and not headB:
        return
    elif not headA:
        return headB
    elif not headB:
        return headA
    else:
        new_head = None
        prevA = None
        prevB = None
        currentA = headA
        currentB = headB
        nextA = headA.next
        nextB = headB.next

        while currentA and currentB:
            if currentA.data > currentB.data:
                new_head = currentA












