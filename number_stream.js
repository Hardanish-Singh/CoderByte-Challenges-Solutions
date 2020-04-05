/****************************************************************
 *             CODERBYTE NUMBER STREAM CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function NumberStream(str) take the str parameter   *
 * being passed which will contain the numbers 2 through 9, &   *
 * determine if there is a consecutive stream of digits of at   *
 * least N length where N is the actual digit value. If so,     *
 * return the string true, otherwise return the string false.   *
 * For example: if str is "6539923335" then your program should *
 * return the string true because there is a consecutive stream *
 * of 3's of length 3. The input string will always contain at  *
 * least one digit.                                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: 5556293383563665                                    *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: 5788888888882339999                                 *
 * Output 2: true                                               *
 ***************************************************************/

function NumberStream(str) {
  //VARIABLE DECLARATION
  let consectiveNumberCount = 0;
  let consectiveNumberFlag = false;

  for (let i = 0; i < str.length; i++) {
    if (i != str.length - 1 && str[i] === str[i + 1]) {
      consectiveNumberCount++;
    } else {
      if (consectiveNumberCount + 1 >= Number(str[i])) {
        consectiveNumberFlag = true;
        break;
      }
      consectiveNumberCount = 0;
    }
  }
  return consectiveNumberFlag;
}

// KEEP THIS FUNCTION CALL HERE
console.log(NumberStream(readline()));
