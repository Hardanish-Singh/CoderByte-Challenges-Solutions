/****************************************************************
 *             CODERBYTE STRING EXPRESSION CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function StringExpression(str) read the str         *
 * parameter being passed which will contain the written out    *
 * version of the numbers 0-9 and the words "minus" or "plus" & *
 * convert the expression into an actual final number written   *
 * out as well.                                                 *
 * For example: if str is "foursixminustwotwoplusonezero" then  *
 * this converts to "46 - 22 + 10" which evaluates to 34 and    *
 * your program should return the final string threefour.       *
 * If your final answer is negative it should include the       *
 * word "negative."                                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: "onezeropluseight"                                  *
 * Output 1: oneeight                                           *
 *                                                              *
 * Input 2: oneminusoneone                                      *
 * Output 2: negativeonezero                                    *
 *                                                              *
 ***************************************************************/

function parse(str) {
    return Function(`'use strict'; return (${str})`)();
}

function StringExpression(string) {
    let numberToWords = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        minus: "-",
        plus: "+",
    };
    let wordsToNumber = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    let count = 0;
    let position = 0;
    let expression = new String("");
    for (let i = 0; i <= string.length; i++) {
        if (count == 3 || count == 4 || count == 5) {
            if (numberToWords[string.slice(position, i)] || numberToWords[string.slice(position, i)] == 0) {
                expression += numberToWords[string.slice(position, i)];
                count = 0;
                position = i;
            }
        }
        count++;
    }
    let value = String(parse(expression));
    let result = new String("");
    for (let i = 0; i < value.length; i++) {
        if (value[i] == "-") result += "negative";
        else if (wordsToNumber[+value[i]]) result += wordsToNumber[+value[i]];
    }
    return result;
}

// KEEP THIS FUNCTION CALL HERE
console.log(StringExpression(readline()));
