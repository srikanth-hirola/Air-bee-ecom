/*! For license information please see src_Pages_Shop_Products_ShopAllDraftProducts_jsx.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([["src_Pages_Shop_Products_ShopAllDraftProducts_jsx"],{"./src/Pages/Shop/Products/ShopAllDraftProducts.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Headers_DashboardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Headers/DashboardHeader */ "./src/components/Headers/DashboardHeader.jsx");\n/* harmony import */ var _components_ShopComponents_Layout_DashboardSideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ShopComponents/Layout/DashboardSideBar */ "./src/components/ShopComponents/Layout/DashboardSideBar.jsx");\n/* harmony import */ var _components_ShopComponents_Products_AllDraftProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ShopComponents/Products/AllDraftProducts */ "./src/components/ShopComponents/Products/AllDraftProducts.jsx");\n/* harmony import */ var _components_DronesHomepage_DronesFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/DronesHomepage/DronesFooter */ "./src/components/DronesHomepage/DronesFooter.jsx");\n\n\n\n\n\nconst ShopAllDraftProducts = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Headers_DashboardHeader__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex justify-between w-full dasboard-user-width-mobile"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "800px:w-[330px] dashboard-side-bar-res"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ShopComponents_Layout_DashboardSideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    active: 7\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-full justify-center flex dashboard-side-bar-data-view"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ShopComponents_Products_AllDraftProducts__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    active: 7\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DronesHomepage_DronesFooter__WEBPACK_IMPORTED_MODULE_4__["default"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopAllDraftProducts);\n\n//# sourceURL=webpack://ecom/./src/Pages/Shop/Products/ShopAllDraftProducts.jsx?')},"./src/components/ShopComponents/Products/AllDraftProducts.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.mjs\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _redux_actions_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/actions/product */ \"./src/redux/actions/product.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _utils_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/Loader */ \"./src/utils/Loader.jsx\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js\");\n\n\n\n\n\n\n\n\nconst AllDraftProducts = () => {\n  const {\n    products,\n    isLoading\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.products);\n  const {\n    seller\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.seller);\n  const [finalProducts, setFinalProducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dispatch((0,_redux_actions_product__WEBPACK_IMPORTED_MODULE_2__.getAllProductsShop)(seller._id));\n  }, [dispatch, seller._id]);\n  const handleDelete = id => {\n    dispatch((0,_redux_actions_product__WEBPACK_IMPORTED_MODULE_2__.deleteProduct)(id));\n    window.location.reload();\n  };\n  const columns = [{\n    field: 'id',\n    headerName: 'Product Id',\n    minWidth: 150,\n    flex: 0.7\n  }, {\n    field: 'name',\n    headerName: 'Name',\n    minWidth: 180,\n    flex: 1.4\n  },\n  // {\n  //   field: 'price',\n  //   headerName: 'Price',\n  //   minWidth: 100,\n  //   flex: 0.6,\n  // },\n  // {\n  //   field: 'Stock',\n  //   headerName: 'Stock',\n  //   type: 'number',\n  //   minWidth: 80,\n  //   flex: 0.5,\n  // },\n  // {\n  //   field: 'sold',\n  //   headerName: 'Sold out',\n  //   type: 'number',\n  //   minWidth: 130,\n  //   flex: 0.6,\n  // },\n  // {\n  //   field: 'Preview',\n  //   flex: 0.8,\n  //   minWidth: 100,\n  //   headerName: '',\n  //   type: 'number',\n  //   sortable: false,\n  //   renderCell: (params) => {\n  //     return (\n  //       <>\n  //         <Link to={`/product/${params.id}`}>\n  //           <Button>\n  //             <AiOutlineEye size={20} />\n  //           </Button>\n  //         </Link>\n  //       </>\n  //     );\n  //   },\n  // },\n  {\n    field: '',\n    flex: 1,\n    minWidth: 150,\n    headerName: 'Edit Shop',\n    type: 'number',\n    sortable: false,\n    renderCell: params => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n        to: \"/shop/product/draft-edit/\".concat(params.id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, \"Edit\")));\n    }\n  }, {\n    field: 'Delete',\n    flex: 0.8,\n    minWidth: 120,\n    headerName: '',\n    type: 'number',\n    sortable: false,\n    renderCell: params => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        onClick: () => handleDelete(params.id)\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineDelete, {\n        size: 20\n      })));\n    }\n  }];\n  const row = [];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setFinalProducts(products);\n  }, [products]);\n  finalProducts && finalProducts.forEach(item => {\n    if (item.draft) {\n      row.push({\n        id: item._id,\n        name: item.name\n        //   price: 'US$ ' + item.discountPrice,\n        //   Stock: item.stock,\n        //   sold: item?.sold_out,\n      });\n    }\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Loader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"w-full mx-8 pt-1 mt-10 bg-white outer1-div\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_7__.DataGrid, {\n    rows: row,\n    columns: columns,\n    pageSize: 10,\n    disableSelectionOnClick: true,\n    autoHeight: true\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllDraftProducts);\n\n//# sourceURL=webpack://ecom/./src/components/ShopComponents/Products/AllDraftProducts.jsx?")}}]);