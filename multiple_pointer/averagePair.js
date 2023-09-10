// O(n)
function averagePair(arr, num) {
  let frontIndex = 0;
  let backIndex = arr.length - 1;

  while (frontIndex < backIndex) {
    const average = (arr[frontIndex] + arr[backIndex]) / 2;
    if (average === num) {
      return true;
    } else if (average < num) {
      frontIndex++;
    } else {
      backIndex--;
    }
  }

  return false;
}
