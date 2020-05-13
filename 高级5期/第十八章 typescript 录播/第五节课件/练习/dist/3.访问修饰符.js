var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User2 = /** @class */ (function () {
    function User2(
    // 可以访问，但是一旦确定不能修改
    id, 
    // 可以访问，但是不能外部修改
    username, 
    // 外部包括子类不能访问，也不可修改
    _password) {
        this.id = id;
        this.username = username;
        this._password = _password;
        // ...
    }
    User2.prototype.method1 = function () {
        this.username;
        this._password;
    };
    Object.defineProperty(User2.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (password) {
            if (password.length >= 6) {
                this._password = password;
            }
        },
        enumerable: true,
        configurable: true
    });
    return User2;
}());
var VIP1 = /** @class */ (function (_super) {
    __extends(VIP1, _super);
    function VIP1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VIP1.prototype.method2 = function () {
        this.username;
        // this.password // 报错
    };
    return VIP1;
}(User2));
var user = new User2(1, 'mt', '123');
user.id;
// user.id = 1 // 报错，只读属性不可修改
// user.username // 报错
// user.password // 报错
user.password = '123456';
