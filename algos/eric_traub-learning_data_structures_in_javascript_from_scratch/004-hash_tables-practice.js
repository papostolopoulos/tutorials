function HashTable(size){
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

var hashTable = new HashTable(30);

function hashNode(key, value, next){
  this.key = key;
  this.value = value;
  this.next = null;
}

HashTable.prototype.hash = function(key){
  var index = 0;
  for (var i = 0; i < key.length; i++) {
    index += key.charCodeAt(i);
  }
  return index % this.buckets.length;
};


HashTable.prototype.insert = function(key, value){
  var index = this.hash(key);

  if(!this.buckets[index]) this.buckets[index] = new hashNode(key, value);
  else if(this.buckets[index].key === key) this.buckets[index].value = value;
  else{
    var currentNode = this.buckets[index];
    while(currentNode.next){
      if(currentNode.key === key){
        currentNode.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.key === key ? currentNode.value = value : currentNode.next = new hashNode(key, value);
  }
};

hashTable.insert("Paris", "papostolopoulos@gmail.com");
hashTable.insert("Giorgos", "george14@yahoo.gr");
hashTable.insert("Rena", "planet09@gmail.com");

hashTable.insert("Piras", "piras111@gmail.com");



HashTable.prototype.get = function(key){
  var index = this.hash(key);
  if(!this.buckets[index]) return null;
  else{
    var currentNode = this.buckets[index];
    while(currentNode){
      if(currentNode.key === key) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }
};


HashTable.prototype.retrieveAll = function() {
  var resultArr = [];
  for (var i = 0; i < this.buckets.length; i++) {
    var currentBucket = this.buckets[i];
    if (!currentBucket) continue;
    else {
      if (!currentBucket.next) resultArr.push(currentBucket);
      else {
        while(currentBucket.next){
          resultArr.push(currentBucket);
          currentBucket = currentBucket.next;
        }
        resultArr.push(currentBucket);
      }
    }
  }
  return resultArr;
};
