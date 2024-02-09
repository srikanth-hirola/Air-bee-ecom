/*! For license information please see src_Pages_Shop_Categories_ShopCategories_jsx.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([["src_Pages_Shop_Categories_ShopCategories_jsx"],{"./src/Pages/Shop/Categories/ShopCategories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Headers_DashboardHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Headers/DashboardHeader */ "./src/components/Headers/DashboardHeader.jsx");\n/* harmony import */ var _components_ShopComponents_Layout_DashboardSideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ShopComponents/Layout/DashboardSideBar */ "./src/components/ShopComponents/Layout/DashboardSideBar.jsx");\n/* harmony import */ var _components_ShopComponents_Categories_CategoryPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ShopComponents/Categories/CategoryPage */ "./src/components/ShopComponents/Categories/CategoryPage.jsx");\n/* harmony import */ var _components_DronesHomepage_DronesFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/DronesHomepage/DronesFooter */ "./src/components/DronesHomepage/DronesFooter.jsx");\n\n\n\n\n\nconst ShopCategories = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Headers_DashboardHeader__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex items-start justify-between w-full dasboard-user-width-mobile"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "800px:w-[330px] dashboard-side-bar-res"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ShopComponents_Layout_DashboardSideBar__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    active: 38\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-full justify-center flex dashboard-side-bar-data-view"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ShopComponents_Categories_CategoryPage__WEBPACK_IMPORTED_MODULE_3__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DronesHomepage_DronesFooter__WEBPACK_IMPORTED_MODULE_4__["default"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopCategories);\n\n//# sourceURL=webpack://ecom/./src/Pages/Shop/Categories/ShopCategories.jsx?')},"./src/components/ShopComponents/Categories/CategoryPage.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");\n/* harmony import */ var _utils_StyleConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/StyleConfig */ "./src/utils/StyleConfig.js");\n/* harmony import */ var _redux_actions_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions/category */ "./src/redux/actions/category.js");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../server */ "./src/server.js");\n/* harmony import */ var _utils_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/Loader */ "./src/utils/Loader.jsx");\n/* harmony import */ var _CreateProduct_Components_CustomizeCategory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CreateProduct/Components/CustomizeCategory */ "./src/components/ShopComponents/CreateProduct/Components/CustomizeCategory.jsx");\n/* harmony import */ var _Modals_CategoryDeleteModel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modals/CategoryDeleteModel */ "./src/components/ShopComponents/Categories/Modals/CategoryDeleteModel.jsx");\n\n\n\n\n\n\n\n\n\n\n\nconst CategoryPage = () => {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  const styles = (0,_utils_StyleConfig__WEBPACK_IMPORTED_MODULE_2__.StyleConfig)();\n  const {\n    category,\n    isLoading\n  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state.category);\n\n  // const [isLoading, setIsLoading] = useState(true); \n  const [categoriesData, setCategoriesData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [subSubCat, setSubSubCat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [addNewCat, setAddNewCat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [customizeCat, setCustomizeCat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [catId, setCatId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    dispatch((0,_redux_actions_category__WEBPACK_IMPORTED_MODULE_3__.getAllCategories)());\n  }, [dispatch]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setCategoriesData(category);\n  }, [category]);\n\n  // const [categories, setCategories] = useState([\n  //   { name: \'\', subcategories: [] },\n  // ]);\n\n  const [categories, setCategories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [showModel, setShowModel] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const handleCategoryChange = (index, value) => {\n    const updatedCategories = [...categories];\n    updatedCategories[index].name = value;\n    setCategories(updatedCategories);\n  };\n  const handleSubcategoryChange = (categoryIndex, subcategoryIndex, value) => {\n    const updatedCategories = [...categories];\n    updatedCategories[categoryIndex].subcategories[subcategoryIndex].name = value;\n    setCategories(updatedCategories);\n  };\n  const handleSubSubcategoryChange = (categoryIndex, subcategoryIndex, subSubcategoryIndex, value) => {\n    const updatedCategories = [...categories];\n    updatedCategories[categoryIndex].subcategories[subcategoryIndex].subSubcategories[subSubcategoryIndex] = {\n      name: value\n    };\n    setCategories(updatedCategories);\n  };\n  const handleAddCategory = () => {\n    setCustomizeCat(false);\n    setAddNewCat(true);\n    setCategories([...categories, {\n      approved: true,\n      name: \'\',\n      subcategories: [],\n      CatImg: \'\'\n    }]);\n  };\n  const handleCustomizeState = () => {\n    setAddNewCat(false);\n    setCustomizeCat(true);\n    setCategories([]);\n  };\n  const handleAddSubcategory = categoryIndex => {\n    const updatedCategories = [...categories];\n    updatedCategories[categoryIndex].subcategories.push({\n      name: \'\',\n      subSubcategories: [{\n        name: \'\'\n      }]\n    });\n    setCategories(updatedCategories);\n  };\n  const handleAddSubSubcategory = (categoryIndex, subcategoryIndex) => {\n    const updatedCategories = [...categories];\n    updatedCategories[categoryIndex].subcategories[subcategoryIndex].subSubcategories.push({\n      name: \'\'\n    });\n    setCategories(updatedCategories);\n  };\n  const handleSubmit = async e => {\n    e.preventDefault();\n    if (!categories[0].CatImg || !categories[0].name) {\n      react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error("Category Image and Name is required");\n      return;\n    }\n    await axios__WEBPACK_IMPORTED_MODULE_9__["default"].post("".concat(_server__WEBPACK_IMPORTED_MODULE_5__.server, "/category/add-category"), {\n      categories\n    }).then(result => {\n      if (result.data.Status === \'Success\') {\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].success(\'New Category added successfully\');\n      }\n    }).catch(error => {\n      react_hot_toast__WEBPACK_IMPORTED_MODULE_4__["default"].error(error.response.data.message);\n    });\n  };\n  const handleChange = (e, index) => {\n    setSubSubCat(categoriesData[index].subcategories[e.target.value].subSubcategories);\n  };\n  const handleImageChange = (e, index) => {\n    const file = e.target.files[0];\n    if (file) {\n      const reader = new FileReader();\n      reader.onloadend = () => {\n        const base64Img = reader.result;\n        setCategories(prevCategories => {\n          const updatedCategories = [...prevCategories];\n          updatedCategories[index].CatImg = base64Img;\n          return updatedCategories;\n        });\n      };\n      reader.readAsDataURL(file);\n    }\n  };\n  const handleDeleteModel = (e, id) => {\n    e.preventDefault();\n    setShowModel(true);\n    setCatId(id);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Loader__WEBPACK_IMPORTED_MODULE_6__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, categoriesData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-full mx-8 pt-1 mt-10 bg-white outer1-div"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "addCat"\n  }, addNewCat && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, categories.map((category, categoryIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    key: categoryIndex\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "mb-6"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {\n    className: "pb-2"\n  }, "Category Image", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-red-500"\n  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "file",\n    className: "border-0",\n    onChange: e => {\n      handleImageChange(e, categoryIndex);\n    }\n  }), (category === null || category === void 0 ? void 0 : category.CatImg) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "border-1 rounded w-[150px] h-[100px] my-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {\n    src: category === null || category === void 0 ? void 0 : category.CatImg,\n    alt: "Category",\n    className: "w-full h-full"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "categoryInput"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    className: "subp",\n    type: "text",\n    placeholder: "Enter category name",\n    value: category.name,\n    onChange: e => handleCategoryChange(categoryIndex, e.target.value)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "rounded px-4 py-2",\n    style: {\n      backgroundColor: styles === null || styles === void 0 ? void 0 : styles.mainColor,\n      color: styles === null || styles === void 0 ? void 0 : styles.fontColor\n    },\n    onClick: () => handleAddSubcategory(categoryIndex)\n  }, "Add Subcategory")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "categorySub"\n  }, category.subcategories.map((subcategory, subcategoryIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    key: subcategoryIndex\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "categoryInput"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    className: "subp",\n    type: "text",\n    placeholder: "Enter subcategory name",\n    value: subcategory.name,\n    onChange: e => handleSubcategoryChange(categoryIndex, subcategoryIndex, e.target.value)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "rounded px-4 py-2",\n    style: {\n      backgroundColor: styles === null || styles === void 0 ? void 0 : styles.mainColor,\n      color: styles === null || styles === void 0 ? void 0 : styles.fontColor\n    },\n    onClick: () => handleAddSubSubcategory(categoryIndex, subcategoryIndex)\n  }, "Add Sub Subcategory")), subcategory.subSubcategories.map((subSubcategory, subSubcategoryIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    key: subSubcategoryIndex\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    className: "subp p2",\n    type: "text",\n    placeholder: "Enter sub subcategory name",\n    value: subSubcategory === null || subSubcategory === void 0 ? void 0 : subSubcategory.name,\n    onChange: e => handleSubSubcategoryChange(categoryIndex, subcategoryIndex, subSubcategoryIndex, e.target.value)\n  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    onClick: handleSubmit,\n    className: "rounded px-4 bg-green-500 py-2 text-white"\n  }, "Submit")), customizeCat && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CreateProduct_Components_CustomizeCategory__WEBPACK_IMPORTED_MODULE_7__["default"], {\n    categoriesData: categoriesData\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex justify-between my-3"\n  }, !addNewCat && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    onClick: handleAddCategory,\n    className: "rounded px-4 py-2",\n    style: {\n      backgroundColor: styles === null || styles === void 0 ? void 0 : styles.mainColor,\n      color: styles === null || styles === void 0 ? void 0 : styles.fontColor\n    }\n  }, "Add Category"), !customizeCat && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "rounded px-4 py-2",\n    style: {\n      backgroundColor: styles === null || styles === void 0 ? void 0 : styles.mainColor,\n      color: styles === null || styles === void 0 ? void 0 : styles.fontColor\n    },\n    onClick: handleCustomizeState\n  }, "Customize Existing Category"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex justify-between"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "displayCat flex flex-col w-[78%] "\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "rounded flex justify-between px-4 py-2 ",\n    style: {\n      backgroundColor: styles === null || styles === void 0 ? void 0 : styles.mainColor,\n      color: styles === null || styles === void 0 ? void 0 : styles.fontColor\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: " font-semibold"\n  }, "SL NO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: " font-semibold"\n  }, "Images"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: " font-semibold"\n  }, "Categories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: " font-semibold"\n  }, "Subcategories"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: " font-semibold"\n  }, "Delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "table1-container shadow-md max-h-[700px] overflow-y-scroll w-full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "table1-div w-full"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {\n    className: "table1"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, categoriesData.map((val, index) => {\n    var _val$CatImg;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, index + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {\n      className: " flex justify-center"\n    }, (val === null || val === void 0 ? void 0 : val.CatImg) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {\n      src: val === null || val === void 0 || (_val$CatImg = val.CatImg) === null || _val$CatImg === void 0 ? void 0 : _val$CatImg.url,\n      alt: "Category-img",\n      className: "w-[100px] h-[50px]"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, val.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_10__["default"].Select, {\n      "aria-label": "Default select example",\n      onChange: e => {\n        handleChange(e, index);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n      selected: true,\n      disabled: true\n    }, "Select Sub Category"), val.subcategories.map((val2, index1) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n        value: index1\n      }, val2.name);\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n      className: "bg-gray-200 rounded p-1 px-2",\n      onClick: e => {\n        handleDeleteModel(e, val._id);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {\n      xmlns: "http://www.w3.org/2000/svg",\n      viewBox: "0 0 32 32",\n      id: "delete",\n      width: 30,\n      height: 30\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {\n      d: "M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,\\r 2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"\n    })))));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Modals_CategoryDeleteModel__WEBPACK_IMPORTED_MODULE_8__.CategoryDeleteModel, {\n    show: showModel,\n    onHide: () => setShowModel(false),\n    catId: catId\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "w-[20%] flex flex-col "\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "rounded flex justify-between px-4 py-2 text-center mb-2",\n    style: {\n      backgroundColor: styles === null || styles === void 0 ? void 0 : styles.mainColor,\n      color: styles === null || styles === void 0 ? void 0 : styles.fontColor\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: " font-semibold"\n  }, "Sub SubCategories")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "subSub w-full shadow-md"\n  }, subSubCat.map(val2 => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {\n      className: "subp"\n    }, val2 === null || val2 === void 0 ? void 0 : val2.name);\n  })))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryPage);\n\n//# sourceURL=webpack://ecom/./src/components/ShopComponents/Categories/CategoryPage.jsx?')},"./src/components/ShopComponents/Categories/Modals/CategoryDeleteModel.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CategoryDeleteModel: () => (/* binding */ CategoryDeleteModel)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Modal */ "./node_modules/react-bootstrap/esm/Modal.js");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../server */ "./src/server.js");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst CategoryDeleteModel = props => {\n  const handleDelete = async e => {\n    e.preventDefault();\n    try {\n      const ID = props === null || props === void 0 ? void 0 : props.catId;\n      await axios__WEBPACK_IMPORTED_MODULE_3__["default"].delete("".concat(_server__WEBPACK_IMPORTED_MODULE_1__.server, "/category/delete-category/").concat(ID));\n      react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].success("Deleted Category and related products Successfully");\n      setTimeout(() => {\n        window.location.reload();\n      }, 1000);\n    } catch (error) {\n      react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].error(error.response.data.message);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {\n    size: "lg",\n    "aria-labelledby": "contained-modal-title-vcenter",\n    centered: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {\n    closeButton: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"].Title, {\n    id: "contained-modal-title-vcenter"\n  }, "Confirm Delete Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__["default"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "The Category and the products related to this category will also be deleted."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Click Confirm Delete to delete the category!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex justify-between my-3"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "bg-red-400 text-white px-3 py-2 rounded",\n    onClick: handleDelete\n  }, "Confirm Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "bg-blue-400 text-white px-3 py-2 rounded",\n    onClick: props.onHide\n  }, "Cancel"))));\n};\n\n//# sourceURL=webpack://ecom/./src/components/ShopComponents/Categories/Modals/CategoryDeleteModel.jsx?')},"./src/components/ShopComponents/CreateProduct/Components/CustomizeCategory.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");\n/* harmony import */ var _utils_StyleConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/StyleConfig */ "./src/utils/StyleConfig.js");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../server */ "./src/server.js");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.mjs");\n\n\n\n\n\n\n\n\nconst CustomizeCategory = _ref => {\n  let {\n    categoriesData\n  } = _ref;\n  const styles = (0,_utils_StyleConfig__WEBPACK_IMPORTED_MODULE_1__.StyleConfig)();\n  const [subCat, setSubCat] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [categoryName, setCategoryName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\'\');\n  const [CatImg, setCatImg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const [newCategoryName, setNewCategoryName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const categories = categoriesData;\n  const [btnLoading, setBtnLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const handleCategoryChange = e => {\n    e.preventDefault();\n    setCategoryName(e.target.value);\n    setNewCategoryName(e.target.value);\n    // eslint-disable-next-line array-callback-return\n    categoriesData.map(val => {\n      if (val.name === e.target.value) {\n        setSubCat(val.subcategories);\n        setCatImg(val === null || val === void 0 ? void 0 : val.CatImg);\n      }\n    });\n  };\n  const handleAddSubcategory = e => {\n    e.preventDefault();\n    setSubCat([...subCat, {\n      name: \'\',\n      subSubcategories: [{\n        name: \'\'\n      }]\n    }]);\n  };\n  const handleSubcategoryChange = (subcategoryIndex, value) => {\n    const updatedCategories = JSON.parse(JSON.stringify(subCat));\n    updatedCategories[subcategoryIndex].name = value;\n    setSubCat(updatedCategories);\n  };\n  const handleSubSubcategoryChange = (subcategoryIndex, subSubcategoryIndex, value) => {\n    const updatedCategories = subCat.map((category, index) => {\n      if (index === subcategoryIndex) {\n        const subcategoriesCopy = [...category.subSubcategories];\n        subcategoriesCopy[subSubcategoryIndex] = {\n          name: value\n        };\n        return {\n          ...category,\n          subSubcategories: subcategoriesCopy\n        };\n      }\n      return category;\n    });\n    setSubCat(updatedCategories);\n  };\n  const handleAddSubSubcategory = (e, subcategoryIndex) => {\n    e.preventDefault();\n    const updatedCategories = JSON.parse(JSON.stringify(subCat));\n    updatedCategories[subcategoryIndex].subSubcategories.push({\n      name: \'\'\n    });\n    setSubCat(updatedCategories);\n  };\n  const handleRemoveSubSubCategory = (e, subcategoryIndex, subSubcategoryIndex) => {\n    e.preventDefault();\n    const updatedCategories = subCat.map((category, index) => {\n      if (index === subcategoryIndex) {\n        let subcategoriesCopy = [...category.subSubcategories];\n        subcategoriesCopy = subcategoriesCopy.filter((subSub, index) => index !== subSubcategoryIndex);\n        return {\n          ...category,\n          subSubcategories: subcategoriesCopy\n        };\n      }\n      return category;\n    });\n    setSubCat(updatedCategories);\n\n    // let updatedCategories = [...subCat];\n    // let updatedSubCategory = updatedCategories[subcategoryIndex].subSubcategories\n    // updatedSubCategory = updatedCategories[subcategoryIndex].subSubcategories.filter((sub, index) => index !== subSubcategoryIndex);\n    // updatedCategories[subcategoryIndex].subSubcategories = updatedSubCategory\n    // setSubCat(updatedCategories);\n  };\n  const handleRemoveSubCategory = (e, subcategoryIndex) => {\n    e.preventDefault();\n    let updatedCategories = [...subCat];\n    updatedCategories = updatedCategories.filter((sub, index) => index !== subcategoryIndex);\n    setSubCat(updatedCategories);\n  };\n  const handleSubmit = async e => {\n    e.preventDefault();\n    if (newCategoryName && CatImg) {\n      setBtnLoading(true);\n      await axios__WEBPACK_IMPORTED_MODULE_5__["default"].put("".concat(_server__WEBPACK_IMPORTED_MODULE_2__.server, "/category/custom-category"), {\n        existingName: categoryName,\n        categoryName: newCategoryName,\n        subCat: subCat,\n        CatImg: CatImg\n      }).then(result => {\n        setBtnLoading(false);\n        if (result.data.Status === \'Success\') {\n          react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].success(\'Category Customized Successfully\');\n          // setTimeout(() => {\n          //     window.location.reload();\n          // }, 3000);\n        }\n      }).catch(error => {\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error(error.response.data.message);\n      });\n    } else {\n      react_hot_toast__WEBPACK_IMPORTED_MODULE_3__["default"].error("Category and Category Image is required");\n    }\n  };\n  const handleImageChange = e => {\n    const file = e.target.files[0];\n    if (file) {\n      const reader = new FileReader();\n      reader.onloadend = () => {\n        const base64Img = reader.result;\n        setCatImg(base64Img);\n      };\n      reader.readAsDataURL(file);\n    }\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "categoryInput mb-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__["default"].Select, {\n    "aria-label": "Default select example",\n    onChange: e => {\n      handleCategoryChange(e);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n    selected: true,\n    disabled: true\n  }, "Select Category"), categories.map((val2, index1) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("option", {\n      value: val2.name\n    }, val2.name);\n  })), categoryName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "mb-6 mt-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {\n    className: "pb-2"\n  }, "Category Image", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    className: "text-red-500"\n  }, "*")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "file",\n    className: "border-0",\n    onChange: handleImageChange\n  }), CatImg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "border-1 rounded w-[150px] my-2"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {\n    src: CatImg !== null && CatImg !== void 0 && CatImg.url ? CatImg === null || CatImg === void 0 ? void 0 : CatImg.url : CatImg,\n    alt: "Category",\n    className: "w-full h-[100px]"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    className: "subp",\n    type: "text",\n    placeholder: "Enter category name",\n    value: newCategoryName,\n    onChange: e => setNewCategoryName(e.target.value)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "rounded px-4 py-2",\n    style: {\n      backgroundColor: styles === null || styles === void 0 ? void 0 : styles.mainColor,\n      color: styles === null || styles === void 0 ? void 0 : styles.fontColor\n    },\n    onClick: handleAddSubcategory\n  }, "Add Subcategory"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "categorySub"\n  }, subCat.map((subcategory, subcategoryIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    key: subcategoryIndex\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "categoryInput"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "flex border-1 rounded px-1  my-1"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "text",\n    className: "border-0 ",\n    placeholder: "Enter subcategory name",\n    value: subcategory.name,\n    onChange: e => handleSubcategoryChange(subcategoryIndex, e.target.value)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "bg-white",\n    onClick: e => handleRemoveSubCategory(e, subcategoryIndex)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTrash,\n    style: {\n      color: \'red\'\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "rounded px-4 py-2",\n    style: {\n      backgroundColor: styles === null || styles === void 0 ? void 0 : styles.mainColor,\n      color: styles === null || styles === void 0 ? void 0 : styles.fontColor\n    },\n    onClick: e => handleAddSubSubcategory(e, subcategoryIndex)\n  }, "Add Sub Subcategory")), subcategory.subSubcategories.map((subSubcategory, subSubcategoryIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    key: subSubcategoryIndex,\n    className: "flex border-1 rounded py-2 px-2 my-1"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {\n    type: "text",\n    className: "border-0 p2",\n    placeholder: "Enter sub subcategory name",\n    value: subSubcategory === null || subSubcategory === void 0 ? void 0 : subSubcategory.name,\n    onChange: e => handleSubSubcategoryChange(subcategoryIndex, subSubcategoryIndex, e.target.value)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    onClick: e => handleRemoveSubSubCategory(e, subcategoryIndex, subSubcategoryIndex)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {\n    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faTrash,\n    style: {\n      color: \'red\'\n    }\n  }))))))), categoryName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, btnLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "cat-btn"\n  }, "Loading...") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {\n    className: "rounded px-4 bg-green-500 py-2 text-white my-2",\n    onClick: handleSubmit\n  }, "Submit"))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomizeCategory);\n\n//# sourceURL=webpack://ecom/./src/components/ShopComponents/CreateProduct/Components/CustomizeCategory.jsx?')}}]);