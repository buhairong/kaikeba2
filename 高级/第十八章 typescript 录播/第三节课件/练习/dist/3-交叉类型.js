var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
/*
* 在编译过程中只会转换语法（比如扩展运算符，箭头函数等语法进行转换，
* 对于 `API` 是不会进行转换的（也没必要转换，而是引入一些扩展库进行处理的）
* */
//let o: o1 & o2 = Object.assign({}, {x: 1, y: 'zhangsan'}, {z: 2})
var arr = [1, 2, 3];
var arr2 = __spreadArrays(arr, [10, 20]);
Promise.resolve();
