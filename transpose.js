const transpose = function(matrix) {
    //set newMatrix as empty array
    let newMatrix = [];
    //for loop this for matrix
    for (let i = 0; i < matrix[0].length; i++) {
      newMatrix.push([]);
    }
    //for loop for rows and columns
    for (let j = 0; j < matrix.length; j++) {
      for (let x = 0; x < matrix[j].length; x++) {
        newMatrix[x][j] = matrix[j][x];
  
      }
    }
    return newMatrix;
  };
  
  // Do not edit this function.
  const printMatrix = (matrix) => {
    for (const row of matrix) {
      for (const el of row) {
        process.stdout.write(el + " ");
      }
      process.stdout.write('\n');
    }
  };
  
  printMatrix(transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ]));
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2],
    [3, 4],
    [5, 6]
  ]));
  
  console.log('----')
  
  printMatrix(transpose([
    [1, 2, 3, 4, 5, 6, 7]
  ]));

  module.exports = transpose