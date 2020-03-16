/*
* 类型推导。编译器会根据当前上下文自动的推导出对应的类型标注，这个过程发生在：

- 初始化变量
- 设置函数默认参数值
- 返回函数值
* */
var a = 'kaikeba';
function fn(a) {
    if (a === void 0) { a = 1; }
    if (true) {
        return 'kaikeba';
    }
    else {
        return 1;
    }
}
