function fn(a: string | number) {
    /*
        报错
        这里的a变量有可能是字符串，也有可能是数字
        所以不能直接作为字符串去使用
    */
    // a.substring(1, 2)

    // 类型断言
    (<string> a).substring(1)

    if(typeof a === 'string') {
        a.substring(1)
    } else {
        a.toFixed()
    }
}

// 自定义类型保护
function canEach(data: any): data is Element[] | NodeList {
    return data.forEach !== undefined
}

function fn2(elements: Element[] | NodeList | Element) {
    if(canEach(elements)) {
        elements.forEach((element: Element) => {
            element.className = ''
        })
    } else {
        elements.className = ''
    }
}