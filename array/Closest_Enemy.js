function moveLeft( array )
{
	let count = 0;
	let isFound = false;
	for( let i=array.length-1; i>=0; i-- )
	{
		count++;
		if( array[i] == 2 )
		{
			isFound = true;
			break;
		}
	}
	return isFound ? count : 0;
}
function moveRight( array )
{
	let count = 0;
	let isFound = false;
	for( let i=0; i<array.length; i++ )
	{
		count++;
		if( array[i] == 2 )
		{
			isFound = true;
			break;
		}
	}
	return isFound ? count : 0;
}

function ClosestEnemy( arr )
{
	let onePosition = arr.indexOf( 1 );
	let leftArray = [];
	let rightArray = [];

	for( let i=0; i<onePosition; i++ )
	{
		leftArray.push( arr[i] );
	}

	for( let i=onePosition+1; i<arr.length; i++ )
	{
		rightArray.push( arr[i] );
	}

	let leftEnemy = moveLeft( leftArray );
	let rightEnemy = moveRight( rightArray );

	return ( leftEnemy > rightArray ) ? leftEnemy : rightEnemy;
}

// KEEP THIS FUNCTION CALL HERE
console.log(ClosestEnemy(readline()));
