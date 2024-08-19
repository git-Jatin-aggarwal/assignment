/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
   
 const value =  str.toLowerCase().replace(/[^a-zA-Z]/g,"")
 
 const reverseString = value.split("").reverse().join("")

 if(value === reverseString){
  return true
 }else{
  return false
 }

}

module.exports = isPalindrome;
