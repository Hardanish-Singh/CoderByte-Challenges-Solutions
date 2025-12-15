/****************************************************************
 *              CODERBYTE SIMPLE PASSWORD CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SimplePassword(str) take the str parameter *
 * being passed and determine if it passes as a valid password  *
 * that follows the list of constraints:                        *
 * 1. It must have a capital letter.                            *
 * 2. It must contain at least one number.                      *
 * 3. It must contain a punctuation mark.                       *
 * 4. It cannot have the word "password" in the string.         *
 * 5. It must be longer than 7 characters and                   *
 *    shorter than 31 characters.                               *
 * If all the above constraints are met within the string, the  *
 * your program should return the string true, otherwise your   *
 * program should return the string false.                      *
 * For example: if str is "apple!M7" then your program should   *
 * return "true".                                               *
 *                                                              *
 * Examples                                                     *
 * Input 1: "passWord123!!!!"                                   *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: "turkey90AAA="                                      *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/

function SimplePassword(str) {
    finalString = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    if (str.length === finalString.length) return false;
    if (str.match(/[a-zA-Z]/g).length === 0 || str.match(/[0-9]/g).length === 0) return false;
    str = str.toLowerCase();
    if (str.includes("password")) return false;
    if (str.length <= 7 || str.length >= 31) return false;
    return true;
}

// KEEP THIS FUNCTION CALL HERE
console.log(SimplePassword(readline()));
