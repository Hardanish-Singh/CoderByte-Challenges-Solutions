/****************************************************************
 *             CODERBYTE BITWISE TWO CHALLENGE                  *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BitwiseTwo(strArr) take the array of       *
 * strings stored in strArr, which will only contain two        *
 * strings of equal length that represent binary numbers, and   *
 * return a final binary string that performed the              *
 * bitwise AND operation on both strings. A bitwise AND         *
 * operation places a 1 in the new string where there is a 1 in *
 * both locations in the binary strings, otherwise it places    *
 * a 0 in that spot.                                            *
 * For example: if strArr is ["10111", "01101"] then your       *
 * program should return the string "00101"                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["100", "000"]                                      *
 * Output 1: 000                                                *
 *                                                              *
 * Input 2: ["10100", "11100"]                                  *
 * Output 2: 10100                                              *
 *                                                              *
 ***************************************************************/

function BitwiseTwo(strArr) {
    let stringOne = strArr[0];
    let stringTwo = strArr[1];
    let bitwiseAnd = new String("");
    for(let i=0; i<stringOne.length; i++){
      if(stringOne[i] == "1" && stringTwo[i] == "1") bitwiseAnd += "1"
      else bitwiseAnd +=  "0";
    }
    return bitwiseAnd;
}
    
// KEEP THIS FUNCTION CALL HERE
console.log(BitwiseTwo(readline()));