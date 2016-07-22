class Node:
    def __init__(self,data):
        self.data = data
        self.next = None
class Solution:
    def display(self,head):
        current = head
        while current:
            print(current.data,end=' ')
            current = current.next

    def insert(self,head,data):
        previous = None
        current = head
        new_node = Node(data)
        if not head:
            head = new_node
            return head
        while current:
            previous = current
            current = current.next
        previous.next = new_node
        return head


