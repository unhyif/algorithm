function stringifyNumbers(obj) {
  let newObj = {};

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "number") {
      newObj[key] = String(value);
    } else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      newObj[key] = stringifyNumbers(value);
    } else {
      newObj[key] = value;
    }
  }

  return newObj;
}
