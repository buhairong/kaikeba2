function fn1(a: string): string {
    return ''
}

let fn2: (a: string) => string = function(a) {

    return a
}

type callback = (a: string) => string

let fn3: callback = function(b) {
    return b
}

interface ICallBack {
    (a: string): string
}

let fn4: ICallBack = function() {
    return ''
}