function ArrayRotation( arr ) { 

        let startIndex = arr[0];

        let array_rotation = [];

        for( let i=startIndex; i<arr.length; i++ ) {
                array_rotation.push( arr[i] );
        }

        for( let i=0; i<startIndex; i++ ){
                array_rotation.push( arr[i] );
        }

        return array_rotation.join(""); 
      
}
         
// keep this function call here 
console.log( ArrayRotation( readline() ) );