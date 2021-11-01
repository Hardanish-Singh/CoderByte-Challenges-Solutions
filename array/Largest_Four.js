function LargestFour(arr) {
        arr.sort( (a,b) => a-b );
        let a = arr[arr.length-1] ? arr[arr.length-1] : 0;
        let b = arr[arr.length-2] ? arr[arr.length-2] : 0 ;
        let c = arr[arr.length-3] ? arr[arr.length-3] : 0 ;
        let d = arr[arr.length-4] ? arr[arr.length-4] : 0 ;
        return a + b + c + d;
}
         
// KEEP THIS FUNCTION CALL HERE
console.log(LargestFour(readline()));