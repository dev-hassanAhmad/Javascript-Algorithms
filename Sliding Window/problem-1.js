// find biggest total of n consequetive numbers in an array

const maxSum = (arr, num) => {
  if (arr.length < num) {
    return nulll;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    const element = arr[j];
    tempSum = tempSum - arr[j - num] + element;
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSum([1, 2, 3, 3], 2));
