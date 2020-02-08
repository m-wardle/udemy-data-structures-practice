class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value <= this.value) {
      if (!this.left) {
        this.left = new BinarySearchTree(value);
      } else {
        this.left.insert(value);
      }
    } else if (value > this.value) {
      if (!this.right) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (typeof value !== "number") {
      return false;
    }
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (!this.left) {
        return false
      } else {
        return this.left.contains(value)
      }
    } else if (value > this.value) {
      if (!this.right) {
        return false;
      } else {
        return this.right.contains(value);
      }
    }
  }

  // cb = callback function to execute on each node.
  // order = order to traverse tree. Accepts 'in-order', 'pre-order', 'post-order'
  depthFirstTraversal(cb, order) {
    if (order === 'pre-order') {
      cb(this.value);
    }
    if (this.left) {
      this.left.depthFirstTraversal(cb, order);
    }
    if (order === 'in-order') {
      cb(this.value);
    }
    if (this.right) {
      this.right.depthFirstTraversal(cb, order);
    }
    if (order === 'post-order') {
      cb(this.value);
    }
  }
}

const bst = new BinarySearchTree(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

bst.depthFirstTraversal(console.log, 'post-order')