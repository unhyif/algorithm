// O(n)
function minSubArrayLen(arr, num) {
  let frontIndex = 0;
  let backIndex = 0;
  let sum = 0;
  let minLen = Infinity;

  while (frontIndex < arr.length) {
    if (sum < num && backIndex < arr.length) {
      sum += arr[backIndex];
      backIndex++;
    } else if (sum >= num) {
      minLen = Math.min(backIndex - frontIndex, minLen);
      sum -= arr[frontIndex];
      frontIndex++;
    } else {
      break;
    }
  }

  if (minLen === Infinity) {
    minLen = 0;
  }
  return minLen;
}

function minSubArrayLen(arr, num) {
  let minLen = Infinity;

  for (let frontIndex = 0; frontIndex < arr.length; frontIndex++) {
    let backIndex = frontIndex;
    let sum = 0;
    while (backIndex < arr.length) {
      sum += arr[backIndex];
      if (sum >= num) {
        minLen = Math.min(minLen, backIndex - frontIndex + 1);
        break;
      }
      backIndex++;
    }
  }

  if (minLen === Infinity) {
    minLen = 0;
  }
  return minLen;
}
