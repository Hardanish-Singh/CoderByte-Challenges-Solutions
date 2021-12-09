/*
1. For input 897654321 the output was incorrect. The correct output is 912345678
2. For input 44444444 the output was incorrect. The correct output is -1
3. For input 76666666 the output was incorrect. The correct output is -1
*/
   

function swap_index_values( leftIndex, rightIndex, nums ) {
        [ nums[rightIndex], nums[leftIndex] ]  = [ nums[leftIndex], nums[rightIndex] ];   
}

var PermutationStep = function(nums) {
        let n = nums;
        nums  = String(nums).split("").map(Number);
        let leftIndex = -1;
        let rightIndex = nums.length - 1;
        
        for( let i=nums.length-1; i>=0; i-- ) {
                if( nums[i] > nums[i-1] ) {
                        leftIndex = i-1;
                        break;
                }
        }
        
        if( leftIndex == -1 ) {
                return -1;
        }
        
        for( let i=nums.length-1; i>=0; i-- ) {
                if( nums[i] > nums[leftIndex] ) {
                        rightIndex = i;
                        break;
                }
        }
        
        swap_index_values(leftIndex, rightIndex, nums);
        
        //REVERSE THE ELEMENTS OF THE ARRAY FROM leftIndex to rightIndex
        leftIndex++;
        rightIndex = nums.length-1;
        
        while( leftIndex < rightIndex ) {
                swap_index_values(leftIndex, rightIndex, nums);
                leftIndex++;
                rightIndex--;
        }

        if( Number( nums.join("") ) > n ) {
          return Number( nums.join("") );
        }        
        return -1;
};


// keep this function call here 
console.log(PermutationStep(readline()));