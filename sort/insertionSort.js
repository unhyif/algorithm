function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];

    let j;
    for (j = i - 1; 0 <= j && currentValue < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}
