"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _reactDom = require("react-dom");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  let {
    modal,
    close,
    x,
    icon,
    hideIcon,
    title,
    hideTitle,
    hideHeader,
    msgL1,
    msgL2,
    hideMsgL2,
    hideFooter,
    btn1,
    hideBtn1,
    btn2,
    hideBtn2,
    redirect,
    disableBtn1 = '',
    disableBtn2 = '',
    hideBtnClose,
    showSpinner,
    modalClass,
    spinnerHtml,
    closeClass,
    fadeDuration = 0
    // fadeDelai,
  } = _ref;
  if (disableBtn1) disableBtn1 = 'disabled';
  if (disableBtn2) disableBtn2 = 'disabled';
  if (!modalClass) modalClass = '';
  if (!closeClass) closeClass = '';
  const [spinner, setSpinner] = (0, _react.useState)(showSpinner);
  (0, _react.useEffect)(() => {
    if (spinner) {
      setTimeout(() => {
        setSpinner(false);
      }, 2500);
    }
    //value of state is used here therefore must be passed as a dependency
  }, [spinner]);
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: modal && (!spinner || spinner === false) ? /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      autoFocus: true,
      className: "modal ".concat(modalClass),
      style: {
        animationDelay: "".concat(fadeDuration, "ms")
      },
      role: "main"
      // close modal when click outside of it
      ,
      onClick: () => {
        close();
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
        className: "modal-container",
        role: "dialog",
        "aria-label": "pop up message",
        id: "modal-component",
        "aria-modal": "true",
        tabIndex: -1,
        "aria-labelledby": "dialogTitle",
        "aria-describedby": "dialogDescription",
        children: [hideBtnClose ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "modal-container--close ".concat(closeClass),
          "aria-label": "Close",
          onClick: close,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: x,
            alt: "close icon"
          })
        }), hideHeader ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("header", {
            className: "modal-header",
            children: [hideIcon ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              className: "modal-header--icon",
              src: icon,
              alt: icon
            }), hideTitle ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
              tabIndex: "0",
              className: "modal-header--title",
              id: "dialogTitle",
              children: title
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
            className: "modal-header--separator"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
          className: "modal-main--msg",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            tabIndex: "0",
            id: "dialogDescription",
            className: "modal-main--msgL1",
            children: msgL1
          }), hideMsgL2 ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            tabIndex: "0",
            id: "dialogDescription",
            className: "modal-main--msgL2",
            children: msgL2
          })]
        }), hideFooter ? null : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
            className: "modal-footer--separator"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("footer", {
            className: "modal-footer",
            children: [hideBtn1 ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "modal-footer--btn1 ".concat(disableBtn1),
              onClick: close,
              children: btn1
            }), hideBtn2 ? null : /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              className: "modal-footer--btn2 ".concat(disableBtn2),
              onClick: redirect,
              children: btn2
            })]
          })]
        })]
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: spinner && modal && !spinnerHtml ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "modal-spinner--time",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "spinner-box",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "loading-icon"
          })
        })
      }) : spinner && modal && spinnerHtml ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        dangerouslySetInnerHTML: {
          __html: spinnerHtml
        }
      }) : null
    })
  }), document.body);
}

/**
 * Modal PROPTYPES
 */
Modal.propTypes = {
  modal: _propTypes.default.bool.isRequired,
  close: _propTypes.default.func.isRequired,
  x: _propTypes.default.string,
  icon: _propTypes.default.string,
  hideIcon: _propTypes.default.bool,
  title: _propTypes.default.string,
  hideTitle: _propTypes.default.bool,
  msgL1: _propTypes.default.string.isRequired,
  msgL2: _propTypes.default.string,
  hideMsgL2: _propTypes.default.bool,
  btn1: _propTypes.default.string,
  disableBtn1: _propTypes.default.bool,
  hideBtn1: _propTypes.default.bool,
  btn2: _propTypes.default.string,
  redirect: _propTypes.default.func,
  disableBtn2: _propTypes.default.bool,
  hideBtn2: _propTypes.default.bool,
  hideHeader: _propTypes.default.bool,
  hideFooter: _propTypes.default.bool,
  hideBtnClose: _propTypes.default.bool,
  modalClass: _propTypes.default.string,
  closeClass: _propTypes.default.string,
  showSpinner: _propTypes.default.bool,
  spinnerHtml: _propTypes.default.string,
  fadeDuration: _propTypes.default.number
};
var _default = Modal;
exports.default = _default;