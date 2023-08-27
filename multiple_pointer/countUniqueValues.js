function countUniqueValues1(arr) {
    const set = new Set(arr);
    return set.size;
}

function countUniqueValues2(arr) {
    const length = arr.length;
    if (length < 2) return length;

    let count = 1;
    let backIndex = 0;
    let frontIndex = 1;

    while (frontIndex < length) {
        if (arr[backIndex] !== arr[frontIndex]) {
            count++;
        }
        backIndex++;
        frontIndex++;
    }

    return count;
}

function countUniqueValues3(arr) {
    const length = arr.length;
    if (length < 2) return length;

    let backIndex = 0;
    let frontIndex = 1;

    while (frontIndex < length) {
        if (arr[backIndex] !== arr[frontIndex]) {
            backIndex++;
            arr[backIndex] = arr[frontIndex];
        }
        frontIndex++;
    }

    return backIndex + 1;
}
