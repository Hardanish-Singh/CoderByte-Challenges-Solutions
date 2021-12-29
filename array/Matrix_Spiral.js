/****************************************************************
 *                 CODERBYTE MATRIX SPIRAL CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function MatrixSpiral(strArr) read the array of     *
 * strings stored in strArr which will represent a 2D N matrix, *
 * and your program should return the elements after printing   *
 * them in a clockwise, spiral order. You should return the     *
 * newly formed list of elements as a string with the numbers   *
 * separated by commas.                                         *
 *                                                              *
 * For example: strArr is "[1, 2, 3]", "[4, 5, 6]", "[7, 8, 9]" *
 * then this looks like the following 2D matrix:                *
 *                              1 2 3                           *
 *                              4 5 6                           *
 *                              7 8 9                           *
 * So your program should return the elements of this matrix in *
 * a clockwise, spiral order which is: 1,2,3,6,9,8,7,4,5        *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["[1, 2]", "[10, 14]"]                              *
 * Output 1: 1,2,14,10                                          *
 *                                                              *
 * Input 2: ["[4, 5, 6, 5]", "[1, 1, 2, 2]", "[5, 4, 2, 9]"]    *
 * Output 2: 4,5,6,5,2,9,2,4,5,1,1,2                            *
 *                                                              *
 ***************************************************************/

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