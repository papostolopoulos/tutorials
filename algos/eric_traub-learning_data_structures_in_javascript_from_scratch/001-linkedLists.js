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
  //The PREV parameter should be NULL because this node will become the HEAD of the
  //linked list and therefore there will be no other nodes preceding this one
  var newNode = new Node(value, this.head, null);

  //2. Position head
  //If there is a node in the linkedList, then we have to add the new node to the
  //old head node. We have to make sure that
  //   ---the NEXT property of the new node is pointing at the old head
  //      (done already when we defined the new NOde),
  //   ---and the PREVIOUS property of the old head is pointing at the new Node

  if(this.head !== null) this.head.prev = newNode; //LinkedList is not empty

  //Then we have to make sure that the linked list Head pointer (this.head
  //LinkedList.head) is referencing the new node (this.head = newNode)

  //Since the linked list is empty, the new node has to alse become the tail of the list
  else this.tail = newNode;

  //Regardless of if there are nodes existing in the linked list, we have to make
  //sure that the head of the linked list equals to the new node since the new node
  //is the new head
  this.head = newNode;
};



//If there is no node in the linked list, then we add the node and we have the
// head and the tail point to the new node. There is no connecting nodes so
//this new node is both the head and the tail of the LinkedList





LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);

  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};






LinkedList.prototype.removeHead = function() {
  if (!this.head) return null;
  var val = this.head.value;
  if (this.head && !this.head.next) {
    this.head = null;
    this.tail = null;
  }
  else {
    this.head = this.head.next;
    this.head.prev = null;
  }
  return val;
}





LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null;
  var val = this.tail.value;
  if (this.tail && !this.tail.prev) {
    this.tail = null;
    this.head = null;
  }
  else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  return val;
}


var ll = new LinkedList();
ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);






LinkedList.prototype.search = function(searchValue){
  var currentNode = this.head;

  while (currentNode) {
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }

  return null;
}





LinkedList.prototype.indexOf = function(searchValue) {
  var currentNode = this.head;
  var index = 0;

  while (currentNode) {
    if (currentNode.value === searchValue) return index;
    currentNode = currentNode.next;
    index ++;
  }
  return -1;
}





LinkedList.prototype.indexesOf = function(searchValue) {
  var currentNode = this.head;
  var index = 0;
  var endArr = [];

  while (currentNode) {
    if (currentNode.value === searchValue) endArr.push(index);
    currentNode = currentNode.next;
    index ++;
  }
  return endArr;
}
