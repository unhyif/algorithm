class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        }
        current = current.right;
      } else {
        return undefined;
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
