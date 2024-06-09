function bubbleSort(arr) {
  for (let i = arr.length; 0 < i; i--) {
    let swapped = false;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const greater = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = greater;

        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}
