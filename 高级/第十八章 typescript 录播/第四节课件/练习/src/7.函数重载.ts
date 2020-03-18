function showOrHide(el: HTMLElement, attr: 'display'|'opacity',
                    val: 'block'|'none'|number) {

}

let div1 = document.querySelector('div')
if(div1) {
    showOrHide(div1, 'display', 'block')
    // 不会报错，但不是我们所期望的，可以通过函数重载
    showOrHide(div1, 'opacity', 'block')
}

function showOrHide1(el: HTMLElement, attr: 'display',val: 'block'|'none'): void
function showOrHide1(el: HTMLElement, attr: 'opacity', val: number): void
function showOrHide1(el: HTMLElement, attr: any, val: any) {

}

if(div1) {
    showOrHide1(div1, 'display', 'block')
    // 报错
    //showOrHide1(div1, 'opacity', 'block')
}