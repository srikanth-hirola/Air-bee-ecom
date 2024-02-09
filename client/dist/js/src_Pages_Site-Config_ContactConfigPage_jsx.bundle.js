/*! For license information please see src_Pages_Site-Config_ContactConfigPage_jsx.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([["src_Pages_Site-Config_ContactConfigPage_jsx"],{"./src/Pages/Site-Config/ContactConfigPage.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Headers_DashboardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Headers/DashboardHeader */ "./src/components/Headers/DashboardHeader.jsx");\n/* harmony import */ var _components_ShopComponents_Layout_DashboardSideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ShopComponents/Layout/DashboardSideBar */ "./src/components/ShopComponents/Layout/DashboardSideBar.jsx");\n/* harmony import */ var _components_DronesHomepage_DronesFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/DronesHomepage/DronesFooter */ "./src/components/DronesHomepage/DronesFooter.jsx");\n/* harmony import */ var _components_ShopComponents_SiteConfig_Contact_ContactConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ShopComponents/SiteConfig/Contact/ContactConfig */ "./src/components/ShopComponents/SiteConfig/Contact/ContactConfig.jsx");\n\n\n\n\n\nconst ContactConfigPage = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Headers_DashboardHeader__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex items-start justify-between w-full dasboard-user-width-mobile"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "800px:w-[330px]"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ShopComponents_Layout_DashboardSideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    active: 31\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ShopComponents_SiteConfig_Contact_ContactConfig__WEBPACK_IMPORTED_MODULE_4__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DronesHomepage_DronesFooter__WEBPACK_IMPORTED_MODULE_3__["default"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactConfigPage);\n\n//# sourceURL=webpack://ecom/./src/Pages/Site-Config/ContactConfigPage.jsx?')},"./src/components/ShopComponents/SiteConfig/Contact/ContactConfig.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_StyleConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/StyleConfig */ "./src/utils/StyleConfig.js");\n/* harmony import */ var _hooks_useSaveLayoutContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useSaveLayoutContent */ "./src/hooks/useSaveLayoutContent.js");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");\n/* harmony import */ var _ContactContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContactContent */ "./src/components/ShopComponents/SiteConfig/Contact/ContactContent.jsx");\n\n\n\n\n\nconst ContactConfig = () => {\n  const styles = (0,_utils_StyleConfig__WEBPACK_IMPORTED_MODULE_1__.StyleConfig)();\n  const [logoLoading, setLogoLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    saveLayoutContent\n  } = (0,_hooks_useSaveLayoutContent__WEBPACK_IMPORTED_MODULE_2__["default"])();\n  const [contactUs, setContactUs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    address: \'\',\n    phone: \'\',\n    timings: \'\',\n    email: \'\'\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setContactUs(styles === null || styles === void 0 ? void 0 : styles.contactUsDetails);\n  }, [styles === null || styles === void 0 ? void 0 : styles.contactUsDetails]);\n  const handleChange = e => {\n    const {\n      name,\n      value\n    } = e.target;\n    let updatedState = JSON.parse(JSON.stringify(contactUs));\n    updatedState[name] = value;\n    setContactUs(updatedState);\n  };\n  const handleSubmit = e => {\n    e.preventDefault();\n    if (!contactUs.address || !contactUs.phone || !contactUs.timings || !contactUs.email) {\n      react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("All Contact Us Field are required");\n    } else {\n      saveLayoutContent(contactUs, "contactUsDetails", setLogoLoading);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-full min-h-[45vh] pt-5 rounded flex justify-center outer1-div"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-[97%] flex justify-center border-1 rounded h-fit mx-auto mb-3"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-full px-8 py-4 "\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {\n    className: "mb-2"\n  }, "Enter Contact Us Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "my-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("lable", {\n    className: "font-semibold"\n  }, "Address ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-red-500"\n  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "text",\n    name: "address",\n    className: "border-1 rounded px-2 py-2 mt-2",\n    value: contactUs === null || contactUs === void 0 ? void 0 : contactUs.address,\n    onChange: handleChange,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "my-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("lable", {\n    className: "font-semibold"\n  }, "Phone ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-red-500"\n  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "text",\n    name: "phone",\n    className: "border-1 rounded px-2 py-2 mt-2",\n    value: contactUs === null || contactUs === void 0 ? void 0 : contactUs.phone,\n    onChange: handleChange,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "my-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("lable", {\n    className: "font-semibold"\n  }, "Timings ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-red-500"\n  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "text",\n    name: "timings",\n    className: "border-1 rounded px-2 py-2 mt-2",\n    value: contactUs === null || contactUs === void 0 ? void 0 : contactUs.timings,\n    onChange: handleChange,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "my-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("lable", {\n    className: "font-semibold"\n  }, "Email ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-red-500"\n  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "email",\n    name: "email",\n    className: "border-1 rounded px-2 py-2 mt-2",\n    value: contactUs === null || contactUs === void 0 ? void 0 : contactUs.email,\n    onChange: handleChange,\n    required: true\n  })), logoLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "w-[250px] h-[40px] rounded bg-green-500 text-white"\n  }, "Loading...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "w-[250px] h-[40px] rounded bg-green-500 text-white",\n    onClick: handleSubmit\n  }, "Update Contact Info"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ContactContent__WEBPACK_IMPORTED_MODULE_4__["default"], null)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactConfig);\n\n//# sourceURL=webpack://ecom/./src/components/ShopComponents/SiteConfig/Contact/ContactConfig.jsx?')},"./src/components/ShopComponents/SiteConfig/Contact/ContactContent.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _redux_actions_siteConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../redux/actions/siteConfig */ "./src/redux/actions/siteConfig.js");\n/* harmony import */ var _hooks_Site_config_usehandleChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/Site-config/usehandleChange */ "./src/hooks/Site-config/usehandleChange.jsx");\n/* harmony import */ var _hooks_useSaveLayoutContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useSaveLayoutContent */ "./src/hooks/useSaveLayoutContent.js");\n/* harmony import */ var _utils_StyleConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/StyleConfig */ "./src/utils/StyleConfig.js");\n\n\n\n\n\n\n\nconst ContactContent = () => {\n  const [logoLoading, setLogoLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const {\n    success,\n    error\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.siteConfig);\n  const {\n    handleChange\n  } = _hooks_Site_config_usehandleChange__WEBPACK_IMPORTED_MODULE_4__["default"];\n  const {\n    hanldeSubmit\n  } = (0,_hooks_useSaveLayoutContent__WEBPACK_IMPORTED_MODULE_5__["default"])();\n  const styles = (0,_utils_StyleConfig__WEBPACK_IMPORTED_MODULE_6__.StyleConfig)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setContactSecOne(styles === null || styles === void 0 ? void 0 : styles.contactSecOne);\n  }, [styles === null || styles === void 0 ? void 0 : styles.contactSecOne]);\n  const [contactSecOne, setContactSecOne] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (success) {\n      react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success("Site Configuration Updated Successfully");\n    }\n    if (error) {\n      react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].error(error.response.data.message);\n    }\n    dispatch((0,_redux_actions_siteConfig__WEBPACK_IMPORTED_MODULE_3__.getAllSiteConfig)());\n  }, [success, error, dispatch]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-[90%] mx-auto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "my-10"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h5", {\n    className: "font-semibold"\n  }, "Form Section"), logoLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "bg-green-500 text-white rounded w-[200px]"\n  }, logoLoading ? "Loading..." : "Update") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "bg-green-500 text-white rounded w-[200px]",\n    onClick: e => hanldeSubmit(e, contactSecOne, "contactSecOne", setLogoLoading)\n  }, logoLoading ? "Loading..." : "Update")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "pb-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "my-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("lable", {\n    className: "font-semibold"\n  }, "Title ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-red-500"\n  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "text",\n    name: "title",\n    className: "border-1 rounded px-2 py-2 mt-2",\n    value: contactSecOne === null || contactSecOne === void 0 ? void 0 : contactSecOne.title,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "my-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("lable", {\n    className: "font-semibold"\n  }, "Summary ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-red-500"\n  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "text",\n    name: "summary",\n    className: "border-1 rounded px-2 py-2 mt-2",\n    value: contactSecOne === null || contactSecOne === void 0 ? void 0 : contactSecOne.summary,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "my-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("lable", {\n    className: "font-semibold"\n  }, "Button Title ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-red-500"\n  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "text",\n    name: "btnTitle",\n    className: "border-1 rounded px-2 py-2 mt-2",\n    value: contactSecOne === null || contactSecOne === void 0 ? void 0 : contactSecOne.btnTitle,\n    onChange: handleChange,\n    required: true\n  })))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactContent);\n\n//# sourceURL=webpack://ecom/./src/components/ShopComponents/SiteConfig/Contact/ContactContent.jsx?')},"./src/hooks/Site-config/usehandleChange.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst useHandleChange = () => {\n  const handleChange = _ref => {\n    let {\n      value,\n      key,\n      index,\n      myState,\n      setMyState,\n      arrObj\n    } = _ref;\n    // Clone the current state to avoid mutating it directly\n    const newState = JSON.parse(JSON.stringify(myState));\n    if (typeof index !== 'undefined') {\n      newState[key][index][arrObj] = value;\n    } else {\n      // If it's a nested object\n      if (key.includes('.')) {\n        const keys = key.split('.');\n        let nestedObject = newState;\n        for (let i = 0; i < keys.length - 1; i++) {\n          nestedObject = nestedObject[keys[i]];\n        }\n        nestedObject[keys[keys.length - 1]] = value;\n      } else {\n        // If it's a simple property\n        newState[key] = value;\n      }\n    }\n\n    // Update the state\n    setMyState(newState);\n  };\n  const handleAddToArray = _ref2 => {\n    let {\n      structure,\n      state,\n      setState,\n      key\n    } = _ref2;\n    const updatedState = JSON.parse(JSON.stringify(state));\n    if (key) {\n      updatedState[key].push(structure);\n    } else {\n      updatedState.push(structure);\n    }\n    setState(updatedState);\n  };\n  const handleRemoveFromArray = _ref3 => {\n    let {\n      index,\n      state,\n      setState,\n      key\n    } = _ref3;\n    const updatedState = JSON.parse(JSON.stringify(state));\n    if (key) {\n      updatedState[key].splice(index, 1);\n    } else {\n      updatedState.splice(index, 1);\n    }\n    setState(updatedState);\n  };\n  return {\n    handleChange,\n    handleAddToArray,\n    handleRemoveFromArray\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHandleChange);\n\n//# sourceURL=webpack://ecom/./src/hooks/Site-config/usehandleChange.jsx?")}}]);