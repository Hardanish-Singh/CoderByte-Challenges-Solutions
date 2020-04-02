/****************************************************************
 *             CODERBYTE THREE NUMBERS CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ThreeNumbers(str) take the str parameter   *
 * being passed and determine if exactly three unique,          *
 * single-digit integers occur within each word in the string.  *
 * The integers can appear anywhere in the word, but they cannot*
 * be all adjacent to each other. If every word contains exactly*
 * 3 unique integers somewhere within it, then return the string*
 * true, otherwise return the string false. For example: if str *
 * is "2hell6o3 wor6l7d2" then your program should return "true"*
 * but if the string is "hell268o w6or2l4d" then your program   *
 * should return "false" because all the integers are adjacent  *
 * to each other in the first word.                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: "2a3b5 w1o2rl3d g1gg92"                             *
 * Ouput 1: true                                                *
 *                                                              *
 * Input 2: "21aa3a ggg4g4g6ggg"                                *
 * Output 2: false                                              *
 ***************************************************************/

function CheckAdjacentNumbersLogic(str) {
  //VARIABLE DECLARATION
  let adjacentNumbersFound = true;

  for (let i = 0; i < str.length; i++) {
    if (
      i != str.length - 1 &&
      Number(str[i]) &&
      String(str[i - 1]).toLowerCase() >= "a" &&
      String(str[i - 1]).toLowerCase() <= "z" &&
      String(str[i + 1]).toLowerCase() >= "a" &&
      String(str[i + 1]).toLowerCase() <= "z"
    ) {
      adjacentNumbersFound = false;
      break;
    }
    if (
      i == str.length - 1 &&
      Number(str[i]) &&
      String(str[i - 1]).toLowerCase() >= "a" &&
      String(str[i - 1]).toLowerCase() <= "z"
    ) {
      adjacentNumbersFound = false;
      break;
    }
  }

  return adjacentNumbersFound;
}

function checkUniqueNumbersLogic(str) {
  //VARIABLE DECLARATION
  let checkUniqueNumbersLogicFlag = false;
  let threeNumbersArray = [];
  let flag = false;

  for (let i = 0; i < str.length; i++) {
    if (Number(str[i])) {
      threeNumbersArray.push(Number(str[i]));
    }
  }

  if (threeNumbersArray.length === 3) {
    threeNumbersArray.sort((a, b) => a - b);
    for (let i = 0; i < threeNumbersArray.length; i++) {
      if (
        i != threeNumbersArray.length - 1 &&
        threeNumbersArray[i] === threeNumbersArray[i + 1]
      ) {
        flag = true;
        break;
      }
    }
  }

  if (flag === false) {
    checkUniqueNumbersLogicFlag = true;
  }
  return checkUniqueNumbersLogicFlag;
}

function ThreeNumbers(str) {
  //VARIABLE DECLARATION
  let checkThreeNumberFlag = false;
  let splitString = str.trim().split(" ");
  let flagsArray = [];

  //LOOP THROUGH STRING
  for (let i = 0; i < splitString.length; i++) {
    //CHECK ADJACENT NUMBER LOGIC
    let adjacentNumbersFound = CheckAdjacentNumbersLogic(splitString[i]);
    //IF ADJACENT NUMBERS ARE FOUND, BREAK & RETURN FALSE
    if (adjacentNumbersFound === true) {
      checkThreeNumberFlag = false;
      flagsArray.push(checkThreeNumberFlag);
      break;
    }
    //CHECK THREE UNIQUE NUMBER LOGIC
    else {
      let checkThreeNumberFlag = checkUniqueNumbersLogic(splitString[i]);
      flagsArray.push(checkThreeNumberFlag);
    }
  }

  let uniqueFlags = Array.from(new Set(flagsArray));
  if (uniqueFlags.length === 1) {
    return uniqueFlags[0];
  } else {
    return false;
  }
}

// KEEP THIS FUNCTION CALL HERE
console.log(ThreeNumbers(readline()));
