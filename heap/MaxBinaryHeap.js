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
}
