class User2 {
    constructor(
        // 可以访问，但是一旦确定不能修改
        readonly id: number,
        // 可以访问，但是不能外部修改
        protected username: string,
        // 外部包括子类不能访问，也不可修改
        private _password: string
    ) {
        // ...
    }

    method1() {
        this.username
        this._password
    }

    set password(password: string) {
        if(password.length >= 6) {
            this._password = password
        }
    }

    get password(): string {
        return this._password
    }
}

class VIP1 extends User2 {
    method2() {
        this.username
        // this.password // 报错
    }
}

let user = new User2(1, 'mt', '123')
user.id
// user.id = 1 // 报错，只读属性不可修改
// user.username // 报错
// user.password // 报错

user.password = '123456'