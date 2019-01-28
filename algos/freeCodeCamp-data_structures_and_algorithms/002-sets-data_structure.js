/*Sets are similar to arrays but contrary to them, they do not accept duplicate values
and they are not in any particular order.
The use for a set is typicaly to check if an item is included in a collection or not.
*/

function mySet(){
  //var collection holds the set
  var collection = [];

  //checks for the presence of an element and returns true or false
  this.has = function (value) {
    return collection.indexOf(value) !== -1;
  };

  //returs all the values in the set;
  this.values = function() {
    return collection;
  };

  //add an element to the set
  this.add = function(value) {
    if (!this.has(value)){
      collection.push(value);
      return true;
    }
    return false;
  };

  //Remove an element from the set
  this.remove = function(value) {
    if (this.has(value)) {
      collection.splice(collection.indexOf(value), 1);
      return true;
    }
    return false;
  };

  //return the size of the collection
  this.size = function() {
    return collection.lenght;
  };

  // return the union of two sets - collection and something else
  this.union = function(someSet) {
    var unionSet = new mySet();
    var initialSet = this.values();
    var newSet = someSet.values();
    initialSet.forEach(function(el) {
      unionSet.add(el);
    });

    newSet.forEach(function(el) {
      unionSet.add(el);
    });

    return unionSet;
  };

  //Return the intersection of two sets as a new set.
  this.intersection = function(someSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values;
    firstSet.forEach(function(el) {
      if (someSet.has(el)) intersectionSet.add(el);
    });
    return intersectionSet;
  };

  //Return the difference of two sets as a new set
  this.difference = function(someSet) {
    var differenceSet = new mySet();
    var firstSet = this.values;
    firstSet.forEach(function(el) {
      if (!someSet.has(el)) differenceSet.add(el);
    });
    return differenceSet;
  };

  //See if a set is a subset of another set.
  this.subset = function(someSet) {
    var firstSet = this.values();
      return firstSet.every(function(el) {
        return someSet.has(value);
      });
  };
}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
setA.subset(setB);
setA.intersection(setB).values();
setB.difference(setA).values();
