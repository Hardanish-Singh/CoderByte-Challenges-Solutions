/****************************************************************
 *      CODERBYTE CODELAND USERNAME VALIDATION CHALLENGE        *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CodelandUsernameValidation(str) take the   *
 * str parameter being passed and determine if the string is a  *
 * valid username according to the following rules:             *
 * 1. The username is between 4 and 25 characters.              *
 * 2. It must start with a letter.                              *
 * 3. It can only contain letters, numbers, & underscore.       *
 * 4. It cannot end with an underscore character.               *
 * If the username is valid then your program should return the *
 * string true, otherwise return the string false.              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "aa_"                                               *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: "u__hello_world123"                                 *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/

function CodelandUsernameValidation(string) { 
        if(string.length<4 || string.length>25) return false;
        if(!string[0].match(/[a-zA-Z]/g)) return false;
        if(string[string.length-1] === '_') return false;
        for(let i=0; i<string.length; i++) if(!(string[i].match(/[a-zA-Z]/g) || string[i].match(/[1-9]/g) | string[i] === '_')) return false;
        return true;
}

// KEEP THIS FUNCTION CALL HERE 
console.log(CodelandUsernameValidation(readline()));