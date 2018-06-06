function fixTheMeerkat(arr) {
  let tempVariable = arr[2];
  arr[2] = arr[0];
  arr[0] = tempVariable;
  return arr;
 }