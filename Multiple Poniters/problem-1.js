// count unique values in a sorted array

// [1,1,1,3,4,4,5,5,6]

const countUniqueValues = (arr) => {
  let left = 0;
  let right = 1;
  while (right < arr.length) {
    if (arr[right] === arr[left]) {
      right++;
    } else {
      left = ++left;
      arr[left] = arr[right];
      right++;
    }
  }
  return left + 1;
};
console.log(countUniqueValues([1, 1, 1, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9]));
