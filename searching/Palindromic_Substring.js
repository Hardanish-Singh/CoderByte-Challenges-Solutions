/****************************************************************
 *          CODERBYTE PALINDROMIC SUBSTRING CHALLENGE		*
 *                                                              *
 * Problem Statement                                            *
 * Have the function PalindromicSubstring(str) take the str     *
 * parameter being passed and find the longest palindromic      *
 * substring, which means the longest substring which is read   *
 * the same forwards as it is backwards.                        *
 * For example: if str is "abracecars" then your program should *
 * return the string racecar because it is the longest          *
 * palindrome within the input string.                          *
 *                                                              *
 * The input will only contain lowercase alphabetic characters. *
 * The longest palindromic substring will always be unique,     *
 * but if there is none that is longer than 2 characters,       *
 * return the string none.                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "hellosannasmith                                    *
 * Output 1: sannas                                             *
 *                                                              *
 * Input 2: "abcdefgg"                                          *
 * Output 2: none                                               *
 *                                                              *
 ***************************************************************/

function isPalindrome( string ) {
        let leftPointer = 0;
        let rightPointer = string.length - 1;
      
        while( leftPointer < rightPointer ) {
          if( string[leftPointer] !== string[rightPointer] ) {
            return false;
          }
          leftPointer++;
          rightPointer--;
        }
      
        return true;
      }
      
      function PalindromicSubstring( str ) {
        let PalindromicSubstrings = [];
        for( let i=0; i<str.length; i++ ) {
          let reverseStr = str.slice(i+1).split("").reverse().join("");
          for( let j=0; j<reverseStr.length; j++ ) {
            if( reverseStr.slice(j) === str[i] ) continue;
            let subString =  ( reverseStr.slice(j) + str[i] ).split("").reverse().join("");
            if( isPalindrome( subString ) ) {
              PalindromicSubstrings.push( subString );
            }
          }
        }
        let max = -1;
        let index = -1;
        for( let i=0; i<PalindromicSubstrings.length; i++ ){
          if(PalindromicSubstrings[i].length > max) {
            max = PalindromicSubstrings[i].length;
            index = i;
          }
        }
        // console.log(PalindromicSubstrings, max);
        return index === -1 ? "none" : PalindromicSubstrings[index];
      }
         
      // keep this function call here 
      console.log(PalindromicSubstring(readline()));