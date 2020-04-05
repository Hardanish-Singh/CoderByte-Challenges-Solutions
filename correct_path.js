/****************************************************************
 *             CODERBYTE CORRECT PATH CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CorrectPath(str) read the str parameter    *
 * being passed, which will represent the movements made in a   *
 * 5x5 grid of cells starting from the top left position. The   *
 * characters in the input string will be entirely composed     *
 * of: r, l, u, d, ?. Each of the characters stand for the      *
 * direction to take within the grid,                           *
 * for example: r = right, l = left, u = up, d = down. Your goal*
 * is to determine what characters the question marks should be *
 * in order for a path to be created to go from the top left of *
 * the grid all the way to the bottom right without touching    *
 * previously travelled on cells in the grid.                   *
 *                                                              *
 * For example: if str is "r?d?drdd" then your program should   *
 * output the final correct string that will allow a path to be *
 * formed from the top left of a 5x5 grid to the bottom right.  *
 * For this input, your program should therefore return the     *
 * string rrdrdrdd. There will only ever be one correct path &  *
 * there will always be at least one question mark within the   *
 * input string.                                                *
 *                                                              *
 * Examples                                                     *
 * Input 1: "???rrurdr?"                                        *
 * Output 1: dddrrurdrd                                         *
 *                                                              *
 * Input 2: "drdr??rrddd?"                                      *
 * Output 2: drdruurrdddd                                       *
 ***************************************************************/

let possibleMovesArray = ["r", "l", "u", "d"];
let combinationArray = [];
let string = readline();
let quotientMarkCount = 0;

//LOOP THROUGH STRING & COUNT QUOTIENT MARKS
for (let i = 0; i < string.length; i++) {
  if (string[i] === "?") {
    quotientMarkCount++;
  }
}

//IF QUOTIENTMARKCOUNT IS 1, THEN INIALIZE TO POSSIBLEMOVESARRAY
if (quotientMarkCount === 1) {
  combinationArray = possibleMovesArray;
}

//DYNAMIC FUNCTION WHICH MAKES MOVES ARRAY COMBINATION & RETURN ARRAY RECURSIVELY
function makeMovesCombination(movesCount, movesArray) {
  let combinationArrayCopy = [];

  for (let i = 0; i < possibleMovesArray.length; i++) {
    for (let j = 0; j < movesArray.length; j++) {
      combinationArrayCopy.push(possibleMovesArray[i] + "" + movesArray[j]);
    }
  }

  return combinationArrayCopy;
}

//LOOP THROUGH QUOTIENTMARK & CONSTRUCT MOVES ARRAY RECURSIVELY
for (let i = 2; i <= quotientMarkCount; i++) {
  if (combinationArray.length === 0) {
    combinationArray = makeMovesCombination(i, possibleMovesArray);
  } else {
    combinationArray = makeMovesCombination(i, combinationArray);
  }
}

//LOOP THROUGH COMBINATION ARRAY & CONSTRUCT MOVES STRING & TRY EACH COMBINATION
for (let i = 0; i < combinationArray.length; i++) {
  let temp = 0;
  let combinationString = new String("");

  for (let j = 0; j < string.length; j++) {
    if (string[j] === "?") {
      combinationString += combinationArray[i][temp];
      temp++;
    } else {
      combinationString += string[j];
    }
  }

  let isPathGood = makeArrayMovement(combinationString);
  if (isPathGood === true) {
    console.log(combinationString);
    break;
  }
}

//CHECK STRING COMBINATION
function makeArrayMovement(combinationString) {
  let array = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
  let row = 0;
  let column = 0;

  for (let i = 0; i < combinationString.length; i++) {
    if (combinationString[i] === "r") {
      column++;
    } else if (combinationString[i] === "d") {
      row++;
    } else if (combinationString[i] === "l") {
      column--;
    } else if (combinationString[i] === "u") {
      row--;
    }

    //IF PATH GOES OUT OF GRID
    if (row < 0 || column < 0 || row > 4 || column > 4) {
      break;
    }

    //IF THE PATH IS ALREADY TRAVERSED, THEN RETURN FALSE
    if (array[row][column] === 1) {
      return false;
    }

    array[row][column] = 1;
  }

  if (row === 4 && column === 4) {
    return true;
  } else {
    return false;
  }
}
