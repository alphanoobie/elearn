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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Register() {\n    var handleSubmit = function(e) {\n    //\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Register\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                        name: \"basic\",\n                        initialValues: {\n                            remember: true\n                        },\n                        labelCol: {\n                            span: 6\n                        },\n                        labelWrap: true,\n                        labelAlign: \"left\",\n                        onFinish: handleSubmit(),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Item, {\n                                label: \"Email\",\n                                name: \"Email\",\n                                rules: [\n                                    {\n                                        required: true,\n                                        message: \"Please input your email!\"\n                                    }\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                    ref: emailRef\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Item, {\n                                label: \"Password\",\n                                name: \"password\",\n                                rules: [\n                                    {\n                                        required: true,\n                                        message: \"Please input your password!\"\n                                    }\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input.Password, {\n                                    ref: passwordRef\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Item, {\n                                label: \"Confirm Password\",\n                                name: \"confirmpassword\",\n                                rules: [\n                                    {\n                                        required: true,\n                                        message: \"Please input your password!\"\n                                    }\n                                ],\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input.Password, {\n                                    ref: passwordConfirmRef\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 36,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Item, {\n                                wrapperCol: {\n                                    offset: 8,\n                                    span: 16\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                    type: \"primary\",\n                                    htmlType: \"submit\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                        lineNumber: 13,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Programming\\\\elearn\\\\client\\\\pages\\\\register.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Register;\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWdpc3Rlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXlCO0FBRVYsU0FBU0MsUUFBUSxHQUFHO0lBQy9CLElBQU1DLFlBQVksR0FBRyxTQUFDQyxDQUFDLEVBQUs7SUFDeEIsRUFBRTtLQUNMO0lBRUQscUJBQ0k7OzBCQUNJLDhEQUFDQyxJQUFFOzBCQUFDLFVBQVE7Ozs7O29CQUFLOzBCQUNqQiw4REFBQ0MsS0FBRzswQkFDQSw0RUFBQ0MsSUFBSTs4QkFDRCw0RUFBQ0MsSUFBSTt3QkFDREMsSUFBSSxFQUFDLE9BQU87d0JBQ1pDLGFBQWEsRUFBRTs0QkFBRUMsUUFBUSxFQUFFLElBQUk7eUJBQUU7d0JBQ2pDQyxRQUFRLEVBQUU7NEJBQUVDLElBQUksRUFBRSxDQUFDO3lCQUFFO3dCQUNyQkMsU0FBUzt3QkFDVEMsVUFBVSxFQUFDLE1BQU07d0JBQ2pCQyxRQUFRLEVBQUViLFlBQVksRUFBRTs7MENBRXhCLDhEQUFDSyxJQUFJLENBQUNTLElBQUk7Z0NBQ05DLEtBQUssRUFBQyxPQUFPO2dDQUNiVCxJQUFJLEVBQUMsT0FBTztnQ0FDWlUsS0FBSyxFQUFFO29DQUFDO3dDQUFFQyxRQUFRLEVBQUUsSUFBSTt3Q0FBRUMsT0FBTyxFQUFFLDBCQUEwQjtxQ0FBRTtpQ0FBQzswQ0FFaEUsNEVBQUNDLEtBQUs7b0NBQUNDLEdBQUcsRUFBRUMsUUFBUTs7Ozs7d0NBQUk7Ozs7O29DQUNoQjswQ0FFWiw4REFBQ2hCLElBQUksQ0FBQ1MsSUFBSTtnQ0FDTkMsS0FBSyxFQUFDLFVBQVU7Z0NBQ2hCVCxJQUFJLEVBQUMsVUFBVTtnQ0FDZlUsS0FBSyxFQUFFO29DQUFDO3dDQUFFQyxRQUFRLEVBQUUsSUFBSTt3Q0FBRUMsT0FBTyxFQUFFLDZCQUE2QjtxQ0FBRTtpQ0FBQzswQ0FFbkUsNEVBQUNDLEtBQUssQ0FBQ0csUUFBUTtvQ0FBQ0YsR0FBRyxFQUFFRyxXQUFXOzs7Ozt3Q0FBSTs7Ozs7b0NBQzVCOzBDQUNaLDhEQUFDbEIsSUFBSSxDQUFDUyxJQUFJO2dDQUNOQyxLQUFLLEVBQUMsa0JBQWtCO2dDQUN4QlQsSUFBSSxFQUFDLGlCQUFpQjtnQ0FDdEJVLEtBQUssRUFBRTtvQ0FBQzt3Q0FBRUMsUUFBUSxFQUFFLElBQUk7d0NBQUVDLE9BQU8sRUFBRSw2QkFBNkI7cUNBQUU7aUNBQUM7MENBRW5FLDRFQUFDQyxLQUFLLENBQUNHLFFBQVE7b0NBQUNGLEdBQUcsRUFBRUksa0JBQWtCOzs7Ozt3Q0FBSTs7Ozs7b0NBQ25DOzBDQUVaLDhEQUFDbkIsSUFBSSxDQUFDUyxJQUFJO2dDQUFDVyxVQUFVLEVBQUU7b0NBQUVDLE1BQU0sRUFBRSxDQUFDO29DQUFFaEIsSUFBSSxFQUFFLEVBQUU7aUNBQUU7MENBQzFDLDRFQUFDaUIsTUFBTTtvQ0FBQ0MsSUFBSSxFQUFDLFNBQVM7b0NBQUNDLFFBQVEsRUFBQyxRQUFROzhDQUFDLFFBRXpDOzs7Ozt3Q0FBUzs7Ozs7b0NBQ0Q7Ozs7Ozs0QkFDVDs7Ozs7d0JBQ0o7Ozs7O29CQUNMOztvQkFDUCxDQUNOO0NBQ0o7QUFuRHVCOUIsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz9hMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxPlJlZ2lzdGVyPC9oMT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgcmVtZW1iZXI6IHRydWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFdyYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxBbGlnbj0nbGVmdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25GaW5pc2g9e2hhbmRsZVN1Ym1pdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiRW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgZW1haWwhJyB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHJlZj17ZW1haWxSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIGlucHV0IHlvdXIgcGFzc3dvcmQhJyB9XX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0LlBhc3N3b3JkIHJlZj17cGFzc3dvcmRSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnIH1dfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQuUGFzc3dvcmQgcmVmPXtwYXNzd29yZENvbmZpcm1SZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbSB3cmFwcGVyQ29sPXt7IG9mZnNldDogOCwgc3BhbjogMTYgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiUmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlIiwiaDEiLCJkaXYiLCJDYXJkIiwiRm9ybSIsIm5hbWUiLCJpbml0aWFsVmFsdWVzIiwicmVtZW1iZXIiLCJsYWJlbENvbCIsInNwYW4iLCJsYWJlbFdyYXAiLCJsYWJlbEFsaWduIiwib25GaW5pc2giLCJJdGVtIiwibGFiZWwiLCJydWxlcyIsInJlcXVpcmVkIiwibWVzc2FnZSIsIklucHV0IiwicmVmIiwiZW1haWxSZWYiLCJQYXNzd29yZCIsInBhc3N3b3JkUmVmIiwicGFzc3dvcmRDb25maXJtUmVmIiwid3JhcHBlckNvbCIsIm9mZnNldCIsIkJ1dHRvbiIsInR5cGUiLCJodG1sVHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});