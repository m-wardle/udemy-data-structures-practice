class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value, this.head, null);
    if (this.head) {
      this.head.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  addToTail(value) {
    const newNode = new Node(value, null, this.tail);
    if(this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  removeHead() {
    if (!this.head) {
      return null;
    }
    const val = this.head.value;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    return val;
  }

  removeTail() {
    if (!this.tail) {
      return null;
    }
    const val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return val;
  }

  search(searchValue) {
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.value === searchValue) {
        return currentNode.value;
      } 
      currentNode = currentNode.next;
    }
    return null
  }

  indexOf(value) {
    const result = [];
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        result.push(index);
      }
      index++;
      currentNode = currentNode.next;
    }
    return result;
  }
}

class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

const list = new LinkedList();

list.addToTail(1);
list.addToTail(5);
list.addToTail(3);
list.addToTail(5);
list.addToTail(8);
list.addToTail(7);
list.addToTail(5);

console.log(list.indexOf(5))
