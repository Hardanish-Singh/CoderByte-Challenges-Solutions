function parse( str ) {
        return Function(`'use strict'; return (${str})`)()
}

function MissingDigitII( str ) {

        let split_equation = str.split("=");
        let lhs = split_equation[0].trim();
        let rhs = split_equation[1].trim();

        let i = 0;
        while( true ) {

                let equation1 = '';
                for( let k = 0 ; k < lhs.length; k++ ) {
                        if( lhs[k] == "?" ) {
                                equation1 += i;
                        }
                        else {
                                equation1 += lhs[k];
                        }
                }

                for( let j=0; j<10; j++ ) {
                        let equation2 = '';
                        for( let l = 0 ; l < rhs.length; l++ ) {
                                if( rhs[l] == "?" ) {
                                        equation2 += j;
                                }
                                else {
                                        equation2 += rhs[l];
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

// keep this function call here 
console.log(MissingDigitII(readline()));