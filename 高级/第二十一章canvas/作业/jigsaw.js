export default class Jigsaw {
    constructor(el, option = {}) {
        this.el = el // 绘制canvas的父级
        this.size = option.size || 4 // 拼图分成几块

        // 绘制开始坐标
        this.imgX = 100
        this.imgY = 100

        // 碎片对象存放数组
        this.fragmentArr = []

        // 当前移动碎片
        this.curFragment = null

        // 画布
        this.canvas = null
        // 画笔
        this.ctx = null

        // 鼠标是否在拼图碎片中
        this.draw = false

        // 鼠标位置减去碎片位置
        this.subObj = {}

        // 原图碎片坐标点（记录左上角x,y值，用于吸附）
        this.originalImgArr = []

        // 拼图碎片坐标点
        this.chaosImgArr = []

        this.mousedownFn = this.mousedownFn.bind(this)
        this.mousemoveFn = this.mousemoveFn.bind(this)
        this.mouseupFn = this.mouseupFn.bind(this)

        // 创建 canvas 节点
        this.createCanvas()

        // 绘制原图并置灰
        this.originalImg = new Image()
        this.originalImg.src = option.originalSrc
        this.originalImg.onload = () => {
            // 绘图
            this.drawOriginalImg()
        }

        // 绘制拼图
        this.chaosImg = new Image()
        this.chaosImg.src = option.originalSrc
        this.chaosImg.onload = () => {
            // 绘图
            this.drawChaosImg()
        }


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
        this.listen()
    }

    /*
        计算原图碎片坐标点（记录左上角x,y值，用于吸附）
        计算拼图碎片坐标点，并打乱随机排序
    */
    computerImageArea() {
        const {originalImg} = this
        const {width, height} = originalImg

        // 计算拼图横排与竖排数量
        const col = Math.floor(Math.sqrt(this.size))
        const row = this.size / col

        // 计算碎片的宽高
        const fragmentW = width/row
        const fragmentH = height/col

        // 拼图碎片放置起始位置
        const startX = this.imgX + width + 100
        const startY = this.imgY

        const tempArr = []

        for(let x=0; x<row; x++) {
            for(let y=0; y<col; y++) {
                // 存储原图碎片放置区域左上角坐标点
                this.originalImgArr.push({
                    originalImgX: this.imgX + x*fragmentW,
                    originalImgY: this.imgY + y*fragmentH,
                })

                // 计算拼图放置位置
                tempArr.push({
                    chaosImgX: startX + x*(fragmentW+20),
                    chaosImgY: startY + y*(fragmentH+20),
                })
            }
        }

        // 将拼图放置位置数组随机排序
        let len = this.size
        while(this.chaosImgArr.length < this.size) {
            const randomNum = Math.floor(Math.random()*len)
            const item = tempArr.splice(randomNum, 1)
            this.chaosImgArr.push(item)
            len--
        }
    }

    // 绘制原图并置灰
    drawOriginalImg() {
        const {originalImg} = this
        const {width, height} = originalImg

        this.ctx.drawImage(originalImg, this.imgX, this.imgY)

        const imgDt = this.ctx.getImageData(this.imgX, this.imgY, width, height)
        const data = imgDt.data

        for(let i=0; i<data.length; i+=4) {
            let [r, g, b] = [
                data[i],
                data[i+1],
                data[i+2],
            ]

            const lm =0.299*r+0.587*g+0.114*b

            data[i] = lm
            data[i+1] = lm
            data[i+2] = lm
            data[i+3] = 50
        }

        this.ctx.putImageData(imgDt, this.imgX, this.imgY)

        /*
            计算原图碎片坐标点（记录左上角x,y值，用于吸附）
            计算拼图碎片坐标点，并打乱随机排序
        */
        this.computerImageArea()
    }

    // 绘制拼图
    drawChaosImg() {
        const {chaosImg} = this
        const {width, height} = chaosImg

        // 创建拼图碎片
        const startX = this.imgX + width + 100
        const startY = this.imgY

        // 计算拼图横排与竖排数量
        const col = Math.floor(Math.sqrt(this.size))
        const row = this.size / col
        // 计算碎片的宽高
        const fragmentW = width/row
        const fragmentH = height/col

        if(this.fragmentArr.length) {
            this.fragmentArr.forEach(fragment => {
                const newFragment = new Fragment(
                    this.canvas,
                    this.ctx,
                    chaosImg,
                    // 相机视口
                    fragment.imgX,
                    fragment.imgY,
                    fragment.imgW,
                    fragment.imgH,
                    // 碎片位置
                    fragment.fragmentX,
                    fragment.fragmentY,
                    fragment.fragmentW,
                    fragment.fragmentH
                )
                newFragment.drawImageFragment()
            })
        }else {
            for(let x=0; x<row; x++) {
                for(let y=0; y<col; y++) {
                    const fragment = new Fragment(
                        this.canvas,
                        this.ctx,
                        chaosImg,
                        // 相机视口
                        fragmentW*x,
                        fragmentH*y,
                        fragmentW,
                        fragmentH,
                        // 碎片位置
                        startX + ((fragmentW+10)*x),
                        startY + ((fragmentH+10)*y),
                        fragmentW,
                        fragmentH
                    )

                    this.fragmentArr.push(fragment)
                }
            }
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

        // 判断鼠标是否在图形中
        this.draw = this.containPoint(mousePos)
    }

    mousemoveFn(e) {
        // 鼠标位置
        const mousePos = this.getMousePos(e)

        // 如果鼠标选择了图形，让图形跟着鼠标动，按需渲染
        if(this.draw) {
            this.fragmentArr[this.curFragment].fragmentX = mousePos.x - this.subObj.x
            this.fragmentArr[this.curFragment].fragmentY = mousePos.y - this.subObj.y
            this.render()
        }
    }

    mouseupFn(e) {
        this.draw = false
        this.curFragment = null
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

    // 判断鼠标是否在图形中
    containPoint(mousePos) {
        const {fragmentArr} = this
        // 结构鼠标的位置
        const {x, y} = mousePos

        for(let i=0; i < fragmentArr.length; i++) {
            let {fragmentX, fragmentY, fragmentW, fragmentH} = fragmentArr[i]
            // 计算鼠标位和图形边界上、下、左、右的关系
            let l = x > fragmentX
            let r = x < fragmentX + fragmentW
            let t = y > fragmentY
            let b = y < fragmentY + fragmentH
            if (l && r && t && b) {
                this.curFragment = i
                // 鼠标位置减去图形位置
                this.subObj = {
                    x: mousePos.x - fragmentArr[i].fragmentX,
                    y: mousePos.y - fragmentArr[i].fragmentY
                }
                return true
            }
        }

        return false
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.drawOriginalImg()
        this.drawChaosImg()
    }
}

// 拼图碎片
class Fragment {
    constructor(canvas, ctx, img, imgX, imgY, imgW, imgH, fragmentX, fragmentY, fragmentW, fragmentH) {
        this.canvas = canvas
        this.ctx = ctx
        this.img = img

        // 相机视口
        this.imgX = imgX
        this.imgY = imgY
        this.imgW = imgW
        this.imgH = imgH

        // 碎片位置
        this.fragmentX = fragmentX
        this.fragmentY = fragmentY
        this.fragmentW = fragmentW
        this.fragmentH = fragmentH

        this.drawImageFragment()
    }

    // 绘制拼图碎片
    drawImageFragment() {
        this.ctx.drawImage(
            this.img,
            this.imgX, this.imgY, this.imgW, this.imgH,
            this.fragmentX,
            this.fragmentY,
            this.fragmentW,
            this.fragmentH
        )
    }
}


