/****************************************************************
 *             CODERBYTE STRING ZIGZAG CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringZigzag(strArr) read the array of     *
 * strings stored in strArr, which will contain two elements,   *
 * the first some sort of string and the second element will be *
 * a number ranging from 1 to 6. The number represents how many *
 * rows to print the string on so that it forms a zig-zag       *
 * pattern. For example: if strArr is ["coderbyte", "3"] then   *
 * this word will look like the following if you print it in a  *
 * zig-zag pattern with 3 rows:                                 *
 * Your program should return the word formed by combining the  *
 * characters as you iterate through each row, so for this      *
 * example your program should return the string creoebtdy.     *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["cat", "5"]                                        *
 * Output 1: cat                                                *
 *                                                              *
 * Input 2: ["kaamvjjfl", "4"]                                  *
 * Output 2: kjajfavlm                                          *
 *                                                              *
 ***************************************************************/

function StringZigzag(strArr) {
    if (Number(strArr[1]) === 1) return strArr[0];
    let zigZagArray;
    if (Number(strArr[1]) >= strArr[0].length) zigZagArray = new Array(Number(strArr[0].length));
    else zigZagArray = new Array(Number(strArr[1]));
    for (let i = 0; i < zigZagArray.length; i++) zigZagArray[i] = new Array(Number(strArr[0].length));
    let row = 0,
        column = 0,
        count = 1;
    for (let i = 0; i < strArr[0].length; i++) {
        zigZagArray[row][column] = strArr[0][i];
        column++;
        if (count >= 1 && count < Number(strArr[1])) {
            count++;
            row++;
        } else if (count >= Number(strArr[1]) && count <= Number(strArr[1]) + (Number(strArr[1]) - 1)) {
            if (count == Number(strArr[1]) + (Number(strArr[1]) - 1)) {
                row = 1;
                count = row + 1;
            } else {
                count++;
                row--;
            }
        }
    }
    let zigZagString = new String("");
    for (let i = 0; i < zigZagArray.length; i++)
        for (let j = 0; j < zigZagArray[i].length; j++) if (zigZagArray[i][j]) zigZagString += zigZagArray[i][j];
    return zigZagString;
}

// KEEP THIS FUNCTION CALL HERE
console.log(StringZigzag(readline()));
