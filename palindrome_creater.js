/****************************************************************
 *           CODERBYTE PALINDROME CREATOR CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PalindromeCreator(str) which takes the str *
 * parameter being passed & determine if it is possible to      *
 * create a palindromic string of minimum length 3 characters   *
 * by removing 1 or 2 characters                                *
 *                                                              *
 * Test Cases                                                   *
 * If str is "abjchba" then you can remove the characters "jc"  *
 * to produce "abhba" which is palindrome. For this example     *
 * your program should return the two characters that were      *
 * removed with no delimiter & in the order they appear in the  *
 * string.                                                      *
 *                                                              *
 * If 1 or 2 characters cannot be removed to produce a          *
 * palindrome, then return the string "not possible"            *
 *                                                              *
 * If the input string is already a palindrome, then your code  *
 * should return the string "palindrome"                        *
 *                                                              *
 * Conditions                                                   *
 * The input will only contain lowercase alphabetic characters. *
 * Your code should always attempt to create the longest        *
 * palindromic substring by removing 1 or 2 characters.         *
 * The 2 characters you remove do not have to be adjacent in    *
 * the string                                                   *
 *                                                              *
 * Examples                                                     *
 * Input 1: "mmop"                                              *
 * Output 1: not possible                                       *
 *                                                              *
 * Input 2: "kjjjhjjj"                                          *
 * Output 2: k                                                  *
 *                                                              *
 * Input 3: "abjchba"                                           *
 * Output 3: jc                                                 *
 ***************************************************************/

function PalindromeCreator(str) {
  let string = str; // GET ORGINAL STRING
  let reversedString = reverseString(string); // CALL REVERSE STRING FUNCTION
  // CONDITION TO CHECK PALINDROME STRING
  if (string === reversedString) {
    return "palindrome";
  }
  /// VARIABLES DECLARATION IF THE ORIGINAL STRING IS NOT PALINDROME
  let combinationArray = []; // CREATE STRING COMBINATIONS OF EITHER 1 or 2 CHARACTERS
  let count = 2; // COUNT VARIABLE STARTING WITH CHARACTER COUNT OF 2
  let finalString = ""; // RETURNED PALINDROME CHARACTERS STRING VARIABLE
  let palindromeFound = false; // PALINDROME STRING FOUND FLAG(BY DEFAULT FALSE, WHICH MEANS STRING IS NOT PALINDROME)

  // WHILE LOOP UNTIL COUNT VARIBALE IS NOT EQUAL TO ZERO
  while (count != 0) {
    let c = 0; // TEMPORARY COUNT VARIABLE
    let temp = []; // TEMPORARY ARRAY TO PUSH CHARACTER INDEXES (OF 1 OR 2 COMBINATIONS)
    // FOR LOOP TO LOOP THROUGH STRING CHARACTERS
    for (let i = 0; i <= string.length; i++) {
      // WHEN TEMPORARY COUNT VARIABLE IS EQUAL TO ACTUAL COUNT VARIABLE THEN PUSH CHARACTER INDEXES COMBINATION TO COMBINATION ARRAY
      if (c == count) {
        c = 0;
        combinationArray.push(temp);
        temp = [];
        if (count > 1 && i != string.length) {
          i--;
        }
        // PUSH FIRST & LAST CHARACTER COMBINATION(SPECIAL CASE)
        else if (count > 1 && i == string.length) {
          let temp = [];
          temp.push(0);
          temp.push(string.length - 2);
          combinationArray.push(temp);
        }
      }
      if (c > 0) {
        temp.push(i - 1);
      } else {
        temp.push(i);
      }
      c++;
    }
    count--;
  }
  // SPLIT ORIGINAL STRING
  let splitOriginalString = string.trim().split("");
  for (let i = 0; i < combinationArray.length; i++) {
    let clonedArray = [...splitOriginalString]; // CLONE SPLIT ORIGINAL STRING FOR PALINDROME COMPARISONS
    for (let j = 0; j < combinationArray[i].length; j++) {
      clonedArray.splice(combinationArray[i][j], 1);
    }
    // REVERSE SPLIT ORIGINAL STRING
    let reversedArray = [];
    for (let k = clonedArray.length - 1; k >= 0; k--) {
      reversedArray.push(clonedArray[k]);
    }
    // LOGIC TO CHECK PALINDROME
    if (
      reversedArray.toString() === clonedArray.toString() &&
      reversedArray.length >= 3 &&
      clonedArray.length >= 3
    ) {
      palindromeFound = true;
      for (let l = 0; l < combinationArray[i].length; l++) {
        if (l === 0) {
          finalString += string[combinationArray[i][l]];
        } else {
          finalString += string[combinationArray[i][l] + 1];
        }
      }
      break;
    }
  }
  if (palindromeFound === true) {
    return finalString;
  } else {
    return "not possible";
  }

  //FUNCTION TO REVERSE A STRING
  function reverseString(fetchOriginalString) {
    let reversedString = "";
    for (let y = fetchOriginalString.length - 1; y >= 0; y--) {
      reversedString += fetchOriginalString[y];
    }
    return reversedString;
  }
}

// Keep The Function Call Here
console.log(PalindromeCreator("abjchba"));
