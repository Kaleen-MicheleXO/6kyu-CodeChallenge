// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// toCamelCase(''), '', "An empty string was provided but not returned"
// toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCa('the_stealth_warrior') did not return correct value"
// toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value"
// toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value"


function toCamelCase(str){
    let arr=[]
    
    if(str.includes('-')){
      str=str.split('-')
    }else str=str.split('_')
  
    for(let i=0;i<=str.length-1;i++){
      if(str[i]===str[0]){
        arr.push(str[i])
      }else{
      let strUpper= str[i].toUpperCase().slice(0,1)
      arr.push(strUpper+str[i].slice(1))}
    }
    return arr.join('')
  }