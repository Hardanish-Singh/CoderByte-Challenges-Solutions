/****************************************************************
 *           CODERBYTE PALINDROME CREATOR CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LongestWord(sen) take the sen parameter    *
 * being passed and return the largest word in the string.      *
 * If there are two or more words that are the same length,     *
 * return the first word from the string with that length.      *
 * Ignore punctuation and assume sen will not be empty.         *
 *                                                              *
 * Examples                                                     *
 * Input 1: "fun&!! time"                                       *
 * Output 1: time                                               *
 *                                                              *
 * Input 2: "I love dogs"                                       *
 * Output 2: love                                               *
 *                                                              *
 ***************************************************************/

function LongestWord(sen) {
  //VARIABLES DECLARATION
  let splitStr = sen.split(" ");
  let f = 0;
  let narr = [];
  //LOOP THROUGH STRING
  for (let i = 0; i < splitStr.length; i++) {
    f = 0;
    for (let j = 0; j < splitStr[i].length; j++) {
      if (
        (splitStr[i][j] >= "a" && splitStr[i][j] <= "z") ||
        (splitStr[i][j] >= "A" && splitStr[i][j] <= "Z") ||
        (splitStr[i][j] >= "1" && splitStr[i][j] <= "9")
      ) {
        continue;
      } else {
        f = 1;
        break;
      }
    }
    if (f == 0) {
      narr.push(splitStr[i]);
    }
  }
  //FIND THE MAXIMUM
  let max = narr[0].length;
  let index = 0;
  for (let k = 1; k < narr.length; k++) {
    if (narr[k].length > max) {
      index = k;
      max = narr[k];
    }
  }
  return narr[index];
}

// KEEP THIS FUNCTION CALL HERE
console.log(LongestWord(readline()));
