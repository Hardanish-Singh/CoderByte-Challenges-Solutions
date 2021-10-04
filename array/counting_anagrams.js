/****************************************************************
 *             CODERBYTE COUNTING ANAGRAMS CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function CountingAnagrams(str) take the str         *
 * parameter & determine how many anagrams exist in the string. *
 * An anagram is a new word that is produced from rearranging   *
 * the characters in a different word.                          *
 * For example: cars and arcs are anagrams.                     *
 *                                                              *
 * Your program should determine how many anagrams exist in a   *
 * given string and return the total number.                    *
 *                                                              *
 * For example: "cars are very cool so are arcs and my os"      *
 * then your program should return 2 because "cars" and "arcs"  *
 * form 1 anagram and "so" and "os" form a 2nd anagram.         *
 *                                                              *
 * The word "are" occurs twice in the string but it isn't an    *
 * anagram because it is the same word just repeated.           *
 * The string will contain only spaces and lowercase letters,   *
 * no punctuation, numbers, or uppercase letters.               *
 *                                                              *
 * Examples                                                     *
 * Input 1: "aa aa odg dog gdo"                                 *
 * Output 1: 2                                                  *
 *                                                              *
 * Input 2: "a c b c run urn urn"                               *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/

function CountingAnagrams( str ) { 
        string_array = str.split(" ").sort();
        let count = 0;
        for( let i = 0; i<string_array.length; i++ ) {
                for( let j=i+1; j<string_array.length; j++ ) {
                        if( string_array[i] === string_array[j] ) {
                                break;
                        }
                        let sorted_one = string_array[i].split("").sort().join("");
                        let sorted_two = string_array[j].split("").sort().join("");
                        if( sorted_one === sorted_two ) {
                                count++;
                                break;
                        }
                }
        }

        return count;
}
   
// keep this function call here 
console.log(CountingAnagrams(readline()));