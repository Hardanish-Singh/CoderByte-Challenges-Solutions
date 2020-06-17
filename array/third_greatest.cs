/****************************************************************
 *             CODERBYTE THIRD GREATEST CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ThirdGreatest(strArr) take the array of    *
 * strings stored in strArr and return the third largest word   *
 * within it. So For Example:                                   *
 * if strArr is ["hello", "world", "before", "all"] your output *
 * should be world because "before" is 6 letters long,          *
 * and "hello" and "world" are both 5, but the output should be *
 * world because it appeared as the last 5 letter word in the   *
 * array. If strArr was ["hello", "world", "after", "all"] the  *
 * output should be after because the first three words are all *
 * 5 letters long, so return the last one. The array will have  *
 * at least three strings and each string will only contain     *
 * letters.                                                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: new string[] {"coder","byte","code"}                *
 * Output 1: code                                               *
 *                                                              *
 * Input 2: new string[] {"abc","defg","z","hijk"}              *
 * Output 2: abc                                                *
 *                                                              *
 ***************************************************************/

using System;
class MainClass 
{
    public static string ThirdGreatest(string[] strArr) 
    {
        var wordLengthArray = new int[strArr.Length];
        int i = 0;
        foreach (var word in strArr)
        {
            wordLengthArray[i] = word.Length;
            i++;
        }
        Array.Sort(wordLengthArray);
        var thirdGreatest = wordLengthArray[wordLengthArray.Length-3];
        int index = 0;
        i = 0;
        foreach (var word in strArr)
        {
            if (word.Length == thirdGreatest) index = i;
            i++;
        }
        return strArr[index];
    }
    static void Main() 
    {  
        // KEEP THIS FUNCTION CALL HERE
        Console.WriteLine(ThirdGreatest(Console.ReadLine()));
    }
}