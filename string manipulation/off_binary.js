function OffBinary(strArr) { 

        let number = +strArr[0];
        let receivedBinary = strArr[1];
        let actualBinary = ( number >>> 0 ).toString(2);
        let count = 0;
      
        for( let i=0; i<receivedBinary.length; i++ ) {
                if( receivedBinary[i] !== actualBinary[i] ) {
                        count++;
                }
        }
      
        return count;
}
         
// KEEP THIS FUNCTION CALL HERE
console.log(OffBinary(readline()));