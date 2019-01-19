/*
A linked list is a linear data structure where each element is a separate object.
Each element (we will call it a node) of a list is comprising of two items -
the data and a reference to the next node (or the next and the previous node).
*/
function LinkedList(){
  this.head = null;
  this.tail = null;
}


function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  //1. Create a new node. This will be the node to be added to the head of the
  //linked list.
  //This new node has to be placed at the beginning of the Linked list. Therefore,
  //the NEXT parameter is the current HEAD of the linked list.
  //The PREV parameter should be null because this node will bedome the HEAD of the
  //linked list and therefore there will be no other nodes preceding this one
  var newNode = new Node(value, this.head, null);
  //If there is a node in the linkedList, then we have to add the new node to the
  //old head node. We have to make sure that the NEXT property of the new node
  //is pointing at the old head, and the PREVIOUS property of the old head is
  //pointing at the new Node
  //Then we have to make sure that the linked list Head pointer or this.head is
  //referencing the new node
  if(this.head !== null) this.head.prev = newNode; //LinkedList is not empty

  //Since the linked list is empty, the new node has to become the tail of the list
  //(and at the next likne of code it also becomes the head of the list)
  else this.tail = newNode;

  //Regardless of if there are nodes existing in the linked list, we have to make
  //sure that the head of the linked list equals to the new node since the new node
  //is the new head
  this.head = newNode;
}



//What do we do when the linked list does not have any nodes to it versus what do
//we do if there nodes present to the linkedlist.
//If there is no node in the linked list, then we add the node and we have the
// head and the tail point to the new node. There is no connecting nodes so
//this new node is both the head and the tail of the LinkedList



























function LinkedList() {
  this.head = null;
  this.tail = null;
}

var ll1 = new LinkedList();

console.log(ll1);

function Node(value, next, previous){
  this.value = value;
  console.log("this.value is:", this.value);

  this.next = next;
  console.log("this.next is:", this.next);

  this.previous = previous;
  console.log("this.previous is:", this.previous);
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  console.log("creating a new node where the value is:", value,
              "next (this.head) is:", this.head,
            "and previous (null) is:", null);

  if(this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
}


ll = {
  head: {
    value: 300,
    next: {
      value: 200,
      next: {
        value: 100,
        next: null,
        previous: Node //(200)
      },
      previous: null
    },
    previous: null
  },

  tail: {
    value: 100,
    next: null,
    previous: {
      value: 200,
      next: Node, //(100)
      previous: null
    }
  }

}





function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(value, next, previous) {
  this.value = value;
  this.next = next;
  this.previous = previous;
}

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

var ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

var myLL = new LinkedList();
myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);
