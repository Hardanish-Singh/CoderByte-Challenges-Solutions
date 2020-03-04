/****************************************************************
 *             CODERBYTE QUESTIONS MARKS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function QuestionsMarks(str) which takes the str    *
 * string parameter, which will contain single digit numbers,   *
 * letters, & question marks, & check if there are exactly 3    *
 * question marks between every pair of two numbers that add up *
 * to 10. If so, then your program should return the string     *
 * true, otherwise t should return the string false. If there   *
 * aren't any two numbers that add up to 10 in the string, then *
 * your program should return false as well.                    *
 *                                                              *
 * Test Cases                                                   *
 * For example: if str is "arrb6???4xxbl5???eee5" then your     *
 * program should return true because there are exactly 3       *
 * question marks between 6 and 4, and 3 question marks between *
 * 5 and 5 at the end of the string.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: aa6?9                                               *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: acc?7??sss?3rr1??????5                              *
 * Output 2: true                                               *
 ***************************************************************/

function QuestionsMarks(str) {
  //VARIABLES DECLARATION
  let string = str;
  let quotientMarkCount = 0;
  let flag = false;
  let numberStored = [];
  //LOOP THROUGH STRING
  for (let i = 0; i < string.length; i++) {
    //WHEN NUMBER IS FOUND
    if (Number(string[i])) {
      numberStored.push(Number(string[i]));
      if (quotientMarkCount === 3) {
        if (Number(string[i])) {
          if (numberStored.length == 2) {
            let sum = numberStored.reduce(function(a, b) {
              return a + b;
            }, 0);
            if (sum === 10) {
              flag = true;
            } else {
              flag = false;
            }
          } else {
            flag = false;
          }
          numberStored = [];
          numberStored.push(Number(string[i]));
        }
      } else if (numberStored.length > 1) {
        if (quotientMarkCount > 0 && quotientMarkCount < 3) {
          flag = false;
          return flag;
        }
        numberStored = [];
        numberStored.push(Number(string[i]));
      }
      quotientMarkCount = 0;
    }
    //WHEN QUOTIENT MARK IS FOUND
    else if (string[i] === "?") {
      quotientMarkCount++;
    }
  }
  return flag;
}

// KEEP THIS FUNCTION CALL HERE
console.log(QuestionsMarks(readline()));
