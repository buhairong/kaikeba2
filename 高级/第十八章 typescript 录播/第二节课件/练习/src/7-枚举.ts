enum HTTP_CODE {
    OK = 200,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED // 405 上一个枚举值 + 1
}

HTTP_CODE.OK // 200
// HTTP_CODE.OK =1 // 报错 枚举类型为只读形式，不能再赋值

enum URLS {
    USER_REGISTER = '/user/register',
    USER_LOGIN = '/user/login',
    INDEX = 0, // 如果前一个枚举值为字符串，则后续枚举必须手动赋值
    INDEX1
}