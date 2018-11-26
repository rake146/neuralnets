class NN{
  constructor(INPUT_LAYER, HIDDEN_LAYER, OUTPUT_LAYER){
    this.input_nodes = INPUT_LAYER;
    this.hidden_nodes = HIDDEN_LAYER;
    this.output_nodes = OUTPUT_LAYER;

    this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
    this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
    this.weights_ih.randomise();
    this.weights_ho.randomise();

    this.bias_h = new Matrix(this.hidden_nodes, 1);
    this.bias_o = new Matrix(this.output_nodes, 1);

  }

  forwardPropogate(input){

    // calculating the hidden outputs
    let inputs = Matrix.convertFromArray(input);
    let hidden = Matrix.multiply(weights_ih, inputs);
    hidden.add(this.bias_h);

    // activation function
    hidden.map(sigmoid);

  }

  backPropogate(){

  }
}

function sigmoid(n){
  return (1 / (1 + Math.exp(-n)));
}

var network = new NN(2, 3, 2);
