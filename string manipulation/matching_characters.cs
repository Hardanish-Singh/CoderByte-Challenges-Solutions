/****************************************************************
 *           CODERBYTE LONGEST WORD CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MatchingCharacters(str) take the str       *
 * parameter being passed and determine the largest number of   *
 * unique characters that exists between a pair of matching     *
 * letters anywhere in the string.                              *
 *                                                              *
 * For example: if str is "ahyjakh" then there are only two     *
 * pairs of matching letters, the two a's and the two h's.      *
 * Between the pair of a's there are 3 unique characters:       *
 * h, y, and j.                                                 *
 * Between the h's there are 4 unique characters: y, j, a, & k. *
 * So for this example your program should return 4.            *
 *                                                              *
 * Another example: if str is "ghececgkaem" then your program   *
 * should return 5 because the most unique characters exists    *
 * within the farthest pair of e characters. The input string   *
 * may not contain any character pairs, and in that case your   *
 * program should just return 0. The input will only consist of *
 * lowercase alphabetic characters.                             *
 *                                                              *
 * Examples                                                     *
 * Input 1: "mmmerme"                                           *
 * Output 1: "3"                                                *
 *                                                              *
 * Input 2: "abccdefghi"                                        *
 * Output 2: "0"                                                *
 *                                                              *
 * Solution Efficiency                                          *
 * This user scored higher than 67.3% of users who solved this  * 
 * challenge.                                                   *
 ***************************************************************/

using System;
using System.Linq;

class MainClass {

  public static string MatchingCharacters(string str) {

    var indexString = new string("");
    var matchCharacterStringLength = 0;

    for (var i=0; i<str.Length; i++)
    {
        var isDuplicate = false;
        //CHECK BACKWARD ELEMENTS
        for (var b=0; b<i; b++)
        {
            if (str[i] == str[b])
            {
                isDuplicate = true;
                break;
            }
        }
        if (isDuplicate) continue;

        var indexFlag = false;
        for (var j=i+1; j<str.Length; j++)
        {
            if (str[i] == str[j])
            {
                if (indexFlag == false)
                {
                    indexString = indexString + i + ", " + j;
                    indexFlag = true;
                }
                else indexString = indexString + ", " + j;
            }
        }
        
        var splittedString = indexString.Split(",");
        for (var m=0; m<splittedString.Length; m++)
        {
            for (var n=m+1; n<splittedString.Length; n++)
            {
                var matchCharacterString = new String(str.Substring( (Convert.ToInt32(splittedString[m]) + 1), (Convert.ToInt32(splittedString[n]) - (Convert.ToInt32(splittedString[m]) + 1) ) ).Distinct().ToArray());
                if (matchCharacterStringLength < matchCharacterString.Length) matchCharacterStringLength = matchCharacterString.Length;
            }
        }

        indexString = new string("");
    }    
    return ""+matchCharacterStringLength;

  }

  static void Main() {  
    // keep this function call here
    Console.WriteLine(MatchingCharacters(Console.ReadLine()));
  } 

}