// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Examples:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a')

const areThereDuplicates = (...rest) => {
  const counter = {};
  for (let val of rest) {
    if (counter[val]) {
      return true;
    } else {
      counter[val] = 1;
    }
  }
  return false;
};
