// ?代表可选参数，可以传也可以不传
function css(el, attr, val) {
    // ...
}
var div = document.querySelector('div');
div && css(div, 'width', '100px');
div && css(div, 'width');
