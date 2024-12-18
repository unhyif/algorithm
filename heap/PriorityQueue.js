class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(index) {
    if (index <= 0) return;

    const node = this.values[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.values[parentIndex];

    if (parent.priority >= node.priority) {
      this.values[parentIndex] = node;
      this.values[index] = parent;
      this.bubbleUp(parentIndex);
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  sinkDown(index) {
    const node = this.values[index];
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const leftChild = this.values[leftChildIndex];
    const rightChild = this.values[rightChildIndex];
    const length = this.values.length;
    let swapIndex = null;

    if (leftChildIndex < length) {
      if (leftChild.priority <= node.priority) {
        swapIndex = leftChildIndex;
      }
    }

    if (rightChildIndex < length) {
      if (
        (swapIndex === null && rightChild.priority <= node.priority) ||
        (swapIndex !== null && rightChild.priority <= leftChild.priority)
      ) {
        swapIndex = rightChildIndex;
      }
    }

    if (swapIndex !== null) {
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = node;
      this.sinkDown(swapIndex);
    }
  }
}
