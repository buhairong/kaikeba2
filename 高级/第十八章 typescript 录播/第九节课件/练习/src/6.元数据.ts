import 'reflect-metadata'

function L(type: string) {
    return function(target: Function) {
        //target.prototype.type = type
        Reflect.defineMetadata('type', type, target)
    }
}

function log(type?: string) {
    return function (target: any, name: string, descriptor: PropertyDescriptor) {

        // log 方法装饰器 是比 L 类装饰器先执行的
        let value = descriptor.value
        descriptor.value = function(x: number, y: number) {
            let result = value(x, y)
            let _type = type
            if(!_type) {
                if(typeof target === 'function') {
                    _type = Reflect.getMetadata('type', target)
                }else {
                    _type = Reflect.getMetadata('type', target.constructor)
                }
            }

            console.log({
                type: _type,
                name,
                x,
                y,
                result
            })
            return result
        }
    }
}

@L('log')
class M1 {
    @log('storage')
    static add(x: number, y: number) {
        return x + y
    }

    @log()
    static sub(x: number, y: number) {
        return x - y
    }
}

let v3 = M1.add(1, 2)
console.log(v3)
let v4 = M1.sub(1, 2)
console.log(v4)

export default {}