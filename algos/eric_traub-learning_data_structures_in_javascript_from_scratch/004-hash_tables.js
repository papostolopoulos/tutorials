function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

var hashTable = new HashTable(30);


function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}



//Hash the key value in order to turn it in a numeric value
HashTable.prototype.hash = function(key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  return total % this.numBuckets;
}


hashTable.hash("Paris");



//Insert nodes in the correct bucket
HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);

  if(!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
  else if (this.buckets[index].key === key) this.buckets[index].value = value;
  else{
    var currentNode = this.buckets[index];
    while(currentNode.next){
      if (currentNode.next.key === key){
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
}


hashTable.insert("Paris", "papostolopoulos@gmail.com");
hashTable.insert("Lefteris", "elefnApostolopoulos@gmail.com");
hashTable.insert("Pasri", "pasri@gmail.com");

hashTable.buckets;

hashTable.insert("Pasri", "pasri@protonmail.com");
hashTable.buckets;



//Get information about a certain person in the hast HashTable
HashTable.prototype.get - function(key) {
  var index = key.charCodeAt(key);
  var currentNode = this.buckets[index];
  if (!this.buckets[index]) return null;
  while(currentNode){
    if(currentNode.key === key) return currentNode;
    currentNode = currentNode.next;
  }
  return null;
}

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  var slot = this.buckets[index];
  if(!slot) return null;
  if(slot.key === key) return slot;
  while(slot.next){
    if (slot.next.key === key) return slot.next;
    slot = slot.next;
  }
  return null;
}
