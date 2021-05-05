/****************************************************************
 *             CODERBYTE ALPHABET SEARCHING CHALLENGE           *
 *                                                              *
 * Problem Statement                                            *
 * Have the function AlphabetSearching(str) take the string     *
 * parameter being passed and return the string true if every   *
 * single letter of the English alphabet exists in the string,  *
 * otherwise return the string false.                           *
 * For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv"    *
 * then your program should return the string true because every*
 * character in the alphabet exists in this string even though  *
 * some characters appear more than once.                       *
 *                                                              *
 * Examples                                                     *
 * Input 1: abcdefghijklmnopqrstuvwxyyyy                        *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: abc123456kmo                                        *
 * Output 2: false                                              *
 ***************************************************************/

function AlphabetSearching( string ) {
  //SORT THE STRING & REMOVE DUPLICATES FROM THE STRING
  let sortedStringArray = Array.from(new Set(string.split("").sort()));
  //COUNT THE ENGLISH ALPHABET CHARACTERS
  let count = 0;
  
  //LOOP THROUGH STRING
  for ( let i = 0; i < sortedStringArray.length; i++ ) {
    if ( sortedStringArray[i].toLowerCase() >= "a" && sortedStringArray[i].toLowerCase() <= "z" ) {
      count++;
    }
  }

  return ( count === 26 ) ? true : false;
  
}

// KEEP THIS FUNCTION CALL HERE
console.log(AlphabetSearching(readline()));
