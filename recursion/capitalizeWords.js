function capitalizeWords(arr) {
  const result = [];

  function recursive(input) {
    if (input.length === 0) return result;
    result.push(input[0].toUpperCase());
    return recursive(input.slice(1));
  }

  return recursive(arr);
}
