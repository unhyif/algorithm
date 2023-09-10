// O(n)
function areThereDuplicates() {
  return arguments.length !== new Set(arguments).size;
}

// O(n)
function areThereDuplicates(...args) {
  const isValuePresent = {};

  for (const value of args) {
    if (isValuePresent[value]) return true;
    isValuePresent[value] = true;
  }

  return false;
}
