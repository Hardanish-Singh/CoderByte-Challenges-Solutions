/****************************************************************
 *                  CODERBYTE PLUS MINUS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PlusMinus(num) read the num parameter being*
 * passed which will be a combination of 1 or more single       *
 * digits, and determine if it's possible to separate the digits*
 * with either a plus or minus sign to get the final expression *
 * to equal zero.                                               *
 *                                                              *
 * For example: if num is 35132 then it's possible to separate  *
 * the digits the following way, 3 - 5 + 1 + 3 - 2, and this    *
 * expression equals zero.                                      *
 *                                                              *
 * Your program should return a string of the signs you used, so*
 * for this example your program should return -++-. If it's not* 
 * possible to get the digit expression to equal zero, return   *
 * the string not possible.                                     *
 *                                                              *
 * If there are multiple ways to get the final expression to    *
 * equal zero, choose the one that contains more minus          *
 * characters. For example: if num is 26712 your program        *
 * should return -+-- and not +-+-.                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: 199                                                 *
 * Output 1: not possible                                       *
 *                                                              *
 * Input 2: 26712                                               *
 * Output 2: -+--                                               *
 *                                                              *
 ***************************************************************/

function make_plus_minus_combinations( plus_minus_combinations ){
        if( plus_minus_combinations.length === 0 ) {
                plus_minus_combinations.push( '+' );
                plus_minus_combinations.push( '-' );
        }
        else {
                let originalLength = plus_minus_combinations.length;
                while( originalLength != 0 ) {
                        let temp = plus_minus_combinations.shift();
                        plus_minus_combinations.push( '+' + temp );
                        plus_minus_combinations.push( '-' + temp );
                        originalLength--;
                }
        }
}

function PlusMinus( num ) {  
        num = String( num );
        if( num.length < 2 ) {
                return "not possible"; 
        }
        let plus_minus_combinations = [];
        for( let i=num.length-1; i > 0; i-- ){
                make_plus_minus_combinations( plus_minus_combinations );
        }
        let sum = 0;
        let results = [];
        let index = 0;
        for( let i=0; i<plus_minus_combinations.length; i++ ) {
                index = 0;
                sum = Number(num[index]);
                for( let j=0; j<plus_minus_combinations[i].length; j++ ) {
                        index++;
                        if( plus_minus_combinations[i][j] === '+' ) {
                                sum += Number(num[index]);
                        }
                        else if( plus_minus_combinations[i][j] === '-' ) {
                                sum -= Number(num[index]);
                        }
                }
                if( sum === 0 ) {
                        results.push( plus_minus_combinations[i] );
                }
        }
        if( results.length === 0 ) {
                return "not possible"; 
        }
        if( results.length === 1 ) {
                return results[0];
        }
        let minus_count = 0;
        let max = 0;
        index = -1;
        for( let i=0; i<results.length; i++ ) {
                for( let j=0; j<results[i].length; j++ ){
                        if( results[i][j] === '-' ) {
                                minus_count++;
                        }
                }
                if( minus_count > max ) {
                        max = minus_count;
                        index = i;
                }
        }
        return results[index];
}

// KEEP THIS FUNCTION CALL HERE 
console.log(PlusMinus(readline()));