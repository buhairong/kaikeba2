export default class Jigsaw {
    constructor(el, option = {}) {
        this.el = el // 绘制canvas的父级
        this.size = option.size || 4 // 拼图分成几块

        // 原图属性
        this.img = new Image()
        this.img.src = option.imgSrc
        // 放置原图坐标点
        this.imgX = 20
        this.imgY = 20

        // 碎片对象存放数组
        this.fragmentArr = []

        // 画布
        this.canvas = null
        // 画笔
        this.ctx = null

        // 鼠标是否在碎片中
        this.draw = false

        this.mousedownFn = this.mousedownFn.bind(this)
        this.mousemoveFn = this.mousemoveFn.bind(this)
        this.mouseupFn = this.mouseupFn.bind(this)

        // 初始化
        this.init()
    }

    // 初始化
    init() {
        // 创建 canvas 节点
        this.createCanvas()

        // 绘制原图
        this.drawOriginalImg()
    }

    // 创建 canvas 节点
    createCanvas() {
        const canvasWrap = document.createElement('div')
        this.canvas = document.createElement('canvas')
        this.canvas.width = this.el.offsetWidth
        this.canvas.height = this.el.offsetHeight
        canvasWrap.appendChild(this.canvas)
        this.el.appendChild(canvasWrap)
        this.ctx = this.canvas.getContext('2d')
        // 鼠标监听
        this.listen()
    }

    // 绘制原图
    drawOriginalImg() {
        this.img.onload = () => {
            const {width, height} = this.img
            this.ctx.drawImage(this.img, this.imgX, this.imgY, width, height)

            // 创建拼图碎片
            const startX = this.imgX + width + 100
            const startY = this.imgY

            // 计算拼图横排与竖排数量
            const col = Math.floor(Math.sqrt(this.size))
            const row = this.size / col
            // 计算碎片的宽高
            const fragmentW = width/row
            const fragmentH = height/col

            for(let x=0; x<row; x++) {
                for(let y=0; y<col; y++) {
                    const fragment = new Fragment(
                        startX + ((fragmentW+10)*x),
                        startY + ((fragmentH+10)*y),
                        fragmentW,
                        fragmentH
                    )

                    fragment.drawImageFragment(
                        this.ctx,
                        this.img,
                        fragmentW*x,
                        fragmentH*y,
                        fragmentW,
                        fragmentH
                    )

                    this.fragmentArr.push(fragment)
                }
            }

            // 将原图置灰
            const imgDt = this.ctx.getImageData(this.imgX, this.imgY, width, height)
            const imgData = imgDt.data

            for(let i=0; i< imgData.length; i+=4) {
                let [r, g, b] = [
                    imgData[i],
                    imgData[i+1],
                    imgData[i+2],
                ]

                const lm = 0.299*r + 0.587*g + 0.114*b

                imgData[i] = lm
                imgData[i+1] = lm
                imgData[i+2] = lm
            }

            this.ctx.putImageData(imgDt, this.imgX, this.imgY)
        }
    }

    // 鼠标事件监听
    listen() {
        this.canvas.addEventListener('mousedown', this.mousedownFn)
        this.canvas.addEventListener('mousemove', this.mousemoveFn)
        this.canvas.addEventListener('mouseup', this.mouseupFn)
    }

    mousedownFn(e) {
        // 鼠标位置
        const mousePos = this.getMousePos(e)
    }

    mousemoveFn(e) {

    }

    mouseupFn(e) {

    }

    // 获取鼠标位置
    getMousePos(event) {
        // 获取鼠标位置
        const {clientX, clientY} = event
        // 获取 canvas 边界位置
        const {left, top} = this.canvas.getBoundingClientRect()
        // 获取鼠标在canvas里的位置
        const x = clientX - left
        const y = clientY - top

        return {x, y}
    }
}

// 拼图碎片
class Fragment {
    constructor(fragmentX, fragmentY, fragmentW, fragmentH) {
        this.fragmentX = fragmentX
        this.fragmentY = fragmentY
        this.fragmentW = fragmentW
        this.fragmentH = fragmentH
    }

    // 绘制拼图碎片
    drawImageFragment(ctx, img, imgX, imgY, imgW, imgH) {
        ctx.drawImage(
            img,
            imgX, imgY, imgW, imgH,
            this.fragmentX,
            this.fragmentY,
            this.fragmentW,
            this.fragmentH
        )
    }
}


