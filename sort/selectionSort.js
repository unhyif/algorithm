function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (i === minIndex) continue;

    const min = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = min;
  }

  return arr;
}
