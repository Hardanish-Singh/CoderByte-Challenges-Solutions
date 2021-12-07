/*
Have the function EvenPairs(str) take the str parameter being passed and determine if a pair of adjacent even numbers exists anywhere in the string. 
If a pair exists, return the string true, otherwise return false. 
For example: if str is "f178svg3k19k46" then there are two even numbers at the end of the string, "46" so your program should return the string true. 
Another example: if str is "7r5gg812" then the pair is "812" (8 and 12) so your program should return the string true.

Examples

Input: "3gy41d216" 
Output: true
Input: "f09r27i8e67" 
Output: false
*/
function EvenPairs( str ) {
        for( let i=0; i<str.length; i++ ) {
                if( str[i] === '0' || ( +str[i] && +str[i+1] ) ) {
                        for( let j = i+1; j<str.length; j++ ) {
                                if( !(+str[j]) ) {
                                        break;
                                }
                                if( (+str[j]) % 2 === 0 ) {
                                        return true;
                                }
                        }
                }
        }
        return false;
}
         
// KEEP THIS FUNCTION CALL HERE 
console.log(EvenPairs(readline()));