/****************************************************************
 *             CODERBYTE DASH INSERT CHALLENGE                  *
 *                                                              *
 * Problem Statement                                            *
 * Have the function DashInsert(str) insert dashes ('-')        *
 * between each two odd numbers in str. For example: if str is  *
 * 454793 the output should be 4547-9-3. Don't count zero as an *
 * odd number.                                                  *
 *                                                              *
 * Examples                                                     *
 * Input 1: 99946                                               *
 * Output 1: 9-9-946                                            *
 *                                                              *
 * Input 2: 56730                                               *
 * Output 2: 567-30                                             *
 ***************************************************************/

function DashInsert(str) {
    //VARIABLE DECLARATION
    let fs = "";
    //LOOP THROUGH STRING
    for (let i = 0; i < str.length; i++) {
        if (i != str.length - 1 && Number(str[i]) % 2 != 0 && Number(str[i + 1]) % 2 != 0) {
            fs += str[i] + "-";
        } else {
            fs += str[i];
        }
    }
    return fs;
}

// KEEP THIS FUNCTION CALL HERE
console.log(DashInsert(readline()));
