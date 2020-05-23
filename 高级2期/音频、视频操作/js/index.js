let els = {
    videoPlayer: document.querySelector('#video-play')
}

let configs = {
    messageTimer: 0,
    canplay: false,
    bufferedEnd: 0,
    mutedChanged: false,
    prevClickTimestamp: Date.now(),
    dblClickTimer: 0,
    fullScreenTimer: 0
}

let helpers = {
    convertToCamelCase(str) {
        return str.replace(/\-(\w)/g, ($0, $1) => {
            return $1.toUpperCase()
        })
    },
    formatDutation(ms) {
        let h = parseInt(ms / 3600000)
        ms = ms % 3600000
        let m = parseInt(ms / 60000)
        ms  = ms % 60000
        let s = parseInt(ms / 1000)
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
    },
    getDisCursorToElement(el, e) {
        let {x, y} = el.getBoundingClientRect()
        return {
            x: e.clientX - x,
            y: e.clientY - y
        }
    }
}

'video,control,play,time,progress-container,progress-loaded,progress-played,progress-bar,fullscreen,volume,control-volume-box,control-volume-range,control-volume-slider,control-volume-bar,speed,control-speed-box,message'.split(',').forEach(k => {
    els[helpers.convertToCamelCase(k)] = els.videoPlayer.querySelector('.'+k)
})

els.controlSpeedList = els.controlSpeedBox.querySelectorAll('li')

let methods = {
    canplay() {
        configs.canplay = true
    },
    playOrPause() {
        if(!configs.canplay) {
            return
        }
        if(els.video.paused) {
            els.video.play()
        }else {
            els.video.pause()
        }
    },
    playing() {
        els.play.classList.remove('play')
        els.play.classList.add('pause')
    },
    pause() {
        els.play.classList.remove('pause')
        els.play.classList.add('play')
    },
    durationchange() {
        methods.timeupdate()
    },
    timeupdate() {
        // 更新时间
        let duration = helpers.formatDutation(els.video.duration * 1000)
        let currentTime = helpers.formatDutation(els.video.currentTime * 1000)

        els.time.innerHTML = `${currentTime} / ${duration}`

        // 更新播放进度
        let v = (els.video.currentTime * 1000) / (els.video.duration * 1000)
        els.progressPlayed.style.width = els.progressContainer.clientWidth * v + 'px'
        els.progressBar.style.left = (els.progressContainer.clientWidth - els.progressBar.offsetWidth) * v + 'px'
    },
    showMessage(message) {
        clearTimeout(configs.messageTimer)
        els.message.innerHTML = message
        els.message.style.opacity = 1
        configs.messageTimer = setTimeout(() => {
            els.message.style.opacity = 0
        }, 2000)
    },
    progress() {
        let buffered = els.video.buffered
        if(buffered.length > 0) {
            configs.bufferedEnd = buffered.end(buffered.length - 1) || 0

        }
        console.log(configs.bufferedEnd)
        els.progressLoaded.style.width = els.progressContainer.clientWidth * (configs.bufferedEnd / els.video.duration) + 'px'
    },
    ratechange() {
        els.controlSpeedList.forEach(list => {
            if(list.dataset.rate === els.video.playbackRate) {
                list.classList.add('focus')
            }else{
                list.classList.remove('focus')
            }
        })
    },
    volumechange() {
        if(configs.mutedChanged) {
            // 表示当前的事件是由静音变化导致的
            configs.mutedChanged = false
        }else {
            if(els.video.volume <= 0) {
                els.video.volume = 0
                els.video.muted = true
            }else {
                els.video.muted = false
            }
        }

        if(els.video.muted) {
            //els.video.classList.remove('volume')
           // els.video.classList.add('muted')
            els.controlVolumeSlider.style.height = 0
        }else{
           // els.video.classList.remove('muted')
          //  els.video.classList.add('volume')
            els.controlVolumeSlider.style.height = els.video.volume * 160 + 'px'
        }


    },
    requestOrExitFullScreen() {
        if(document.fullscreenElement) {
            document.exitFullscreen()
        } else {
            els.videoPlayer.requestFullscreen()
        }
    }
}

els.video.volume = 0.5

els.video.oncanplay = methods.canplay
els.video.onplaying = methods.playing
els.video.onpause = methods.pause
els.video.ondurationchange = methods.durationchange
els.video.ontimeupdate = methods.timeupdate
els.video.onprogress = methods.progress
els.video.onratechange = methods.ratechange
els.video.onvolumechange = methods.volumechange

els.videoPlayer.onclick = function(e) {
    let target = e.target

    if(target === els.play) {
        methods.playOrPause()
    }

    if(target === els.video) {
        if(Date.now() - configs.prevClickTimestamp < 500) {
            // 双击
            clearTimeout(configs.dblClickTimer)
            methods.requestOrExitFullScreen()
        }else{
            // 单击
            configs.dblClickTimer = setTimeout(() => {
                methods.playOrPause()
            }, 500)
        }
    }else if(target === els.progressContainer) {
        let pos = helpers.getDisCursorToElement(target, e)
        let v = pos.x / target.clientWidth
        els.video.currentTime = els.video.duration * v
        methods.showMessage(`当前时间：${helpers.formatDutation(els.video.currentTime * 1000)}`)
    }

    configs.prevClickTimestamp = Date.now()
}

// 显示隐藏播放速度面板
// els.speed.onmouseenter = function() {
//     els.controlSpeedBox.style.display = 'block'
// }
//
// els.speed.onmouseleave = function() {
//     els.controlSpeedBox.style.display = 'none'
// }

els.controlSpeedList.forEach(list => {
    list.onclick = function() {
        els.video.playbackRate = this.dataset.rate
        methods.showMessage(`当前速度：${els.video.playbackRate}`)
    }
})

// 显示隐藏音量播放面板
// els.volume.onmouseenter = function() {
//     els.controlVolumeBox.style.display = 'block'
// }
//
// els.volume.onmouseleave = function() {
//     els.controlVolumeBox.style.display = 'none'
// }

// 拖拽改变音量
els.controlVolumeSlider.onmousedown = function() {
    document.onmousemove = function(e) {
        try{
            els.video.volume = (1 - helpers.getDisCursorToElement(els.controlVolumeRange, e).y/160).toFixed(2)
        }catch(e) {

        }

    }

    document.onmouseup = function() {
        document.onmousemove = null
    }

    return false
}

// 点击改变音量
els.controlVolumeBox.onclick = function(e) {
    if(e.target === els.controlVolumeRange || e.target === els.controlVolumeSlider) {
        els.video.volume = (1 - helpers.getDisCursorToElement(els.controlVolumeRange, e).y/160).toFixed(2)
    }
}

// 静音切换
els.volume.onclick = function(e) {
    if(e.target === this) {
        els.video.muted = !els.video.muted
        configs.mutedChanged = true
    }
}

// 点击全屏和退出全屏
els.fullscreen.onclick = methods.requestOrExitFullScreen

// 全屏播放隐藏鼠标和控制面板
els.videoPlayer.onmousemove = function() {
    if(!els.video.paused) {
        clearTimeout(configs.fullScreenTimer)
        els.control.style.opacity = 1
        els.control.style.cursor = 'pointer'
        configs.fullScreenTimer = setTimeout(() => {
            els.control.style.opacity = 0
            els.control.style.cursor = 'none'
        }, 2000)
    }
}