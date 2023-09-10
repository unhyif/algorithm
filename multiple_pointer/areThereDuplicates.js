// O(n log n)
function areThereDuplicates(...args) {
  args.sort();

  let index = 0;
  while (index < args.length - 1) {
    if (args[index] === args[index + 1]) {
      return true;
    }
    index++;
  }

  return false;
}
