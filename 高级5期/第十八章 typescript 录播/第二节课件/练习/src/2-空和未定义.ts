let a: null
let b: undefined

let c: number

let d: number  // 声明类型未赋值，默认是undefined
let e  // 未声明类型未赋值，默认类型是any,默认值是undefined

let f: number
// f = null
f = 1.234
f.toFixed(1) //编译时不会报错，因为只检测类型，不检测值  在配置文件里增加 "strictNullChecks": true 检测空值

let ele = document.querySelector('div')
if (ele) {
    ele.style.display = "none"
}
