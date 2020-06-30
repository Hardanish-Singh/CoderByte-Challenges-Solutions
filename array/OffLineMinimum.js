/****************************************************************
 *             CODERBYTE OFF LINE MINIMUM CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function OffLineMinimum(strArr) take the strArr     *
 * parameter being passed which will be an array of integers    *
 * ranging from 1...n and the letter "E" and return the correct *
 * subset based on the following rules. The input will be in    *
 * the following format: ["I","I","E","I",...,"E",...,"I"] where*
 * the I's stand for integers and the E means take out the      *
 * smallest integer currently in the whole set. When finished,  *
 * your program should return that new set with integers        *
 * separated by commas. For example: if strArr is               *
 * ["5","4","6","E","1","7","E","E","3","2"] then your program  *
 * should return 4,1,5.                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["1","2","E","E","3"]                               *
 * Output 1: 1,2                                                *
 *                                                              *
 * Input 2: ["4","E","1","E","2","E","3","E"]                   *
 * Output 2: 4,1,2,3                                            *
 *                                                              *
 * Solution Efficiency                                          *
 * The user scored higher than 34.8% of users who solved this   *
 * challenge.                                                   *
 ***************************************************************/

function OffLineMinimum(strArr) { 
    let insertAndExtractMinimum = new Array();
    let offLineMinimum = new String("");
    for(let i=0; i<strArr.length; i++){
        if(strArr[i]==="E"){
            offLineMinimum += "," + Math.min.apply(Math, insertAndExtractMinimum);
            for(let j=0; j<insertAndExtractMinimum.length; j++){
                if(insertAndExtractMinimum[j] === Math.min.apply(Math, insertAndExtractMinimum)) {
                    insertAndExtractMinimum.splice(j, 1);
                    break;
                }
            }
        }
        else insertAndExtractMinimum.push(Number(strArr[i]));
    }
    return offLineMinimum.slice(1);
}
    
// KEEP THIS FUNCTION CALL HERE 
console.log(OffLineMinimum(readline()));