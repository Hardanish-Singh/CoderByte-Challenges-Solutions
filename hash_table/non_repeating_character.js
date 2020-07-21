/****************************************************************
 *          CODERBYTE NON REPEATING CHARACTERS CHALLENGE        *
 *                                                              *
 * Problem Statement                                            *
 * Have the function NonrepeatingCharacter(str) take the str    *
 * parameter being passed, which will contain only alphabetic   *
 * characters and spaces, and return the first non-repeating    *
 * character. For example: if str is "agettkgaeee" then your    *
 * program should return k. The string will always contain at   *
 * least one character and there will always be at least one    *
 * non-repeating character.                                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: "abcdef"                                            *
 * Output 1: a                                                  *
 *                                                              *
 * Input 2: "hello world hi hey"                                *
 * Output 2: w                                                  *
 *                                                              *
 ***************************************************************/

function NonrepeatingCharacter(str) {
    let isBackward = false;
    let isDuplicate = false;
    for(let i=0; i<str.length; i++){
      characterCount = 0;
      isBackward = false;
      isDuplicate = false;
      for(let k=0; k<i; k++){
        if(str[k] == str[i]) {
          isBackward = true;
          break;
        }
      }
      if(isBackward == true) continue;
      for(let j=i+1; j<str.length; j++){
        if(str[j] == str[i]) {
          isDuplicate = true;
          break;
        }
      }
      if(isDuplicate == false) return str[i];
    }
}
    
// KEEP THIS FUNCTION CALL HERE
console.log(NonrepeatingCharacter(readline()));