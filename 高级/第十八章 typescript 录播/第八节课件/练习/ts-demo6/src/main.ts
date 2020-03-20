namespace k1 {
    let a = 10
    console.log(k2.obj)
    export var obj = {
        a
    }
}

namespace k2 {
    let a = 20
    console.log(k1.obj)
    export var obj = {
        a
    }
}