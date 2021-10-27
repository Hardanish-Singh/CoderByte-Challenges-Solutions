function HDistance( strArr ) { 
        let h_distance = 0;
        let string1 = strArr[0];
        let string2 = strArr[1];

        for( let i=0; i<string1.length; i++ ){
                if( string1[i] !== string2[i] ) {
                        h_distance++;
                }
        }

        return h_distance;
}
         
// KEEP THIS FUNCTION CALL HERE
console.log( HDistance( readline() ) );