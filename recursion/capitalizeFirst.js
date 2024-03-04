function capitalizeFirst(arr) {
  const result = [];

  function recursive(input) {
    if (input.length === 0) return result;
    const firstElement = input[0];
    if (firstElement.length !== 0) {
      const word = firstElement[0].toUpperCase() + firstElement.slice(1);
      result.push(word);
    }
    return recursive(input.slice(1));
  }

  return recursive(arr);
}
