// A Narcissistic Number(or Armstrong Number) is a positive number which is the sum of its own digits,
//   each raised to the power of the number of digits in a given base.In this Kata,
//     we will restrict ourselves to decimal(base 10).

let examples = [153, 2561, 901, 200, 1652];

let example = 153;

function narcissistic(value) {
  let i2s = String(value);
  let result = 0;
  for (let i = 0; i < i2s.length; i++) {
    result += Number(i2s[i]) ** i2s.length;
  }
  return result === value;
}

examples.forEach((example) => {
  console.log(narcissistic(example));
});
