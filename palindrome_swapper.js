/****************************************************************
 *             CODERBYTE PALINDROME SWAPPER CHALLENGE           *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PalindromeSwapper(str) take the str        *
 * parameter being passed and determine if a palindrome can be  *
 * created by swapping two adjacent characters in the string.   *
 * If it is possible to create a palindrome, then your program  *
 * should return the palindrome, if not then return the string  *
 * -1. The input string will only contain alphabetic characters.*
 * For example: if str is "rcaecar" then you can create a       *
 * palindrome by swapping the second and third characters, so   *
 * your program should return the string racecar which is the   *
 * final palindromic string.                                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: anna                                                *
 * Output 1: anna                                               *
 *                                                              *
 * Input 2: kyaak                                               *
 * Output 2: kayak                                              *
 ***************************************************************/

function PalindromeSwapper(str) {
  let palindromeSwapperFlag = false;
  let adjacentCharacterCount = 0;
  let adjacentCharacterString = new String("");
  let adjacentCharacterArray = [];
  let checkPalindromeSwapperString = new String("");
  let slicedIndexEnd = 2;
  let slicedIndexStart = 0;
  let temp = new String("");
  let palindromeSwapper = new String("");

  for (let i = 0; i < str.length; i++) {
    if (adjacentCharacterCount === 2) {
      adjacentCharacterArray.push(adjacentCharacterString);
      adjacentCharacterCount = 0;
      adjacentCharacterString = new String("");
      i--;
    }
    adjacentCharacterString += str[i];
    adjacentCharacterCount++;
  }
  adjacentCharacterArray.push(adjacentCharacterString);

  for (let i = 0; i < adjacentCharacterArray.length; i++) {
    for (let j = adjacentCharacterArray[i].length - 1; j >= 0; j--) {
      temp += adjacentCharacterArray[i][j];
    }
    checkPalindromeSwapperString +=
      str.slice(slicedIndexStart, slicedIndexEnd - 2) +
      temp +
      str.slice(slicedIndexEnd);

    palindromeSwapper = checkPalindromeLogic(checkPalindromeSwapperString);
    if (palindromeSwapper === checkPalindromeSwapperString) {
      palindromeSwapperFlag = true;
      break;
    }
    slicedIndexEnd = slicedIndexEnd + 1;
    checkPalindromeSwapperString = new String("");
    temp = new String("");
  }

  function checkPalindromeLogic(fetchString) {
    let palindromeString = new String("");
    for (let i = fetchString.length - 1; i >= 0; i--) {
      palindromeString += fetchString[i];
    }
    return palindromeString;
  }

  if (palindromeSwapperFlag === true) {
    return palindromeSwapper;
  } else {
    return -1;
  }
}

// KEEP THIS FUNCTION CALL HERE
console.log(PalindromeSwapper(readline()));
