import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';
// import { A } from '@ember/array';
// import EmberObject from '@ember/object';

export default class IndexRoute extends Route {
  recentPrices = {
    @tracked TSLA: 0,
    @tracked GOOG: 0,
    @tracked BABA: 0,
    @tracked SQ: 0,
    @tracked AMZN: 0,
    // TODO - can track historical prices by appending to array instead
    // ...although ChartJS graph rerendering misbehaves when rerendering often, so going to omit this feature for now
    // TSLA: A([]),
    // GOOG: A([]),
    // BABA: A([]),
    // SQ: A([]),
    // AMZN: A([]),
  };
  timesFetched = 0;

  constructor() {
    super(...arguments);
    this.getRecentPrices();
  }

  getRecentPrices() {
    // [TODO] add toggle logic to some service level code to switch between dev and deployed/kube environments
    // var url = new URL('http://localhost:5000/stocks');
    var url = new URL('http://' + window.location.hostname + '/stocks');
    const params = {
      tickers: Object.keys(this.recentPrices),
    };
    url.search = new URLSearchParams(params).toString();
    this.timesFetched = this.timesFetched + 1

    fetch(url, { mode: 'cors' })
      .then(
        (response) => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }

          response.json()
            .then((data) => {
              // this would be the alternative way to have a pseudo historical data implementation
              // ...but too much "scope creep" - see above TODO comment
              // data.ticker_prices.forEach((stock) => {
              //   this.recentPrices[stock.ticker].pushObject({x: this.timesFetched, y: stock.price});
              //   if (this.recentPrices[stock.ticker].length > 120) {
              //     this.recentPrices[stock.ticker].shiftObject();
              //   }
              // });
              data.ticker_prices.forEach((stock) => {
                this.recentPrices[stock.ticker] = stock.price;
              })
            });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });

    // console.log(this.recentPrices);
    console.log('fetched');
    later(this, this.getRecentPrices, 1100);
  }

  model() {
    return this.recentPrices;
  }
}
