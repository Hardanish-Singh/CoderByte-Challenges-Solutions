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

// keep this function call here 
console.log(MissingDigit(readline()));