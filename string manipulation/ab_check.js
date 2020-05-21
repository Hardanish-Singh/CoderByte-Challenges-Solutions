/****************************************************************
 *             CODERBYTE AB CHECKS CHALLENGE                    *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ABCheck(str) take the str parameter being  *
 * passed and return the string true if the characters a and b  *
 * are separated by exactly 3 places anywhere in the string at  *
 * least once (ie. "lane borrowed" would result in true because *
 * there is exactly three characters between a and b).          *
 * Otherwise return the string false.                           *
 *                                                              *
 * Examples                                                     *
 * Input 1: after badly                                         *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: Laura sobs                                          *
 * Output 2: true                                               *
 *                                                              *
 ***************************************************************/

function ABCheck(string) {
    let ab_counter = 0;
    let temp = new String("");

    for(let i=0; i<string.length; i++){
        if(string[i] === 'a' || string[i] === 'b') {
            if(temp.length > 0 && string[i] !== temp && ab_counter === 3) return true;
            ab_counter = 0;
            temp = string[i];
        }
        else ab_counter++;
    }

    return false;
}

// KEEP THIS FUNCTION CALL HERE.
console.log(ABCheck(readline()));