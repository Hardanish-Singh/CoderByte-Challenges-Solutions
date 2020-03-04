/****************************************************************
 *             CODERBYTE ALPHABET SOUP CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LetterChanges(str) take the str parameter  *
 * being passed and modify it using the following algorithm.    *
 * Replace every letter in the string with the letter following *
 * it in the alphabet (ie. c becomes d, z becomes a). Then      *
 * capitalize every vowel in this new string (a, e, i, o, u)    *
 * & finally return this modified string.                       *
 *                                                              *
 * Examples                                                     *
 * Input 1: hello*3                                             *
 * Ouput 1: Ifmmp*3                                             *
 *                                                              *
 * Input 2: fun times!                                          *
 * Output 2: gvO Ujnft!                                         *
 ***************************************************************/

function LetterChanges(str) {
  //VARIABLE DECLARATION
  let string = str;
  let fs = "";
  //LOOP THROUGH STRING
  for (var i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() >= "a" && string[i].toLowerCase() <= "z") {
      let num = Number(string.charCodeAt(i));
      num++;
      if (
        String.fromCharCode(num).toLowerCase() == "a" ||
        String.fromCharCode(num).toLowerCase() == "e" ||
        String.fromCharCode(num).toLowerCase() == "i" ||
        String.fromCharCode(num).toLowerCase() == "o" ||
        String.fromCharCode(num).toLowerCase() == "u"
      ) {
        fs += String.fromCharCode(num).toUpperCase();
      } else {
        fs += String.fromCharCode(num);
      }
    } else {
      fs += string[i];
    }
  }
  return fs;
}

// KEEP THE FUNCTION CALL HERE
console.log(LetterChanges(readline()));
