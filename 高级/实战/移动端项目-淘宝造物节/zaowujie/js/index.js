{
    loadAnmt()
}

// 图片预加载
function loadAnmt() {
    let loading1 = document.querySelector('#loading-1')
    let loading1Text = document.querySelector('.loadText')
    let img = []
    let nub = 0;
    for(let key in imgData) {
        img = [...img, ...imgData[key]]
    }

    img.forEach(src => {
        let newImg = new Image()
        newImg.onload = () => {
            nub++
            loading1Text.innerHTML = `已加载 ${Math.round(nub/img.length*100)} %`
            if (nub >= img.length) {
                loading1.addEventListener('transitionend', () => {
                    loadAnmt2()
                })
                loading1.style.opacity = 0
            }
        }
        newImg.src = src
    })
}

function loadAnmt2() {
    let loading2 = document.querySelector('#loading-2')
    loading2.addEventListener('animationend', () => {
        loading2.classList.remove('loadimg-show')
        loadAnmt3()
    })
    loading2.classList.add('loadimg-show')
}

function loadAnmt3() {
    let loading3 = document.querySelector('#loading-3')
    loading3.addEventListener('animationend', () => {
        loading3.classList.remove('loadimg-show')
        loadAnmt4()
    })
    loading3.classList.add('loadimg-show')
}

function loadAnmt4() {
    let loading4 = document.querySelector('#loading-4')
    let loadicos = document.querySelector('.loadicos')
    let length = 27;
    let icons = imgData['logoIco']
    for(let i=0; i< length; i++) {
        let span = document.createElement('span')
        let z = Math.random()*200 + 30
        let degY = i*360/9 + ((Math.random()-.5)*20)
        let y = Math.random()*360 -180
        let degX = Math.random()*360
        span.style.backgroundImage = `url(${icons[i%icons.length]})`
        span.style.transform = `rotateX(${degX}deg) translateY(${y}px) rotateY(${degY}deg) translateZ(${z}px)`
        loadicos.appendChild(span)
    }
    loading4.addEventListener('animationend', () => {
        loading4.classList.remove('loading-4-show')
        loadend()
    })
    loading4.classList.add('loading-4-show')
}

// 预加载动画执行完毕 开始圆柱入场
function loadend() {
    let logos = document.querySelectorAll('.logo')
    logos.forEach(logo => {
        logo.remove()
    })
}