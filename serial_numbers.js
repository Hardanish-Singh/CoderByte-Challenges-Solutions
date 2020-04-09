/****************************************************************
 *             CODERBYTE SERIAL NUMBERS CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SerialNumber(str) take the str parameter   *
 * being passed and determine if it is a valid serial number    *
 * with the following constraints:                              *
 *                                                              *
 *   1. It needs to contain three sets each with three digits   *
 *      (1 through 9) separated by a period.                    *
 *   2. The first set of digits must add up to an even number.  *
 *   3. The second set of digits must add up to an odd number.  *
 *   4. The last digit in each set must be larger than the two  *
 *      previous digits in the same set.                        *
 *                                                              *
 * If all the above constraints are met within the string, the  *
 * your program should return the string true, otherwise your   *
 * program should return the string false. For example: if str  *
 * is "224.315.218" then your program should return "true".     *
 *                                                              *
 * Examples                                                     *
 * Input 1: "11.124.667"                                        *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: "114.568.112"                                       *
 * Output 2: true                                               *
 ***************************************************************/

function SerialNumber(str) {
  let splitStringAtPeriod = str.split(".");
  let firstSetOfDigits = 0;
  let secondSetOfDigits = 0;
  let serialNumberFlag = true;

  //CHECK CONDITION 1
  if (splitStringAtPeriod.length === 3) {
    for (let i = 0; i < splitStringAtPeriod.length; i++) {
      if (splitStringAtPeriod[i].length === 3) {
        for (let j = 0; j < splitStringAtPeriod[i].length; j++) {
          if (
            Number(splitStringAtPeriod[i][j]) >= 1 &&
            Number(splitStringAtPeriod[i][j]) <= 9
          ) {
            if (i === 0) {
              if (j === splitStringAtPeriod[i].length - 1) {
                if (
                  !splitStringAtPeriod[i][j] >=
                  splitStringAtPeriod[i][j - 1] >=
                  splitStringAtPeriod[i][j - 2]
                ) {
                  serialNumberFlag = false;
                  break;
                }
                firstSetOfDigits += Number(splitStringAtPeriod[i][j]);
                break;
              }
              firstSetOfDigits += Number(splitStringAtPeriod[i][j]);
            }
            //CHECK CONDITION 3
            else if (i === 1) {
              if (j === splitStringAtPeriod[i].length - 1) {
                if (
                  !splitStringAtPeriod[i][j] >=
                  splitStringAtPeriod[i][j - 1] >=
                  splitStringAtPeriod[i][j - 2]
                ) {
                  serialNumberFlag = false;
                  break;
                }
                secondSetOfDigits += Number(splitStringAtPeriod[i][j]);
                break;
              }
              if (firstSetOfDigits % 2 !== 0) {
                serialNumberFlag = false;
                break;
              }
              secondSetOfDigits += Number(splitStringAtPeriod[i][j]);
            }
            //CHECK CONDITION 3
            else if (i === 2) {
              if (j === splitStringAtPeriod[i].length - 1) {
                if (
                  !splitStringAtPeriod[i][j] >=
                  splitStringAtPeriod[i][j - 1] >=
                  splitStringAtPeriod[i][j - 2]
                ) {
                  serialNumberFlag = false;
                  break;
                }
                break;
              }
              if (secondSetOfDigits % 2 === 0) {
                serialNumberFlag = false;
                break;
              }
            }
          } else {
            serialNumberFlag = false;
            break;
          }
        }
        if (serialNumberFlag === false) {
          break;
        }
      } else {
        serialNumberFlag = false;
        break;
      }
    }
  } else {
    serialNumberFlag = false;
  }
  return serialNumberFlag;
}

// KEEP THIS FUNCTION CALL HERE
console.log(SerialNumber(readline()));
