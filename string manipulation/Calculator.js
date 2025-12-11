/****************************************************************
 *             CODERBYTE CALCULATOR CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function Calculator(str) take the str parameter     *
 * being passed and evaluate the mathematical expression within *
 * in. For example, if str were "2+(3-1)*3" the output should   *
 * be 8. Another example: if str were "(2-0)(6/2)" the output   *
 * should be 6. There can be parenthesis within the string so   *
 * you must evaluate it properly according to the rules of      *
 * arithmetic.                                                  *
 * The string will contain the operators: +, -, /, *, (, and ). *
 * If you have a string like this: #/#*# or #+#(#)/#, then      *
 * evaluate from left to right. So divide then multiply, and    *
 * for the second one multiply, divide, then add.               *
 * The evaluations will be such that there will not be any      *
 * decimal operations, so you do not need to account for        *
 * rounding and whatnot.                                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "6*(4/2)+3*1"                                       *
 * Output 1: 15                                                 *
 *                                                              *
 * Input 2: "6/3-1"                                             *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/

function parse(str) {
    return Function(`'use strict'; return (${str})`)();
}

function Calculator(string) {
    let evaluateExpression = new String("");
    let splittedString = string.split("");
    let flag = false;
    for (let i = 0; i < splittedString.length; i++) {
        if (i != 0 && i != splittedString.length - 1) {
            if (
                splittedString[i] == ")" &&
                (splittedString[i + 1] == Number(splittedString[i + 1]) || splittedString[i + 1] == "(") &&
                flag == false
            ) {
                evaluateExpression += splittedString[i] + "*";
                flag = true;
            } else if (
                splittedString[i] == "(" &&
                (splittedString[i - 1] == Number(splittedString[i - 1]) || splittedString[i - 1] == ")") &&
                flag == false
            ) {
                evaluateExpression += "*" + splittedString[i];
                flag = true;
            } else {
                evaluateExpression += splittedString[i];
            }
        } else {
            evaluateExpression += splittedString[i];
        }
    }
    return parse(evaluateExpression);
}

// KEEP THIS FUNCTION CALL HERE
console.log(Calculator(readline()));
