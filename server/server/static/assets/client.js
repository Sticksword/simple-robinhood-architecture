'use strict';



;define("client/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("client/app", ["exports", "ember-resolver", "ember-load-initializers", "client/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("client/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("client/components/ember-chart", ["exports", "ember-cli-chart/components/ember-chart"], function (_exports, _emberChart) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberChart.default;
  _exports.default = _default;
});
;define("client/components/nav-bar", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="nav-bar nav-bar-light fixed-top">
    <section class="nav-bar-logo">
      Budget Robinhood 🏹
    </section>
    <section class="nav-bar-section">
      <ul class="navbar-nav">
        <li class="nav-item">
          Made with ♥️
        </li>
      </ul>
    </section>
  </div>
  
  */
  {
    id: "a9Mz5jbF",
    block: "{\"symbols\":[],\"statements\":[[7,\"div\",true],[10,\"class\",\"nav-bar nav-bar-light fixed-top\"],[8],[0,\"\\n  \"],[7,\"section\",true],[10,\"class\",\"nav-bar-logo\"],[8],[0,\"\\n    Budget Robinhood \uD83C\uDFF9\\n  \"],[9],[0,\"\\n  \"],[7,\"section\",true],[10,\"class\",\"nav-bar-section\"],[8],[0,\"\\n    \"],[7,\"ul\",true],[10,\"class\",\"navbar-nav\"],[8],[0,\"\\n      \"],[7,\"li\",true],[10,\"class\",\"nav-item\"],[8],[0,\"\\n        Made with \u2665\uFE0F\\n      \"],[9],[0,\"\\n    \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "client/components/nav-bar.hbs"
    }
  });

  class NavBarComponent extends _component.default {}

  _exports.default = NavBarComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, NavBarComponent);
});
;define("client/components/stock-display", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="stock-display">
    <h2>{{ @ticker }}</h2>
    <div class="{{this.changeStatus}} stock-display-price">{{ @price }}</div>
  </div>
  
  {{!-- {{#each @prices as |price|}}
    {{price.y}}
  {{/each}} --}}
  
  {{!-- {{ ember-chart type='line' data=this.graphData options=this.graphOptions }} --}}
  */
  {
    id: "brOszuaB",
    block: "{\"symbols\":[\"@ticker\",\"@price\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"stock-display\"],[8],[0,\"\\n  \"],[7,\"h2\",true],[8],[1,[23,1,[]],false],[9],[0,\"\\n  \"],[7,\"div\",true],[11,\"class\",[29,[[23,0,[\"changeStatus\"]],\" stock-display-price\"]]],[8],[1,[23,2,[]],false],[9],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "client/components/stock-display.hbs"
    }
  });

  let StockDisplayComponent = (_dec = Ember._tracked, (_class = (_temp = class StockDisplayComponent extends _component.default {
    // TIL glimmer component args (eg. this.args.price) are automatically tracked, so there is no need to annotate them
    constructor() {
      super(...arguments); // if we want to track historical data, currently not going to do - too much scope creep
      // this.updateGraph();

      _defineProperty(this, "_priorValue", null);

      _initializerDefineProperty(this, "graphData", _descriptor, this);

      _defineProperty(this, "graphOptions", {
        scales: {
          y: {
            min: 0,
            max: 1000
          }
        }
      });
    }

    get changeStatus() {
      var changeStatus;

      if (this._priorValue) {
        changeStatus = this._priorValue > this.args.price ? 'red' : 'green';
      } else {
        changeStatus = '';
      }

      this._priorValue = this.args.price;
      return changeStatus;
    }

    // cannot use getter on graphData because we need to explicitly update the data as ember-cli-chart expects the data to be some object that is observed
    // basically have to manually update the data to trigger ember observer to update graph
    // see: https://github.com/aomran/ember-cli-chart/issues/78
    updateGraph() {
      var graphdata = this.graphData; // graphdata.datasets[0].data = this.prices;
      // console.log(this.args.prices);

      this.graphData = graphdata;
      Ember.run.later(this, this.updateGraph, 2000);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "graphData", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return {
        datasets: [{
          label: 'dataset 1',
          data: this.args.prices,
          // dummy working example
          // data: [{x: 1, y: 12}, {x: 2, y: 19}, {x: 3, y: 3}, {x: 4, y: 5}, {x: 5, y: 2}, {x: 6, y: 3}],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
          fill: false
        }]
      };
    }
  })), _class));
  _exports.default = StockDisplayComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, StockDisplayComponent);
});
;define("client/controllers/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class IndexController extends Ember.Controller {}

  _exports.default = IndexController;
});
;define("client/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("client/helpers/app-version", ["exports", "client/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("client/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("client/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("client/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "client/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("client/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("client/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("client/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("client/initializers/export-application-global", ["exports", "client/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("client/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("client/router", ["exports", "client/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("client/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  // import { A } from '@ember/array';
  // import EmberObject from '@ember/object';
  class IndexRoute extends Ember.Route {
    constructor() {
      var _dec, _dec2, _dec3, _dec4, _dec5, _obj, _init, _init2, _init3, _init4, _init5;

      super(...arguments);

      _defineProperty(this, "recentPrices", (_dec = Ember._tracked, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, (_obj = {
        TSLA: 0,
        GOOG: 0,
        BABA: 0,
        SQ: 0,
        AMZN: 0 // TODO - can track historical prices by appending to array instead
        // ...although ChartJS graph rerendering misbehaves when rerendering often, so going to omit this feature for now
        // TSLA: A([]),
        // GOOG: A([]),
        // BABA: A([]),
        // SQ: A([]),
        // AMZN: A([]),

      }, (_applyDecoratedDescriptor(_obj, "TSLA", [_dec], (_init = Object.getOwnPropertyDescriptor(_obj, "TSLA"), _init = _init ? _init.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function () {
          return _init;
        }
      }), _obj), _applyDecoratedDescriptor(_obj, "GOOG", [_dec2], (_init2 = Object.getOwnPropertyDescriptor(_obj, "GOOG"), _init2 = _init2 ? _init2.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function () {
          return _init2;
        }
      }), _obj), _applyDecoratedDescriptor(_obj, "BABA", [_dec3], (_init3 = Object.getOwnPropertyDescriptor(_obj, "BABA"), _init3 = _init3 ? _init3.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function () {
          return _init3;
        }
      }), _obj), _applyDecoratedDescriptor(_obj, "SQ", [_dec4], (_init4 = Object.getOwnPropertyDescriptor(_obj, "SQ"), _init4 = _init4 ? _init4.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function () {
          return _init4;
        }
      }), _obj), _applyDecoratedDescriptor(_obj, "AMZN", [_dec5], (_init5 = Object.getOwnPropertyDescriptor(_obj, "AMZN"), _init5 = _init5 ? _init5.value : undefined, {
        enumerable: true,
        configurable: true,
        writable: true,
        initializer: function () {
          return _init5;
        }
      }), _obj)), _obj)));

      _defineProperty(this, "timesFetched", 0);

      this.getRecentPrices();
    }

    getRecentPrices() {
      // [TODO] add toggle logic to some service level code to switch between dev and deployed/kube environments
      // var url = new URL('http://localhost:5000/stocks');
      var url = new URL('http://' + window.location.hostname + '/stocks');
      const params = {
        tickers: Object.keys(this.recentPrices)
      };
      url.search = new URLSearchParams(params).toString();
      this.timesFetched = this.timesFetched + 1;
      fetch(url, {
        mode: 'cors'
      }).then(response => {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        response.json().then(data => {
          // this would be the alternative way to have a pseudo historical data implementation
          // ...but too much "scope creep" - see above TODO comment
          // data.ticker_prices.forEach((stock) => {
          //   this.recentPrices[stock.ticker].pushObject({x: this.timesFetched, y: stock.price});
          //   if (this.recentPrices[stock.ticker].length > 120) {
          //     this.recentPrices[stock.ticker].shiftObject();
          //   }
          // });
          data.ticker_prices.forEach(stock => {
            this.recentPrices[stock.ticker] = stock.price;
          });
        });
      }).catch(function (err) {
        console.log('Fetch Error :-S', err);
      }); // console.log(this.recentPrices);

      console.log('fetched');
      Ember.run.later(this, this.getRecentPrices, 1100);
    }

    model() {
      return this.recentPrices;
    }

  }

  _exports.default = IndexRoute;
});
;define("client/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("client/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("client/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("client/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("client/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ljsjlt4v",
    "block": "{\"symbols\":[],\"statements\":[[5,\"nav-bar\",[],[[],[]]],[0,\"\\n\"],[7,\"main\",true],[8],[0,\"\\n  \"],[1,[22,\"outlet\"],false],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "client/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("client/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "I7nPdCd6",
    "block": "{\"symbols\":[\"price\",\"ticker\",\"@model\"],\"statements\":[[0,\"\\n\"],[7,\"div\",true],[10,\"class\",\"container-cover\"],[8],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"container-column\"],[8],[0,\"\\n    \"],[7,\"h1\",true],[8],[0,\"Trading made easy.\"],[9],[0,\"\\n  \"],[9],[0,\"\\n  \"],[7,\"div\",true],[10,\"class\",\"container-column\"],[8],[0,\"\\n\"],[4,\"each\",[[28,\"-each-in\",[[23,3,[]]],null]],null,{\"statements\":[[0,\"      \"],[5,\"stock-display\",[],[[\"@ticker\",\"@price\"],[[23,2,[]],[23,1,[]]]]],[0,\"\\n\"]],\"parameters\":[1,2]},null],[0,\"  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}",
    "meta": {
      "moduleName": "client/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("client/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("client/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("client/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("client/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;

;define('client/config/environment', [], function() {
  var prefix = 'client';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("client/app")["default"].create({"name":"client","version":"0.0.0+1398b0d4"});
          }
        
//# sourceMappingURL=client.map
