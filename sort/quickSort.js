function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function arrangePivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  const pivot = arr[startIndex];
  let swapIndex = startIndex;

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, startIndex, swapIndex);
  return swapIndex;
}

function quickSort(arr, startIndex = 0, endIndex = arr.length - 1) {
  if (startIndex < endIndex) {
    const pivotIndex = arrangePivot(arr, startIndex, endIndex);
    quickSort(arr, startIndex, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, endIndex);
  }

  return arr;
}
