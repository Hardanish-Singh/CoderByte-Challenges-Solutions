/****************************************************************
 *             CODERBYTE CAMEL CASE CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CamelCase(str) take the str parameter being*
 * passed and return it in proper camel case format where the   *
 * first letter of each word is capitalized (excluding the first*
 * letter). The string will only contain letters and some       *
 * combination of delimiter punctuation characters separating   *
 * each word.                                                   *
 *                                                              *
 * For example: if str is "BOB loves-coding" then your program  *
 *  should return the string bobLovesCoding.                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: "cats AND*Dogs-are Awesome"                         *
 * Output 1: catsAndDogsAreAwesome                              *
 *                                                              *
 * Input 2: "a b c d-e-f%g"                                     *
 * Output 2: aBCDEFG                                            *
 ***************************************************************/

function CamelCase(str) {
    let string = str;
    let camelCaseString = new String("");
    let camelCaseArray = new Array();
    for (let i = 0; i < string.length; i++)
        if (!(string[i].toLowerCase() >= "a" && string[i].toLowerCase() <= "z")) camelCaseArray.push(i);
    if (camelCaseArray.length === 0) return string;
    let position = 0;
    let toggleFlag = 0;
    for (let i = 0; i < camelCaseArray.length; i++) {
        toggleFlag = 0;
        for (let j = position; j < string.length; j++) {
            if (j == camelCaseArray[i]) {
                position++;
                break;
            }
            if (i == 0) camelCaseString += string[j].toLowerCase();
            else {
                if (toggleFlag == 0) camelCaseString += string[j].toUpperCase();
                else camelCaseString += string[j].toLowerCase();
            }
            position++;
            toggleFlag++;
        }
    }
    toggleFlag = 0;
    for (let k = position; k < string.length; k++) {
        if (toggleFlag == 0) camelCaseString += string[k].toUpperCase();
        else camelCaseString += string[k].toLowerCase();
        position++;
        toggleFlag++;
    }
    return camelCaseString;
}

// KEEP THIS FUNCTION CALL HERE
console.log(CamelCase(readline()));
