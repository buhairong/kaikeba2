var obj = {};
var arr = [1, 2, 3];
var d1 = new Date();
var user = {
    username: 'zhangsan',
    age: 20
};
var user1 = {
    username: 'zhangsan',
    age: 20
};
var user2 = {
    username: 'lisi',
    age: 25
};
// 类
var Person1 = /** @class */ (function () {
    function Person1(username, age) {
        this.username = username;
        this.age = age;
    }
    return Person1;
}());
var user3 = new Person1('zhangsan', 35);
function ajax(options) { }
ajax({
    url: '',
    method: 'get'
});
