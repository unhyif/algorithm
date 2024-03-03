function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  return callback(arr[0]) ? true : someRecursive(arr.slice(1), callback);
}
