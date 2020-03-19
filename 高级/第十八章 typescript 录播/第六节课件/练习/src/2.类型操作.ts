let str1 = 'kaikeba'

// let 声明的是变量，里面的存储的数据是程序运行过程中使用的
let t = typeof str1

// type 声明的是类型名称，这个值只是在ts编译检测阶段使用
type myType = typeof str1

let a = t
let b: myType = ''

interface Person {
    name: string,
    age: number
}

type personKeys = keyof Person

let p1 = {
    name: 'mt',
    age: 35
}

function getPersonVal(k: keyof typeof p1) {
    return p1[k]
}

interface Person1 {
    name: string,
    age: number
}

type personKeys1 = keyof Person1

type newPerson = {
    [k in personKeys1]: string
}