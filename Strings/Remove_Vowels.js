// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

let tests = [
  "What are you, a communist?",
  "UPuV RbLIv ZtKgLTQXZlS",
  "dK ahYklqvogCm",
  "Dino",
];

function disemvowel(str) {
  let splittedStr = str.split("");
  let vowels = ["a", "e", "i", "o", "u"];
  return splittedStr
    .filter((part) => !vowels.includes(part.toLowerCase()))
    .join("");
}

tests.forEach((test) => {
  const testResult = disemvowel(test);
  console.log(`Test (${test}) result: ${testResult}\n`);
});
