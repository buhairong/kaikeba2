class Person {
    // 属于类的
    static type = '人'

    // 属于实例的
    name: string
    age: number
    gender: string

    // 类的构造函数也是属于类的
    constructor(
        name: string,
        age: number,
        gender: '男' | '女' = '男'
    ) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    public eat() {
        // ...
    }
}
interface Person {
    name: string,
    age: number,
    gender: string,
    eat(): void
}

interface PersonConstructor {
    new (name: string, age: number, gender: '男' | '女'): Person,
    type: string
}

let p = new Person('mt', 35, '男')
p.eat()
Person.type

/*let fn: PersonConstructor = function(name: string, age: number, gender: '男' | '女') {
    return new Person(name, age, gender)
}*/

//let p2 = new fn('mt', 35, '男')

function fn1(arg: PersonConstructor) {
    new arg('mt', 35, '男')
}

fn1(Person)