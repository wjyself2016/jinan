"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Index = _interopRequireDefault(require("@/views/index/Index"));

var _Login = _interopRequireDefault(require("@/views/login/Login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]); // 主页面


var routes = [{
  path: '/',
  redirect: '/index'
}, {
  path: '/index',
  component: _Index["default"]
}, {
  path: '/login',
  component: _Login["default"]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;