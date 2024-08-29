class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    return ++this.size;
  }

  pop() {
    if (this.size <= 0) return null;

    let node = this.first;

    this.first = node.next;
    if (this.size === 1) {
      this.last = null;
    }
    this.size--;

    node.next = null;
    return node.value;
  }
}
