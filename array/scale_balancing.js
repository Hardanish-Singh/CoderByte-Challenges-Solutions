function ScaleBalancing(str) { 

        let array_one = [];
        let array_two = [];
        let combination_array = [];
        let temp = [];
        
        array_one = str[0].slice(1).slice(0, str[0].length-2).split(",").map( n => parseInt(n) );
        array_two = str[1].slice(1).slice(0, str[1].length-2).split(",").map( n => parseInt(n) );
        
        if( array_two[0] != 0 ) {
          array_two.unshift(0);
        }
        
        
        for(let i=0; i<array_one.length; i++){
                temp = [];
                for(let j=0; j<array_two.length; j++){
                  temp.push(array_one[i]+array_two[j]);
                }
                combination_array.push(temp);
                temp = [];
                for(let j=0; j<array_two.length; j++){
                        temp.push(array_one[i]-array_two[j]);
                }
                combination_array.push(temp);
        }
        
         
        for(let i=0; i<combination_array.length-2; i++){
                for(let j=0; j<combination_array[i].length; j++){
                  for(let k=combination_array.length-2; k<combination_array.length; k++){
                          for(let p=0; p<combination_array[k].length; p++){
                      if(combination_array[i][j] == combination_array[k][p] && j!=p) {
                        if(i%2==0 && k%2==0) {
                          if(array_one[0]+array_two[j] == array_one[1]+array_two[p]){
                                  if(array_two[j]==0) return array_two[p];
                      else if (array_two[p]==0) return array_two[j]
                      else return (array_two[j]+","+array_two[p]).split(",").sort().join(",");
                          }
                  } 
                  else if(i%2==0 && k%2!=0)  {
                          if(array_one[0]+array_two[j] == array_one[1]-array_two[p]){
                                  if(array_two[j]==0) return array_two[p];
                      else if (array_two[p]==0) return array_two[j]
                      else return (array_two[j]+","+array_two[p]).split(",").sort().join(",");
                          }
                  }
                  else if(i%2!=0 && k%2==0)  {
                          if(array_one[0]-array_two[j] == array_one[1]+array_two[p]){
                                  if(array_two[j]==0) return array_two[p];
                      else if (array_two[p]==0) return array_two[j]
                      else return (array_two[j]+","+array_two[p]).split(",").sort().join(",");
                          }
                  } 
                  else{
                          if(array_one[0]-array_two[j] == array_one[1]-array_two[p]){
                                  if(array_two[j]==0) return array_two[p];
                      else if (array_two[p]==0) return array_two[j]
                      else return (array_two[j]+","+array_two[p]).split(",").sort().join(",");
                          }
                  }
                }
              }
                  }
          }
        }
        return "not possible";
      }
         
// keep this function call here 
console.log(ScaleBalancing(readline()));