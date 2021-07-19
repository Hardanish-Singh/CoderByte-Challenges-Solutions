/****************************************************************
 *                 CODERBYTE CLOSEST ENEMY CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ClosestEnemy(arr) take the array of numbers*
 * stored in arr and from the position in the array where a 1	*
 * is, return the number of spaces either left or right you	*
 * must move to reach an enemy which is represented by a 2.	*
 * For example: if arr is [0, 0, 1, 0, 0, 2, 0, 2] then your	*
 * program should return 3 because the closest enemy (2) is 3	*
 * spaces away from the 1. The array will contain any number of	*
 * 0's and 2's, but only a single 1. It may not contain any 2's	*
 * at all as well, where in that case your program should	*
 * return a 0. 							*
 *                                                              *
 * Examples                                                     *
 * Input 1: [1, 0, 0, 0, 2, 2, 2] 	                        *
 * Output 1: 4                                                  *
 *                                                              *
 * Input 2: [2, 0, 0, 0, 2, 2, 1, 0]                            *
 * Output 2: 1                                                  *
 *                                                              *
 ***************************************************************/

function makeMoves( array )
{
	let count = 0;
	for( let i=0; i<array.length; i++ )
	{
		count++;
		if( array[i] == 2 )
		{
			break;
		}
		if( i == array.length-1 && array[i] != 2 )
		{
			count = 0;
		}
	}
	return count;
}

function ClosestEnemy( arr )
{
	let onePosition = arr.indexOf( 1 );
	let leftArray = [];
	let rightArray = [];

	for( let i=onePosition-1; i>=0; i-- )
	{
		leftArray.push( arr[i] );
	}

	for( let i=onePosition+1; i<arr.length; i++ )
	{
		rightArray.push( arr[i] );
	}

	let leftEnemy = makeMoves( leftArray );
	let rightEnemy = makeMoves( rightArray );

	return ( leftEnemy > rightArray ) ? leftEnemy : rightEnemy;
}

// KEEP THIS FUNCTION CALL HERE
console.log(ClosestEnemy(readline()));
