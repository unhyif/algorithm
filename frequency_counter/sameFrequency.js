// O(n)
function sameFrequency(num1, num2) {
  const str1 = String(num1);
  const str2 = String(num2);
  if (str1.length !== str2.length) return false;

  const count = {};

  for (const str of str1) {
    count[str] = (count[str] || 0) + 1;
  }
  for (const str of str2) {
    if (!count[str]) return false;
    count[str]--;
  }

  return true;
}
