function replaceElements(arr: number[]): number[] {
  const length = arr.length;

  if (length === 1) {
    arr[0] = -1;

    return arr;
  }

  if (length === 2) {
    arr[0] = arr[1];
    arr[1] = -1;

    return arr;
  }

  for (let i = 0; i < length; i++) {
    let max = arr[i + 1];

    if (i === length - 1) {
      arr[i] = -1;

      break;
    }

    for (let j = i + 1; j < length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }

    arr[i] = max;
  }

  return arr;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
