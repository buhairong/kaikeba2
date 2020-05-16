require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([3],{

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(0);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(25);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _vue2.default(_index2.default);
app.$mount();

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c6eb783a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(28);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c6eb783a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_c6eb783a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/detail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c6eb783a", Component.options)
  } else {
    hotAPI.reload("data-v-c6eb783a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 27:
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

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail_container"
  }, [_c('div', {
    staticClass: "container_up"
  }, [_c('div', {
    staticClass: "detail_content"
  }, [_vm._m(0), _vm._v(" "), _c('ul', [_c('li', {
    staticClass: "store_title"
  }, [_vm._v("HaveFun!有饭(西二旗店)")]), _vm._v(" "), _c('li', {
    staticClass: "store_price"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/b-star.png"
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/b-star.png"
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/b-star.png"
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/b-star.png"
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": "/static/images/b-star.png"
    }
  }), _vm._v("\n          559条 ￥41/人\n        ")]), _vm._v(" "), _c('li', {
    staticClass: "store_taste"
  }, [_vm._v("口味：7.8 环境：8.3 服务：8.1")]), _vm._v(" "), _c('li', {
    staticClass: "store_type"
  }, [_vm._v("上地 快餐简餐")])], 1)], 1), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "position"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/position.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-content"
  }, [_c('span', [_vm._v("上地十街辉煌国际西6号楼低商1-2楼(地铁13号线西二旗A口西500米)")]), _vm._v(" "), _c('p', [_vm._v("距离步行60m，需要1分钟")])], 1), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c('div', {
    staticClass: "rule"
  }), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "rule"
  }), _vm._v(" "), _c('div', {
    staticClass: "group-buying"
  }, [_c('img', {
    staticClass: "group-buying-img",
    attrs: {
      "src": "/static/images/group-buy.png",
      "alt": "团"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "show-list-item"
  }, [_c('img', {
    staticClass: "food-show",
    attrs: {
      "src": "/static/images/eatPicture.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-container"
  }, [_vm._m(4), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "now-price"
  }, [_vm._v("￥35")]), _vm._v(" "), _c('span', {
    staticClass: "original-price"
  }, [_vm._v("￥57")])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "show-list-item"
  }, [_c('img', {
    staticClass: "food-show",
    attrs: {
      "src": "/static/images/eatPicture.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "text-container"
  }, [_vm._m(5), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "now-price"
  }, [_vm._v("￥35")]), _vm._v(" "), _c('span', {
    staticClass: "original-price"
  }, [_vm._v("￥57")])])], 1)]), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7)])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "imgContainer"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/eatPicture.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "local"
  }, [_c('div', {
    staticClass: "content-show"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/clock.png"
    }
  }), _vm._v(" 营业至21:00\n        "), _c('img', {
    attrs: {
      "src": "/static/images/wifi.png"
    }
  }), _vm._v(" WIFI\n        "), _c('img', {
    attrs: {
      "src": "/static/images/car.png"
    }
  }), _vm._v(" 停车场\n        "), _c('img', {
    attrs: {
      "src": "/static/images/more.png"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "phone-container"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/phone.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rank"
  }, [_c('img', {
    staticClass: "rank-img",
    attrs: {
      "src": "/static/images/rank.png"
    }
  }), _vm._v("\n    「上地小吃快餐热榜」 第1名\n    "), _c('img', {
    staticClass: "rank-more",
    attrs: {
      "src": "/static/images/more.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "food-detail"
  }, [_vm._v("\n          单人商务套餐，提供免费WIFI\n          "), _c('span', [_vm._v("已售28")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "food-detail"
  }, [_vm._v("\n          单人商务套餐，提供免费WIFI\n          "), _c('span', [_vm._v("已售28")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "more-container"
  }, [_vm._v("\n      查看其他4个团购 "), _c('span', {
    staticClass: "more-arrows"
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_c('div', [_c('img', {
    attrs: {
      "src": "/static/images/collect.png"
    }
  }), _vm._v(" 收藏")]), _vm._v(" "), _c('div', [_c('img', {
    attrs: {
      "src": "/static/images/remark.png"
    }
  }), _vm._v(" 写点评")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-c6eb783a", esExports)
  }
}

/***/ })

},[24]);