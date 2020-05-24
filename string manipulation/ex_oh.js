/****************************************************************
 *             CODERBYTE EX OH CHALLENGE                        *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ExOh(str) take the str parameter being     *
 * passed & return the string true if there is an equal number  *
 * of x's & o's, otherwise return the string false. Only these  *
 * two letters will be entered in the string, no punctuation or *
 * numbers. For example: if str is "xooxxxxooxo" then the       *
 * output should return false because there are 6 x's and 5 o's *
 *                                                              *
 * Examples                                                     *
 * Input 1: xooxxo                                              *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: x                                                   *
 * Output 2: false                                              *
 ***************************************************************/
function ExOh(string) {
  //VARIABLE DECLARATION
  let x_count = 0;
  let o_count = 0;
  //LOOP THROUGH STRING
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "x") x_count++;
    else if (string[i].toLowerCase() === "o") o_count++;
  }
  //CONDITIONAL CHECKING
  if (x_count === o_count) return "true";
  else return "false";
}

// KEEP THIS FUNCTION CALL HERE
console.log(ExOh(readline()));
