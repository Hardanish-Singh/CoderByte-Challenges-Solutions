/****************************************************************
 *             CODERBYTE ARITHMETC GEOMETRIC CHALLENGE          *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArithGeo(arr) take the array of numbers    *
 * stored in arr and return the string "Arithmetic" if the      *
 * sequence follows an arithmetic pattern or return "Geometric" *
 * if it follows a geometric pattern. If the sequence doesn't   *
 * follow either pattern return -1. An arithmetic sequence is   *
 * one where the difference between each of the numbers is      *
 * consistent, where as in a geometric sequence, each term after*
 * the first is multiplied by some constant or common ratio.    *
 * Arithmetic example: [2, 4, 6, 8] and                         *
 * Geometric example: [2, 6, 18, 54]. Negative numbers may be   *
 * entered as parameters, 0 will not be entered, and no array   *
 * will contain all the same elements.                          *
 *                                                              *
 * Examples                                                     *
 * Input 1: new int[] {5,10,15}                                 *
 * Output 1: Arithmetic                                         *
 *                                                              *
 * Input 2: new int[] {2,4,16,24}                               *
 * Output 2: -1                                                 *
 *                                                              *
 ***************************************************************/

using System;
class MainClass
{
	public static string ArithGeo( int[] arr )
	{
	        var isArithmeticProgression = false;
	        var isGeometricProgression = false;
		// CHECK ARITHMETIC LOGIC
	        for( var i=arr.Length-1; i>=0; i-- )
	        {
            		if ( i!=0 )
	            	{
	                	if ( arr[i] - arr[i-1] == arr[arr.Length-1] - arr[arr.Length-1-1] )
				{
					isArithmeticProgression = true;
				}
	                	else
	                	{
	                    		isArithmeticProgression = false;
	                    		break;
	                	}
	            	}
        	}
		// CHECK GEOMETRIC LOGIC
	        for ( var i=arr.Length-1; i>=0; i-- )
        	{
            		if ( i!=0 )
	            	{
                		if ( arr[i] / arr[i-1] == arr[arr.Length-1] / arr[arr.Length-1-1] )
				{
					isGeometricProgression = true;
				}
                		else
                		{
					isGeometricProgression = false;
		                    	break;
                		}
    			}
        	}
		if( isArithmeticProgression )
		{
			return "Arithmetic";
		}
        	if( isGeometricProgression )
		{
			return "Geometric";
		}
        	return "-1";
	}

	static void Main()
	{
		// KEEP THIS FUNCTION CALL HERE
		Console.WriteLine(ArithGeo(Console.ReadLine()));
	}
}
