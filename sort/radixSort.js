function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function getDigitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getMaxDigitCount(nums) {
  return getDigitCount(Math.max(...nums));
}

function radixSort(nums) {
  const maxDigitCount = getMaxDigitCount(nums);

  for (let i = 0; i < maxDigitCount; i++) {
    const digitBuckets = Array.from({ length: 10 }, () => []);

    for (const num of nums) {
      const digit = getDigit(num, i);
      digitBuckets[digit].push(num);
    }

    nums = digitBuckets.flat();
  }

  return nums;
}
