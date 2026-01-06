/****************************************************************
 *             CODERBYTE DASH INSERT TWO CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function DashInsertII(str) insert dashes ('-')      *
 * between each two odd numbers and insert asterisks ('*')      *
 * between each two even numbers in str.                        *
 *                                                              *
 * For example: if str is 4546793 the output should be          *
 * 454*67-9-3. Don't count zero as an odd or even number.       *
 *                                                              *
 * Examples                                                     *
 * Input 1: 99946                                               *
 * Output 1: 9-9-94*6                                           *
 *                                                              *
 * Input 2: 56647304                                            *
 * Output 2: 56*6*47-304                                        *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 36.2% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function DashInsertII(number) {
    let string = String(number);
    let dashInsertTwo = new String("");

    for (let i = 0; i < string.length; i++) {
        if (i !== string.length - 1) {
            if (
                Number(string[i]) % 2 !== 0 &&
                Number(string[i + 1]) % 2 !== 0 &&
                Number(string[i]) > 0 &&
                Number(string[i + 1]) > 0
            )
                dashInsertTwo += string[i] + "-";
            else if (
                Number(string[i]) % 2 === 0 &&
                Number(string[i + 1]) % 2 === 0 &&
                Number(string[i]) > 0 &&
                Number(string[i + 1]) > 0
            )
                dashInsertTwo += string[i] + "*";
            else dashInsertTwo += string[i];
        } else if (i === string.length - 1) dashInsertTwo += string[i];
    }

    return dashInsertTwo;
}

// KEEP THIS FUNCTION CALL HERE
console.log(DashInsertII(readline()));
