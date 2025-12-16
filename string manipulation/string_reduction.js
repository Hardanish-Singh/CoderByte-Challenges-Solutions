/****************************************************************
 *             CODERBYTE STRING REDUCTION CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringReduction(str) take the str parameter*
 * being passed and return the smallest number you can get      *
 * through the following reduction method.                      *
 * The method is: Only the letters a, b, and c will be given in *
 * str and you must take two different adjacent characters and  *
 * replace it with the third. For example "ac" can be replaced  *
 * with "b" but "aa" cannot be replaced with anything.          *
 * This method is done repeatedly until the string cannot be    *
 * further reduced, and the length of the resulting string is   *
 * to be outputted.                                             *
 *                                                              *
 * For example: if str is "cab", "ca" can be reduced to "b"     *
 * and you get "bb" (you can also reduce it to "cc").           *
 * The reduction is done so the output should be 2.             *
 *                                                              *
 * If str is "bcab", "bc" reduces to "a", so you have "aab",    *
 * then "ab" reduces to "c", and the final string "ac" is       *
 * reduced to "b" so the output should be 1.                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: "abcabc"                                            *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: cccc                                                *
 * Output 2: 4                                                  *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored more than 53.0% of users who solved this     *
 * challenge                                                    *
 *                                                              *
 ***************************************************************/

function StringReduction(string) {
    let stringReduction = new String("");
    let stringReplacements = {
        ab: "c",
        ac: "b",
        bc: "a",
        ca: "b",
        cb: "a",
    };
    let flag = false;
    for (let i = 0; i < string.length; i++) {
        if (i !== string.length - 1) {
            if (string[i] + string[i + 1] in stringReplacements) {
                flag = true;
                stringReduction += stringReplacements[string[i] + string[i + 1]];
                i++;
            } else stringReduction += string[i];
        } else stringReduction += string[i];
    }
    if (flag === true) return StringReduction(stringReduction);
    else return stringReduction.length;
}

// KEEP THIS FUNCTION CALL HERE
console.log(StringReduction(readline()));
