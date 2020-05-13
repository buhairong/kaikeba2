let obj: Object = {}
let arr: Array<number> = [1, 2, 3]
let d1: Date = new Date()

let user: {username: string, age: number} = {
    username: 'zhangsan',
    age: 20
}

// 接口
interface Person {
    username: string
    age: number
}

let user1: Person = {
    username: 'zhangsan',
    age: 20
}

let user2: Person = {
    username: 'lisi',
    age: 25
}

// 类
class Person1 {
    constructor(public username: string, public age: number) {

    }
}

let user3: Person1 = new Person1('zhangsan', 35)

interface AjaxOptions {
    url: string
    method: string
}

function ajax(options: AjaxOptions){}

ajax({
    url: '',
    method: 'get'
})