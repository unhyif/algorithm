function naiveStringSearch(str, word) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== word[0]) continue;

    const comparisonTarget = str.slice(i, i + word.length);
    if (comparisonTarget.length !== word.length) break;

    i += getDifferenceToNextIndex(comparisonTarget, word, () => count++);
  }

  return count;
}

function getDifferenceToNextIndex(comparisonTarget, word, onComplete) {
  for (let i = 1; i < word.length; i++) {
    if (comparisonTarget[i] !== word[i]) return i;
  }

  onComplete();
  return word.length;
}
