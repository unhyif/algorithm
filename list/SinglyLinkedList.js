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

  shift() {
    if (!this.head) return undefined;

    const result = this.head;
    this.head = result.next;
    this.length--;

    if (!this.length) {
      this.tail = null;
    }

    return result;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let node = this.head;

    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return false;

    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const prevNode = this.get(index - 1);
      const newNode = new Node(value);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
    }

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const currentNode = prevNode.next;
    prevNode.next = currentNode.next;

    this.length--;
    return currentNode;
  }
}
