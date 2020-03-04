/****************************************************************
 *             CODERBYTE ALPHABET SOUP CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function AlphabetSoup(str) take the str string      *
 * parameter being passed and return the string with the        *
 * letters in alphabetical order (ie. hello becomes ehllo).     *
 * Assume numbers and punctuation symbols will not be included  *
 * in the string.                                               *
 *                                                              *
 * Examples                                                     *
 * Input 1: coderbyte                                           *
 * Output 1: bcdeeorty                                          *
 *                                                              *
 * Input 2: hooplah                                             *
 * Output 2: ahhloop                                            *
 ***************************************************************/

function AlphabetSoup(str) {
  //VARIABLE DECLARATION
  let string = str;
  let fs = "";
  let s = string.split("");
  //SORT THE CHARACTERS INSIDE THE STRING
  s.sort();

  for (let i = 0; i < s.length; i++) {
    fs += s[i];
  }

  return fs;
}

// KEEP THIS FUNCTION CALL HERE
console.log(AlphabetSoup(readline()));
