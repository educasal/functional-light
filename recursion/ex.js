"use strict";

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  var lastPosition = str.length-1;

  return str[0] === str[lastPosition] && isPalindrome(str.substring(1, lastPosition))
}

console.log( isPalindrome("") === true );
console.log( isPalindrome("a") === true );
console.log( isPalindrome("aa") === true );
console.log( isPalindrome("aba") === true );
console.log( isPalindrome("abba") === true );
console.log( isPalindrome("abccba") === true );

console.log( isPalindrome("ab") === false );
console.log( isPalindrome("abc") === false );
console.log( isPalindrome("abca") === false );
console.log( isPalindrome("abcdba") === false );
