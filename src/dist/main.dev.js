"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _elementUi = _interopRequireDefault(require("element-ui"));

var _vueResource = _interopRequireDefault(require("vue-resource"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router/router"));

var _store = _interopRequireDefault(require("./store"));

require("element-ui/lib/theme-chalk/index.css");

require("./styles/main.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueResource["default"]);

_vue["default"].use(_elementUi["default"]);

_vue["default"].config.productionTip = false;

_vue["default"].http.interceptors.push(function (request, next) {
  next(function (resp) {
    var statusCode = resp.status;

    switch (statusCode) {
      case 500:
        app.$message.error(resp.body.message);
        break;

      case 200:
        if (resp.body.errno === 1003 && location.hash.indexOf('login') === -1) {
          window.location.hash = '/login';
        }

        if (resp.body.errno && resp.body.errno != 1003) {
          app.$message.error(resp.body.errmsg);
        }

        break;
    }
  });
});

var app = new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');