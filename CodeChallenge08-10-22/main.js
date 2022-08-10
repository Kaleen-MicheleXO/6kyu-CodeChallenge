// Encrypt this!
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.

// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

encryptThis("A"), "65"
encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
encryptThis("The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
encryptThis("Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
rencryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple" 
//PREP
//P: taking in a string of words
//R:return each word in the string the first letter should be the ASCII code thesecound letter should be switched with the last letter and repeat for all the letters
//E:
//P: ASCII charCodeAt()


var encryptThis = function(text) {
    let str=  text.split(' ')
    let arr=[]
     for(let i=0;i<=str.length-1;i++){
      if(str[i].length===1){
      arr.push(str[i].charCodeAt().toString())   
    }else if(str[i].length===2){
       let s= str[i]
       let strSplit=s.split('')
       arr.push(strSplit[0].charCodeAt().toString()+ strSplit[1])
   }else{
      let s= str[i]
      let strSplit=s.split('')
      arr.push(strSplit[0].charCodeAt()+ strSplit[strSplit.length-1] +s.slice(2,-1) + s[1])}
   
     
     }
     return arr.join(' ')
   
   }



   var encryptThis = function(text) {
    let str=  text.split(' ')
    let arr=[]
     for(let i=0;i<=str.length-1;i++){
      if(str[i].length===1){
      arr.push(str[i].charCodeAt().toString())   
    }else if(str[i].length===2){
       arr.push(str[i][0].charCodeAt().toString()+ str[i][1])
   }else{
      arr.push(str[i][0].charCodeAt()+ str[i][str[i].length-1] +str[i].slice(2,-1) + str[i][1])}
     }
     return arr.join(' ')
   
   }