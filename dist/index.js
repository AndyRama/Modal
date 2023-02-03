"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _Modal2.default;
  }
});
Object.defineProperty(exports, "check", {
  enumerable: true,
  get: function get() {
    return _check.default;
  }
});
Object.defineProperty(exports, "close", {
  enumerable: true,
  get: function get() {
    return _close.default;
  }
});
Object.defineProperty(exports, "useModal", {
  enumerable: true,
  get: function get() {
    return _useModal.default;
  }
});
var _close = _interopRequireDefault(require("./assets/close.png"));
var _check = _interopRequireDefault(require("./assets/check.png"));
require("./styles/Modal.css");
require("./styles/exemple.css");
var _useModal = _interopRequireDefault(require("./component/useModal"));
var _Modal2 = _interopRequireDefault(require("./component/Modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }