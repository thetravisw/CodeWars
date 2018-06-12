function isNice(arr) {
  if (arr.length === 0) return false;
  let nice = [];
  for (var i in arr) {
    nice[i] = false;
    arr.forEach(function (j) {
      if (Math.pow(arr[i] - j, 2) === 1) nice[i] = true;
    });
  }
  return (!nice.includes(false));
}