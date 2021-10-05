function EquivalentKeypresses(strArr) { 

        let string1 = strArr[0].split(",");
        let string2 = strArr[1].split(",");
      
        let s1 = "";
        let s2 = "";
      
        for( let i=0; i<string1.length; i++ ){
                if( string1[i] === "-B") {
                        continue;
                }
                if( string1[i+1] !== "-B" ) {
                        s1 += string1[i];
                }
                else {
                        i++;
                }
        }
      
        for( let i=0; i<string2.length; i++ ){
                if( string2[i] === "-B" ) {
                        continue;
                }
                if( string2[i+1] !== "-B" ) {
                        s2 += string2[i];
                }
                else {
                        i++;
                }
        }
      
        if( s1 === s2 ) {
                return true;
        } 
        else {
                return false;
        }
      }
         
// KEEP THIS FUNCTION CALL HERE
console.log(EquivalentKeypresses(readline()));