function flatten(arr) {
  const result = [];

  function recursive(input) {
    if (input.length === 0) return result;

    const firstElement = input[0];
    if (Array.isArray(firstElement)) {
      return recursive(firstElement.concat(input.slice(1)));
    } else {
      result.push(firstElement);
      return recursive(input.slice(1));
    }
  }

  return recursive(arr);
}
