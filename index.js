const singly_linked_list = require('./linked_list/singly_list_creation')

for(let i=0;i<5;i++){
    singly_linked_list.insertAtEnd(i)
}

for(let i=5;i<10;i++){
    singly_linked_list.insertAtBeg(i)
}

singly_linked_list.insertAtNthPosition(23, 3)

singly_linked_list.printList()