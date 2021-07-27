/****************************************************************
 *              CODERBYTE HAPPY NUMBERS CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function HappyNumbers(num) determine if a number is	*
 * Happy, which is a number whose sum of the square of the	*
 * digits eventually converges to 1. Return true if it's a Happy*
 * number, otherwise return false.       			*
 *                                                              *
 * For example: the number 10 is Happy because 1^2 + 0^2	*
 * converges to 1.       					*
 *                                                              *
 * Examples                                                     *
 * Input 1: 1		                                        *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: 101		                                        *
 * Output 2: false                                              *
 *                                                              *
 ***************************************************************/
 
function Calculate_Sum_Of_Square_Of_Digits( number )
{
	let sum = 0;
	for( let i=0; i<number.length; i++ )
	{
		sum += Math.pow( +number[i], 2 );
	}
	return sum;
}

function HappyNumbers( num )
{
	let number = String( num );
	let numbers = [];

	while( true )
	{

		let sum = Calculate_Sum_Of_Square_Of_Digits( number );
		number = String( sum );
		if( number == "1" )
		{
			return true;
		}
		else if( numbers.includes( number ) )
		{
			return false;
		}
		numbers.push( String(sum) );
	}

}

// KEEP THIS FUNCTION CALL HERE
console.log(HappyNumbers(readline()));
