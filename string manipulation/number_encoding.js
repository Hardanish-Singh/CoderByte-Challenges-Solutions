/****************************************************************
 *           CODERBYTE NUMBER ENCODING CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function NumberEncoding(str) take the str parameter *
 * and encode the message according to the following rule:      *
 * encode every letter into its corresponding numbered position *
 * in the alphabet. Symbols and spaces will also be used in the *
 * input. For example: if str is "af5c a#!" then your program   *
 * should return 1653 1#!.                                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "hello 45"                                          *
 * Output 1: 85121215 45                                        *
 *                                                              *
 * Input 2: "jaj-a"                                             *
 * Output 2: 10110-1                                            *
 *                                                              *
 * Solution Efficiency                                          *
 * This user scored higher than 30.7% of users who solved this  *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function NumberEncoding(string) {
    let numberEncoding = new String("");
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/^[a-z]+$/)) numberEncoding += String(string.charCodeAt(i) - 97 + 1);
        else if (string[i].match(/^[A-Z]+$/)) numberEncoding += String(string.charCodeAt(i) - 65 + 1);
        else numberEncoding += string[i];
    }
    return numberEncoding;
}

// KEEP THIS FUNCTION CALL HERE
console.log(NumberEncoding(readline()));
