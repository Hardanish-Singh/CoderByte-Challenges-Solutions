/****************************************************************
 *             CODERBYTE LETTER CHANGES CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LetterChanges(str) take the str parameter  *
 * being passed and modify it using the following algorithm.    *
 * Replace every letter in the string with the letter following *
 * it in the alphabet (ie. c becomes d, z becomes a). Then      *
 * capitalize every vowel in this new string (a, e, i, o, u)    *
 * & finally return this modified string.                       *
 *                                                              *
 * Examples                                                     *
 * Input 1: hello*3                                             *
 * Ouput 1: Ifmmp*3                                             *
 *                                                              *
 * Input 2: fun times!                                          *
 * Output 2: gvO Ujnft!                                         *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 60.4% of users who solved this   *
 * challenge.                                                   *
 *                                                              *
 ***************************************************************/

function LetterChanges(string) {
    let lettersChangedString = new String("");
    let lettersRegex = /^[A-Za-z]$/;
    let vowelRegex = /^[aeiouAEIOU]$/;

    for (let i = 0; i < string.length; i++) {
        if (string[i].match(lettersRegex)) {
            if (String.fromCharCode(string.charCodeAt(i) + 1).match(vowelRegex))
                lettersChangedString += String.fromCharCode(string.charCodeAt(i) + 1).toUpperCase();
            else lettersChangedString += String.fromCharCode(string.charCodeAt(i) + 1);
        } else lettersChangedString += string[i];
    }

    return lettersChangedString;
}

// KEEP THE FUNCTION CALL HERE
console.log(LetterChanges(readline()));
