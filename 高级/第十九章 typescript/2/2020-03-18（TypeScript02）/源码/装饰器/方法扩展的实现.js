const libs = require('./libs');

// 我们希望对这个方法进行扩展，让这个方法调用的时候做一些其它事情

// 装饰者
function wrap(fn) {
    return function() {
        console.log('输出日志');
        fn();
    }
}

const dispatch = wrap(libs.dispatch);

libs.dispatch();