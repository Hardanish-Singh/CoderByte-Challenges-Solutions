function moveRight( matrix, i, j, sprialOrder ) {
        while( true ) {
                j++;
                if( j > matrix[i].length-1 || matrix[i][j] == '-' ) {
                        j--;
                        break;
                }
                sprialOrder.push( matrix[i][j] );
                matrix[i][j] = '-';
        }
        return [i, j];
}

function moveDown( matrix, i, j, sprialOrder ) {
        while( true ) {
                i++;
                if( i > matrix.length-1 || matrix[i][j] == '-' ) {
                        i--;
                        break;
                }
                sprialOrder.push( matrix[i][j] );
                matrix[i][j] = '-';
        }
        return [i, j];
}

function moveLeft( matrix, i, j, sprialOrder ) {
        while( true ) {
                j--;
                if( j < 0 || matrix[i][j] == '-' ) {
                        j++;
                        break;
                }
                sprialOrder.push( matrix[i][j] );
                matrix[i][j] = '-';
        }
        return [i, j];
}

function moveUp( matrix, i, j, sprialOrder ) {
        while( true ) {
                i--;
                if( i < 0 || matrix[i][j] == '-' ) {
                        i++;
                        break;
                }
                sprialOrder.push( matrix[i][j] );
                matrix[i][j] = '-';
        }
        return [i, j];
}

function MatrixSpiral( data ) {
        let matrix = [];
        for( let i = 0; i < data.length; i++ ) {
                matrix.push(JSON.parse(data[i]));
        }
        if( matrix[0].length == 0 ) {
                return [];
        }
        let sprialOrder = [];
        let i = 0;
        let j = 0;
        sprialOrder.push( matrix[i][j] );
        matrix[i][j] = '-';

        while( true ) {
                [right_i, right_j] = moveRight( matrix, i, j, sprialOrder );
                [down_i, down_j] = moveDown( matrix, right_i, right_j, sprialOrder );
                [left_i, left_j] = moveLeft( matrix, down_i, down_j, sprialOrder );
                [up_i, up_j] = moveUp( matrix, left_i, left_j, sprialOrder );
                if(right_i === down_i && right_j === down_j ) {
                        break;
                }
                i = up_i;
                j = up_j;
        }

        return sprialOrder.join(",");
};
   
// KEEP THIS FUNCTION CALL HERE
console.log( MatrixSpiral( readline() ) );