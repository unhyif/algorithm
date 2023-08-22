// O(n log n)
function validAnagram1(str1, str2) {
    str1 = str1.split('');
    str2 = str2.split('');
    str1.sort();
    str2.sort();
    return str1.join('') === str2.join('');
}

// O(n)
function validAnagram2(str1, str2) {
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

console.log(validAnagram1('', '')); // true
console.log(validAnagram1('aaz', 'zza')); // false
console.log(validAnagram1('anagram', 'nagaram')); // true
console.log(validAnagram1('rat', 'car')); // false
console.log(validAnagram1('awesome', 'awesom')); // false
console.log(validAnagram1('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram1('qwerty', 'qeywrt')); // true
console.log(validAnagram1('texttwisttime', 'timetwisttext')); // true

console.log(validAnagram2('', '')); // true
console.log(validAnagram2('aaz', 'zza')); // false
console.log(validAnagram2('anagram', 'nagaram')); // true
console.log(validAnagram2('rat', 'car')); // false
console.log(validAnagram2('awesome', 'awesom')); // false
console.log(validAnagram2('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
console.log(validAnagram2('qwerty', 'qeywrt')); // true
console.log(validAnagram2('texttwisttime', 'timetwisttext')); // true
