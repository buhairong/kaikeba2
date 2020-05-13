function css(ele: Element, attr: string, value: string | number) {
    // ...
}

let box1 = document.querySelector('div')

if (box1) {
    css(box1, 'width', '100px')
    css(box1, 'opacity', 1)
    // css(box1, 'opacity', [1, 2]) // 报错
}