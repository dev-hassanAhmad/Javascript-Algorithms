const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    var curr = arr[i];
    let position = 0;
    for (let j = i - 1; j >= 0; j--) {
      position = j;
      if (arr[j] > curr) {
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[position + 1] = curr;
  }
  return arr;
};
