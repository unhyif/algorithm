class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(index) {
    if (index <= 0) return;

    const value = this.values[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parent = this.values[parentIndex];

    if (parent < value) {
      this.values[parentIndex] = value;
      this.values[index] = parent;
      this.bubbleUp(parentIndex);
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown(0);
    }
    return max;
  }

  sinkDown(index) {
    const value = this.values[index];
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const leftChildValue = this.values[leftChildIndex];
    const rightChildValue = this.values[rightChildIndex];
    const length = this.values.length;
    let swapIndex = null;

    if (leftChildIndex < length) {
      if (leftChildValue > value) {
        swapIndex = leftChildIndex;
      }
    }

    if (rightChildIndex < length) {
      if (
        (swapIndex === null && rightChildValue > value) ||
        (swapIndex !== null && rightChildValue > leftChildValue)
      ) {
        swapIndex = rightChildIndex;
      }
    }

    if (swapIndex !== null) {
      this.values[index] = this.values[swapIndex];
      this.values[swapIndex] = value;
      this.sinkDown(swapIndex);
    }
  }
}
