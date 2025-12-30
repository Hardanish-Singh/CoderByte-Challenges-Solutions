/****************************************************************
 *          CODERBYTE BRACKET MATCHER CHALLENGE		        	*
 *                                                              *
 * Problem Statement                                            *
 * Have the function BracketMatcher(str) take the str parameter	*
 * being passed and return 1 if the brackets are correctly	*
 * matched and each one is accounted for. Otherwise return 0.	*
 * For example: if str is "(hello (world))", then the output	*
 * should be 1, but if str is "((hello (world))" the the output	*
 * should be 0 because the brackets do not correctly match up.	*
 * Only "(" and ")" will be used as brackets. If str contains	*
 * no brackets return 1.    									*
 *                                                              *
 * Examples                                                     *
 * Input 1: "(coder)(byte))"                                    *
 * Output 1: 0                                                  *
 *                                                              *
 * Input 2: "(c(oder)) b(yte)"                                  *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/

function BracketMatcher(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            count++;
        } else if (str[i] == ")") {
            count--;
        }
        if (count == -1) {
            return 0;
        }
    }

    return count === 0 ? 1 : 0;
}

// KEEP THIS FUNCTION CALL HERE
console.log(BracketMatcher(readline()));
