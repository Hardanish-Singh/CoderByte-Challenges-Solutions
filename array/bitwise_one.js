/****************************************************************
 *              CODERBYTE BITWISE ONE CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BitwiseOne(strArr) take the array of       *
 * strings stored in strArr, which will only contain two        *
 * strings of equal length that represent binary numbers, and   *
 * return a final binary string that performed the bitwise      *
 * OR operation on both strings. A bitwise OR operation places  *
 * a 0 in the new string where there are zeroes in both binary  *
 * strings, otherwise it places a 1 in that spot.               *
 * For example: if strArr is ["1001", "0100"] then your program *
 * should return the string "1101"                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["100", "000"]                                      *
 * Output 1: 100                                                *
 *                                                              *
 * Input 2: ["00011", "01010"]                                  *
 * Output 2: 01011                                              *
 *                                                              *
 ***************************************************************/

function BitwiseOne(strArr) {
    let stringOne = strArr[0], stringTwo = strArr[1];
    let result = new String("");
    for(let i=0; i<stringOne.length; i++){
        if(stringOne[i] == '1' || stringTwo[i] == '1') result += '1';
        else if(stringOne[i] == '0' || stringTwo[i] == '0') result += '0';
    }
    return result;
}
    
// KEEP THIS FUNCTION CALL HERE
console.log(BitwiseOne(readline()));