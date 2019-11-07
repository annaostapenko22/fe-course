const findLongestWord = string => {
  string = string.split(" ");
  console.log(string);
  let theLongestWord = string[0];
  console.log(theLongestWord);
  for (let i = 1; i < string.length; i++) {
    if (string[i].length > theLongestWord.length) {
      theLongestWord = string[i];
    }
  }
  console.log(`The longest word is "${theLongestWord}"`);
  return string;
};
console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord("Google do a roll"));
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
