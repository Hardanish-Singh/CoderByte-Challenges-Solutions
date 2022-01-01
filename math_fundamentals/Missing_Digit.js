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
        let data = str.split("=");
        let is_x_on_lhs = -1;
        let is_x_on_rhs = -1;
        let temp = 0;
        let string = '';

        is_x_on_lhs = data[0].indexOf("x");
        is_x_on_rhs = data[1].indexOf("x");

        if( is_x_on_lhs === -1 ) {
                temp = parse( data[0] );
                string = data[1];
        }
        else if( is_x_on_rhs === -1 ) {
                temp = parse( data[1] );
                string = data[0];
        }

        let i = 0;
        while( true ) {
                let t = '';
                for( let k =0 ; k<string.length; k++ ){
                        if( string[k] == "x" ) {
                                t += i;
                        }
                        else {
                                t += string[k];
                        }
                }
                t = t.trim();
                if( t.startsWith("0") && t.length > 1 ) {
                        i++;
                        continue;
                }
                if( parse(t) == temp ) {
                        return i;
                }
                i++;
        }
}

// KEEP THIS FUNCTION CALL HERE
console.log( MissingDigit( readline() ) );