/*! For license information please see src_Pages_Shop_ShopLoginPage_jsx.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([["src_Pages_Shop_ShopLoginPage_jsx"],{"./src/Pages/Shop/ShopLoginPage.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");\n/* harmony import */ var _components_ShopComponents_Auth_ShopLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ShopComponents/Auth/ShopLogin */ "./src/components/ShopComponents/Auth/ShopLogin.jsx");\n/* harmony import */ var _hooks_Site_config_usePageSEOHandle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/Site-config/usePageSEOHandle */ "./src/hooks/Site-config/usePageSEOHandle.js");\n/* harmony import */ var _components_SEOHelmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SEOHelmet */ "./src/components/SEOHelmet.jsx");\n\n\n\n\n\n\nconst ShopLoginPage = () => {\n  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();\n  const {\n    isSeller,\n    isLoading\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.seller);\n  const [seoDetails, setSEODetails] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  (0,_hooks_Site_config_usePageSEOHandle__WEBPACK_IMPORTED_MODULE_3__["default"])({\n    pageName: "shop-loginSEO",\n    setState: setSEODetails\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (isSeller === true) {\n      navigate("/dashboard");\n    }\n  }, [isLoading, isSeller, navigate]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEOHelmet__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    seoDetails: seoDetails\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ShopComponents_Auth_ShopLogin__WEBPACK_IMPORTED_MODULE_2__["default"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopLoginPage);\n\n//# sourceURL=webpack://ecom/./src/Pages/Shop/ShopLoginPage.jsx?')},"./src/components/SEOHelmet.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.esm.js");\n\n\nconst SEOHelmet = _ref => {\n  let {\n    seoDetails\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, seoDetails === null || seoDetails === void 0 ? void 0 : seoDetails.metaTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta", {\n    name: "description",\n    content: seoDetails === null || seoDetails === void 0 ? void 0 : seoDetails.metaDescription,\n    "data-rh": "true"\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEOHelmet);\n\n//# sourceURL=webpack://ecom/./src/components/SEOHelmet.jsx?')},"./src/components/ShopComponents/Auth/ShopLogin.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.mjs");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../server */ "./src/server.js");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");\n\n\n\n\n\n\nconst ShopLogin = () => {\n  const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();\n  const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");\n  const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const handleSubmit = async e => {\n    e.preventDefault();\n    await axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("".concat(_server__WEBPACK_IMPORTED_MODULE_1__.server, "/shop/login-shop"), {\n      email,\n      password\n    }, {\n      withCredentials: true\n    }).then(res => {\n      react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].success("Login Success!");\n      navigate("/dashboard");\n      window.location.reload(true);\n    }).catch(err => {\n      react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error(err.response.data.message);\n    });\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "sm:mx-auto sm:w-full sm:max-w-md"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {\n    className: "mt-6 text-center text-3xl font-extrabold text-gray-900"\n  }, "Login to your shop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {\n    className: "space-y-6",\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {\n    htmlFor: "email",\n    className: "block text-sm font-medium text-gray-700"\n  }, "Email address ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-red-500"\n  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "mt-1"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "email",\n    name: "email",\n    autoComplete: "email",\n    required: true,\n    value: email,\n    onChange: e => setEmail(e.target.value),\n    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {\n    htmlFor: "password",\n    className: "block text-sm font-medium text-gray-700"\n  }, "Password ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-red-500"\n  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "mt-1 relative"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: visible ? "text" : "password",\n    name: "password",\n    autoComplete: "current-password",\n    required: true,\n    value: password,\n    onChange: e => setPassword(e.target.value),\n    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"\n  }), visible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineEye, {\n    className: "absolute right-2 top-2 cursor-pointer",\n    size: 25,\n    onClick: () => setVisible(false)\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineEyeInvisible, {\n    className: "absolute right-2 top-2 cursor-pointer",\n    size: 25,\n    onClick: () => setVisible(true)\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    type: "submit",\n    className: "group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"\n  }, "Submit"))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopLogin);\n\n//# sourceURL=webpack://ecom/./src/components/ShopComponents/Auth/ShopLogin.jsx?')},"./src/hooks/Site-config/usePageSEOHandle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_StyleConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/StyleConfig */ "./src/utils/StyleConfig.js");\n\n\nconst usePageSEOHandle = _ref => {\n  let {\n    pageName,\n    setState,\n    setLoading\n  } = _ref;\n  const styles = (0,_utils_StyleConfig__WEBPACK_IMPORTED_MODULE_1__.StyleConfig)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (setLoading) {\n      setLoading(false);\n    }\n    if (styles !== null && styles !== void 0 && styles.allPagesSEODetails) {\n      var _styles$allPagesSEODe, _styles$allPagesSEODe2;\n      setState({\n        metaTitle: styles === null || styles === void 0 || (_styles$allPagesSEODe = styles.allPagesSEODetails) === null || _styles$allPagesSEODe === void 0 || (_styles$allPagesSEODe = _styles$allPagesSEODe[pageName]) === null || _styles$allPagesSEODe === void 0 ? void 0 : _styles$allPagesSEODe.metaTitle,\n        metaDescription: styles === null || styles === void 0 || (_styles$allPagesSEODe2 = styles.allPagesSEODetails) === null || _styles$allPagesSEODe2 === void 0 || (_styles$allPagesSEODe2 = _styles$allPagesSEODe2[pageName]) === null || _styles$allPagesSEODe2 === void 0 ? void 0 : _styles$allPagesSEODe2.metaDescription\n      });\n    } else {\n      setState({\n        metaTitle: \'Airbee Technologies\',\n        metaDescription: \'Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth.\'\n      });\n    }\n  }, [pageName, setLoading, setState, styles === null || styles === void 0 ? void 0 : styles.allPagesSEODetails]);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePageSEOHandle);\n\n//# sourceURL=webpack://ecom/./src/hooks/Site-config/usePageSEOHandle.js?')}}]);