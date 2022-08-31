// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


//Examples
    // isPangram("The quick brown fox jumps over the lazy dog."), true)
    // isPangram("This is not a pangram."), false)

function isPangram(string){
    let pan='abcdefghijklmnopqrstuz'.split('')
    let str= string.toLowerCase()
      return pan.every((x)=>str.includes(x))
   }
   

//    The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.