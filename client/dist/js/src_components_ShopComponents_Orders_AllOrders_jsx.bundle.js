/*! For license information please see src_components_ShopComponents_Orders_AllOrders_jsx.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([["src_components_ShopComponents_Orders_AllOrders_jsx"],{"./src/components/ShopComponents/Orders/AllOrders.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.mjs\");\n/* harmony import */ var _utils_StyleConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/StyleConfig */ \"./src/utils/StyleConfig.js\");\n/* harmony import */ var _redux_actions_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/order */ \"./src/redux/actions/order.js\");\n/* harmony import */ var _utils_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/Loader */ \"./src/utils/Loader.jsx\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n/* harmony import */ var _hooks_Site_config_useGetCurrencyConversion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/Site-config/useGetCurrencyConversion */ \"./src/hooks/Site-config/useGetCurrencyConversion.js\");\n/* eslint-disable array-callback-return */\n\n\n\n\n\n\n\n\n\n\n\nconst AllOrders = _ref => {\n  let {\n    active\n  } = _ref;\n  const {\n    orders,\n    isLoading\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.order);\n  const {\n    seller\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.seller);\n  const {\n    ConvertCurrency\n  } = (0,_hooks_Site_config_useGetCurrencyConversion__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  const styles = (0,_utils_StyleConfig__WEBPACK_IMPORTED_MODULE_2__.StyleConfig)();\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dispatch((0,_redux_actions_order__WEBPACK_IMPORTED_MODULE_3__.getAllOrdersOfShop)(seller._id));\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [dispatch]);\n  const columns = [{\n    field: 'id',\n    headerName: 'Order ID',\n    minWidth: 150,\n    flex: 0.7\n  }, {\n    field: 'image',\n    flex: 1,\n    minWidth: 130,\n    headerName: 'Image',\n    type: 'number',\n    sortable: false,\n    renderCell: params => {\n      var _params$row;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n        src: params === null || params === void 0 || (_params$row = params.row) === null || _params$row === void 0 ? void 0 : _params$row.image,\n        alt: \"product\",\n        width: '100px',\n        height: '100px'\n      }));\n    }\n  }, {\n    field: 'status',\n    headerName: 'Status',\n    minWidth: 130,\n    flex: 0.7\n  }, {\n    field: 'itemsQty',\n    headerName: 'Items Qty',\n    type: 'number',\n    minWidth: 130,\n    flex: 0.7\n  }, {\n    field: 'total',\n    headerName: 'Total',\n    type: 'number',\n    minWidth: 130,\n    flex: 0.8\n  }, {\n    field: ' ',\n    flex: 1,\n    minWidth: 150,\n    headerName: '',\n    type: 'number',\n    sortable: false,\n    renderCell: params => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link, {\n        to: \"/order/\".concat(params.id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineArrowRight, {\n        size: 20\n      }))));\n    }\n  }];\n  const row1 = [];\n  const row2 = [];\n  const row3 = [];\n  const row4 = [];\n  const row5 = [];\n  orders && orders.forEach(item => {\n    var _found$, _styles$currency;\n    // eslint-disable-next-line array-callback-return\n    const found = item === null || item === void 0 ? void 0 : item.sellerCart.filter(val => {\n      if ((val === null || val === void 0 ? void 0 : val.sellerID) === seller._id) {\n        return val;\n      }\n    });\n    row1.push({\n      id: item._id,\n      image: (_found$ = found[0]) === null || _found$ === void 0 || (_found$ = _found$.products[0]) === null || _found$ === void 0 || (_found$ = _found$.selectedColor) === null || _found$ === void 0 || (_found$ = _found$.mainImage) === null || _found$ === void 0 ? void 0 : _found$.url,\n      itemsQty: item.cart.length,\n      total: \"\".concat(styles === null || styles === void 0 || (_styles$currency = styles.currency) === null || _styles$currency === void 0 ? void 0 : _styles$currency.Symbol) + ConvertCurrency(item.totalPrice),\n      status: item === null || item === void 0 ? void 0 : item.status\n    });\n  });\n  orders && orders.forEach(item => {\n    if ((item === null || item === void 0 ? void 0 : item.status) === 'Processing') {\n      var _found$2, _styles$currency2;\n      // eslint-disable-next-line array-callback-return\n      const found = item === null || item === void 0 ? void 0 : item.sellerCart.filter(val => {\n        if ((val === null || val === void 0 ? void 0 : val.sellerID) === seller._id) {\n          return val;\n        }\n      });\n      row2.push({\n        id: item._id,\n        image: (_found$2 = found[0]) === null || _found$2 === void 0 || (_found$2 = _found$2.products[0]) === null || _found$2 === void 0 || (_found$2 = _found$2.selectedColor) === null || _found$2 === void 0 || (_found$2 = _found$2.mainImage) === null || _found$2 === void 0 ? void 0 : _found$2.url,\n        itemsQty: item.cart.length,\n        total: \"\".concat(styles === null || styles === void 0 || (_styles$currency2 = styles.currency) === null || _styles$currency2 === void 0 ? void 0 : _styles$currency2.Symbol) + ConvertCurrency(item.totalPrice),\n        status: item === null || item === void 0 ? void 0 : item.status\n      });\n    }\n  });\n  orders && orders.forEach(item => {\n    if ((item === null || item === void 0 ? void 0 : item.status) === 'Transferred to delivery partner' || (item === null || item === void 0 ? void 0 : item.status) === 'Shipping' || (item === null || item === void 0 ? void 0 : item.status) === 'Received' || (item === null || item === void 0 ? void 0 : item.status) === 'On the way') {\n      var _found$3, _styles$currency3;\n      const found = item === null || item === void 0 ? void 0 : item.sellerCart.filter(val => {\n        if ((val === null || val === void 0 ? void 0 : val.sellerID) === seller._id) {\n          return val;\n        }\n      });\n      row3.push({\n        id: item._id,\n        image: (_found$3 = found[0]) === null || _found$3 === void 0 || (_found$3 = _found$3.products[0]) === null || _found$3 === void 0 || (_found$3 = _found$3.selectedColor) === null || _found$3 === void 0 || (_found$3 = _found$3.mainImage) === null || _found$3 === void 0 ? void 0 : _found$3.url,\n        itemsQty: item.cart.length,\n        total: \"\".concat(styles === null || styles === void 0 || (_styles$currency3 = styles.currency) === null || _styles$currency3 === void 0 ? void 0 : _styles$currency3.Symbol) + ConvertCurrency(item.totalPrice),\n        status: item === null || item === void 0 ? void 0 : item.status\n      });\n    }\n  });\n  orders && orders.forEach(item => {\n    if ((item === null || item === void 0 ? void 0 : item.status) === 'Delivered') {\n      var _found$4, _styles$currency4;\n      const found = item === null || item === void 0 ? void 0 : item.sellerCart.filter(val => {\n        if ((val === null || val === void 0 ? void 0 : val.sellerID) === seller._id) {\n          return val;\n        }\n      });\n      row4.push({\n        id: item._id,\n        image: (_found$4 = found[0]) === null || _found$4 === void 0 || (_found$4 = _found$4.products[0]) === null || _found$4 === void 0 || (_found$4 = _found$4.selectedColor) === null || _found$4 === void 0 || (_found$4 = _found$4.mainImage) === null || _found$4 === void 0 ? void 0 : _found$4.url,\n        itemsQty: item.cart.length,\n        total: \"\".concat(styles === null || styles === void 0 || (_styles$currency4 = styles.currency) === null || _styles$currency4 === void 0 ? void 0 : _styles$currency4.Symbol) + ConvertCurrency(item.totalPrice),\n        status: item === null || item === void 0 ? void 0 : item.status\n      });\n    }\n  });\n  orders && orders.forEach(item => {\n    var _item$sellerCart;\n    // eslint-disable-next-line array-callback-return\n    item === null || item === void 0 || (_item$sellerCart = item.sellerCart) === null || _item$sellerCart === void 0 || _item$sellerCart.map(val => {\n      if (val.status === 'Canceled') {\n        var _found$5, _styles$currency5;\n        const found = item === null || item === void 0 ? void 0 : item.sellerCart.filter(val => {\n          if ((val === null || val === void 0 ? void 0 : val.sellerID) === seller._id) {\n            return val;\n          }\n        });\n        row5.push({\n          id: item._id,\n          image: (_found$5 = found[0]) === null || _found$5 === void 0 || (_found$5 = _found$5.products[0]) === null || _found$5 === void 0 || (_found$5 = _found$5.selectedColor) === null || _found$5 === void 0 || (_found$5 = _found$5.mainImage) === null || _found$5 === void 0 ? void 0 : _found$5.url,\n          itemsQty: item.cart.length,\n          total: \"\".concat(styles === null || styles === void 0 || (_styles$currency5 = styles.currency) === null || _styles$currency5 === void 0 ? void 0 : _styles$currency5.Symbol) + ConvertCurrency(item.totalPrice),\n          status: item === null || item === void 0 ? void 0 : item.status\n        });\n      }\n    });\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Loader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w-full mx-8 pt-1 mt-10 bg-white outer1-div\"\n  }, active === 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_9__.DataGrid, {\n    rowHeight: 88,\n    rows: row1,\n    columns: columns,\n    pageSize: 10,\n    disableSelectionOnClick: true,\n    autoHeight: true\n  }), active === 2 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_9__.DataGrid, {\n    rowHeight: 88,\n    rows: row2,\n    columns: columns,\n    pageSize: 10,\n    disableSelectionOnClick: true,\n    autoHeight: true\n    // width={30}\n    // height={30}\n  }), active === 3 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_9__.DataGrid, {\n    rowHeight: 88,\n    rows: row3,\n    columns: columns,\n    pageSize: 10,\n    disableSelectionOnClick: true,\n    autoHeight: true\n  }), active === 4 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_9__.DataGrid, {\n    rowHeight: 88,\n    rows: row4,\n    columns: columns,\n    pageSize: 10,\n    disableSelectionOnClick: true,\n    autoHeight: true\n  }), active === 5 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_9__.DataGrid, {\n    rowHeight: 88,\n    rows: row5,\n    columns: columns,\n    pageSize: 10,\n    disableSelectionOnClick: true,\n    autoHeight: true\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllOrders);\n\n//# sourceURL=webpack://ecom/./src/components/ShopComponents/Orders/AllOrders.jsx?")},"./src/hooks/Site-config/useGetCurrencyConversion.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_StyleConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/StyleConfig */ "./src/utils/StyleConfig.js");\n\nconst useGetCurrencyConversion = () => {\n  const styles = (0,_utils_StyleConfig__WEBPACK_IMPORTED_MODULE_0__.StyleConfig)();\n  const selectedCurrency = styles === null || styles === void 0 ? void 0 : styles.currency;\n  const ConvertCurrency = price => {\n    if ((selectedCurrency === null || selectedCurrency === void 0 ? void 0 : selectedCurrency.code) !== "INR") {\n      return (price * (selectedCurrency === null || selectedCurrency === void 0 ? void 0 : selectedCurrency.exchangeRate)).toFixed(2);\n    } else {\n      return price;\n    }\n  };\n  return {\n    ConvertCurrency\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetCurrencyConversion);\n\n//# sourceURL=webpack://ecom/./src/hooks/Site-config/useGetCurrencyConversion.js?')},"./src/redux/actions/order.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAllOrdersOfShop: () => (/* binding */ getAllOrdersOfShop),\n/* harmony export */   getAllOrdersOfUser: () => (/* binding */ getAllOrdersOfUser)\n/* harmony export */ });\n/* unused harmony export getAllOrdersOfAdmin */\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server */ "./src/server.js");\n\n\n\n// get all orders of user\nconst getAllOrdersOfUser = userId => async dispatch => {\n  try {\n    dispatch({\n      type: "getAllOrdersUserRequest"\n    });\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(_server__WEBPACK_IMPORTED_MODULE_0__.server, "/order/get-all-orders/").concat(userId));\n    dispatch({\n      type: "getAllOrdersUserSuccess",\n      payload: data.orders\n    });\n  } catch (error) {\n    dispatch({\n      type: "getAllOrdersUserFailed",\n      payload: error.response.data.message\n    });\n  }\n};\n\n// get all orders of seller\nconst getAllOrdersOfShop = shopId => async dispatch => {\n  try {\n    dispatch({\n      type: "getAllOrdersShopRequest"\n    });\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(_server__WEBPACK_IMPORTED_MODULE_0__.server, "/order/get-seller-all-orders/").concat(shopId));\n    dispatch({\n      type: "getAllOrdersShopSuccess",\n      payload: data.orders\n    });\n  } catch (error) {\n    dispatch({\n      type: "getAllOrdersShopFailed",\n      payload: error.response.data.message\n    });\n  }\n};\n\n// get all orders of Admin\nconst getAllOrdersOfAdmin = () => async dispatch => {\n  try {\n    dispatch({\n      type: "adminAllOrdersRequest"\n    });\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("".concat(_server__WEBPACK_IMPORTED_MODULE_0__.server, "/order/admin-all-orders"), {\n      withCredentials: true\n    });\n    dispatch({\n      type: "adminAllOrdersSuccess",\n      payload: data.orders\n    });\n  } catch (error) {\n    dispatch({\n      type: "adminAllOrdersFailed",\n      payload: error.response.data.message\n    });\n  }\n};\n\n//# sourceURL=webpack://ecom/./src/redux/actions/order.js?')}}]);