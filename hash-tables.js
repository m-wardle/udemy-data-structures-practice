class HashTable {
  constructor(size) {
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    const bucket = total % this.numBuckets;
    return bucket;
  }

  insert(key, value) {
    const index = this.hash(key);
    console.log("KEY: ", key, "AT INDEX: ", index);
    if (!this.buckets[index]) {
      this.buckets[index] = new HashNode(key, value);
    } else {
      let currentNode = this.buckets[index];
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(key, value);
    }
  }
}

class HashNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}
const myHT = new HashTable(30);

myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@yahoo.com');

console.log(myHT);