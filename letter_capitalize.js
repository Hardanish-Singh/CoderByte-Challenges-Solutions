/****************************************************************
 *             CODERBYTE LETTER CAPITALIZE CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LetterCapitalize(str) take the str         *
 * parameter being passed and capitalize the first letter of    *
 * each word. Words will be separated by only one space.        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "hello world"                                       *
 * Output 1: Hello World                                        *
 *                                                              *
 * Input 2: "i ran there"                                       *
 * Output 2: I Ran There                                        *
 ***************************************************************/
function LetterCapitalize(str) {
  //VARIABLE DECLARATION
  let string = str.split(" ");
  let fs = "";
  //LOOP THROUGH STRING
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string[i].length; j++) {
      if (j == 0 && i == 0) {
        fs += string[i][j].toUpperCase();
      } else if (j == 0 && i != 0) {
        fs += " " + string[i][j].toUpperCase();
      } else {
        fs += string[i][j];
      }
    }
  }
  return fs;
}

// KEEP THIS FUNCTION CALL HERE
console.log(LetterCapitalize(readline()));
