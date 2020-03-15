let a11: any
a11 = 1

let b11: number
b11 = a11

a11.ab

function fn(a: string) { // 函数的参数默认为any类型
    a.indexOf('a', 1)
}