var a;
var b;
var c;
var d; // 声明类型未赋值，默认是undefined
var e; // 未声明类型未赋值，默认类型是any,默认值是undefined
var f;
// f = null
f = 1.234;
f.toFixed(1); //编译时不会报错，因为只检测类型，不检测值  在配置文件里增加 "strictNullChecks": true 检测空值
var ele = document.querySelector('div');
if (ele) {
    ele.style.display = "none";
}
