/****************************************************************
 *                CODERBYTE STRING MERGE CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringMerge(str) read the str parameter    *
 * being passed which will contain a large string of            *
 * alphanumeric characters with a single asterisk character     *
 * splitting the string evenly into two separate strings. Your  *
 * goal is to return a new string by pairing up the characters  *
 * in the corresponding locations in both strings. For example: *
 * if str is "abc1*kyoo" then your program should return the    *
 * string akbyco1o because a pairs with k, b pairs with y, etc. *
 * The string will always split evenly with the asterisk in the *
 * center.                                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "aaa*bbb"                                           *
 * Output 1: ababab                                             *
 *                                                              *
 * Input 2: "123hg*aaabb"                                       *
 * Output 2: 1a2a3ahbgb                                         *
 ***************************************************************/

function StringMerge(str) {
  let splitString = str.split("*");
  let mergeString = new String("");
  let mergeArray = [];
  let position = 0;
  let addAtPositionIndex = 0;

  for (let i = 0; i < splitString.length; i++) {
    position = 0;
    for (let j = 0; j < splitString[i].length; j++) {
      addAtPositionIndex = 0;
      if (i === 0) {
        mergeArray.push(splitString[i][j]);
      } else {
        for (let k = position; k <= mergeArray.length; k++) {
          if (addAtPositionIndex == i) {
            mergeArray.splice(k, 0, splitString[i][j]);
            position++;
            addAtPositionIndex++;
            break;
          }
          position++;
          addAtPositionIndex++;
        }
      }
    }
  }

  for (let i = 0; i < mergeArray.length; i++) {
    mergeString += mergeArray[i];
  }
  return mergeString;
}

// KEEP THIS FUNCTION CALL HERE
console.log(StringMerge(readline()));
