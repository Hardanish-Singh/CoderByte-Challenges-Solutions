/****************************************************************
 *             CODERBYTE SWIPE CASE CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SwapCase(str) take the str parameter &     *
 * swap the case of each character. For example: if str is      *
 * "Hello World" the output should be hELLO wORLD. Let          *
 * numbers & symbols stay the way they are.                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: Hello-LOL                                           *
 * Output 1: hELLO-lol                                          *
 *                                                              *
 * Input 2: Sup DUDE!!?                                         *
 * Output 2: sUP dude!!?                                        *
 ***************************************************************/

function SwapCase(str) {
  //VARIABLE DECLARATION
  let fs = "";
  //LOOP THROUGH STRING
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() >= "a" && str[i].toLowerCase() <= "z") {
      if (str[i] == str[i].toLowerCase()) {
        fs += str[i].toUpperCase();
      } else {
        fs += str[i].toLowerCase();
      }
    } else {
      fs += str[i];
    }
  }
  return fs;
}

// KEEP THIS FUNCTION CALL HERE
console.log(SwapCase(readline()));
