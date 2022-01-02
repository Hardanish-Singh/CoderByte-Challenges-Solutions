/****************************************************************
 *              CODERBYTE MISSING DIGIT CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MissingDigit(str) take the str parameter,	*
 * which will be simple mathematical formula with three numbers,*
 * a single operator (+, -, *, or /) and an equal sign (=) and  *
 * return the digit that completes the equation.                *
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
 *                                                              *
 * Examples                                                     *
 * Input 1: "4 - 2 = x"		                                *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: "1x0 * 12 = 1200"		                        *
 * Output 2: 0                                                  *
 *                                                              *
 ***************************************************************/

function parse( str ) {
        return Function(`'use strict'; return (${str})`)()
}

function MissingDigit( str ) {
        let split_equation = str.split("=");
        let is_x_on_left_side = -1;
        let is_x_on_right_side = -1;
        let result = 0;
        let missing_digit_equation = '';

        is_x_on_left_side = split_equation[0].indexOf("x");
        is_x_on_right_side = split_equation[1].indexOf("x");

        if( is_x_on_left_side === -1 ) {
                result = parse( split_equation[0] );
                missing_digit_equation = split_equation[1];
        }
        else if( is_x_on_right_side === -1 ) {
                result = parse( split_equation[1] );
                missing_digit_equation = split_equation[0];
        }

        let i = 0;
        while( true ) {
                let equation = '';
                for( let k = 0 ; k < missing_digit_equation.length; k++ ) {
                        if( missing_digit_equation[k] == "x" ) {
                                equation += i;
                        }
                        else {
                                equation += missing_digit_equation[k];
                        }
                }
                equation = equation.trim();
                if( equation.startsWith("0") && equation.length > 1 ) {
                        i++;
                        continue;
                }
                if( parse( equation ) == result ) {
                        return i;
                }
                i++;
                if( i > 9 ) {
                        break;
                }
        }
}

// KEEP THIS FUNCTION CALL HERE
console.log( MissingDigit( readline() ) );