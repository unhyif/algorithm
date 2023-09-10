// O(n)
function isSubsequence(str1, str2) {
  if (!str1) return true;
  if (str1.length > str2.length) return false;

  let lettersToFind = str1;
  let frontIndex = 0;
  let backIndex = str2.length - 1;

  while (frontIndex <= backIndex) {
    const firstLetterToFind = lettersToFind[0];
    const lastLetterToFind = lettersToFind[lettersToFind.length - 1];

    if (
      firstLetterToFind === str2[frontIndex] &&
      lastLetterToFind === str2[backIndex]
    ) {
      lettersToFind = lettersToFind.slice(1, lettersToFind.length - 1);
      if (!lettersToFind.length) return true;

      frontIndex++;
      backIndex--;
    } else {
      if (firstLetterToFind !== str2[frontIndex]) frontIndex++;
      if (lastLetterToFind !== str2[backIndex]) backIndex--;
    }
  }

  return false;
}

// O(n)
function isSubsequence(str1, str2) {
  if (!str1) return true;
  if (str1.length > str2.length) return false;

  let index1 = 0;
  let index2 = 0;

  while (index2 < str2.length) {
    if (str1[index1] === str2[index2]) {
      if (index1 === str1.length - 1) {
        return true;
      }
      index1++;
    }
    index2++;
  }

  return false;
}

function isSubsequence(str1, str2) {
  if (!str1) return true;
  if (str1.length > str2.length) return false;
  if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
