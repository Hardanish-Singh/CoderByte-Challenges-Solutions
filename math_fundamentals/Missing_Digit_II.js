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