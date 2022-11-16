// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

//Examples
// (high('man i need a taxi up to ubud'), 'taxi');
// (high('what time are we climbing up the volcano'), 'volcano');
// (high('take me to semynak'), 'semynak');
// (high('aa b'), 'aa');
// (high('b aa'), 'b');
// (high('bb d'), 'bb');
// (high('d bb'), 'd');
// (high('aaa b'), 'aaa');

function high(x) {
  let highestScore = 0;
  let highestWord = "";
  let words = x.split(" ");

  for (let i = 0; i <= words.length - 1; i++) {
    let strIndex = words[i];
    let count = 0;
    // console.log(count)
    for (let k = 0; k <= strIndex.length - 1; k++) {
      count += strIndex.charCodeAt(k) - 96;
      console.log(strIndex);
      if (count > highestScore) {
        highestScore = count;
        highestWord = strIndex;
      }
    }
  }
  return highestWord;
}
