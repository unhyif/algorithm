class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.length) return undefined;

    const node = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = node.prev;
      this.tail.next = null;

      node.prev = null;
    }

    this.length--;
    return node;
  }

  shift() {
    if (!this.length) return undefined;

    const node = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = node.next;
      this.head.prev = null;

      node.next = null;
    }

    this.length--;
    return node;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let count, node;

    if (index < this.length / 2) {
      count = 0;
      node = this.head;
      while (count !== index) {
        count++;
        node = node.next;
      }
    } else {
      count = this.length - 1;
      node = this.tail;
      while (count !== index) {
        count--;
        node = node.prev;
      }
    }

    return node;
  }

  set(index, value) {
    const node = this.get(index);

    if (node) {
      node.value = value;
      return true;
    } else {
      return false;
    }
  }
}
