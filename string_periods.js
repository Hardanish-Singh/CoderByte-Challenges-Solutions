/****************************************************************
 *             CODERBYTE STRING PERIODS CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringPeriods(str) take the str parameter  * 
 * being passed and determine if there is some substring K that *
 * can be repeated N > 1 times to produce the input string      *
 * exactly as it appears. Your program should return the longest*
 * substring K, and if there is none it should return the       *
 * string -1.                                                   *
 *                                                              *
 * For example: if str is "abcababcababcab" then your program   *
 * should return abcab because that is the longest substring    *
 * that is repeated 3 times to create the final string. Another *
 * example: if str is "abababababab" then your program should   *
 * return ababab because it is the longest substring. If the    *
 * input string contains only a single character, your program  *
 * should return the string -1.                                 *
 *                                                              *
 * Examples                                                     *
 * Input 1: "abcxabc"                                           *
 * Output 1: -1                                                 *
 *                                                              *
 * Input 2: "affedaaffed"                                       *
 * Output 2: -1                                                 *
 ***************************************************************/

function StringPeriods(str) {
  if (str.length === 1) {
    return -1;
  }

  let longestSubStringArray = [];
  let temp = "";
  let string = "";

  for (let i = str.length - 1; i > 0; i--) {
    let subStringLength = i;
    for (let j = 0; j < subStringLength; j++) {
      temp += str[j];
    }
    longestSubStringArray.push(temp);
    temp = "";
  }

  for (let i = 0; i < longestSubStringArray.length; i++) {
    let re = new RegExp(longestSubStringArray[i], "g");
    let count = (str.match(re) || []).length;
    if (count > 1) {
      string = longestSubStringArray[i];
      break;
    }
  }

  let c = 0;
  let t = "";

  for (let i = 0; i < str.length; i++) {
    if (c == string.length - 1) {
      t += str[i];
      if (t != string) {
        string = "-1";
        break;
      }
      c = 0;
      t = "";
      continue;
    }
    c++;
    t += str[i];
  }

  return string;
}

// KEEP THIS FUNCTION CALL HERE
console.log(StringPeriods(readline()));
