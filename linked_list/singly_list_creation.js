const LinkedList = require('./singly_list')
const ListNode = require('./singly_list_node')

let list = new LinkedList()
let tail = list.head
function insertAtEnd(data){
    const newNode = new ListNode(data)
    if(!list.head){
        list.head=newNode
        this.tail=newNode
    }
    else{
       while(this.tail.next!=null){
           this.tail=this.tail.next
       }
       this.tail.next=newNode
       this.tail=newNode
    }
}

function insertAtBeg(data){
    const newNode = new ListNode(data)
    if(!list.head){
        list.head=newNode
        this.tail=newNode
    }
    else{
        this.tail=list.head
        list.head = newNode
        list.head.next = this.tail
        this.tail = list.head
    }
}


function insertAtNthPosition(data, position){
    if (position == 1){
        insertAtBeg(data) 
    }
    else{
        this.tail = list.head
        position--
        while(position>0){
            this.tail = this.tail.next
            position--
        }
        const newNode = new ListNode(data)
        newNode.next = this.tail.next
        this.tail.next = newNode
    }
}

function printList(){
    let temp = list.head
    while(temp!=null){
        console.log(temp.data)
        temp=temp.next
    }
}

module.exports = {insertAtEnd, insertAtBeg, insertAtNthPosition, printList}