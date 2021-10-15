function MaxSubarray(nums) { 

        let sum = -100001;
        let temp = 0;
        for( let i=0; i<nums.length; i++ ) {
                temp = nums[i];
                for( let j=i+1; j<nums.length; j++ ) {
                        temp += nums[j];
                        if( temp < 0 ) {
                                break;
                        }
                        if( temp >= sum  ) {
                                sum = temp;    
                        }      
                }
                if( nums[i] > sum ) {
                        sum = nums[i];
                }
        }
        return sum;
      
}
        
// keep this function call here 
console.log(MaxSubarray(readline()));