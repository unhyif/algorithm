class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.size) {
      this.last.next = node;
      this.last = node;
    } else {
      this.first = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.size) return null;

    const node = this.first;

    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;

    this.size--;
    return node.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
