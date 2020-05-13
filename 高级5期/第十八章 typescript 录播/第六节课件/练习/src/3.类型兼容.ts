interface IFly {
    fly(): void
}

class Person implements IFly{
    name: string
    age: number

    study() {

    }

    fly() {

    }
}

class Cat implements IFly{
    name: string
    age: number

    catchMouse() {

    }

    fly() {

    }
}

function fn(arg: Person) {
    arg.name
}

let p11 = new Person()
let c1 = new Cat()

//fn(c1)

function fn1(arg: IFly) {
    arg.fly()
}

fn1(p11)