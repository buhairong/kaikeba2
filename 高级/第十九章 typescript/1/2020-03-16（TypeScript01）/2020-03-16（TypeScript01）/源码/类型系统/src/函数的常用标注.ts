/**
 * 标注：
 *      参数
 *      返回值
 */
// function fn1(a: number, b: number): number {
//     return a + b;
// }
//
// let rs1 = fn1(1, 2);

type F = (a: number, b: number) => number;

let fn2: F = function (a: number, b: number): number {
    return a + b;
};
let fn3: F = function (x: number, y:number): number {
    return x + y;
};

function move(callback: F) {

}

move( fn3 );