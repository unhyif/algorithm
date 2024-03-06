function nestedEvenSum(obj) {
  let sum = 0;

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "number" && value % 2 === 0) {
      sum += value;
    } else if (
      typeof value === "object" &&
      value !== null &&
      !Array.isArray(value)
    ) {
      sum += nestedEvenSum(value);
    }
  }

  return sum;
}
