"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/tailwind-styled-components.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex flex-col h-screen w-screen bg-gray-200 p-4\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\nh-8 object-contain self-start\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\nflex  flex-col flex-grow\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\ntext-5xl pt-4 text-gray-500\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\nobejct-contain w-full h-fll\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\nbg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Login = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, function(user) {\n            if (user) {\n                router.push(\"/\");\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UberLogo, {\n                src: \"https://i.ibb.co/n6LWQM4/Post.png\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TopSection, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Log in to access yor account\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeadImage, {\n                        src: \"https://i.ibb.co/CsV9RYZ/login-image.png\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SignInButton, {\n                        onClick: function() {\n                            return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, _firebase__WEBPACK_IMPORTED_MODULE_5__.provider);\n                        },\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Sign in with Google\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n_s(Login, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar Wrapper = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c1 = Wrapper;\nvar UberLogo = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img(_templateObject1());\n_c2 = UberLogo;\nvar TopSection = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c3 = TopSection;\nvar Title = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c4 = Title;\nvar HeadImage = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img(_templateObject4());\n_c5 = HeadImage;\nvar SignInButton = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject5());\n_c6 = SignInButton;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"Login\");\n$RefreshReg$(_c1, \"Wrapper\");\n$RefreshReg$(_c2, \"UberLogo\");\n$RefreshReg$(_c3, \"TopSection\");\n$RefreshReg$(_c4, \"Title\");\n$RefreshReg$(_c5, \"HeadImage\");\n$RefreshReg$(_c6, \"SignInButton\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkM7QUFDSjtBQUNJO0FBQ0k7QUFDSDtBQUNlOzs7Ozs7Ozs7Ozs7OztRQTZCcEMsQ0FFdkI7Ozs7Ozs7OztRQUV3QixDQUV4Qjs7Ozs7Ozs7O1FBRTBCLENBRTFCOzs7Ozs7Ozs7UUFFcUIsQ0FFckI7Ozs7Ozs7OztRQUN5QixDQUV6Qjs7Ozs7Ozs7O1FBQytCLENBRS9COzs7Ozs7OztBQS9DQSxHQUFLLENBQUNTLEtBQUssR0FBRyxRQUNkLEdBRG9CLENBQUM7O0lBQ25CLEdBQUssQ0FBQ0MsTUFBTSxHQUFHUixzREFBUztJQUV4QkQsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZk8saUVBQWtCLENBQUNILDJDQUFJLEVBQUUsUUFBUSxDQUFQTSxJQUFJLEVBQUssQ0FBQztZQUNsQyxFQUFFLEVBQUVBLElBQUksRUFBRSxDQUFDO2dCQUNURCxNQUFNLENBQUNFLElBQUksQ0FBQyxDQUFHO1lBQ2pCLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sdUVBQ0hDLE9BQU87Ozs7Ozs7O2lGQUNMQyxRQUFRO2dCQUFDQyxHQUFHLEVBQUMsQ0FBbUM7Ozs7Ozs7O2tGQUNoREMsVUFBVTs7Ozs7Ozs7eUZBQ1JDLEtBQUs7Ozs7Ozs7a0NBQUMsQ0FBNEI7O3lGQUNsQ0MsU0FBUzt3QkFBQ0gsR0FBRyxFQUFDLENBQTBDOzs7Ozs7Ozt5RkFDeERJLFlBQVk7d0JBQUNDLE9BQU8sRUFBRSxRQUFROzRCQUFGaEIsTUFBTSxDQUFOQSw4REFBZSxDQUFDQywyQ0FBSSxFQUFFQywrQ0FBUTs7Ozs7Ozs7a0NBQUcsQ0FFOUQ7Ozs7OztBQUlSLENBQUM7R0F2QktHLEtBQUs7O1FBQ01QLGtEQUFTOzs7S0FEcEJPLEtBQUs7QUF5QlgsK0RBQWVBLEtBQUssRUFBQztBQUVyQixHQUFLLENBQUNJLE9BQU8sR0FBR1Ysc0VBQU07TUFBaEJVLE9BQU87QUFJYixHQUFLLENBQUNDLFFBQVEsR0FBR1gsc0VBQU07TUFBakJXLFFBQVE7QUFJZCxHQUFLLENBQUNFLFVBQVUsR0FBR2Isc0VBQU07TUFBbkJhLFVBQVU7QUFJaEIsR0FBSyxDQUFDQyxLQUFLLEdBQUdkLHNFQUFNO01BQWRjLEtBQUs7QUFHWCxHQUFLLENBQUNDLFNBQVMsR0FBR2Ysc0VBQU07TUFBbEJlLFNBQVM7QUFHZixHQUFLLENBQUNDLFlBQVksR0FBR2hCLHlFQUFTO01BQXhCZ0IsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0YWlsd2luZC1zdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgc2lnbkluV2l0aFBvcHVwIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGF1dGgsIHByb3ZpZGVyIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8VWJlckxvZ28gc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9uNkxXUU00L1Bvc3QucG5nXCIgLz5cbiAgICAgIDxUb3BTZWN0aW9uPlxuICAgICAgICA8VGl0bGU+TG9nIGluIHRvIGFjY2VzcyB5b3IgYWNjb3VudDwvVGl0bGU+XG4gICAgICAgIDxIZWFkSW1hZ2Ugc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9Dc1Y5UllaL2xvZ2luLWltYWdlLnBuZ1wiIC8+XG4gICAgICAgIDxTaWduSW5CdXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKX0+XG4gICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxuICAgICAgICA8L1NpZ25JbkJ1dHRvbj5cbiAgICAgIDwvVG9wU2VjdGlvbj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcblxuY29uc3QgV3JhcHBlciA9IHR3LmRpdmBcbmZsZXggZmxleC1jb2wgaC1zY3JlZW4gdy1zY3JlZW4gYmctZ3JheS0yMDAgcC00XG5gO1xuXG5jb25zdCBVYmVyTG9nbyA9IHR3LmltZ2BcbmgtOCBvYmplY3QtY29udGFpbiBzZWxmLXN0YXJ0XG5gO1xuXG5jb25zdCBUb3BTZWN0aW9uID0gdHcuZGl2YFxuZmxleCAgZmxleC1jb2wgZmxleC1ncm93XG5gO1xuXG5jb25zdCBUaXRsZSA9IHR3LmRpdmBcbnRleHQtNXhsIHB0LTQgdGV4dC1ncmF5LTUwMFxuYDtcbmNvbnN0IEhlYWRJbWFnZSA9IHR3LmltZ2Bcbm9iZWpjdC1jb250YWluIHctZnVsbCBoLWZsbFxuYDtcbmNvbnN0IFNpZ25JbkJ1dHRvbiA9IHR3LmJ1dHRvbmBcbmJnLWJsYWNrIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgcHktNCBtdC04IHNlbGYtY2VudGVyIHctZnVsbCBjdXJzb3ItcG9pbnRlclxuYDtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInR3Iiwic2lnbkluV2l0aFBvcHVwIiwiYXV0aCIsInByb3ZpZGVyIiwiZ2V0QXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsIkxvZ2luIiwicm91dGVyIiwidXNlciIsInB1c2giLCJXcmFwcGVyIiwiVWJlckxvZ28iLCJzcmMiLCJUb3BTZWN0aW9uIiwiVGl0bGUiLCJIZWFkSW1hZ2UiLCJTaWduSW5CdXR0b24iLCJvbkNsaWNrIiwiZGl2IiwiaW1nIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

});