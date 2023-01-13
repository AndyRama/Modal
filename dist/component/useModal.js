"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = require("react");
//custom modal hook
function useModal() {
  // Modal's state
  const [isOpen, setIsOpen] = (0, _react.useState)(false);

  // Close modal when open
  function toggle() {
    setIsOpen(!isOpen);
  }
  function escToClose() {
    if (escToClose.key === 'Escape') {
      toggle();
    }
  }
  return {
    isOpen,
    toggle,
    escToClose
  };
}
var _default = useModal;
exports.default = _default;