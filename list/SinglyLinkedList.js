class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let result;

    if (this.length === 1) {
      result = this.head;
      this.head = null;
      this.tail = null;
    } else {
      while (current.next !== this.tail) {
        current = current.next;
      }
      result = this.tail;
      this.tail = current;
      this.tail.next = null;
    }

    this.length--;

    return result;
  }
}
