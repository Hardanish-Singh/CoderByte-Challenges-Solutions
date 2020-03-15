/****************************************************************
 *             CODERBYTE BINARY REVERSAL CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BinaryReversal(str) take the str parameter *
 * being passed, which will be a positive integer, take its     *
 * binary representation (padded to the nearest N * 8 bits),    *
 * reverse that string of bits, and then finally return the new *
 * reversed string in decimal form. For example: if str is "47" *
 * then the binary version of this integer is 101111 but we pad *
 * it to be 00101111. Your program should reverse this binary   *
 * string which then becomes: 11110100 and then finally return  *
 * the decimal version of this string, which is 244.            *
 *                                                              *
 * Examples                                                     *
 * Input 1: "213"                                               *
 * Output 1: 171                                                *
 *                                                              *
 * Input 2: "4567"                                              *
 * Output 2: 60296                                              *
 ***************************************************************/

function BinaryReversal(str) {
  //VARIABLE DECLARATION
  let number = Number(str);
  let binaryString = "";
  //LOOP UNTIL NUMBER REACHES 0
  while (number > 0) {
    let remainder = Number(number % 2);
    binaryString += remainder;
    number = parseInt(number / 2);
  }
  //KEEP ON PADDING UNTIL REMAINDER REACHES 0
  while (binaryString.length % 8 != 0) {
    binaryString += "0";
  }
  //VARIABLE DECLARATION
  let counter = 1;
  let finalAnswer = 0;
  //REVERSE THE BINARY REPRESENTATION
  for (let i = binaryString.length - 1; i >= 0; i--) {
    if (binaryString[i] === "1") {
      finalAnswer += counter;
    }
    counter = counter * 2;
  }
  return finalAnswer;
}

// KEEP THIS FUNCTION CALL HERE
console.log(BinaryReversal(readline()));
