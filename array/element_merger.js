function ElementMerger(arr) { 

        let array = [];

        for( let i=0; i<arr.length-1; i++ ){
                array.push( Math.abs( arr[i] - arr[i+1] ) );
        }

        if( array.length > 1 ) {
                return ElementMerger(array);
        }
        else {
                return array[0];
        }

}
        
// keep this function call here 
console.log(ElementMerger(readline()));