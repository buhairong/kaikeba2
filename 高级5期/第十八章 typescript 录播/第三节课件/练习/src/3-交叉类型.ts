interface o1 {x: number; y: number}
interface o2 {z: number}

/*
* 在编译过程中只会转换语法（比如扩展运算符，箭头函数等语法进行转换，
* 对于 `API` 是不会进行转换的（也没必要转换，而是引入一些扩展库进行处理的）
* */
//let o: o1 & o2 = Object.assign({}, {x: 1, y: 'zhangsan'}, {z: 2})

let arr = [1, 2, 3]
let arr2 = [...arr, 10, 20]
Promise.resolve()