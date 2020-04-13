/****************************************************************
 *             CODERBYTE AB CHECKS CHALLENGE                    *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ABCheck(str) take the str parameter being  *
 * passed and return the string true if the characters a and b  *
 * are separated by exactly 3 places anywhere in the string at  *
 * least once (ie. "lane borrowed" would result in true because *
 * there is exactly three characters between a and b).          *
 * Otherwise return the string false.                           *
 *                                                              *
 * Examples                                                     *
 * Input 1: after badly                                         *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: Laura sobs                                          *
 * Output 2: true                                               *
 ***************************************************************/

function ABCheck(str) {
  //VARIABLE DECLARATION
  let string = str;
  let a_flag = false;
  let b_flag = false;
  let a_count = 0;
  let a_special = false;
  let b_count = 0;
  let b_special = false;
  //LOOP THROUGH STRING
  for (let i = 0; i < string.length; i++) {
    //CHECK 'A' LOGIC
    if (string[i].toLowerCase() == "a" && b_flag == false) {
      a_flag = true;
      a_count = 0;
    } else if (a_flag == true && string[i].toLowerCase() == "b") {
      if (a_count == 3) {
        a_special = true;
        break;
      }
    } else if (a_flag == true) {
      a_count++;
    }
    //CHECK 'B' LOGIC
    if (string[i].toLowerCase() == "b" && a_flag == false) {
      b_flag = true;
      b_count = 0;
    } else if (b_flag == true && string[i].toLowerCase() == "a") {
      if (b_count == 3) {
        b_special = true;
        break;
      }
    } else if (b_flag == true) {
      b_count++;
    }
  }
  //CONDITION TO CHECK IF EITHER 'A' OR 'B' IS FOUND/TRUE
  if (a_special == true || b_special == true) {
    return true;
  } else {
    return false;
  }
}

// KEEP THIS FUNCTION CALL HERE.
console.log(ABCheck(readline()));
