/****************************************************************
 *             CODERBYTE FIND INTERSECTION CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function FindIntersection(strArr) read the array of *
 * strings stored in strArr which will contain 2 elements: the  *
 * first element will represent a list of comma-separated       *
 * numbers sorted in ascending order, the second element will   *
 * represent a second list of comma-separated numbers           *
 * (also sorted).                                               *
 *                                                              *
 * Your goal is to return a comma-separated string containing   *
 * the numbers that occur in elements of strArr in sorted order.*
 * If there is no intersection, return the string false.        *
 *                                                              *
 * Examples                                                     *
 * Input 1: new string[] {"1, 3, 4, 7, 13", "1, 2, 4, 13, 15"}  *
 * Output 1: 1,4,13                                             *
 *                                                              *
 * Input 2: new string[] {"1, 3, 9, 10, 17, 18", "1, 4, 9, 10"} *
 * Output 2: 1,9,10                                             *
 *                                                              *
 ***************************************************************/
using System;
using System.Collections.Generic;
using System.Linq;

class MainClass 
{
    public static string FindIntersection(string[] strArr) 
    {
        var uniqueElements = strArr[0].Split(", ").ToList();
        var splittedElement = new List<string>();
        var intersectionString = new String("");
        foreach (var rec in strArr)
        {
            splittedElement = rec.Split(", ").ToList();
            for (var j=0; j<uniqueElements.Count; j++)
            {
                //CHECK BACKWARD ELEMENTS
                for (var b=0; b<j; b++)
                {
                    if (uniqueElements[j] == uniqueElements[b])
                    {
                        uniqueElements.RemoveAt(j);
                        j--;
                        break;
                    } 
                }
                var isFound = false;
                for (var k=0; k<splittedElement.Count; k++)
                {
                    if (uniqueElements[j] == splittedElement[k])
                    {
                        isFound = true;
                        break;
                    }
                    else if (Int32.Parse(uniqueElements[j]) < Int32.Parse(splittedElement[k]))
                    {
                        uniqueElements.RemoveAt(j);
                        j--;
                        isFound = true;
                        break;   
                    }
                }
                if (isFound == false)
                {
                    uniqueElements.RemoveAt(j);
                    j--;
                }
            }
        }
        for(var i=0; i<uniqueElements.Count; i++)
        {
            if (i != uniqueElements.Count - 1) intersectionString += uniqueElements[i] + ",";
            else intersectionString += uniqueElements[i];
        }
        return (intersectionString.Length > 0) ? intersectionString : "false";
    }
    static void Main() 
    {  
        // KEEP THIS FUNCTION CALL HERE
        Console.WriteLine(FindIntersection(Console.ReadLine()));
    }
}