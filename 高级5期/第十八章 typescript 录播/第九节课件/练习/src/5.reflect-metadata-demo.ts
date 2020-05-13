import 'reflect-metadata'

@Reflect.metadata('n', 1)
class A {
    @Reflect.metadata('n', 2)
    public static method1() {

    }

    @Reflect.metadata('n', 4)
    public method2() {

    }
}

let obj = new A

// 给类添加元数据
// Reflect.defineMetadata('n', 1, A)
//
// // 给类的静态方法添加元数据
// Reflect.defineMetadata('n', 2, A, 'method1')
//
// // 给实例添加元数据
// Reflect.defineMetadata('n', 3, obj)
//
// // 给类的方法添加元数据
// Reflect.defineMetadata('n', 4, obj, 'method2')

console.log(Reflect.getMetadata('n', A))
console.log(Reflect.getMetadata('n', A, 'method1'))
console.log(Reflect.getMetadata('n', obj))
console.log(Reflect.getMetadata('n', obj, 'method2'))

export default {}