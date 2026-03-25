// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

let tests = ["test", "testing", "middle", "A"];

function getMiddleChars(string) {
  let len = string.length;

  const isStringLenEven = len % 2 === 0;

  if (isStringLenEven) {
    return string.substring(len / 2 - 1, len / 2 + 1);
  }

  return string[Math.floor(len / 2)];
}

tests.forEach((test) => {
  const testResult = getMiddleChars(test);

  console.log(`Test (${test}) result: ${testResult}\n`);
});
