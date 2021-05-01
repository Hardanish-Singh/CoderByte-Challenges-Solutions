function ElementMerger( arr ) { 

        let merge_elements = [];

        for( let i=0; i<arr.length-1; i++ ){
                merge_elements.push( Math.abs( arr[i] - arr[i+1] ) );
        }

        if( merge_elements.length > 1 ) {
                return ElementMerger(merge_elements);
        }
        else {
                return merge_elements[0];
        }

}
        
// keep this function call here 
console.log(ElementMerger(readline()));