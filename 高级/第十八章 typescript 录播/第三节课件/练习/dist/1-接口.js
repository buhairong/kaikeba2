var p1 = {
    x: 100,
    y: 100
};
p1.x = 200;
// p1.y = 200 报错 加上readonly代表只读属性，只能在初始化时赋值，后期不能修改
p1.z = 100;
p1[0] = 100;
var fn1 = function (a, b) {
    return a + b;
};
var fn2 = function (a, b) {
    return a + b;
};
function todo(callback) {
    // ...
    var v = callback(1, 2);
}
todo(function (a, b) {
    return a + b;
});
function on(el, evname, callback) {
}
var div = document.querySelector('div');
if (div) {
    on(div, 'click', function (e) {
        e.clientX;
    });
}
var box = {
    height: 5,
    width: 6,
    scale: 10,
    fn: function (a) {
        return a;
    }
};
