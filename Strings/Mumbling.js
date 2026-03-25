// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

let tests = ["abcd", "RqaEzty", "cwAt", "Dino"];

function accum(s) {
  let chars = s.split("");

  for (let i = 0; i < chars.length; i++) {
    let firstChar = chars[i].toUpperCase();
    let repeatedChars = chars[i].toLowerCase().repeat(i);

    chars[i] = firstChar + repeatedChars;
  }
  return chars.join("-");
}

tests.forEach((test) => {
  const testResult = accum(test);
  console.log(`Example (${test}) result: ${testResult}\n`);
});
