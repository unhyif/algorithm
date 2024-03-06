function collectStrings(obj) {
  let result = [];

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "string") {
      result.push(value);
    } else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      result = result.concat(collectStrings(value));
    }
  }

  return result;
}
