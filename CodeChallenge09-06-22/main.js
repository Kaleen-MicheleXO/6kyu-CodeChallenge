// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
// solution("abcdef"), ["ab", "cd", "ef"]
// solution("abcdefg"), ["ab", "cd", "ef", "g_"]
// solution(""), []


function solution(str){
    str=str.split('')
     let arr=[]
     for(let i=0;i<=str.length-1;i+=2){
       if(str[i+1]){
         arr.push(str[i]+str[i+1])
       }else arr.push(str[i]+ '_')
     }return arr
   }