var fn = function (x) {
};
var obj2 = {
    a: 1,
    fn: function (x) {
        var _this = this;
        return function () {
            _this.a;
        };
    }
};
