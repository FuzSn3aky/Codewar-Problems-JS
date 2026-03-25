function arrayDiff(a, b) {
  return a.filter((element) => b.includes(element));
}

console.log(arrayDiff([1, 3, 3, 4, 5, 7, 1], [1, 3]));
