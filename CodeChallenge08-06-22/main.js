// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.


function expandedForm(num) {
    let strNum= String(num).split('')
    let arr=[]
    let zero=[]
      for(let i=0;i<=strNum.length-1;i++){
        if(strNum[i]==0){}
        else{
            let number = strNum.length-i
            arr.push(strNum[i] + '0'.repeat(number-1))}
         }
    return arr.join(' + ')
    }