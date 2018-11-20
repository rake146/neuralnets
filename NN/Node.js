class Node{
  constructor(NODES_IN_NEXT_LAYER){
    this.value = 0;
    this.nextWeights = new Array(NODES_IN_NEXT_LAYER);

    for (var i = 0; i < NODES_IN_NEXT_LAYER; i++){
      this.nextWeights[i] = Math.random();
    }
  }

  calculateCurrentValue(){

  }
}

var nodes = new Node(10);

console.log(nodes);
