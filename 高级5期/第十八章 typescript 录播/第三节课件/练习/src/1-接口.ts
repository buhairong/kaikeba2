interface Point {
    x: number
    readonly y: number// 加上readonly代表只读属性，只能在初始化时赋值，后期不能修改
    //color?: string // 加问号代表可选属性，可以是string类型或 undefined
    [key: string]: number
}

let p1: Point = {
    x: 100,
    y: 100
}

p1.x = 200
// p1.y = 200 报错 加上readonly代表只读属性，只能在初始化时赋值，后期不能修改
p1.z = 100
p1[0] = 100

interface IFunc {
    (x: number, y: number): number
}

let fn1: IFunc = function(a: number, b: number): number {
    return a + b
}

let fn2: IFunc = function(a: number, b: number): number {
    return a + b
}

function todo(callback: IFunc) {
    // ...
    let v = callback(1, 2)
}

todo( function(a: number, b: number): number {
    return a + b
})

interface IEventFunc {
    (e: MouseEvent): void
}

function on(el: HTMLElement, evname: string, callback: IEventFunc) {

}

let div = document.querySelector('div')

if(div) {
    on(div, 'click', function(e){
        e.clientX
    })
}

// 接口合并
interface Box {
    height: number
    width: number
    fn(a: string): string
}

interface Box {
    scale: number
    // width: string // 报错 同名属性，类型必须相同
    fn(a: number): number // 方法重载
}

let box: Box = {
    height: 5,
    width: 6,
    scale: 10,
    fn: function(a: any): any {
        return a
    }
}
