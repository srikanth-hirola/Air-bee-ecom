/*! For license information please see src_Pages_Blog_jsx.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkecom=self.webpackChunkecom||[]).push([["src_Pages_Blog_jsx"],{"./src/Pages/Blog.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Headers_DronesHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Headers/DronesHeader */ "./src/components/Headers/DronesHeader.jsx");\n/* harmony import */ var _components_Headers_DronesHeader2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Headers/DronesHeader2 */ "./src/components/Headers/DronesHeader2.jsx");\n/* harmony import */ var _components_DronesHomepage_DronesFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/DronesHomepage/DronesFooter */ "./src/components/DronesHomepage/DronesFooter.jsx");\n/* harmony import */ var _components_blog_BlogBanner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/blog/BlogBanner */ "./src/components/blog/BlogBanner.jsx");\n/* harmony import */ var _components_blog_BlogsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/blog/BlogsList */ "./src/components/blog/BlogsList.jsx");\n/* harmony import */ var _utils_StyleConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/StyleConfig */ "./src/utils/StyleConfig.js");\n/* harmony import */ var _utils_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/Loader */ "./src/utils/Loader.jsx");\n/* harmony import */ var _hooks_Site_config_usePageSEOHandle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/Site-config/usePageSEOHandle */ "./src/hooks/Site-config/usePageSEOHandle.js");\n/* harmony import */ var _components_SEOHelmet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SEOHelmet */ "./src/components/SEOHelmet.jsx");\n\n\n\n\n\n\n\n\n\n\nconst Blog = () => {\n  const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const styles = (0,_utils_StyleConfig__WEBPACK_IMPORTED_MODULE_6__.StyleConfig)();\n  const [seoDetails, setSEODetails] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  (0,_hooks_Site_config_usePageSEOHandle__WEBPACK_IMPORTED_MODULE_8__["default"])({\n    pageName: "blogSEO",\n    setState: setSEODetails,\n    setLoading\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEOHelmet__WEBPACK_IMPORTED_MODULE_9__["default"], {\n    seoDetails: seoDetails\n  }), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Headers_DronesHeader__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Headers_DronesHeader2__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_blog_BlogBanner__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    content: styles === null || styles === void 0 ? void 0 : styles.blogSecOne\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_blog_BlogsList__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_DronesHomepage_DronesFooter__WEBPACK_IMPORTED_MODULE_3__["default"], null))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n\n//# sourceURL=webpack://ecom/./src/Pages/Blog.jsx?')},"./src/components/blog/BlogBanner.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");\n\n\nconst BlogBanner = _ref => {\n  var _content$tagImage, _content$tagImage2, _content$button, _content$button2, _content$button3, _content$BannerImage, _content$BannerImage2;\n  let {\n    content\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "AboutUsBanner-parent"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "row"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "col-md-6"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "AboutUsBanner-sub"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "AboutUsBanner-sub-content"\n  }, (content === null || content === void 0 || (_content$tagImage = content.tagImage) === null || _content$tagImage === void 0 || (_content$tagImage = _content$tagImage.image) === null || _content$tagImage === void 0 ? void 0 : _content$tagImage.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "AboutUsBanner-sub-content-image"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {\n    src: content === null || content === void 0 || (_content$tagImage2 = content.tagImage) === null || _content$tagImage2 === void 0 || (_content$tagImage2 = _content$tagImage2.image) === null || _content$tagImage2 === void 0 ? void 0 : _content$tagImage2.url,\n    alt: "tag"\n  })), (content === null || content === void 0 ? void 0 : content.tagTitle) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, content === null || content === void 0 ? void 0 : content.tagTitle)), (content === null || content === void 0 ? void 0 : content.title) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, content === null || content === void 0 ? void 0 : content.title), (content === null || content === void 0 ? void 0 : content.summary) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "AboutUsBanner-sub-content-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, content === null || content === void 0 ? void 0 : content.summary)), (content === null || content === void 0 || (_content$button = content.button) === null || _content$button === void 0 ? void 0 : _content$button.title) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: content === null || content === void 0 || (_content$button2 = content.button) === null || _content$button2 === void 0 ? void 0 : _content$button2.url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, content === null || content === void 0 || (_content$button3 = content.button) === null || _content$button3 === void 0 ? void 0 : _content$button3.title)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "col-md-6"\n  }, (content === null || content === void 0 || (_content$BannerImage = content.BannerImage) === null || _content$BannerImage === void 0 || (_content$BannerImage = _content$BannerImage.image) === null || _content$BannerImage === void 0 ? void 0 : _content$BannerImage.url) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "AboutUsBanner-image"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {\n    src: content === null || content === void 0 || (_content$BannerImage2 = content.BannerImage) === null || _content$BannerImage2 === void 0 || (_content$BannerImage2 = _content$BannerImage2.image) === null || _content$BannerImage2 === void 0 ? void 0 : _content$BannerImage2.url,\n    alt: "banner"\n  })))))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogBanner);\n\n//# sourceURL=webpack://ecom/./src/components/blog/BlogBanner.jsx?')},"./src/components/blog/BlogBlock.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");\n\n\nconst BlogBlock = _ref => {\n  var _data$large_thumb, _data$large_thumb$;\n  let {\n    data\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: "/blog/".concat(data === null || data === void 0 ? void 0 : data.slug)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    class: "card-container"\n  }, (data === null || data === void 0 || (_data$large_thumb = data.large_thumb) === null || _data$large_thumb === void 0 ? void 0 : _data$large_thumb.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    class: "card-image"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {\n    src: data === null || data === void 0 || (_data$large_thumb$ = data.large_thumb[0]) === null || _data$large_thumb$ === void 0 ? void 0 : _data$large_thumb$.url,\n    alt: "a brand new sports car"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    class: "card-body"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {\n    class: "card-badge card-badge-blue"\n  }, data === null || data === void 0 ? void 0 : data.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, data === null || data === void 0 ? void 0 : data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {\n    class: "card-subtitle"\n  }, data === null || data === void 0 ? void 0 : data.excerpt)))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogBlock);\n\n//# sourceURL=webpack://ecom/./src/components/blog/BlogBlock.jsx?')},"./src/components/blog/BlogsList.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/react-paginate.js");\n/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");\n/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../server */ "./src/server.js");\n/* harmony import */ var _BlogBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BlogBlock */ "./src/components/blog/BlogBlock.jsx");\n/* harmony import */ var _utils_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Loader */ "./src/utils/Loader.jsx");\n\n\n\n\n\n\n\nconst BlogsList = () => {\n  const [blogsLength, setBlogsLength] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);\n  const [blogs, setBlog] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  let API = "".concat(_server__WEBPACK_IMPORTED_MODULE_2__.server, "/blogs/pagination");\n  const fetchBlog = async (url, pageNum) => {\n    try {\n      var _result$data, _result$data2;\n      setLoading(true);\n      const result = await axios__WEBPACK_IMPORTED_MODULE_5__["default"].get("".concat(url, "?page=").concat(pageNum, "&limit=", 8));\n      const data = result === null || result === void 0 || (_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.blogs;\n      setBlogsLength(result === null || result === void 0 || (_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.length);\n      setBlog(data);\n    } catch (e) {\n      console.log(e);\n    } finally {\n      setLoading(false);\n    }\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    fetchBlog(API, 1);\n  }, [API]);\n\n  // const [blogs] = useState(allBlogData);\n  // const [pageNumber, setPageNumber] = useState(0);\n  const [pageCount, setPageCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n  const blogsPerPage = 8;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const pageCountData = Math.ceil(blogsLength / blogsPerPage);\n    setPageCount(pageCountData);\n  }, [blogsLength]);\n  const changePage = _ref => {\n    let {\n      selected\n    } = _ref;\n    let pgNum = selected + 1;\n    fetchBlog(API, pgNum);\n    // setPageNumber(pgNum);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, (blogs === null || blogs === void 0 ? void 0 : blogs.length) > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "blog-page"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "blog-sec"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {\n    class: "container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "row"\n  }, blogs === null || blogs === void 0 ? void 0 : blogs.map((data, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_BlogBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {\n    data: data,\n    key: i\n  })))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No Blogs are Added!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {\n    className: "blogs-page w-fit mx-auto"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react_paginate__WEBPACK_IMPORTED_MODULE_1___default()), {\n    previousLabel: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaArrowLeft, null),\n    nextLabel: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaArrowRight, null),\n    pageCount: pageCount,\n    onPageChange: changePage,\n    containerClassName: "pagination justify-content-start",\n    previousLinkClassName: "prev",\n    nextLinkClassName: "next",\n    disabledClassName: "disabled",\n    activeClassName: "current"\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogsList);\n\n//# sourceURL=webpack://ecom/./src/components/blog/BlogsList.jsx?')},"./src/hooks/Site-config/usePageSEOHandle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_StyleConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/StyleConfig */ "./src/utils/StyleConfig.js");\n\n\nconst usePageSEOHandle = _ref => {\n  let {\n    pageName,\n    setState,\n    setLoading\n  } = _ref;\n  const styles = (0,_utils_StyleConfig__WEBPACK_IMPORTED_MODULE_1__.StyleConfig)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (setLoading) {\n      setLoading(false);\n    }\n    if (styles !== null && styles !== void 0 && styles.allPagesSEODetails) {\n      var _styles$allPagesSEODe, _styles$allPagesSEODe2;\n      setState({\n        metaTitle: styles === null || styles === void 0 || (_styles$allPagesSEODe = styles.allPagesSEODetails) === null || _styles$allPagesSEODe === void 0 || (_styles$allPagesSEODe = _styles$allPagesSEODe[pageName]) === null || _styles$allPagesSEODe === void 0 ? void 0 : _styles$allPagesSEODe.metaTitle,\n        metaDescription: styles === null || styles === void 0 || (_styles$allPagesSEODe2 = styles.allPagesSEODetails) === null || _styles$allPagesSEODe2 === void 0 || (_styles$allPagesSEODe2 = _styles$allPagesSEODe2[pageName]) === null || _styles$allPagesSEODe2 === void 0 ? void 0 : _styles$allPagesSEODe2.metaDescription\n      });\n    } else {\n      setState({\n        metaTitle: \'Airbee Technologies\',\n        metaDescription: \'Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth.\'\n      });\n    }\n  }, [pageName, setLoading, setState, styles === null || styles === void 0 ? void 0 : styles.allPagesSEODetails]);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePageSEOHandle);\n\n//# sourceURL=webpack://ecom/./src/hooks/Site-config/usePageSEOHandle.js?')}}]);