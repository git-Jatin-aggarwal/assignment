/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here

    const vowel = str.toLowerCase()

    const lower = [...vowel]
   
    let totalVowel = 0
 
    lower.forEach(element =>{
      if(element == "a"){
 
         totalVowel = totalVowel +1
      }
      else if(
         element == "e"
      ){
         totalVowel = totalVowel +1
 
      } else if(
         element == "i"
      ){
         totalVowel = totalVowel +1
 
      } else if(
         element == "o"
      ){
         totalVowel = totalVowel +1
 
      } else if(
         element == "u"
      ){
         totalVowel = totalVowel +1
 
      }
 
 
 
 
    })
  
    return totalVowel
   
}

module.exports = countVowels;