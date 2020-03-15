/****************************************************************
 *             CODERBYTE PALINDROME CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function Palindrome(str) take the str parameter     *
 * being passed and return the string true if the parameter is  *
 * a palindrome, (the string is the same forward as it is       *
 * backward) otherwise return the string false. For example:    *
 * "racecar" is also "racecar" backwards. Punctuation & numbers *
 * will not be part of the string.                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: never odd or even                                   *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: eye                                                 *
 * Output 2: true                                               *
 ***************************************************************/
function Palindrome(str) {
  //VARIABLE DECLARATION
  let original_string = str.replace(/\s/g, "");
  let reversed_string = "";
  //LOOP THROUGH STRING
  for (let i = original_string.length - 1; i >= 0; i--) {
    reversed_string += original_string[i];
  }
  //PALINDROME STRING CHECKING
  if (original_string === reversed_string) {
    return "true";
  } else {
    return "false";
  }
}

// KEEP THIS FUNCTION CALL HERE
console.log(Palindrome(readline()));
