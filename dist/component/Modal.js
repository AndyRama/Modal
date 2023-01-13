"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactDom = require("react-dom");
var _jsxRuntime = require("react/jsx-runtime");
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
    disableBtn2 = ''
  } = _ref;
  if (disableBtn1) disableBtn1 = 'disabled';
  if (disableBtn2) disableBtn2 = 'disabled';
  return /*#__PURE__*/(0, _reactDom.createPortal)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: modal ? /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      autoFocus: true,
      className: "modal",
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "modal-container--close",
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
    }) : null
  }), document.body);
}
var _default = Modal;
exports.default = _default;