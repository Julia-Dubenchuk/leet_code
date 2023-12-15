type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  let res: MultiDimensionalArray = [];
  let partRes = [];

  if (n === 0) {
    return arr;
  }

  for (let i = 0; i < arr.length; i++) {
    let count = n;

    if (typeof arr[i] === 'number') {
      res.push(arr[i]);
    } else {
      partRes = flat(arr[i] as MultiDimensionalArray, --count);
      res = [...res, ...partRes];
    }
  }

  return res;
};
//[1,2,3,4,5,6,7,8,[9,10,11],12,13,14,15]
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));
//[1,2,3,4,5,[6],7,8,9,10]
console.log(
  flat(
    [
      [1, 2],
      [3, [4, [5, [6]]], 7],
      [8, 9, 10],
    ],
    3
  )
);
