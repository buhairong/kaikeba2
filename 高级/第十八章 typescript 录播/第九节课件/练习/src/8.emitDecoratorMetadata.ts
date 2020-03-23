import 'reflect-metadata'

function f() {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {
        console.log(descriptor.value.length)
        console.log(Reflect.getMetadata('design:type', target, name))
        console.log(Reflect.getMetadata('design:paramtypes', target, name))
        console.log(Reflect.getMetadata('design:returntype', target, name))

        let _t = Reflect.getMetadata('design:paramtypes', target, name)[0]
        let _t1 = Reflect.getMetadata('design:paramtypes', target, name)[1]
        let _t2 = Reflect.getMetadata('design:paramtypes', target, name)[2]
        console.log(_t)
        let value = descriptor.value
        if(_t === Number) {
            console.log('你标注的是一个数字类型')
            value(100)
        }

        if(_t1 === String) {
            console.log('你标注的是一个字符串类型')
            value('开课吧')
        }

        if(_t2 === Date) {
            console.log('你标注的是一个日期类型')
            value(new Date)
        }
    }
}

class B {
    name: string

    constructor() {

    }

    @f()
    method1(a: string, b: number):string {
        return 'a'
    }

    @f()
    method2(x?: number, y?: string, z?: Date) {
        console.log(x)
        console.log(y)
        console.log(z)
    }
}

let b = new B
b.method2()

export default {}