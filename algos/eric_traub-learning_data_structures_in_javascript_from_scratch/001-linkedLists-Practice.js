/*
A linked list is a linear data structure where each element is a separate object.
Each element (we will call it a node) of a list is comprising of two items -
the data and a reference to the next node (or the next and the previous node).
*/
function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
}

var ll = new LinkedList();

LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, null, this.head);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};

ll.addToHead(10);
ll.addToHead(20);


LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, this.tail, null);
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};

ll.addToTail(0);


LinkedList.prototype.removeHead = function() {
  if (this.head) {
    this.head.next === null ?
    (this.head = null, this.tail = null) :
    (this.head = this.head.next, this.head.prev = null);
  }
  return null;
};



LinkedList.prototype.removeTail = function() {
  if (this.tail){
    this.tail.prev === null ?
    (this.tail = null, this.head = null) :
    (this.tail = this.tail.prev, this.tail.next = null);
  }
  return null;
};


LinkedList.prototype.search = function(value) {
  var currentNode = this.head;
  while(currentNode){
    if (currentNode.value === value) return true;
    currentNode = currentNode.next;
  }
  return false;
};


LinkedList.prototype.indexOf = function(value) {
  var curIndex = 0;
  var currentNode = this.head;
  while(currentNode){
    if (currentNode.value === value) return curIndex;
    curIndex ++;
    currentNode = currentNode.next;
  }
  return -1;
};

/*
            N --->  null  N  --->   N
null <--    D <--     D  <---   D
*/
