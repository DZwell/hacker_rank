class Node(object):

    def __init__(self, data=None, next_node=None):
       self.data = data
       self.next = next_node


def Reverse(head):
    current = head
    prev = None
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    head = prev
    return head




