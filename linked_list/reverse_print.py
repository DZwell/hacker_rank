class Node(object):

    def __init__(self, data=None, next_node=None):
       self.data = data
       self.next = next_node


def ReversePrint(head):
    current = head
    data_list = []
    if not head:
        return
    while current.next:
        data_list.append(current.data)
        current = current.next
    data_list.append(current.data)
    while data_list:
        print(data_list.pop())
