
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    let t=text.toLowerCase()
    let alpha='abcdefghijklmnopqrstuvwxyz'
    let postion=[]
    for(let i=0;i<=t.length-1;i++){
      let index= alpha.indexOf(t[i])
        postion.push(index+1)
      
    }
  return postion.filter((x)=>x>0).join(' ')
  
  }