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
    // adding a scalar or matrix to base matrix
    multiply(n){
      if (n instanceof Matrix){
        var matrixTemp = new Matrix(this.colums, n.columns);
        var tempNum = 0;
        // n will be second parameter of matrix calculation
        for (var i = 0; i < this.rows; i++){
          for (var j = 0; i < this.columns; j++){

          }
        }
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

    }
}

var mat = new Matrix(3,2);
var mat2 = new Matrix(3,2);
mat.add(2);
mat.scale(3);
mat2.add(1);
mat.add(mat2);

console.table(mat2.matrix);
console.table(mat.matrix);
