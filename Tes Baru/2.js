const SortNumber = (array) => {
  let sortedNumber = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      for (let k = 0; k < sortedNumber.length; k++) {
        if (array[i] < array[j] && array[i] > sortedNumber[k]) {
          sortedNumber.push(array[i]);
        }
      }
    }
  }
  return sortedNumber;
};

console.log(SortNumber([3, 2, 5, 7, 3, 9, 8, 7, 6]));
