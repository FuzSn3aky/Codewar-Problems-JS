// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//   All numbers are valid Int32, no need to validate them.
//   There will always be at least one number in the input string.
//   Output string must be two numbers separated by a single space, and highest number is first.

let examples = ["-1 -1", "1 9 5 -2 -5"];

let example = "-1 -1";

function highAndLow(numbers) {
  let ARRAY = numbers.split(" ");

  let highest = Number(ARRAY[0]);
  let lowest = Number(ARRAY[0]);
  console.log(highest, lowest);
  for (let i = 0; i < numbers.length; i++) {
    let index_s2i = Number(ARRAY[i]);
    if (index_s2i > highest) {
      highest = index_s2i;
    }
    if (index_s2i < lowest) {
      lowest = index_s2i;
    }
  }
  return `${highest} ${lowest}`;
}
examples.forEach((ex) => {
  console.log(highAndLow(ex));
});
