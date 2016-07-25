def removeDuplicates(self,head):
    if not head:
        return
    numbers = set()
    current = head
    previous = None
    while current:
        if current.data in numbers:
            previous.next = current.next
            current = current.next
        else:
            numbers.add(current.data)
            previous = current
            current = current.next
    return head
