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
    scale(){
      for (var i = 0; i < this.rows; i++)
        for (var j = 0; j < this.columns; j++)
          this.matrix[i][j] *= n;
    }
    add(){
      for (var i = 0; i < this.rows; i++)
        for (var j = 0; j < this.columns; j++)
          this.matrix[i][j] += n;
    }
}

var mat = new Matrix(3,2);
mat.add(2);
mat.scale(3);
console.table(mat.matrix);
