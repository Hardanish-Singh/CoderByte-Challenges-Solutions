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
