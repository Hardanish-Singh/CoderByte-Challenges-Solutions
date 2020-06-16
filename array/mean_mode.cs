/****************************************************************
 *             CODERBYTE FIND INTERSECTION CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MeanMode(arr) take the array of numbers    *
 * stored in arr and return 1 if the mode equals the mean, 0 if *
 * they don't equal each other (ie. [5, 3, 3, 3, 1] should      *
 * return 1 because the mode (3) equals the mean (3)).          *
 *                                                              *
 * The array will not be empty, will only contain positive      *
 * integers, and will not contain more than one mode.           *
 *                                                              *
 * Examples                                                     *
 * Input 1: new int[] {1, 2, 3}                                 *
 * Output 1: 0                                                  *
 *                                                              *
 * Input 2: new int[] {4, 4, 4, 6, 2}                           *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/
using System;
using System.Linq; 

class MainClass {
    public static int MeanMode(int[] arr) {
        int mode = arr.GroupBy(v => v)
                      .OrderByDescending(g => g.Count())
                      .First()
                      .Key;
        int i = 0;
        int sum = 0;
        for(i=0; i<arr.Length; i++) sum += arr[i];
        int mean = sum/i;
        if(mode == mean) return 1;
        else return 0;
    }
    static void Main() {  
        // KEEP THIS FUNCTION CALL HERE
        Console.WriteLine(MeanMode(Console.ReadLine()));
    } 
}