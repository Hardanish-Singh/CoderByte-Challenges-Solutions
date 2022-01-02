/****************************************************************
 *              CODERBYTE MISSING DIGIT II CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MissingDigitII(str) take the str parameter *
 * which will be simple mathematical formula with three numbers *
 * a single operator (+, -, *, or /) and an equal sign (=)      *
 * and return the two digits that complete the equation.        *
 * In two of the numbers in the equation, there will be a       *
 * single ? character, and your program should determine what   *
 * digits are missing and return them separated by a space.     *
 *                                                              *
 * For example, if str is "38?5 * 3 = 1?595" then your program  *
 * should output 6 1.                                           *
 *                                                              *
 * In one of the numbers in the equation, there will be an x    *
 * character, and your program should determine what digit is   *
 * missing.                                                     *
 *                                                              *
 * For example, if str is "3x + 12 = 46" then your program      *
 * should output 4. The x character can appear in any of the    *
 * three numbers and all three numbers will be greater than or  *
 * equal to 0 and less than or equal to 1000000.                *
 *                                                              *
 * The ? character will always appear in both the first number  *
 * and the last number in the mathematical expression.          *
 * There will always be a unique solution.                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "56? * 106 = 5?678"		                        *
 * Output 1: 3 9                                                *
 *                                                              *
 * Input 2: "18?1 + 9 = 189?"		                        *
 * Output 2: 8 0                                                *
 *                                                              *
 ***************************************************************/

function parse( str ) {
        return Function(`'use strict'; return (${str})`)()
}

function MissingDigitII( str ) {
        let split_equation = str.split("=");
        let left_side_expression = split_equation[0].trim();
        let right_side_expression = split_equation[1].trim();

        let i = 0;
        while( i <= 9 ) {

                let equation1 = '';
                for( let k = 0 ; k < left_side_expression.length; k++ ) {
                        if( left_side_expression[k] === "?" ) {
                                equation1 += i;
                        }
                        else {
                                equation1 += left_side_expression[k];
                        }
                }

                for( let j = 0; j < 10; j++ ) {
                        let equation2 = '';
                        for( let l = 0 ; l < right_side_expression.length; l++ ) {
                                if( right_side_expression[l] === "?" ) {
                                        equation2 += j;
                                }
                                else {
                                        equation2 += right_side_expression[l];
                                }
                        }
                        equation1 = equation1.trim();
                        equation2 = equation2.trim();
                        if( equation1.startsWith("0") ) {
                                equation1 = equation1.replace(/^0+/, '');
                                if( equation1 === "" ) {
                                        equation1 = "0";
                                }
                        }
                        if( equation2.startsWith("0") ) {
                                equation2 = equation2.replace(/^0+/, '');
                                if( equation2 === "" ) {
                                        equation2 = "0";
                                }
                        }
                        if( parse( equation1 ) === parse( equation2 ) ) {
                                return i + " " + j;
                        }
                }
                i++;
        }
}

// KEEP THIS FUNCTION CALL HERE
console.log( MissingDigitII( readline() ) );