"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\nfunction Register() {\n    var handleSubmit = function(e) {\n    //\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                        name: \"basic\",\n                        initialValues: {\n                            remember: true\n                        },\n                        labelCol: {\n                            span: 6\n                        },\n                        labelWrap: true,\n                        labelAlign: \"left\",\n                        onFinish: handleSubmit(),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                                label: \"Email\",\n                                name: \"Email\",\n                                rules: [\n                                    {\n                                        required: true,\n                                        message: \"Please input your email!\"\n                                    }\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    ref: emailRef\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                                label: \"Password\",\n                                name: \"password\",\n                                rules: [\n                                    {\n                                        required: true,\n                                        message: \"Please input your password!\"\n                                    }\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {\n                                    ref: passwordRef\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                                label: \"Confirm Password\",\n                                name: \"confirmpassword\",\n                                rules: [\n                                    {\n                                        required: true,\n                                        message: \"Please input your password!\"\n                                    }\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Input.Password, {\n                                    ref: passwordConfirmRef\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 37,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Form.Item, {\n                                wrapperCol: {\n                                    offset: 8,\n                                    span: 16\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    type: \"primary\",\n                                    htmlType: \"submit\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNxQjtBQUUvQixTQUFTSyxRQUFRLEdBQUc7SUFDL0IsSUFBTUMsWUFBWSxHQUFHLFNBQUNDLENBQUMsRUFBSztJQUN4QixFQUFFO0tBQ0w7SUFFRCxxQkFDSTs7MEJBQ0ksOERBQUNDLElBQUU7MEJBQUMsVUFBUTs7Ozs7b0JBQUs7MEJBQ2pCLDhEQUFDQyxLQUFHOzBCQUNBLDRFQUFDUixzQ0FBSTs4QkFDRCw0RUFBQ0Msc0NBQUk7d0JBQ0RRLElBQUksRUFBQyxPQUFPO3dCQUNaQyxhQUFhLEVBQUU7NEJBQUVDLFFBQVEsRUFBRSxJQUFJO3lCQUFFO3dCQUNqQ0MsUUFBUSxFQUFFOzRCQUFFQyxJQUFJLEVBQUUsQ0FBQzt5QkFBRTt3QkFDckJDLFNBQVM7d0JBQ1RDLFVBQVUsRUFBQyxNQUFNO3dCQUNqQkMsUUFBUSxFQUFFWCxZQUFZLEVBQUU7OzBDQUV4Qiw4REFBQ0osMkNBQVM7Z0NBQ05pQixLQUFLLEVBQUMsT0FBTztnQ0FDYlQsSUFBSSxFQUFDLE9BQU87Z0NBQ1pVLEtBQUssRUFBRTtvQ0FBQzt3Q0FBRUMsUUFBUSxFQUFFLElBQUk7d0NBQUVDLE9BQU8sRUFBRSwwQkFBMEI7cUNBQUU7aUNBQUM7MENBRWhFLDRFQUFDbkIsdUNBQUs7b0NBQUNvQixHQUFHLEVBQUVDLFFBQVE7Ozs7O3dDQUFJOzs7OztvQ0FDaEI7MENBRVosOERBQUN0QiwyQ0FBUztnQ0FDTmlCLEtBQUssRUFBQyxVQUFVO2dDQUNoQlQsSUFBSSxFQUFDLFVBQVU7Z0NBQ2ZVLEtBQUssRUFBRTtvQ0FBQzt3Q0FBRUMsUUFBUSxFQUFFLElBQUk7d0NBQUVDLE9BQU8sRUFBRSw2QkFBNkI7cUNBQUU7aUNBQUM7MENBRW5FLDRFQUFDbkIsZ0RBQWM7b0NBQUNvQixHQUFHLEVBQUVHLFdBQVc7Ozs7O3dDQUFJOzs7OztvQ0FDNUI7MENBQ1osOERBQUN4QiwyQ0FBUztnQ0FDTmlCLEtBQUssRUFBQyxrQkFBa0I7Z0NBQ3hCVCxJQUFJLEVBQUMsaUJBQWlCO2dDQUN0QlUsS0FBSyxFQUFFO29DQUFDO3dDQUFFQyxRQUFRLEVBQUUsSUFBSTt3Q0FBRUMsT0FBTyxFQUFFLDZCQUE2QjtxQ0FBRTtpQ0FBQzswQ0FFbkUsNEVBQUNuQixnREFBYztvQ0FBQ29CLEdBQUcsRUFBRUksa0JBQWtCOzs7Ozt3Q0FBSTs7Ozs7b0NBQ25DOzBDQUVaLDhEQUFDekIsMkNBQVM7Z0NBQUMwQixVQUFVLEVBQUU7b0NBQUVDLE1BQU0sRUFBRSxDQUFDO29DQUFFZixJQUFJLEVBQUUsRUFBRTtpQ0FBRTswQ0FDMUMsNEVBQUNWLHdDQUFNO29DQUFDMEIsSUFBSSxFQUFDLFNBQVM7b0NBQUNDLFFBQVEsRUFBQyxRQUFROzhDQUFDLFFBRXpDOzs7Ozt3Q0FBUzs7Ozs7b0NBQ0Q7Ozs7Ozs0QkFDVDs7Ozs7d0JBQ0o7Ozs7O29CQUNMOztvQkFDUCxDQUNOO0NBQ0o7QUFuRHVCMUIsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtDYXJkLCBGb3JtLCBJbnB1dCwgQnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIC8vXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDE+UmVnaXN0ZXI8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbENvbD17eyBzcGFuOiA2IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsV3JhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbEFsaWduPSdsZWZ0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkZpbmlzaD17aGFuZGxlU3VibWl0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBlbWFpbCEnIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcmVmPXtlbWFpbFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgcmVmPXtwYXNzd29yZFJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIHBhc3N3b3JkIScgfV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dC5QYXNzd29yZCByZWY9e3Bhc3N3b3JkQ29uZmlybVJlZn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtIHdyYXBwZXJDb2w9e3sgb2Zmc2V0OiA4LCBzcGFuOiAxNiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiRm9ybSIsIklucHV0IiwiQnV0dG9uIiwiUmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwiaDEiLCJkaXYiLCJuYW1lIiwiaW5pdGlhbFZhbHVlcyIsInJlbWVtYmVyIiwibGFiZWxDb2wiLCJzcGFuIiwibGFiZWxXcmFwIiwibGFiZWxBbGlnbiIsIm9uRmluaXNoIiwiSXRlbSIsImxhYmVsIiwicnVsZXMiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJyZWYiLCJlbWFpbFJlZiIsIlBhc3N3b3JkIiwicGFzc3dvcmRSZWYiLCJwYXNzd29yZENvbmZpcm1SZWYiLCJ3cmFwcGVyQ29sIiwib2Zmc2V0IiwidHlwZSIsImh0bWxUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});