// O(n)
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;
  if (num <= 0) return null;

  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  let maxSum = sum;

  for (let i = num; i < arr.length; i++) {
    sum = sum - arr[i - num] + arr[i];
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}
