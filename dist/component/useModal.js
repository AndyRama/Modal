"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//custom modal hook
function useModal() {
  // Modal's state
  const [isOpen, setIsOpen] = (0, _react.useState)(false);

  // Close modal when open
  function toggle() {
    setIsOpen(!isOpen);
  }
  const escToClose = e => {
    if (e.keyCode === 27) {
      setIsOpen(false);
    }
  };
  return {
    isOpen,
    toggle,
    escToClose
  };
}

/**
 * useModal PROPTYPES
 */
useModal.propTypes = {
  isOpen: _propTypes.default.bool,
  toggle: _propTypes.default.bool,
  escToClose: _propTypes.default.bool
};
var _default = useModal;
exports.default = _default;