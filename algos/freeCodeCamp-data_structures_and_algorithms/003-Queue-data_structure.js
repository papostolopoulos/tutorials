/*A way to hold data.
Contrary to the stack where it is last in, first out, the Queue is last in,
last out (first in, first out);
*/

function Queue(){
  var collection = [];

  //Print the collection
  this.print = function() {
    console.log(collection);
  };

  //Add to the collection
  this.enqueue = function(value) {
    return collection.push(value);
  };

  //Remove from the collection
  this.dequeue = function() {
    return collection.shift();
  };

  //First element of collection
  this.front = function() {
    return collection[0];
  };

  //Size of collection
  this.size = function() {
    return collection.length;
  };

  //Check if collection is empty
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

var newQueue = new Queue();
newQueue.enqueue(5);
newQueue.enqueue(10);
newQueue.enqueue(15);
newQueue.print();
newQueue.isEmpty();
newQueue.dequeue();
newQueue.print();





//PRIORITY QUEUE
/*
We are not just passing an element in the Queue, but we are also passing the
priority of the element.
*/

function priorityQueue() {
  var collection = [];

  //Print the collection
  this.print = function() {
    console.log(collection);
  };



  //Add element in collection with a priority based on order of numbers
  this.enqueue = function(value) {
    //Check if there are any elements in collection. If not, add new value
    if (collection.length === 0){
      collection.push(value);
      return;
    }
    //Iterate through the collection. Find element that is larger than value and
    //add value before element that has larger value
    var notAdded = true;
    for (var i = 0; i < collection.length; i++) {
      if (collection[i] > value) {
        collection.splice(i, 0, value);
        notAdded = false;
        break;
      }
    }
    //If the element was not added in collection, then larger than all values so
    //push it in collection
    if(notAdded) collection.push(value);
  };


  //Remove from the collection. First out
  this.dequeue = function() {
    return collection.shift();
  };


  //Check the first element of the collection
  this.front = function() {
    return collection[0];
  };


  //Check if the collection is empty
  this.isEmpty = function() {
    return collection.length === 0;
  };


  //Check the size of collection
  this.size = function() {
    return collection.length;
  };

}

var pQueue = new priorityQueue();
pQueue.enqueue(5);
pQueue.print();
pQueue.enqueue(10);
pQueue.print();
pQueue.enqueue(0);
pQueue.print();
pQueue.enqueue(20);
pQueue.print();
pQueue.enqueue(15);
pQueue.print();
