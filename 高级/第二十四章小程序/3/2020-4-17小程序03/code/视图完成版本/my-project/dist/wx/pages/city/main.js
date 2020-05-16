require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(20);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b828a386_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(23);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(21)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b828a386"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_b828a386_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/city/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b828a386", Component.options)
  } else {
    hotAPI.reload("data-v-b828a386", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 21:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {};
  },

  components: {}
};

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "city_container"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "hot-city"
  }, [_c('div', {
    staticClass: "city-title"
  }, [_vm._v("热门城市")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "letter"
  }, [_vm._v("\n      A\n    ")]), _vm._v(" "), _c('ul', {
    staticClass: "city-list"
  }, [_c('li', [_vm._v("阿巴嘎旗")]), _vm._v(" "), _c('li', [_vm._v("阿坝")]), _vm._v(" "), _c('li', [_vm._v("阿坝县")]), _vm._v(" "), _c('li', [_vm._v("阿城区")]), _vm._v(" "), _c('li', [_vm._v("阿尔山市")]), _vm._v(" "), _c('li', [_vm._v("阿合奇县")]), _vm._v(" "), _c('li', [_vm._v("阿克塞哈萨克族自治县")])], 1)], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right-letter"
  }, [_c('span', [_vm._v("热门")]), _vm._v(" "), _c('span', [_vm._v("A")]), _vm._v(" "), _c('span', [_vm._v("B")]), _vm._v(" "), _c('span', [_vm._v("C")]), _vm._v(" "), _c('span', [_vm._v("D")]), _vm._v(" "), _c('span', [_vm._v("E")]), _vm._v(" "), _c('span', [_vm._v("F")]), _vm._v(" "), _c('span', [_vm._v("G")]), _vm._v(" "), _c('span', [_vm._v("H")]), _vm._v(" "), _c('span', [_vm._v("I")]), _vm._v(" "), _c('span', [_vm._v("J")]), _vm._v(" "), _c('span', [_vm._v("K")]), _vm._v(" "), _c('span', [_vm._v("L")]), _vm._v(" "), _c('span', [_vm._v("M")]), _vm._v(" "), _c('span', [_vm._v("N")]), _vm._v(" "), _c('span', [_vm._v("O")]), _vm._v(" "), _c('span', [_vm._v("P")]), _vm._v(" "), _c('span', [_vm._v("Q")]), _vm._v(" "), _c('span', [_vm._v("R")]), _vm._v(" "), _c('span', [_vm._v("S")]), _vm._v(" "), _c('span', [_vm._v("T")]), _vm._v(" "), _c('span', [_vm._v("U")]), _vm._v(" "), _c('span', [_vm._v("V")]), _vm._v(" "), _c('span', [_vm._v("W")]), _vm._v(" "), _c('span', [_vm._v("X")]), _vm._v(" "), _c('span', [_vm._v("Y")]), _vm._v(" "), _c('span', [_vm._v("Z")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "location"
  }, [_c('span', {
    staticClass: "chiose-city"
  }, [_vm._v("北京市")]), _vm._v(" "), _c('span', {
    staticClass: "gps"
  }, [_vm._v("GPS定位")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hot-city-container"
  }, [_c('div', [_vm._v("上海")]), _vm._v(" "), _c('div', [_vm._v("北京")]), _vm._v(" "), _c('div', [_vm._v("广东")]), _vm._v(" "), _c('div', [_vm._v("深圳")]), _vm._v(" "), _c('div', [_vm._v("天津")]), _vm._v(" "), _c('div', [_vm._v("杭州")]), _vm._v(" "), _c('div', [_vm._v("南京")]), _vm._v(" "), _c('div', [_vm._v("苏州")]), _vm._v(" "), _c('div', [_vm._v("成都")]), _vm._v(" "), _c('div', [_vm._v("武汉")]), _vm._v(" "), _c('div', [_vm._v("重庆")]), _vm._v(" "), _c('div', [_vm._v("西安")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b828a386", esExports)
  }
}

/***/ })

},[19]);