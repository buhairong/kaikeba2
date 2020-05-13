var User = /** @class */ (function () {
    // id: number
    // username: string
    /*
        当我们给构造函数参数设置了访问修饰符: public
        那么ts会做如下二件事情：
            - 给当前类添加同名的成员属性
            - 在类的实例化的时候，会把传入的参数值赋值给对应的成员属性
    */
    function User(id, username) {
        this.id = id;
        this.username = username;
        // 创建类的函数, 当类通过new实例化的时候，就会执行该函数
        console.log('这是构造函数，对类中成员属性进行初始化赋值');
        // this.id = id
        // this.username = username
    }
    User.prototype.postArticle = function (title, content) {
        console.log(this.username + " \u53D1\u8868\u4E86\u4E00\u7BC7\u6587\u7AE0\uFF1A" + title);
    };
    return User;
}());
var user1 = new User(1, 'mt');
user1.postArticle('标题', '内容');
