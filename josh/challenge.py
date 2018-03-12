http://lcm.csa.iisc.ernet.in/dsa/img151.gif

1 2 3 4 5 6 7 8 9

https://upload.wikimedia.org/wikipedia/commons/6/67/Sorted_binary_tree.svg

f
b g
a d i
c e h

def breadth_first():
    q = Queue(root)
    q.push(root)
    while q:
        if root.left:
            q.push(root.left)
        elif root.right:
            q.push(root.right)
        print(root.val)
        q.pop()
    return

// TODO: Print with new lines in between levels
/*
f
b g
a d i
c e h

*/

Ideas were:
Counting
Extra storage
make the queue tell you



text = 'this is a test this this this is a a a'
text = text.split('')
dict = {}
for word in text:
    if word in dict:
        dict[word] += 1
    dict[word] = 0

word_list = []
for key, value in dict:
    word_list.append((key, value))

word_list.sort(key = lambda t: t[1])
