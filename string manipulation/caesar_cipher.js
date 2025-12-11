/****************************************************************
 *             CODERBYTE CAESAR CIPHER CHALLENGE                *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CaesarCipher(str,num) take the str         *
 * parameter and perform a Caesar Cipher shift on it using the  *
 * num parameter as the shifting number. A Caesar Cipher works  *
 * by shifting each letter in the string N places in the        *
 * alphabet (in this case N will be num). Punctuation, spaces,  *
 * and capitalization should remain intact.                     *
 * For example if the string is "Caesar Cipher" and num is 2    *
 * the output should be "Ecguct Ekrjgt".                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "Hello" and num = 4                                 *
 * Output 1: Lipps                                              *
 *                                                              *
 * Input 2: "abc" and num = 0                                   *
 * Output 2: abc                                                *
 *                                                              *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 49.2% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function CaesarCipher(string, number) {
    let caesarCiper = new String("");
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/^[a-z]+$/)) {
            let value = Number(string.charCodeAt(i) + number);
            if (value >= 97 && value <= 122) caesarCiper += String.fromCharCode(string.charCodeAt(i) + number);
            else if (value > 122) caesarCiper += String.fromCharCode(96 + (value - 122));
        } else if (string[i].match(/^[A-Z]+$/)) {
            let value = Number(string.charCodeAt(i) + number);
            if (value >= 65 && value <= 90) caesarCiper += String.fromCharCode(string.charCodeAt(i) + number);
            else if (value > 90) caesarCiper += String.fromCharCode(64 + (value - 90));
        } else caesarCiper += string[i];
    }
    return caesarCiper;
}
// KEEP THIS FUNCTION CALL HERE
console.log(CaesarCipher(readline()));
