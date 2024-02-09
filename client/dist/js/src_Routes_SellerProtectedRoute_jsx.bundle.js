/*! For license information please see src_Routes_SellerProtectedRoute_jsx.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([["src_Routes_SellerProtectedRoute_jsx"],{"./src/Routes/SellerProtectedRoute.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");\n/* harmony import */ var _utils_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Loader */ "./src/utils/Loader.jsx");\n\n\n\nconst SellerProtectedRoute = _ref => {\n  let {\n    children\n  } = _ref;\n  const {\n    isLoading,\n    isSeller\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.seller);\n  if (isLoading === true) {\n    return /*#__PURE__*/React.createElement(_utils_Loader__WEBPACK_IMPORTED_MODULE_1__["default"], null);\n  } else {\n    if (!isSeller) {\n      return /*#__PURE__*/React.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Navigate, {\n        to: "/shop-login",\n        replace: true\n      });\n    }\n    return children;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SellerProtectedRoute);\n\n//# sourceURL=webpack://ecom/./src/Routes/SellerProtectedRoute.jsx?')}}]);