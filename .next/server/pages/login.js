"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"provider\": () => (/* binding */ provider),\n/* harmony export */   \"auth\": () => (/* binding */ auth)\n/* harmony export */ });\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_0__, firebase_app__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n// Import the functions you need from the SDKs you need\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyA0r7q7TMn72SU-fIYv3uLfvh6AnBxtxy8\",\n    authDomain: \"uber-next-clone-57310.firebaseapp.com\",\n    projectId: \"uber-next-clone-57310\",\n    storageBucket: \"uber-next-clone-57310.appspot.com\",\n    messagingSenderId: \"327610492267\",\n    appId: \"1:327610492267:web:e5da1d721621a42523d82e\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_1__.initializeApp)(firebaseConfig);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider();\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyRDtBQUUzRCxFQUF1RDtBQUNYO0FBQzVDLEVBQTREO0FBQzVELEVBQWlFO0FBRWpFLEVBQXdDO0FBQ3hDLEtBQUssQ0FBQ0csY0FBYyxHQUFHLENBQUM7SUFDdEJDLE1BQU0sRUFBRSxDQUF5QztJQUNqREMsVUFBVSxFQUFFLENBQXVDO0lBQ25EQyxTQUFTLEVBQUUsQ0FBdUI7SUFDbENDLGFBQWEsRUFBRSxDQUFtQztJQUNsREMsaUJBQWlCLEVBQUUsQ0FBYztJQUNqQ0MsS0FBSyxFQUFFLENBQTJDO0FBQ3BELENBQUM7QUFFRCxFQUFzQjtBQUV0QixLQUFLLENBQUNDLEdBQUcsR0FBR1IsMkRBQWEsQ0FBQ0MsY0FBYztBQUN4QyxLQUFLLENBQUNRLFFBQVEsR0FBRyxHQUFHLENBQUNYLDZEQUFrQjtBQUN2QyxLQUFLLENBQUNZLElBQUksR0FBR1gsc0RBQU87QUFFVyIsInNvdXJjZXMiOlsid2VicGFjazovL3ViZXItbmV4dC1jbG9uZS8uL2ZpcmViYXNlLmpzPzRkOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29vZ2xlQXV0aFByb3ZpZGVyLCBnZXRBdXRoIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuXHJcbi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXHJcbi8vIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3dlYi9zZXR1cCNhdmFpbGFibGUtbGlicmFyaWVzXHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lBMHI3cTdUTW43MlNVLWZJWXYzdUxmdmg2QW5CeHR4eThcIixcclxuICBhdXRoRG9tYWluOiBcInViZXItbmV4dC1jbG9uZS01NzMxMC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwidWJlci1uZXh0LWNsb25lLTU3MzEwXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ1YmVyLW5leHQtY2xvbmUtNTczMTAuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCIzMjc2MTA0OTIyNjdcIixcclxuICBhcHBJZDogXCIxOjMyNzYxMDQ5MjI2Nzp3ZWI6ZTVkYTFkNzIxNjIxYTQyNTIzZDgyZVwiLFxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5cclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5jb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xyXG5cclxuZXhwb3J0IHsgYXBwLCBwcm92aWRlciwgYXV0aCB9O1xyXG4iXSwibmFtZXMiOlsiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZ2V0QXV0aCIsImluaXRpYWxpemVBcHAiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsInByb3ZpZGVyIiwiYXV0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwind-styled-components */ \"tailwind-styled-components\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__]);\n([_firebase__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst Login = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.onAuthStateChanged)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, (user)=>{\n            if (user) {\n                router.push(\"/\");\n            }\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {\n        __source: {\n            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n            lineNumber: 20,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UberLogo, {\n                src: \"https://i.ibb.co/n6LWQM4/Post.png\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TopSection, {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Title, {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n                            lineNumber: 23,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"Log in to access yor account\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HeadImage, {\n                        src: \"https://i.ibb.co/CsV9RYZ/login-image.png\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        },\n                        __self: undefined\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SignInButton, {\n                        onClick: ()=>(0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, _firebase__WEBPACK_IMPORTED_MODULE_5__.provider)\n                        ,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Desktop\\\\Development Folder\\\\uber-next-clone\\\\pages\\\\login.js\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: undefined,\n                        children: \"Sign in with Google\"\n                    })\n                ]\n            })\n        ]\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\nconst Wrapper = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\nflex flex-col h-screen w-screen bg-gray-200 p-4 items-center     \n`;\nconst UberLogo = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().img)`\nh-8 object-contain self-start\n`;\nconst TopSection = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\nflex  flex-col flex-grow\n`;\nconst Title = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\ntext-5xl pt-4 text-gray-500\n`;\nconst HeadImage = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().img)`\nobejct-contain w-1/2 h-2/3\n`;\nconst SignInButton = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().button)`\nbg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer\n`;\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDSjtBQUNJO0FBQ0k7QUFDSDtBQUNlO0FBRTNELEtBQUssQ0FBQ1MsS0FBSyxPQUFTLENBQUM7SUFDbkIsS0FBSyxDQUFDQyxNQUFNLEdBQUdSLHNEQUFTO0lBRXhCRCxnREFBUyxLQUFPLENBQUM7UUFDZk8saUVBQWtCLENBQUNILDJDQUFJLEdBQUdNLElBQUksR0FBSyxDQUFDO1lBQ2xDLEVBQUUsRUFBRUEsSUFBSSxFQUFFLENBQUM7Z0JBQ1RELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQUc7WUFDakIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSx1RUFDSEMsT0FBTzs7Ozs7Ozs7aUZBQ0xDLFFBQVE7Z0JBQUNDLEdBQUcsRUFBQyxDQUFtQzs7Ozs7Ozs7a0ZBQ2hEQyxVQUFVOzs7Ozs7Ozt5RkFDUkMsS0FBSzs7Ozs7OztrQ0FBQyxDQUE0Qjs7eUZBQ2xDQyxTQUFTO3dCQUFDSCxHQUFHLEVBQUMsQ0FBMEM7Ozs7Ozs7O3lGQUN4REksWUFBWTt3QkFBQ0MsT0FBTyxNQUFRaEIsOERBQWUsQ0FBQ0MsMkNBQUksRUFBRUMsK0NBQVE7Ozs7Ozs7O2tDQUFHLENBRTlEOzs7Ozs7QUFJUixDQUFDO0FBRUQsaUVBQWVHLEtBQUssRUFBQztBQUVyQixLQUFLLENBQUNJLE9BQU8sR0FBR1YsdUVBQU0sQ0FBQztBQUl2QixLQUFLLENBQUNXLFFBQVEsR0FBR1gsRUFBRSxDQUFDbUIsR0FBRyxDQUFDLCtCQUV4QjtBQUVBO0FBSUEsS0FBSyxDQUFDTCxLQUFLLEdBQUdkLEVBQUUsQ0FBQ2tCLHVFQUFJO0FBR3JCLEtBQUssQ0FBQ0gsU0FBUyxHQUFHZixFQUFFLENBQUNtQixHQUFHLENBQUM7QUFHekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91YmVyLW5leHQtY2xvbmUvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0YWlsd2luZC1zdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgc2lnbkluV2l0aFBvcHVwIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGF1dGgsIHByb3ZpZGVyIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyBnZXRBdXRoLCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICA8VWJlckxvZ28gc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9uNkxXUU00L1Bvc3QucG5nXCIgLz5cbiAgICAgIDxUb3BTZWN0aW9uPlxuICAgICAgICA8VGl0bGU+TG9nIGluIHRvIGFjY2VzcyB5b3IgYWNjb3VudDwvVGl0bGU+XG4gICAgICAgIDxIZWFkSW1hZ2Ugc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9Dc1Y5UllaL2xvZ2luLWltYWdlLnBuZ1wiIC8+XG4gICAgICAgIDxTaWduSW5CdXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluV2l0aFBvcHVwKGF1dGgsIHByb3ZpZGVyKX0+XG4gICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxuICAgICAgICA8L1NpZ25JbkJ1dHRvbj5cbiAgICAgIDwvVG9wU2VjdGlvbj5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcblxuY29uc3QgV3JhcHBlciA9IHR3LmRpdmBcbmZsZXggZmxleC1jb2wgaC1zY3JlZW4gdy1zY3JlZW4gYmctZ3JheS0yMDAgcC00IGl0ZW1zLWNlbnRlciAgICAgXG5gO1xuXG5jb25zdCBVYmVyTG9nbyA9IHR3LmltZ2BcbmgtOCBvYmplY3QtY29udGFpbiBzZWxmLXN0YXJ0XG5gO1xuXG5jb25zdCBUb3BTZWN0aW9uID0gdHcuZGl2YFxuZmxleCAgZmxleC1jb2wgZmxleC1ncm93XG5gO1xuXG5jb25zdCBUaXRsZSA9IHR3LmRpdmBcbnRleHQtNXhsIHB0LTQgdGV4dC1ncmF5LTUwMFxuYDtcbmNvbnN0IEhlYWRJbWFnZSA9IHR3LmltZ2Bcbm9iZWpjdC1jb250YWluIHctMS8yIGgtMi8zXG5gO1xuY29uc3QgU2lnbkluQnV0dG9uID0gdHcuYnV0dG9uYFxuYmctYmxhY2sgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBweS00IG10LTggc2VsZi1jZW50ZXIgdy1mdWxsIGN1cnNvci1wb2ludGVyXG5gO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwidHciLCJzaWduSW5XaXRoUG9wdXAiLCJhdXRoIiwicHJvdmlkZXIiLCJnZXRBdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiTG9naW4iLCJyb3V0ZXIiLCJ1c2VyIiwicHVzaCIsIldyYXBwZXIiLCJVYmVyTG9nbyIsInNyYyIsIlRvcFNlY3Rpb24iLCJUaXRsZSIsIkhlYWRJbWFnZSIsIlNpZ25JbkJ1dHRvbiIsIm9uQ2xpY2siLCJkaXYiLCJpbWciLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "tailwind-styled-components":
/*!*********************************************!*\
  !*** external "tailwind-styled-components" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("tailwind-styled-components");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.js"));
module.exports = __webpack_exports__;

})();