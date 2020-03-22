function log(type: string) {
    return function (target: Function, name: string, descriptor: PropertyDescriptor) {
        let value = descriptor.value
        descriptor.value = function(x: number, y: number) {
            let result = value(x, y)

            console.log({
                type,
                name,
                x,
                y,
                result
            })
            return result
        }
    }
}

class M1 {
    @log('log')
    static add(x: number, y: number) {
        return x + y
    }

    @log('storage')
    static sub(x: number, y: number) {
        return x - y
    }
}

let v3 = M1.add(1, 2)
console.log(v3)
let v4 = M1.sub(1, 2)
console.log(v4)