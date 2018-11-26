class NN{
  constructor(INPUT_LAYER, HIDDEN_LAYER, OUTPUT_LAYER){
    this.input_nodes = INPUT_LAYER;
    this.hidden_nodes = HIDDEN_LAYER;
    this.output_nodes = OUTPUT_LAYER;

    this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
    this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);

    this.weights_ih.randomise();
    this.weights_ho.randomise();

  }

  forwardPropogate(input){

  }

  backPropogate(){

  }
}

var network = new NN(2, 3, 2);
