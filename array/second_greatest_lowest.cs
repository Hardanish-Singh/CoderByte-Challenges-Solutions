/****************************************************************
 *          CODERBYTE SECOND GREATEST LOWEST CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function SecondGreatLow(arr) take the array of      *
 * numbers stored in arr and return the second lowest and second*
 * greatest numbers, respectively, separated by a space.        *
 * For example: if arr contains [7, 7, 12, 98, 106] the output  *
 * should be 12 98. The array will not be empty and will contain*
 * at least 2 numbers. It can get tricky if there's just        *
 * two numbers!                                                 *
 *                                                              *
 * Examples                                                     *
 * Input 1: new int[] {1, 42, 42, 180}                          *
 * Output 1: 42 42                                              *
 *                                                              *
 * Input 2: new int[] {4, 90}                                   *
 * Output 2: 90 4                                               *
 *                                                              *
 ***************************************************************/
using System;
using System.Linq;

class MainClass {

    public static string SecondGreatLow(int[] arr) 
    {
        Array.Sort(arr);
        arr = arr.Distinct().ToArray();
        if(arr.Length == 1) return new string(arr[0] + " " + arr[0]);
        var answer = new string("");
        answer += arr[1] + " " + arr[arr.Length-2];
        return answer;
    }

    static void Main() 
    {  
        // keep this function call here
        Console.WriteLine(SecondGreatLow(Console.ReadLine()));
    } 

}