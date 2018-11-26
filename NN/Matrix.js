class Matrix
{
    constructor(rows, columns)
    {
      this.rows = rows;
      this.columns = columns;
      this.matrix = [];

      for(var i = 0; i < this.rows; i++){
        this.matrix[i] = [];
        for(var j = 0; j < this.columns; j++){
          this.matrix[i][j] = 0;
        }
      }
    }
    randomise(){
      for (var i = 0; i < this.rows; i++){
        for (var j = 0; j < this.columns; j++){
          this.matrix[i][j] = Math.random();
        }
      }
    }
    // multiplying a matrix with a parameter matrix or a scalar
    multiply(n){
      if (n instanceof Matrix){
        var result = new Matrix(this.rows, n.columns);

        var tempTotal = 0;

        for (var firstMatrixRows = 0; firstMatrixRows < this.rows; firstMatrixRows++)
          for (var secondMatrixCols = 0; secondMatrixCols < n.columns; secondMatrixCols++){
            for (var firstMatrixCols = 0; firstMatrixCols < this.columns; firstMatrixCols++)
            {
              tempTotal += this.matrix[firstMatrixRows][firstMatrixCols] * n.matrix[firstMatrixCols][secondMatrixCols];
            }
            result.matrix[firstMatrixRows][secondMatrixCols] = tempTotal;
            tempTotal = 0;
          }

          return result;
        }
      else
        for (var i = 0; i < this.rows; i++)
          for (var j = 0; j < this.columns; j++)
            this.matrix[i][j] *= n;
    }
    // adding a scalar or matrix to base matrix
    add(n){
      if (n instanceof Matrix)
        for (var i = 0; i < this.rows; i++)
          for (var j = 0; j < this.columns; j++)
            this.matrix[i][j] += n.matrix[i][j];
      else
        for (var i = 0; i < this.rows; i++)
          for (var j = 0; j < this.columns; j++)
            this.matrix[i][j] += n;
    }
    // transpose a matrix
    transpose(){
      var result = new Matrix(this.columns, this.rows);

      for (var i = 0; i < result.rows; i++){
        for (var j = 0; j < result.columns; j++){
          result.matrix[i][j] = this.matrix[j][i];
        }
      }
      return result;
    }
}

// matrix(rows,columns)
// 3, 2 would be
// x x;
// x x;
// x x;
var mat = new Matrix(3,2);
var mat2 = new Matrix(2,3);
var mat3 = new Matrix(3,1);

mat2.matrix[0][0] = 0.8;
mat2.matrix[0][1] = 0.4;
mat2.matrix[0][2] = 0.3;
mat2.matrix[1][0] = 0.2;
mat2.matrix[1][1] = 0.9;
mat2.matrix[1][2] = 0.5;

mat3.matrix[0][0] = 0.3;
mat3.matrix[1][0] = 0.5;
mat3.matrix[2][0] = 0.9;

console.table(mat2.matrix);
console.table(mat3.matrix);
//console.table(mat2.matrix);
//mat.add(mat2);
var multmatrix = mat2.multiply(mat3);
console.table(multmatrix.matrix)
//var multmat = mat.transpose();
//console.table(multmat.matrix);
//console.table(mat.matrix);
