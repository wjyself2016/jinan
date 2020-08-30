"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  user: null
};
var mutations = {
  'global/setUser': function globalSetUser(state, obj) {
    state.user = obj;
  }
};
var _default = {
  state: state,
  mutations: mutations
};
exports["default"] = _default;