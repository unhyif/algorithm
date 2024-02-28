function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  let accumulated = "";
  let maxLen = 0;

  while (start < str.length) {
    const currentLetter = str[end];

    if (!accumulated.includes(currentLetter) && end < str.length) {
      accumulated += currentLetter;
      end++;
    } else if (accumulated.includes(currentLetter)) {
      maxLen = Math.max(end - start, maxLen);
      const newStart = accumulated.indexOf(currentLetter) + 1;
      accumulated = accumulated.slice(newStart, accumulated.length);
      start += newStart;
    } else {
      maxLen = Math.max(end - start, maxLen);
      break;
    }
  }

  return maxLen;
}
