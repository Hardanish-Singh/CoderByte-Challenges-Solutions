/****************************************************************
 *               CODERBYTE OFF BINARY CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function OffBinary(strArr) read the array of strings*
 * stored in strArr, which will contain two elements, the first *
 * will be a positive decimal number and the second element will*
 * be a binary number. Your goal is to determine how many digits*
 * in the binary number need to be changed to represent the     *
 * decimal number correctly (either 0 change to 1 or vice versa)*
 *                                                              *
 * For example: if strArr is ["56", "011000"] then your program *
 * should return 1 because only 1 digit needs to change in the  *
 * binary number (the first zero needs to become a 1) to        *
 * correctly represent 56 in binary.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["5624", "0010111111001"]                           *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: ["44", "111111"]                                    *
 * Output 2: 3                                                  *
 *                                                              *
 ***************************************************************/

function OffBinary(strArr) {
    let number = +strArr[0];
    let receivedBinary = strArr[1];
    let actualBinary = (number >>> 0).toString(2);
    let count = 0;

    for (let i = 0; i < receivedBinary.length; i++) {
        if (receivedBinary[i] !== actualBinary[i]) {
            count++;
        }
    }

    return count;
}

// KEEP THIS FUNCTION CALL HERE
console.log(OffBinary(readline()));
