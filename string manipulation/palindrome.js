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
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 33.0% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function Palindrome(str) {
  let originalString = str.replace(/\s/g, "");
  let reversedString = "";
  for (let i = originalString.length - 1; i >= 0; i--) reversedString += originalString[i];
  if (originalString === reversedString)  return true;
  else return false;
}

// KEEP THIS FUNCTION CALL HERE
console.log(Palindrome(readline()));
