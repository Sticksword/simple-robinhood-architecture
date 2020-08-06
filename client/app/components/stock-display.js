import Component from '@glimmer/component';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';

export default class StockDisplayComponent extends Component {
  // TIL glimmer component args (eg. this.args.price) are automatically tracked, so there is no need to annotate them
  constructor() {
    super(...arguments);

    // if we want to track historical data, currently not going to do - too much scope creep
    // this.updateGraph();
  }

  @tracked graphData = {
    datasets: [{
      label: 'dataset 1',
      data: this.args.prices,
      // dummy working example
      // data: [{x: 1, y: 12}, {x: 2, y: 19}, {x: 3, y: 3}, {x: 4, y: 5}, {x: 5, y: 2}, {x: 6, y: 3}],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      fill: false,
    }] 
  };

  graphOptions = {
    scales: {
      y: {
        min: 0,
        max: 1000,
      }
    }
  };

  // cannot use getter on graphData because we need to explicitly update the data as ember-cli-chart expects the data to be some object that is observed
  // basically have to manually update the data to trigger ember observer to update graph
  // see: https://github.com/aomran/ember-cli-chart/issues/78
  updateGraph() {
    var graphdata = this.graphData;
    // graphdata.datasets[0].data = this.prices;
    // console.log(this.args.prices);
    this.graphData = graphdata;
    
    later(this, this.updateGraph, 2000);
  }
}
