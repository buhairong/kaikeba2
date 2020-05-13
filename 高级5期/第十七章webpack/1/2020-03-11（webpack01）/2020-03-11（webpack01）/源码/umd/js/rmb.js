// define(function() {
//     function rmb(val) {
//         return '¥ ' + (val / 100).toFixed(2);
//     }
//
//     return rmb;
// });

(function(factory) {

    if (typeof module === "object" && typeof module.exports === "object") {
        // Node, CommonJS-like
        module.exports = factory;
    }else if (typeof define === "function" && define.amd) {
        // AMD 模块环境下
        define(function() {
            return factory;
        });
    } else {
        window.rmb = factory;
    }

})( function(val) {
    return '¥ ' + (val / 100).toFixed(2);
} );

