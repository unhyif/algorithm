// O(n log n)
function validAnagram(str1, str2) {
  str1 = str1.split("");
  str2 = str2.split("");
  str1.sort();
  str2.sort();
  return str1.join("") === str2.join("");
}

// O(n)
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const count = {};

  for (const str of str1) {
    count[str] = (count[str] || 0) + 1;
  }

  for (const str of str2) {
    if (!count[str]) return false;
    count[str] -= 1;
  }

  return true;
}
