var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["OK"] = 200] = "OK";
    HTTP_CODE[HTTP_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_CODE[HTTP_CODE["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED"; // 405 上一个枚举值 + 1
})(HTTP_CODE || (HTTP_CODE = {}));
HTTP_CODE.OK; // 200
// HTTP_CODE.OK =1 // 报错 枚举类型为只读形式，不能再赋值
var URLS;
(function (URLS) {
    URLS["USER_REGISTER"] = "/user/register";
    URLS["USER_LOGIN"] = "/user/login";
    URLS[URLS["INDEX"] = 0] = "INDEX";
    URLS[URLS["INDEX1"] = 1] = "INDEX1";
})(URLS || (URLS = {}));
