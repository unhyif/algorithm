function binarySearch(arr, value) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    const middle = Math.floor((first + last) / 2);
    if (arr[middle] === value) return middle;
    else if (value < arr[middle]) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }

  return -1;
}
