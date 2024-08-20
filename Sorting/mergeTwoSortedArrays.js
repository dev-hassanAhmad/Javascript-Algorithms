export const mergeTwoSortedArrays = (one, two) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < one.length && j < two.length) {
    if (one[i] < two[j]) {
      result.push(one[i]);
      i++;
    } else {
      result.push(two[j]);
      j++;
    }
  }
  while (i < one.length) {
    result.push(one[i]);
    i++;
  }
  while (j < two.length) {
    result.push(two[j]);
    j++;
  }
  return result;
};

// export const mergeTwoSortedArrays = (one, two) => {
//     let result = [];
//     let i = 0,
//       j = 0;
//     while (i <= one.length - 1 || j <= two.length - 1) {
//       if (one[i] < two[j]) {
//         result.push(one[i]);
//         i++;
//       } else {
//         result.push(two[j]);
//         j++;
//       }
//     }
//     return result;
//   };
